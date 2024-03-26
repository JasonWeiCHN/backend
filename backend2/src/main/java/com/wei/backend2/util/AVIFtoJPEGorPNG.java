package com.wei.backend2.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class AVIFtoJPEGorPNG {

    public static void main(String[] args) throws IOException {
        // 定义 AVIF 输入文件和 PNG 输出文件路径
        String avifFile = "d://123.avif";
        String pngFile = "output.png";

        // 构建 ImageMagick 命令行
        String command = String.format("magick convert %s %s", avifFile, pngFile);

        // 执行命令
        Process process = Runtime.getRuntime().exec(command);

        // 获取命令执行结果
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }

        // 等待命令执行完成
        try {
            process.waitFor();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("转换完成");
    }
}
