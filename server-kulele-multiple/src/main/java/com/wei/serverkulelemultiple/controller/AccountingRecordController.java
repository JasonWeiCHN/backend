package com.wei.serverkulelemultiple.controller;

import com.wei.serverkulelemultiple.entity.AccountingRecord;
import com.wei.serverkulelemultiple.request.AddAccountingRecordRequest;
import com.wei.serverkulelemultiple.service.AccountingRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/accounting")
public class AccountingRecordController {

    @Autowired
    private AccountingRecordService service;

    @GetMapping
    public List<AccountingRecord> getAllRecords() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public AccountingRecord getRecordById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new RuntimeException("Record not found"));
    }

    @PostMapping
    public AccountingRecord createRecord(@RequestBody AddAccountingRecordRequest record) {
        return service.create(record);
    }

    @PutMapping("/{id}")
    public AccountingRecord updateRecord(@PathVariable Long id, @RequestBody AddAccountingRecordRequest record) {
        return service.update(id, record);
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/export-txt")
    public ResponseEntity<byte[]> exportAccountingRecordsTxt() {
        String content = service.generateAccountingTxtContent();
        byte[] fileBytes = content.getBytes(StandardCharsets.UTF_8);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.txt")
                .contentType(MediaType.TEXT_PLAIN)
                .body(fileBytes);
    }

    @GetMapping("/export-txt-by-range")
    public ResponseEntity<byte[]> exportAccountingRecordsByRange(
            @RequestParam String startDateTime,
            @RequestParam String endDateTime) {

        // 字符串转 LocalDateTime
        DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
        LocalDateTime start = LocalDateTime.parse(startDateTime, formatter);
        LocalDateTime end = LocalDateTime.parse(endDateTime, formatter);

        String content = service.generateAccountingTxtContentByRange(start, end);
        byte[] fileBytes = content.getBytes(StandardCharsets.UTF_8);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.txt")
                .contentType(MediaType.TEXT_PLAIN)
                .body(fileBytes);
    }

    @GetMapping("/export-xlsx")
    public ResponseEntity<byte[]> exportAccountingRecordsExcel() {
        byte[] bytes = service.generateAccountingExcelContent();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.xlsx")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(bytes);
    }

    @GetMapping("/export-xlsx-by-range")
    public ResponseEntity<byte[]> exportAccountingRecordsExcelByRange(
            @RequestParam String startDateTime,
            @RequestParam String endDateTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
        LocalDateTime start = LocalDateTime.parse(startDateTime, formatter);
        LocalDateTime end = LocalDateTime.parse(endDateTime, formatter);

        byte[] bytes = service.generateAccountingExcelContentByRange(start, end);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.xlsx")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(bytes);
    }

    @GetMapping("/export-pdf")
    public ResponseEntity<byte[]> exportAccountingRecordsPdf() {
        byte[] pdfBytes = service.generateAccountingPdf();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }

    @GetMapping("/export-pdf-by-range")
    public ResponseEntity<byte[]> exportAccountingRecordsPdfByRange(
            @RequestParam String startDateTime,
            @RequestParam String endDateTime) {

        LocalDateTime start = LocalDateTime.parse(startDateTime);
        LocalDateTime end = LocalDateTime.parse(endDateTime);
        byte[] pdfBytes = service.generateAccountingPdfByRange(start, end);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdfBytes);
    }

    @GetMapping("/export-csv")
    public ResponseEntity<byte[]> exportAccountingRecordsCsv() {
        byte[] csvBytes = service.generateAccountingCsv();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(csvBytes);
    }

    @GetMapping("/export-csv-by-range")
    public ResponseEntity<byte[]> exportAccountingRecordsCsvByRange(
            @RequestParam String startDateTime,
            @RequestParam String endDateTime) {

        LocalDateTime start = LocalDateTime.parse(startDateTime);
        LocalDateTime end = LocalDateTime.parse(endDateTime);
        byte[] csvBytes = service.generateAccountingCsvByRange(start, end);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=accounting_records_range.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(csvBytes);
    }

}
