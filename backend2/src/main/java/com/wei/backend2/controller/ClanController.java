package com.wei.backend2.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wei.backend2.entity.Clan;
import com.wei.backend2.payload.request.AddClan;
import com.wei.backend2.service.ClanService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/clan")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "clan")
public class ClanController {
    private final ClanService clanService;

    public ClanController(ClanService clanService) {
        this.clanService = clanService;
    }

    @GetMapping("/findAll")
    @ApiOperation(value = "Find all clan information")
    public List<Clan> findAll(){
        return clanService.findAll();
    }

    @PostMapping("/saveClan")
    @ApiOperation(value = "Add clan")
    public void saveClan(@RequestBody AddClan addClan){
        clanService.saveClan(addClan);
    }

    @GetMapping("/downloadClansAsJson")
    @ApiOperation(value = "Download clans as JSON file")
    public ResponseEntity<byte[]> downloadClansAsJson() {
        // 获取所有的 Clan 数据
        List<Clan> clans = clanService.findAll();

        // 分组并按 warhammerClassifier 的 id 分组
        Map<String, List<Clan>> groupedClans = clans.stream()
                .collect(Collectors.groupingBy(clan -> clan.getWarhammerClassifier().getId()));

        // 构建最终的 JSON 结构
        List<Map<String, Object>> jsonResult = new ArrayList<>();
        groupedClans.forEach((classifierId, clanList) -> {
            // 按照 Clan 的 order 字段从小到大排序
            clanList.sort(Comparator.comparingInt(Clan::getOrder));

            Map<String, Object> clanData = new HashMap<>();
            clanData.put("id", classifierId);
            clanData.put("directory", clanList.get(0).getWarhammerClassifier().getDirectory());
            clanData.put("nameCN", clanList.get(0).getWarhammerClassifier().getNameCN());
            clanData.put("order", clanList.get(0).getWarhammerClassifier().getOrder());

            List<Map<String, Object>> files = new ArrayList<>();
            for (Clan clan : clanList) {
                Map<String, Object> file = new HashMap<>();
                file.put("id", clan.getId()); // 添加 id 到文件对象
                file.put("name", clan.getName());
                file.put("nameCN", clan.getNameCN());
                file.put("heroName", clan.getHeroName());
                file.put("heroNickName", clan.getHeroNickName());
                file.put("heroAvatarPath", clan.getHeroAvatarPath());
                file.put("path", clan.getPath());
                file.put("description", clan.getDescription());
                file.put("order", clan.getOrder());
                file.put("contributors", clan.getContributors());
                files.add(file);
            }

            clanData.put("files", files);
            jsonResult.add(clanData);
        });

        // 按照外层的 WarhammerClassifier 的 order 字段重新排序结果
        jsonResult.sort(Comparator.comparingInt(o -> {
            Integer order = (Integer) o.get("order");
            return order != null ? order : 0; // 如果 order 为 null，则默认为0
        }));

        // 将转换后的数据转换为 JSON 格式
        byte[] jsonData = new byte[0];
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            jsonData = objectMapper.writeValueAsBytes(jsonResult);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        // 设置 HTTP 响应头，指定文件名和内容类型
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", "clans.json");

        // 返回 JSON 文件的 ResponseEntity
        return new ResponseEntity<>(jsonData, headers, HttpStatus.OK);
    }
}