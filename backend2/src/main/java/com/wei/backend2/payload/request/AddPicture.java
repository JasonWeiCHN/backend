package com.wei.backend2.payload.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddPicture {
    private String name;
    private String searchKey;
    private String category;
    private int size;
    // 其他图片相关的属性

    // 可以添加相应的getter和setter方法
}
