package com.wei.backend2.controller;

import com.wei.backend2.entity.Clan;
import com.wei.backend2.payload.request.AddClan;
import com.wei.backend2.service.ClanService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}