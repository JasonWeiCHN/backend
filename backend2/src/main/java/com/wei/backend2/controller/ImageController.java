package com.wei.backend2.controller;

import com.wei.backend2.request.AddImageRequest;
import com.wei.backend2.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {

    @Autowired
    private ImageService imageService;


    @PostMapping("/add")
    public ResponseEntity<String> addImage(@RequestParam("file") MultipartFile file,
                                           @RequestParam("name") String name,
                                           @RequestParam("category") String category) {

        AddImageRequest request = new AddImageRequest();
        request.setFile(file);
        request.setName(name);
        request.setCategory(category);

        boolean isSuccess = imageService.addImage(request);

        if (isSuccess) {
            return ResponseEntity.ok("Image added successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add image!");
        }
    }

    @PostMapping("/add-by-excel")
    public ResponseEntity<String> addImageByExcel(@RequestParam("file") MultipartFile file) {
        boolean isSuccess = imageService.addImageByExcel(file);

        if (isSuccess) {
            return ResponseEntity.ok("Images added successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add images!");
        }
    }
}

