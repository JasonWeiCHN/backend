package com.wei.backend2.controller;

import com.wei.backend2.entity.ItemCard;
import com.wei.backend2.payload.request.AddItemCard;
import com.wei.backend2.service.ItemCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/saveItemCard")
    @ApiOperation(value = "Add item card")
    public void saveItemCard(@RequestBody AddItemCard addItemCard) {
        itemCardService.saveItemCard(addItemCard);
    }
}
