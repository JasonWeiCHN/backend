package com.wei.backend2.controller;

import com.wei.backend2.entity.Picture;
import com.wei.backend2.payload.request.AddPicture;
import com.wei.backend2.service.PictureService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/pictures")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "picture")
public class PictureController {

    @Autowired
    private PictureService pictureService;

    @PostMapping("/add")
    @ApiOperation("Create a picture")
    public ResponseEntity<Picture> createPicture(@ModelAttribute AddPicture addPicture, @RequestParam("file") MultipartFile file) {
        Picture createdPicture = pictureService.createPicture(addPicture, file);
        return new ResponseEntity<>(createdPicture, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @ApiOperation("Get a picture by ID")
    public ResponseEntity<Picture> getPicture(@PathVariable Long id) {
        Picture picture = pictureService.getPicture(id);
        if (picture == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(picture, HttpStatus.OK);
    }

    @GetMapping("/")
    @ApiOperation("Get all pictures")
    public ResponseEntity<List<Picture>> getAllPictures() {
        List<Picture> pictures = pictureService.getAllPictures();
        return new ResponseEntity<>(pictures, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @ApiOperation("Update a picture")
    public ResponseEntity<Picture> updatePicture(@PathVariable Long id, @RequestBody Picture pictureDetails) {
        Picture updatedPicture = pictureService.updatePicture(id, pictureDetails);
        if (updatedPicture == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedPicture, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @ApiOperation("Delete a picture")
    public ResponseEntity<Void> deletePicture(@PathVariable Long id) {
        pictureService.deletePicture(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
