package com.wei.backend2.controller;

import com.wei.backend2.entity.ImageFile;
import com.wei.backend2.payload.request.AddImageFile;
import com.wei.backend2.service.ImageFileService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imageFile")
@CrossOrigin(origins = "*")
@Api(tags = "imageFile")
public class ImageFileController {
    private final ImageFileService imageFileService;

    public ImageFileController(ImageFileService imageFileService) {
        this.imageFileService = imageFileService;
    }

    @GetMapping("/findAll")
    @ApiOperation(value = "Find all image file information")
    public List<ImageFile> findAll(){
        return imageFileService.findAll();
    }

    @PostMapping("/saveImageFile")
    @ApiOperation(value = "Add image file")
    public void saveImageFile(@RequestBody AddImageFile addImageFile){
        imageFileService.saveImageFile(addImageFile);
    }
}
