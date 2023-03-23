package com.wei.backend2.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "user_info")
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @Column(name = "nick_name")
    private String nickName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "gender")
    private Integer gender;

    // 省略 getter 和 setter 方法
}

