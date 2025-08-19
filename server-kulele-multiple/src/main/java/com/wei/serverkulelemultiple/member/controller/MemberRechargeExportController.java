package com.wei.serverkulelemultiple.member.controller;

import com.wei.serverkulelemultiple.member.service.MemberRechargeExportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.time.LocalDate;

@RestController
@RequestMapping("/api/members/recharge")
public class MemberRechargeExportController {

    @Autowired
    private MemberRechargeExportService exportService;

    @GetMapping("/export/{format}")
    public ResponseEntity<byte[]> exportRechargeByDay(
            @RequestParam("date") String dateStr,
            @PathVariable("format") String format) {

        LocalDate date = LocalDate.parse(dateStr); // 前端传 yyyy-MM-dd
        String filename = "充值明细_" + date + "." + format;

        byte[] data;
        MediaType contentType;

        switch (format.toLowerCase()) {
            case "txt":
                String txt = exportService.generateRechargeTxt(date);
                data = txt.getBytes(StandardCharsets.UTF_8);
                contentType = MediaType.TEXT_PLAIN;
                break;
            case "xlsx":
                data = exportService.generateRechargeExcel(date);
                contentType = MediaType.APPLICATION_OCTET_STREAM;
                break;
            case "csv":
                data = exportService.generateRechargeCsv(date);
                contentType = MediaType.TEXT_PLAIN;
                break;
            case "pdf":
                data = exportService.generateRechargePdf(date);
                contentType = MediaType.APPLICATION_PDF;
                break;
            default:
                throw new IllegalArgumentException("不支持的导出格式: " + format);
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .contentType(contentType)
                .body(data);
    }
}
