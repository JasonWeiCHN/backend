package com.wei.backend2.controller;

import com.wei.backend2.entity.WarhammerClassifier;
import com.wei.backend2.payload.request.AddWarhammerClassifier;
import com.wei.backend2.service.WarhammerClassifierService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/warhammerClassifier")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "warhammerClassifier")
public class WarhammerClassifierController {
    private final WarhammerClassifierService warhammerClassifierService;

    public WarhammerClassifierController(WarhammerClassifierService warhammerClassifierService) {
        this.warhammerClassifierService = warhammerClassifierService;
    }

    @GetMapping("/findAll")
    @ApiOperation(value = "Find all warhammer classifier information")
    public List<WarhammerClassifier> findAll(){
        return warhammerClassifierService.findAll();
    }

    @PostMapping("/saveWarhammerClassifier")
    @ApiOperation(value = "Add warhammer classifier")
    public void saveWarhammerClassifier(@RequestBody AddWarhammerClassifier addWarhammerClassifier){
        warhammerClassifierService.saveWarhammerClassifier(addWarhammerClassifier);
    }
}
