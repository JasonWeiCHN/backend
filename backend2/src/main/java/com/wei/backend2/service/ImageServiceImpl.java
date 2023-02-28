package com.wei.backend2.service;

import com.wei.backend2.dao.ImageDAOImpl;
import com.wei.backend2.entity.Image;
import com.wei.backend2.request.AddImageRequest;
import com.wei.backend2.util.SaveImageFile;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.*;
import java.util.List;

@Service
public class ImageServiceImpl implements ImageService{
    private final ImageDAOImpl imageDAO;

    public ImageServiceImpl(ImageDAOImpl imageDAO) {
        this.imageDAO = imageDAO;
    }

    @Override
    public boolean addImage(AddImageRequest request) {
        saveImage(request);
        return true;
    }

    public Image saveImage(AddImageRequest request) {
        String hash = UUID.randomUUID().toString();
        // 生成图片保存路径
        String imgPath = "images/" + hash;
        // 保存图片
        SaveImageFile.saveImage(request.getFile(), imgPath);

        // 保存图片信息到数据库
        Image image = new Image();
        image.setName(request.getName());
        image.setCategory(request.getCategory());
        image.setHash(hash);
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        image.setCreateTime(timestamp);
        image.setUpdateTime(timestamp);
        imageDAO.save(image);

        return image;
    }


    @Override
    public boolean addImageByExcel(MultipartFile file) {
        try {
            List<AddImageRequest> requests = readRequestsFromExcel(file);

            for (AddImageRequest request : requests) {
                addImage(request);
            }

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean addImage1(AddImageRequest request) {
        String fileName = StringUtils.cleanPath(request.getFile().getOriginalFilename());

        // 生成唯一的hash
        String hash = UUID.randomUUID().toString();

        Image image = new Image();
        image.setName(request.getName());
        image.setCategory(request.getCategory());
        image.setHash(hash);

        // 设置创建时间和更新时间
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        image.setCreateTime(timestamp);
        image.setUpdateTime(timestamp);

        // 保存图片文件
        try {
            byte[] data = request.getFile().getBytes();
            Path path = Paths.get("images/" + hash + "/" + fileName);
            Files.createDirectories(path.getParent());
            Files.write(path, data);

            // 保存图片信息到数据库
            imageDAO.save(image);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

// 方法1
//    private List<AddImageRequest> readRequestsFromExcel(MultipartFile file) throws IOException {
//        Workbook workbook = null;
//        try {
//            InputStream is = file.getInputStream();
//            if (file.getOriginalFilename().endsWith(".xlsx")) {
//                workbook = new XSSFWorkbook(is);
//            } else if (file.getOriginalFilename().endsWith(".xls")) {
//                workbook = new HSSFWorkbook(is);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        List<AddImageRequest> requests = new ArrayList<>();
//
//        Sheet sheet = workbook.getSheetAt(0);
//        Iterator<Row> iterator = sheet.iterator();
//        while (iterator.hasNext()) {
//            Row currentRow = iterator.next();
//            if (currentRow.getRowNum() == 0) {
//                continue;
//            }
//
//            String name = currentRow.getCell(0).getStringCellValue();
//            String category = currentRow.getCell(1).getStringCellValue();
//            byte[] fileBytes = currentRow.getCell(2).getBinaryCellValue();
//
//            MultipartFile multipartFile = new MockMultipartFile(
//                    currentRow.getCell(2).getStringCellValue(),
//                    currentRow.getCell(2).getStringCellValue(),
//                    null,
//                    fileBytes
//            );
//
//            requests.add(new AddImageRequest(name, category, multipartFile));
//        }
//
//        return requests;
//    }

// 方法2
//    private List<AddImageRequest> readRequestsFromExcel(MultipartFile file) throws IOException {
//        Workbook workbook = null;
//        try {
//            InputStream is = file.getInputStream();
//            if (file.getOriginalFilename().endsWith(".xlsx")) {
//                workbook = new XSSFWorkbook(is);
//            } else if (file.getOriginalFilename().endsWith(".xls")) {
//                workbook = new HSSFWorkbook(is);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        List<AddImageRequest> requests = new ArrayList<>();
//
//        Sheet sheet = workbook.getSheetAt(0);
//        Iterator<Row> iterator = sheet.iterator();
//        while (iterator.hasNext()) {
//            Row currentRow = iterator.next();
//            if (currentRow.getRowNum() == 0) {
//                continue;
//            }
//
//            String name = currentRow.getCell(0).getStringCellValue();
//            String category = currentRow.getCell(1).getStringCellValue();
//            Cell fileCell = currentRow.getCell(2);
//            MultipartFile multipartFile = null;
//            if (fileCell.getCellType() != CellType.BLANK) {
//                byte[] fileBytes = null;
//                try {
//                    fileBytes = IOUtils.toByteArray(fileCell.getBinaryStream());
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//                multipartFile = new MockMultipartFile(
//                        fileCell.getStringCellValue(),
//                        fileCell.getStringCellValue(),
//                        null,
//                        fileBytes
//                );
//            }
//
//            requests.add(new AddImageRequest(name, category, multipartFile));
//        }
//
//        return requests;
//    }

    // 方法3 搞不定啊！
    private List<AddImageRequest> readRequestsFromExcel(MultipartFile file) {
        Workbook workbook = null;
        try {
            InputStream is = file.getInputStream();
            if (file.getOriginalFilename().endsWith(".xlsx")) {
                workbook = new XSSFWorkbook(is);
            } else if (file.getOriginalFilename().endsWith(".xls")) {
                workbook = new HSSFWorkbook(is);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        List<AddImageRequest> requests = new ArrayList<>();

        Sheet sheet = workbook.getSheetAt(0);
        Iterator<Row> iterator = sheet.iterator();
        while (iterator.hasNext()) {
            Row currentRow = iterator.next();
            if (currentRow.getRowNum() == 0) {
                continue;
            }

            String name = currentRow.getCell(0).getStringCellValue();
            String category = currentRow.getCell(1).getStringCellValue();
            MultipartFile multipartFile = (MultipartFile) currentRow.getCell(2).getRichStringCellValue();

            requests.add(new AddImageRequest(name, category, multipartFile));
        }

        return requests;
    }

    // 方法4 待定

}

