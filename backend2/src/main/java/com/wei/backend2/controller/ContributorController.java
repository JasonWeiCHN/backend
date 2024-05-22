package com.wei.backend2.controller;
import com.wei.backend2.entity.Contributor;
import com.wei.backend2.entity.ItemCard;
import com.wei.backend2.payload.request.AddContributor;
import com.wei.backend2.service.ContributorService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contributor")
@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = "contributor")
public class ContributorController {
    private final ContributorService contributorService;

    public ContributorController(ContributorService contributorService) {
        this.contributorService = contributorService;
    }

    @GetMapping("/findAll")
    @ApiOperation(value = "Find all contributor information")
    public List<Contributor> findAll(){
        return contributorService.findAll();
    }

    @PostMapping("/saveContributor")
    @ApiOperation(value = "Add contributor")
    public void saveContributor(@RequestBody AddContributor addContributor){
        contributorService.saveContributor(addContributor);
    }

    @GetMapping("/search")
    @ApiOperation(value = "Search item contributor by column and keyword")
    public List<Contributor> searchContributor(@RequestParam String column, @RequestParam String keyword) {
        return contributorService.searchContributor(column, keyword);
    }
}
