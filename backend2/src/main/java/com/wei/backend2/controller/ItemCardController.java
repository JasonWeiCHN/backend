package com.wei.backend2.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wei.backend2.entity.ItemCard;
import com.wei.backend2.payload.request.AddItemCard;
import com.wei.backend2.service.ItemCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/itemCard")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "itemCard")
@RequiredArgsConstructor
public class ItemCardController {
    private final ItemCardService itemCardService;

    @GetMapping("/findAll")
    @ApiOperation(value = "Find all item card information")
    public List<ItemCard> findAll() {
        return itemCardService.findAll();
    }

    @GetMapping("/findAllPaginated")
    @ApiOperation(value = "Find all item card information with pagination")
    public ResponseEntity<Page<ItemCard>> findAllPaginated(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<ItemCard> itemCards = itemCardService.findAllPaginated(pageable);
        return ResponseEntity.ok(itemCards);
    }

    @PostMapping("/saveItemCard")
    @ApiOperation(value = "Add item card")
    public void saveItemCard(@RequestBody AddItemCard addItemCard) {
        itemCardService.saveItemCard(addItemCard);
    }

    @DeleteMapping("/delete/{id}")
    @ApiOperation(value = "Delete item card by ID")
    public ResponseEntity<?> deleteItemCard(@PathVariable("id") Long id) {
        // 调用 Service 层的方法来删除对应的项
        itemCardService.deleteItemCard(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/search")
    @ApiOperation(value = "Search item cards by column and keyword")
    public List<ItemCard> searchItemCards(@RequestParam String column, @RequestParam String keyword) {
        return itemCardService.searchItemCards(column, keyword);
    }

    @GetMapping("/downloadItemCardsAsJson")
    @ApiOperation(value = "Download item cards as JSON file")
    public ResponseEntity<byte[]> downloadItemCardsAsJson() {
        // 获取所有的 ItemCard 数据
        List<ItemCard> itemCards = itemCardService.findAll();
        System.out.println("Retrieved item cards: " + itemCards); // Add this line for logging

        // 分组并按类型ID分组，然后对每个类型的项按日期排序
        Map<String, List<ItemCard>> groupedAndSortedCards = itemCards.stream()
                .filter(itemCard -> itemCard.getTypeId() != null) // 过滤掉类型ID为空的项
                .collect(Collectors.groupingBy(ItemCard::getTypeId));

        // 对每个类型的项按日期排序，并确保最新的时间在最前面
        groupedAndSortedCards.forEach((typeId, cards) -> {
            cards.sort(Comparator.comparing(ItemCard::getDate,
                    Comparator.nullsLast(Comparator.reverseOrder()))); // 将排序顺序逆转，确保最新的时间排在最前面
        });

        // 将分组并排序后的数据转换为 Map 形式，以符合 JSON 结构要求
        Map<String, List<Map<String, Object>>> resultMap = new HashMap<>();
        groupedAndSortedCards.forEach((typeId, cards) -> {
            List<Map<String, Object>> cardList = new ArrayList<>();
            for (ItemCard card : cards) {
                Map<String, Object> cardMap = new HashMap<>();
                cardMap.put("id", String.valueOf(card.getId()));
                cardMap.put("typeId", card.getTypeId());
                cardMap.put("imageUrl", card.getImageUrl());
                cardMap.put("title", card.getTitle());
                cardMap.put("publisher", card.getPublisher());
                cardMap.put("detail", card.getDetail());
                cardMap.put("description", card.getDescription());
                cardMap.put("views", card.getViews());
                cardMap.put("date", card.getDate());
                cardMap.put("tagIds", card.getTagIds() != null ? Arrays.asList(card.getTagIds().split(";")) : Collections.emptyList());
                cardMap.put("sourceUrl", card.getSourceUrl());
                cardMap.put("referer", card.getReferer());
                cardList.add(cardMap);
            }
            resultMap.put(typeId, cardList);
        });

        // 将转换后的数据转换为 JSON 格式
        byte[] jsonData = new byte[0];
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            jsonData = objectMapper.writeValueAsBytes(resultMap);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        // 设置 HTTP 响应头，指定文件名和内容类型
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", "item_cards.json");

        // 返回 JSON 文件的 ResponseEntity
        return new ResponseEntity<>(jsonData, headers, HttpStatus.OK);
    }
}
