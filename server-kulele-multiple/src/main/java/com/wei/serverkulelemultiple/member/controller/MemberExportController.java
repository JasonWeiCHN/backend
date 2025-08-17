package com.wei.serverkulelemultiple.member.controller;

import com.wei.serverkulelemultiple.member.service.MemberExportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/members")
public class MemberExportController {

    @Autowired
    private MemberExportService exportService;

    @GetMapping("/export-txt")
    public ResponseEntity<byte[]> exportTxt() {
        String content = exportService.generateMemberTxt();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=members.txt")
                .contentType(MediaType.TEXT_PLAIN)
                .body(content.getBytes(StandardCharsets.UTF_8));
    }

    @GetMapping("/export-xlsx")
    public ResponseEntity<byte[]> exportXlsx() {
        byte[] bytes = exportService.generateMemberExcel();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=members.xlsx")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(bytes);
    }

    @GetMapping("/export-csv")
    public ResponseEntity<byte[]> exportCsv() {
        byte[] csv = exportService.generateMemberCsv();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=members.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(csv);
    }

    @GetMapping("/export-pdf")
    public ResponseEntity<byte[]> exportPdf() {
        byte[] pdf = exportService.generateMemberPdf();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=members.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }
}
