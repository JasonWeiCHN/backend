package com.wei.serverkulelemultiple.service;

import com.itextpdf.io.font.FontProgram;
import com.itextpdf.io.font.FontProgramFactory;
import com.itextpdf.io.font.PdfEncodings;
import com.itextpdf.kernel.colors.DeviceGray;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import com.wei.serverkulelemultiple.entity.AccountingRecord;
import com.wei.serverkulelemultiple.repositories.AccountingRecordRepository;
import com.wei.serverkulelemultiple.request.AddAccountingRecordRequest;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AccountingRecordService {

    @Autowired
    private AccountingRecordRepository repository;

    public List<AccountingRecord> getAll() {
        return repository.findAll();
    }

    public Optional<AccountingRecord> getById(Long id) {
        return repository.findById(id);
    }

    public AccountingRecord create(AddAccountingRecordRequest request) {
        AccountingRecord record = new AccountingRecord();
        copyProperties(record, request);
        return repository.save(record);
    }

    public AccountingRecord update(Long id, AddAccountingRecordRequest request) {
        AccountingRecord record = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("记录未找到: id=" + id));
        copyProperties(record, request);
        return repository.save(record);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyProperties(AccountingRecord record, AddAccountingRecordRequest request) {
        record.setStartDateTime(request.getStartDateTime());
        record.setEndDateTime(request.getEndDateTime());
        record.setDuration(request.getDuration());
        record.setConsoleType(request.getConsoleType());
        record.setGameNames(request.getGameNames());
        record.setCustomerType(request.getCustomerType());
        record.setIsReturning(request.getIsReturning());
        record.setActualAmount(request.getActualAmount());
        record.setPlatform(request.getPlatform());
        record.setContactType(request.getContactType());
        record.setContactValue(request.getContactValue());
        record.setRemark(request.getRemark());
    }

    public String generateAccountingTxtContent() {
        List<AccountingRecord> records = getAll();

        BigDecimal totalAmount = BigDecimal.ZERO;
        BigDecimal totalDuration = BigDecimal.ZERO;
        int totalRecords = records.size();

        StringBuilder content = new StringBuilder();

        for (AccountingRecord record : records) {
            totalAmount = totalAmount.add(record.getActualAmount());
            totalDuration = totalDuration.add(record.getDuration());
        }

        // 汇总信息
        content.append("记账单统计\n");
        content.append("总实收金额: ").append(totalAmount).append(" 元\n");
        content.append("总游戏时长: ").append(totalDuration).append(" 小时\n");
        content.append("总记录数: ").append(totalRecords).append(" 条\n");
        content.append("\n详细记录如下：\n");

        // 明细记录
        for (AccountingRecord record : records) {
            String date = record.getStartDateTime().toLocalDate().toString();

            // 处理游戏名，替换空字符串或空集合为 "未知游戏"
            List<String> gameNamesList = record.getGameNames();
            String gameNames;
            if (gameNamesList == null || gameNamesList.isEmpty()) {
                gameNames = "未知游戏";
            } else {
                // 过滤掉空字符串，再判断
                List<String> filteredNames = gameNamesList.stream()
                        .filter(name -> name != null && !name.trim().isEmpty())
                        .toList();
                gameNames = filteredNames.isEmpty() ? "未知游戏" : String.join(",", filteredNames);
            }

            content.append(date).append(" ")
                    .append(gameNames).append(" ")
                    .append(record.getDuration()).append("小时 ")
                    .append(record.getActualAmount()).append("元 ")
                    .append(record.getCustomerType()).append(" ")
                    .append(record.getPlatform())
                    .append("\n");
        }

        return content.toString();
    }

    public String generateAccountingTxtContentByRange(LocalDateTime start, LocalDateTime end) {
        List<AccountingRecord> records = repository.findByStartDateTimeBetween(start, end);

        BigDecimal totalAmount = BigDecimal.ZERO;
        BigDecimal totalDuration = BigDecimal.ZERO;
        int totalRecords = records.size();

        StringBuilder content = new StringBuilder();

        for (AccountingRecord record : records) {
            totalAmount = totalAmount.add(record.getActualAmount());
            totalDuration = totalDuration.add(record.getDuration());
        }

        content.append("指定时间段账单明细\n");
        content.append("时间范围：").append(start).append(" 到 ").append(end).append("\n");
        content.append("总实收金额: ").append(totalAmount).append(" 元\n");
        content.append("总游戏时长: ").append(totalDuration).append(" 小时\n");
        content.append("总记录数: ").append(totalRecords).append(" 条\n");
        content.append("\n详细记录如下：\n");

        for (AccountingRecord record : records) {
            String date = record.getStartDateTime().toLocalDate().toString();

            List<String> gameNamesList = record.getGameNames();
            String gameNames;
            if (gameNamesList == null || gameNamesList.isEmpty()) {
                gameNames = "未知游戏";
            } else {
                List<String> filteredNames = gameNamesList.stream()
                        .filter(name -> name != null && !name.trim().isEmpty())
                        .toList();
                gameNames = filteredNames.isEmpty() ? "未知游戏" : String.join(",", filteredNames);
            }

            content.append(date).append(" ")
                    .append(gameNames).append(" ")
                    .append(record.getDuration()).append("小时 ")
                    .append(record.getActualAmount()).append("元 ")
                    .append(record.getCustomerType()).append(" ")
                    .append(record.getPlatform())
                    .append("\n");
        }

        return content.toString();
    }

    public byte[] generateAccountingExcelContent() {
        List<AccountingRecord> records = getAll();
        return generateExcel(records, "全部账单明细");
    }

    public byte[] generateAccountingExcelContentByRange(LocalDateTime start, LocalDateTime end) {
        List<AccountingRecord> records = repository.findByStartDateTimeBetween(start, end);
        return generateExcel(records, "指定时间段账单明细");
    }

    private byte[] generateExcel(List<AccountingRecord> records, String sheetTitle) {
        try (Workbook workbook = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = workbook.createSheet(sheetTitle);
            String[] headers = {"编号", "开始时间", "结束时间", "游戏名", "时长", "金额", "客户类型", "平台", "备注"};

            // 样式（加粗）
            CellStyle headerStyle = workbook.createCellStyle();
            Font headerFont = workbook.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);

            // 创建表头
            Row header = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                org.apache.poi.ss.usermodel.Cell cell = header.createCell(i);
                cell.setCellValue(headers[i]);
                cell.setCellStyle(headerStyle);
            }

            // 内容行
            int rowIdx = 1;
            BigDecimal totalAmount = BigDecimal.ZERO;
            BigDecimal totalDuration = BigDecimal.ZERO;

            for (AccountingRecord record : records) {
                Row row = sheet.createRow(rowIdx++);

                row.createCell(0).setCellValue(record.getId());
                row.createCell(1).setCellValue(record.getStartDateTime().toString());
                row.createCell(2).setCellValue(record.getEndDateTime().toString());

                List<String> gameNames = record.getGameNames();
                String joinedNames = (gameNames == null || gameNames.isEmpty())
                        ? "未知游戏"
                        : gameNames.stream().filter(n -> n != null && !n.trim().isEmpty())
                        .reduce((a, b) -> a + ", " + b).orElse("未知游戏");

                row.createCell(3).setCellValue(joinedNames);
                row.createCell(4).setCellValue(record.getDuration().doubleValue());
                row.createCell(5).setCellValue(record.getActualAmount().doubleValue());
                row.createCell(6).setCellValue(record.getCustomerType());
                row.createCell(7).setCellValue(record.getPlatform());
                row.createCell(8).setCellValue(record.getRemark());

                totalAmount = totalAmount.add(record.getActualAmount());
                totalDuration = totalDuration.add(record.getDuration());
            }

            // 空数据提示
            if (records.isEmpty()) {
                Row emptyRow = sheet.createRow(rowIdx++);
                emptyRow.createCell(0).setCellValue("⚠ 无数据记录");
            } else {
                // 汇总行（加粗样式）
                Row summaryRow = sheet.createRow(rowIdx++);
                CellStyle boldStyle = workbook.createCellStyle();
                Font boldFont = workbook.createFont();
                boldFont.setBold(true);
                boldStyle.setFont(boldFont);

                org.apache.poi.ss.usermodel.Cell summaryLabelCell = summaryRow.createCell(0);
                summaryLabelCell.setCellValue("汇总");
                summaryLabelCell.setCellStyle(boldStyle);

                org.apache.poi.ss.usermodel.Cell durationCell = summaryRow.createCell(4);
                durationCell.setCellValue(totalDuration.doubleValue());
                durationCell.setCellStyle(boldStyle);

                org.apache.poi.ss.usermodel.Cell amountCell = summaryRow.createCell(5);
                amountCell.setCellValue(totalAmount.doubleValue());
                amountCell.setCellStyle(boldStyle);
            }

            // 自动列宽
            for (int i = 0; i < headers.length; i++) {
                sheet.autoSizeColumn(i);
            }

            workbook.write(out);
            return out.toByteArray();

        } catch (Exception e) {
            throw new RuntimeException("生成 Excel 文件失败", e);
        }
    }

    public byte[] generateAccountingCsv() {
        List<AccountingRecord> records = getAll();
        return toCsvBytes(records);
    }

    public byte[] generateAccountingCsvByRange(LocalDateTime start, LocalDateTime end) {
        List<AccountingRecord> records = repository.findByStartDateTimeBetween(start, end);
        return toCsvBytes(records);
    }

    private byte[] toCsvBytes(List<AccountingRecord> records) {
        StringBuilder sb = new StringBuilder();
        sb.append("日期,游戏名,时长,金额,客户类型,平台\n");

        for (AccountingRecord record : records) {
            String date = record.getStartDateTime().toLocalDate().toString();
            String gameNames = (record.getGameNames() == null || record.getGameNames().isEmpty())
                    ? "未知游戏"
                    : record.getGameNames().stream()
                    .filter(name -> name != null && !name.trim().isEmpty())
                    .map(name -> name.contains(",") ? "\"" + name + "\"" : name)  // 防止游戏名中有逗号
                    .collect(Collectors.joining(";"));

            sb.append(String.format("%s,%s,%s,%s,%s,%s\n",
                    date,
                    gameNames,
                    record.getDuration(),
                    record.getActualAmount(),
                    record.getCustomerType(),
                    record.getPlatform()));
        }

        // 加 BOM 防止 Excel 打开乱码
        byte[] bom = new byte[]{(byte) 0xEF, (byte) 0xBB, (byte) 0xBF};
        byte[] contentBytes = sb.toString().getBytes(StandardCharsets.UTF_8);

        ByteArrayOutputStream output = new ByteArrayOutputStream();
        try {
            output.write(bom);
            output.write(contentBytes);
        } catch (IOException e) {
            throw new RuntimeException("CSV导出失败", e);
        }

        return output.toByteArray();
    }

    public byte[] generateAccountingPdf() {
        List<AccountingRecord> records = getAll();
        return generatePdf(records, "全部账单明细");
    }

    public byte[] generateAccountingPdfByRange(LocalDateTime start, LocalDateTime end) {
        List<AccountingRecord> records = repository.findByStartDateTimeBetween(start, end);
        return generatePdf(records, "指定时间段账单明细");
    }

    private String safeStr(Object obj) {
        return obj == null ? "" : obj.toString();
    }

    private byte[] generatePdf(List<AccountingRecord> records, String title) {
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdfDoc = new PdfDocument(writer);
            Document document = new Document(pdfDoc);

            // 加载中文字体（资源路径和文件名根据实际调整）
            ClassPathResource fontResource = new ClassPathResource("fonts/NotoSansSC-VariableFont_wght.ttf");
            byte[] fontBytes = fontResource.getInputStream().readAllBytes();
            FontProgram fontProgram = FontProgramFactory.createFont(fontBytes);
            PdfFont font = PdfFontFactory.createFont(fontProgram, PdfEncodings.IDENTITY_H);

            document.setFont(font);

            // 标题
            document.add(new Paragraph(title)
                    .setFontSize(18)
                    .setBold()
                    .setTextAlignment(TextAlignment.CENTER)
                    .setMarginBottom(20));

            // 表头和列宽
            String[] headers = {
                    "编号", "开始时间", "结束时间", "游戏名", "时长",
                    "金额", "客户类型", "平台", "备注"
            };
            float[] columnWidths = {40F, 100F, 100F, 120F, 40F, 60F, 60F, 60F, 120F};
            Table table = new Table(columnWidths).useAllAvailableWidth();

            // 表头样式
            for (String h : headers) {
                Cell headerCell = new Cell()
                        .add(new Paragraph(h))
                        .setBackgroundColor(new DeviceGray(0.85f))
                        .setBold()
                        .setTextAlignment(TextAlignment.CENTER)
                        .setPadding(5);
                table.addHeaderCell(headerCell);
            }

            BigDecimal totalAmount = BigDecimal.ZERO;
            BigDecimal totalDuration = BigDecimal.ZERO;

            int rowIndex = 0;
            if (records.isEmpty()) {
                Cell noDataCell = new Cell(1, headers.length)
                        .add(new Paragraph("⚠ 无数据记录"))
                        .setTextAlignment(TextAlignment.CENTER);
                table.addCell(noDataCell);
            } else {
                java.time.format.DateTimeFormatter dtf = java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

                for (AccountingRecord record : records) {
                    // 交替背景色
                    DeviceGray bgColor = (rowIndex % 2 == 0) ? new DeviceGray(0.98f) : DeviceGray.WHITE;

                    table.addCell(new Cell().add(new Paragraph(safeStr(record.getId())))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.CENTER));

                    table.addCell(new Cell().add(new Paragraph(
                                    record.getStartDateTime() != null ? record.getStartDateTime().format(dtf) : ""))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.CENTER));

                    table.addCell(new Cell().add(new Paragraph(
                                    record.getEndDateTime() != null ? record.getEndDateTime().format(dtf) : ""))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.CENTER));

                    String gameNames = "未知游戏";
                    if (record.getGameNames() != null && !record.getGameNames().isEmpty()) {
                        gameNames = record.getGameNames().stream()
                                .filter(name -> name != null && !name.trim().isEmpty())
                                .collect(Collectors.joining("; "));
                        if (gameNames.isEmpty()) {
                            gameNames = "未知游戏";
                        }
                    }
                    table.addCell(new Cell().add(new Paragraph(gameNames))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.LEFT));

                    table.addCell(new Cell().add(new Paragraph(safeStr(record.getDuration())))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.RIGHT));

                    table.addCell(new Cell().add(new Paragraph(
                                    record.getActualAmount() != null ? record.getActualAmount().toString() : ""))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.RIGHT));

                    table.addCell(new Cell().add(new Paragraph(safeStr(record.getCustomerType())))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.CENTER));

                    table.addCell(new Cell().add(new Paragraph(safeStr(record.getPlatform())))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.CENTER));

                    table.addCell(new Cell().add(new Paragraph(safeStr(record.getRemark())))
                            .setBackgroundColor(bgColor)
                            .setTextAlignment(TextAlignment.LEFT)
                            .setKeepTogether(true)
                            .setPadding(3)
                            .setHeight(40)); // 给备注行高度，支持换行

                    totalAmount = totalAmount.add(record.getActualAmount() != null ? record.getActualAmount() : BigDecimal.ZERO);
                    totalDuration = totalDuration.add(record.getDuration() != null ? record.getDuration() : BigDecimal.ZERO);

                    rowIndex++;
                }

                // 汇总行
                Cell summaryCell = new Cell(1, 4)
                        .add(new Paragraph("汇总"))
                        .setBold()
                        .setTextAlignment(TextAlignment.CENTER)
                        .setBackgroundColor(new DeviceGray(0.9f));
                table.addCell(summaryCell);

                Cell totalDurationCell = new Cell()
                        .add(new Paragraph(totalDuration.toString()))
                        .setBold()
                        .setTextAlignment(TextAlignment.RIGHT)
                        .setBackgroundColor(new DeviceGray(0.9f));
                table.addCell(totalDurationCell);

                Cell totalAmountCell = new Cell()
                        .add(new Paragraph(totalAmount.toString()))
                        .setBold()
                        .setTextAlignment(TextAlignment.RIGHT)
                        .setBackgroundColor(new DeviceGray(0.9f));
                table.addCell(totalAmountCell);

                // 剩余空单元格
                table.addCell(new Cell().setBackgroundColor(new DeviceGray(0.9f)));
                table.addCell(new Cell().setBackgroundColor(new DeviceGray(0.9f)));
                table.addCell(new Cell().setBackgroundColor(new DeviceGray(0.9f)));
            }

            document.add(table);
            document.close();
            return baos.toByteArray();

        } catch (IOException e) {
            throw new RuntimeException("生成 PDF 文件失败", e);
        }
    }
}
