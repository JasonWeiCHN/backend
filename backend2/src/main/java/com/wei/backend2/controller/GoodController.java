package com.wei.backend2.controller;

import com.wei.backend2.request.AddGoodRequest;
import com.wei.backend2.service.GoodService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/goods")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "Good")
public class GoodController {
    @Autowired
    private GoodService goodService;

    @PostMapping("/add")
    @ApiOperation("add good")
    public ResponseEntity<String> addGood(@ModelAttribute AddGoodRequest goodRequest) {
        boolean isSuccess = goodService.addGood(goodRequest);
        if (isSuccess) {
            return ResponseEntity.ok("Good added successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add good!");
        }
    }

//    @PostMapping("/add")
//    public ResponseEntity<String> addGood(@RequestParam("file") MultipartFile file,
//                                          @RequestParam("name") String name,
//                                          @RequestParam("category") String category) {
//
//        AddGoodRequest good = new AddGoodRequest(name, category, file);
//        boolean isSuccess = goodService.addGood(good);
//        if (isSuccess) {
//            return ResponseEntity.ok("Good added successfully!");
//        } else {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add good!");
//        }
//    }
}
