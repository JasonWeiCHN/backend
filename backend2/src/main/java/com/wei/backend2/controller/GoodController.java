package com.wei.backend2.controller;

import com.wei.backend2.request.AddGoodRequest;
import com.wei.backend2.service.GoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/goods")
@CrossOrigin(origins = "http://localhost:4200")
public class GoodController {
    @Autowired
    private GoodService goodService;

    @PostMapping("/add")
    public ResponseEntity<String> addGood(@RequestParam("file") MultipartFile file,
                                          @RequestParam("name") String name,
                                          @RequestParam("category") String category) {

        AddGoodRequest good = new AddGoodRequest(name, category, file);
        boolean isSuccess = goodService.addGood(good);
        if (isSuccess) {
            return ResponseEntity.ok("Good added successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add good!");
        }
    }
}
