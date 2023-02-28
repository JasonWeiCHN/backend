package com.wei.backend2.util;

import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class SaveImageFile {
    public static boolean saveImage(MultipartFile file, String imgPath) {
        try {
            // 生成图片保存路径
            Path path = Paths.get(imgPath);
            Files.createDirectories(path);

            // 保存原始图片
            byte[] data = file.getBytes();
            Path origPath = Paths.get(imgPath + "/" + StringUtils.cleanPath(file.getOriginalFilename()));
            Files.write(origPath, data);

            // 保存缩略图
            BufferedImage origImg = ImageIO.read(file.getInputStream());

            // 在图片目录下创建 tiny、small、medium、large 四个文件夹
            Files.createDirectories(path.resolve("tiny"));
            Files.createDirectories(path.resolve("small"));
            Files.createDirectories(path.resolve("medium"));
            Files.createDirectories(path.resolve("large"));

            // 只通过 scale 值控制缩放
            addResizedImage(origImg, 1, 120, 120, imgPath + "/tiny/" + file.getOriginalFilename());
            addResizedImage(origImg, 2, 120, 120, imgPath + "/small/" + file.getOriginalFilename());
            addResizedImage(origImg, 4, 120, 120, imgPath + "/medium/" + file.getOriginalFilename());
            addResizedImage(origImg, 8, 120, 120, imgPath + "/large/" + file.getOriginalFilename());

            // 自由缩放
//        addResizedImage(origImg, 1, 120, 120, imgPath + "/tiny/" + file.getOriginalFilename());
//        addResizedImage(origImg, 2, 240, 240, imgPath + "/small/" + file.getOriginalFilename());
//        addResizedImage(origImg, 4, 480, 480, imgPath + "/medium/" + file.getOriginalFilename());
//        addResizedImage(origImg, 8, 960, 960, imgPath + "/large/" + file.getOriginalFilename());

            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    private static void addResizedImage(BufferedImage origImg, int scale, int baseWidth, int baseHeight, String path) throws IOException {
        // 傻瓜式缩放 没有考虑 等比例 会造成图片变形
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

}
