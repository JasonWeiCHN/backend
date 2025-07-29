package com.wei.serverkulelemultiple.accounting.controller;

import com.wei.serverkulelemultiple.accounting.service.ExportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/accounting")
public class ExportController {

    @Autowired
    private ExportService exportService;

    @GetMapping("/export-txt")
    public ResponseEntity<byte[]> exportTxt() {
        String content = exportService.generateAccountingTxtContent();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.txt")
                .contentType(MediaType.TEXT_PLAIN)
                .body(content.getBytes(StandardCharsets.UTF_8));
    }

    @GetMapping("/export-txt-by-range")
    public ResponseEntity<byte[]> exportTxtByRange(@RequestParam String startDateTime, @RequestParam String endDateTime) {
        LocalDateTime start = LocalDateTime.parse(startDateTime);
        LocalDateTime end = LocalDateTime.parse(endDateTime);
        String content = exportService.generateAccountingTxtContentByRange(start, end);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.txt")
                .contentType(MediaType.TEXT_PLAIN)
                .body(content.getBytes(StandardCharsets.UTF_8));
    }

    @GetMapping("/export-xlsx")
    public ResponseEntity<byte[]> exportXlsx() {
        byte[] bytes = exportService.generateAccountingExcelContent();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.xlsx")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(bytes);
    }

    @GetMapping("/export-xlsx-by-range")
    public ResponseEntity<byte[]> exportXlsxByRange(@RequestParam String startDateTime, @RequestParam String endDateTime) {
        LocalDateTime start = LocalDateTime.parse(startDateTime);
        LocalDateTime end = LocalDateTime.parse(endDateTime);
        byte[] bytes = exportService.generateAccountingExcelContentByRange(start, end);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.xlsx")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(bytes);
    }

    @GetMapping("/export-pdf")
    public ResponseEntity<byte[]> exportPdf() {
        byte[] pdf = exportService.generateAccountingPdf();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    @GetMapping("/export-pdf-by-range")
    public ResponseEntity<byte[]> exportPdfByRange(@RequestParam String startDateTime, @RequestParam String endDateTime) {
        LocalDateTime start = LocalDateTime.parse(startDateTime);
        LocalDateTime end = LocalDateTime.parse(endDateTime);
        byte[] pdf = exportService.generateAccountingPdfByRange(start, end);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    @GetMapping("/export-csv")
    public ResponseEntity<byte[]> exportCsv() {
        byte[] csv = exportService.generateAccountingCsv();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(csv);
    }

    @GetMapping("/export-csv-by-range")
    public ResponseEntity<byte[]> exportCsvByRange(@RequestParam String startDateTime, @RequestParam String endDateTime) {
        LocalDateTime start = LocalDateTime.parse(startDateTime);
        LocalDateTime end = LocalDateTime.parse(endDateTime);
        byte[] csv = exportService.generateAccountingCsvByRange(start, end);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(csv);
    }
}
