package com.wei.serverkulelemultiple.member.service;

import com.itextpdf.io.font.FontProgram;
import com.itextpdf.io.font.FontProgramFactory;
import com.itextpdf.io.font.PdfEncodings;
import com.itextpdf.kernel.colors.DeviceGray;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.properties.TextAlignment;
import com.wei.serverkulelemultiple.member.dto.MemberListDTO;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class MemberExportService {

    @Autowired
    private MemberService memberService;

    public List<MemberListDTO> getAll() {
        return memberService.getAllMembersWithBalance();
    }

    // ===== TXT =====
    public String generateMemberTxt() {
        List<MemberListDTO> members = getAll();
        StringBuilder sb = new StringBuilder();

        sb.append("会员列表\n");
        sb.append("总人数: ").append(members.size()).append(" 人\n\n");

        for (MemberListDTO m : members) {
            sb.append("编号: ").append(m.getId()).append(" | 姓名: ").append(m.getName())
                    .append(" | 电话: ").append(m.getPhone())
                    .append(" | 余额: ").append(m.getBalance()).append(" 元")
                    .append(" | 注册时间: ").append(m.getCreatedAt())
                    .append("\n");
        }
        return sb.toString();
    }

    // ===== Excel =====
    public byte[] generateMemberExcel() {
        List<MemberListDTO> members = getAll();
        try (Workbook workbook = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = workbook.createSheet("会员列表");
            String[] headers = {"编号", "姓名", "电话", "备注", "注册时间", "余额"};

            // header style
            CellStyle headerStyle = workbook.createCellStyle();
            Font headerFont = workbook.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);

            Row header = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(headers[i]);
                cell.setCellStyle(headerStyle);
            }

            int rowIdx = 1;
            for (MemberListDTO m : members) {
                Row row = sheet.createRow(rowIdx++);
                row.createCell(0).setCellValue(m.getId());
                row.createCell(1).setCellValue(m.getName());
                row.createCell(2).setCellValue(m.getPhone());
                row.createCell(3).setCellValue(m.getRemark() != null ? m.getRemark() : "");
                row.createCell(4).setCellValue(m.getCreatedAt().toString());
                row.createCell(5).setCellValue(m.getBalance());
            }

            for (int i = 0; i < headers.length; i++) {
                sheet.autoSizeColumn(i);
            }

            workbook.write(out);
            return out.toByteArray();
        } catch (IOException e) {
            throw new RuntimeException("生成Excel失败", e);
        }
    }

    // ===== CSV =====
    public byte[] generateMemberCsv() {
        List<MemberListDTO> members = getAll();
        StringBuilder sb = new StringBuilder();
        sb.append("编号,姓名,电话,备注,注册时间,余额\n");

        for (MemberListDTO m : members) {
            sb.append(String.format("%s,%s,%s,%s,%s,%s\n",
                    m.getId(),
                    safeCsv(m.getName()),
                    safeCsv(m.getPhone()),
                    safeCsv(m.getRemark()),
                    m.getCreatedAt(),
                    m.getBalance()));
        }

        byte[] bom = new byte[]{(byte) 0xEF, (byte) 0xBB, (byte) 0xBF};
        byte[] content = sb.toString().getBytes(StandardCharsets.UTF_8);

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            out.write(bom);
            out.write(content);
        } catch (IOException e) {
            throw new RuntimeException("CSV导出失败", e);
        }
        return out.toByteArray();
    }

    // ===== PDF =====
    public byte[] generateMemberPdf() {
        List<MemberListDTO> members = getAll();
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdfDoc = new PdfDocument(writer);
            Document document = new Document(pdfDoc);

            // 中文字体
            ClassPathResource fontRes = new ClassPathResource("fonts/NotoSansSC-VariableFont_wght.ttf");
            byte[] fontBytes = fontRes.getInputStream().readAllBytes();
            FontProgram fontProgram = FontProgramFactory.createFont(fontBytes);
            PdfFont font = PdfFontFactory.createFont(fontProgram, PdfEncodings.IDENTITY_H);
            document.setFont(font);

            document.add(new Paragraph("会员列表")
                    .setFontSize(18)
                    .setBold()
                    .setTextAlignment(TextAlignment.CENTER)
                    .setMarginBottom(20));

            String[] headers = {"编号", "姓名", "电话", "备注", "注册时间", "余额"};
            float[] columnWidths = {40F, 100F, 100F, 120F, 120F, 60F};
            com.itextpdf.layout.element.Table table = new com.itextpdf.layout.element.Table(columnWidths).useAllAvailableWidth();

            for (String h : headers) {
                table.addHeaderCell(new com.itextpdf.layout.element.Cell()
                        .add(new Paragraph(h))
                        .setBackgroundColor(new DeviceGray(0.85f))
                        .setBold()
                        .setTextAlignment(TextAlignment.CENTER)
                        .setPadding(5));
            }

            int rowIdx = 0;
            for (MemberListDTO m : members) {
                DeviceGray bg = (rowIdx % 2 == 0) ? new DeviceGray(0.98f) : DeviceGray.WHITE;

                table.addCell(new com.itextpdf.layout.element.Cell().add(new Paragraph(String.valueOf(m.getId()))).setBackgroundColor(bg));
                table.addCell(new com.itextpdf.layout.element.Cell().add(new Paragraph(m.getName())).setBackgroundColor(bg));
                table.addCell(new com.itextpdf.layout.element.Cell().add(new Paragraph(m.getPhone())).setBackgroundColor(bg));
                table.addCell(new com.itextpdf.layout.element.Cell().add(new Paragraph(m.getRemark() != null ? m.getRemark() : "")).setBackgroundColor(bg));
                table.addCell(new com.itextpdf.layout.element.Cell().add(new Paragraph(m.getCreatedAt().toString())).setBackgroundColor(bg));
                table.addCell(new com.itextpdf.layout.element.Cell().add(new Paragraph(String.valueOf(m.getBalance()))).setBackgroundColor(bg));

                rowIdx++;
            }

            if (members.isEmpty()) {
                table.addCell(new com.itextpdf.layout.element.Cell(1, headers.length)
                        .add(new Paragraph("⚠ 无数据记录"))
                        .setTextAlignment(TextAlignment.CENTER));
            }

            document.add(table);
            document.close();
            return baos.toByteArray();
        } catch (IOException e) {
            throw new RuntimeException("生成PDF失败", e);
        }
    }

    private String safeCsv(String val) {
        if (val == null) return "";
        if (val.contains(",") || val.contains("\"")) {
            return "\"" + val.replace("\"", "\"\"") + "\"";
        }
        return val;
    }
}
