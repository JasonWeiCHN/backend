package com.wei.backend2.service;

import com.wei.backend2.dao.ImageDaoImpl;
import com.wei.backend2.entity.Image;
import com.wei.backend2.request.AddImageRequest;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.UUID;

@Service
public class ImageServiceImpl implements ImageService{
    private final ImageDaoImpl imageDao;

    public ImageServiceImpl(ImageDaoImpl imageDao) {
        this.imageDao = imageDao;
    }

    public boolean addImage(AddImageRequest request) {
        String fileName = StringUtils.cleanPath(request.getFile().getOriginalFilename());
        String hash = UUID.randomUUID().toString();

        // 生成图片保存路径
        String imgPath = "images/" + hash;
        Path path = Paths.get(imgPath);
        try {
            Files.createDirectories(path);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        // 保存原始图片
        try {
            byte[] data = request.getFile().getBytes();
            Path origPath = Paths.get(imgPath + "/" + fileName);
            Files.write(origPath, data);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        // 保存缩略图
        try {
            // 在图片目录下创建 tiny、small、medium、large 四个文件夹
            Files.createDirectories(path.resolve("tiny"));
            Files.createDirectories(path.resolve("small"));
            Files.createDirectories(path.resolve("medium"));
            Files.createDirectories(path.resolve("large"));

            BufferedImage origImg = ImageIO.read(request.getFile().getInputStream());

            // 只通过 scale 值控制缩放
            addResizedImage(origImg, 1, 120, 120, imgPath + "/tiny/" + fileName);
            addResizedImage(origImg, 2, 120, 120, imgPath + "/small/" + fileName);
            addResizedImage(origImg, 4, 120, 120, imgPath + "/medium/" + fileName);
            addResizedImage(origImg, 8, 120, 120, imgPath + "/large/" + fileName);

            // 自由缩放
//            addResizedImage(origImg, 1, 120, 120, imgPath + "/tiny/" + fileName);
//            addResizedImage(origImg, 2, 240, 240, imgPath + "/small/" + fileName);
//            addResizedImage(origImg, 4, 480, 480, imgPath + "/medium/" + fileName);
//            addResizedImage(origImg, 8, 960, 960, imgPath + "/large/" + fileName);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        // 保存图片信息到数据库
        Image image = new Image();
        image.setName(request.getName());
        image.setCategory(request.getCategory());
        image.setHash(hash);
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        image.setCreateTime(timestamp);
        image.setUpdateTime(timestamp);
        imageDao.save(image);

        return true;
    }

    private void addResizedImage(BufferedImage origImg, int scale, int baseWidth, int baseHeight, String path) throws IOException {
//        int width = baseWidth * scale;
//        int height = baseHeight * scale;
//
//        BufferedImage newImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
//        Graphics2D graphics2D = newImg.createGraphics();
//        graphics2D.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
//        graphics2D.drawImage(origImg, 0, 0, width, height, null);
//        graphics2D.dispose();
//
//        ImageIO.write(newImg, "jpg", new File(path));

        // 计算等比例缩放后的宽度和高度
        double widthRatio = (double)baseWidth / origImg.getWidth();
        double heightRatio = (double)baseHeight / origImg.getHeight();
        double ratio = Math.min(widthRatio, heightRatio);
        int width = (int) (origImg.getWidth() * ratio * scale);
        int height = (int) (origImg.getHeight() * ratio * scale);

        // 创建缩略图
        BufferedImage newImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics2D graphics2D = newImg.createGraphics();
        graphics2D.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
        graphics2D.drawImage(origImg, 0, 0, width, height, null);
        graphics2D.dispose();

        // 保存缩略图
        ImageIO.write(newImg, "jpg", new File(path));

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
            imageDao.save(image);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}

