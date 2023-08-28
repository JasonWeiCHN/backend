package com.wei.backend2.entity;

import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;

@Data
public class User {

    // 用户ID
    private int userId;

    // 用户名
    private String username;

    // 密码
    private String password;

    // 电子邮件
    private String email;

    // 手机号码
    private String phone;

    // 名字
    private String firstName;

    // 姓氏
    private String lastName;

    // 性别
    private String gender;

    // 角色
    private String role;

    // 出生日期
    private Date dateOfBirth;

    // 国家
    private String country;

    // 城市
    private String city;

    // 街道地址
    private String streetAddress;

    // 邮政编码
    private String zipCode;

    // 上次登录时间
    private Timestamp lastLoginTime;

    // 创建时间
    private Timestamp creationTime;

    // 修改时间
    private Timestamp modificationTime;

    // 状态
    private String status;

    // 头像
    private String avatar;

    // 时区
    private String timezone;

    // 语言
    private String language;

    // 职业
    private String occupation;

    // 公司
    private String company;

    // 兴趣爱好
    private String interests;

    // 教育背景
    private String education;

    // 简介
    private String biography;

    // 认证令牌
    private String authenticationToken;

    // 社交媒体链接
    private String socialMediaLinks;
}

