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
import com.wei.serverkulelemultiple.member.entity.MemberRecharge;
import com.wei.serverkulelemultiple.member.repository.MemberRechargeRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.List;

@Service
public class MemberRechargeExportService {

    @Autowired
    private MemberRechargeRepository rechargeRepository;

    private List<MemberRecharge> getByDate(LocalDate date) {
        return rechargeRepository.findAll().stream()
                .filter(r -> r.getRechargeTime().toLocalDate().equals(date))
                .toList();
    }

    // ===== TXT =====
    public String generateRechargeTxt(LocalDate date) {
        List<MemberRecharge> list = getByDate(date);
        double totalAmount = list.stream().mapToDouble(MemberRecharge::getAmount).sum();
        double totalBonus = list.stream().mapToDouble(MemberRecharge::getBonusAmount).sum();

        StringBuilder sb = new StringBuilder();
        sb.append("充值明细（").append(date).append("）\n");
        sb.append("总充值：").append(totalAmount).append(" 元\n");
        sb.append("总赠送：").append(totalBonus).append(" 元\n\n");

        for (MemberRecharge r : list) {
            sb.append("会员: ").append(r.getMember().getName())
                    .append(" | 电话: ").append(r.getMember().getPhone())
                    .append(" | 充值: ").append(r.getAmount()).append(" 元")
                    .append(" | 赠送: ").append(r.getBonusAmount()).append(" 元")
                    .append(" | 时间: ").append(r.getRechargeTime())
                    .append("\n");
        }

        if (list.isEmpty()) {
            sb.append("⚠ 当日无充值记录\n");
        }
        return sb.toString();
    }

    // ===== Excel =====
    public byte[] generateRechargeExcel(LocalDate date) {
        List<MemberRecharge> list = getByDate(date);
        double totalAmount = list.stream().mapToDouble(MemberRecharge::getAmount).sum();
        double totalBonus = list.stream().mapToDouble(MemberRecharge::getBonusAmount).sum();

        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = workbook.createSheet("充值明细");
            String[] headers = {"会员", "电话", "充值金额", "赠送金额", "充值时间"};

            Row headerRow = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(headers[i]);
            }

            int rowIdx = 1;
            for (MemberRecharge r : list) {
                Row row = sheet.createRow(rowIdx++);
                row.createCell(0).setCellValue(r.getMember().getName());
                row.createCell(1).setCellValue(r.getMember().getPhone());
                row.createCell(2).setCellValue(r.getAmount());
                row.createCell(3).setCellValue(r.getBonusAmount());
                row.createCell(4).setCellValue(r.getRechargeTime().toString());
            }

            // 汇总行
            Row sumRow = sheet.createRow(rowIdx);
            sumRow.createCell(0).setCellValue("合计");
            sumRow.createCell(2).setCellValue(totalAmount);
            sumRow.createCell(3).setCellValue(totalBonus);

            workbook.write(out);
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("生成Excel失败", e);
        }
    }

    // ===== CSV =====
    public byte[] generateRechargeCsv(LocalDate date) {
        List<MemberRecharge> list = getByDate(date);
        double totalAmount = list.stream().mapToDouble(MemberRecharge::getAmount).sum();
        double totalBonus = list.stream().mapToDouble(MemberRecharge::getBonusAmount).sum();

        StringBuilder sb = new StringBuilder();
        sb.append("会员,电话,充值金额,赠送金额,充值时间\n");
        for (MemberRecharge r : list) {
            sb.append(r.getMember().getName()).append(",")
                    .append(r.getMember().getPhone()).append(",")
                    .append(r.getAmount()).append(",")
                    .append(r.getBonusAmount()).append(",")
                    .append(r.getRechargeTime()).append("\n");
        }
        sb.append("合计,,").append(totalAmount).append(",").append(totalBonus).append("\n");

        return sb.toString().getBytes(StandardCharsets.UTF_8);
    }

    // ===== PDF =====
    public byte[] generateRechargePdf(LocalDate date) {
        List<MemberRecharge> list = getByDate(date);
        double totalAmount = list.stream().mapToDouble(MemberRecharge::getAmount).sum();
        double totalBonus = list.stream().mapToDouble(MemberRecharge::getBonusAmount).sum();

        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdfDoc = new PdfDocument(writer);
            Document document = new Document(pdfDoc);

            ClassPathResource fontRes = new ClassPathResource("fonts/NotoSansSC-VariableFont_wght.ttf");
            byte[] fontBytes = fontRes.getInputStream().readAllBytes();
            FontProgram fontProgram = FontProgramFactory.createFont(fontBytes);
            PdfFont font = PdfFontFactory.createFont(fontProgram, PdfEncodings.IDENTITY_H);
            document.setFont(font);

            document.add(new Paragraph("充值明细（" + date + "）")
                    .setFontSize(16).setBold().setTextAlignment(TextAlignment.CENTER));

            document.add(new Paragraph("总充值：" + totalAmount + " 元  |  总赠送：" + totalBonus + " 元")
                    .setFontSize(12).setMarginBottom(10));

            String[] headers = {"会员", "电话", "充值金额", "赠送金额", "充值时间"};
            float[] widths = {80F, 100F, 80F, 80F, 150F};
            com.itextpdf.layout.element.Table table = new com.itextpdf.layout.element.Table(widths).useAllAvailableWidth();

            for (String h : headers) {
                table.addHeaderCell(new Paragraph(h).setBold().setBackgroundColor(new DeviceGray(0.85f)));
            }

            for (MemberRecharge r : list) {
                table.addCell(r.getMember().getName());
                table.addCell(r.getMember().getPhone());
                table.addCell(String.valueOf(r.getAmount()));
                table.addCell(String.valueOf(r.getBonusAmount()));
                table.addCell(r.getRechargeTime().toString());
            }

            if (list.isEmpty()) {
                com.itextpdf.layout.element.Cell noDataCell =
                        new com.itextpdf.layout.element.Cell(1, headers.length)
                                .add(new Paragraph("⚠ 无数据")
                                        .setTextAlignment(TextAlignment.CENTER)
                                        .setBold());
                table.addCell(noDataCell);
            }

            document.add(table);
            document.close();
            return baos.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("生成PDF失败", e);
        }
    }
}
