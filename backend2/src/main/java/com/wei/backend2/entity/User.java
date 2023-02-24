package com.wei.backend2.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    private String phone;

    private String firstName;

    private String lastName;

    private String gender;

    private String role;

    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    private String country;

    private String city;

    private String streetAddress;

    private String zipCode;

    private Timestamp lastLoginTime;

    @Column(nullable = false)
    private Timestamp creationTime;

    private Timestamp modificationTime;

    private String status;

    private String avatar;

    private String timezone;

    private String language;

    private String occupation;

    private String company;

    private String interests;

    private String education;

    private String biography;

    private String authenticationToken;

    private String socialMediaLinks;
}
