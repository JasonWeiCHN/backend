package com.wei.backend2.request;

import lombok.Data;
import java.util.Date;

@Data
public class AddUserRequest {

    private String username;

    private String password;

    private String email;

    private String phone;

    private String firstName;

    private String lastName;

    private String gender;

    private String role;

    private Date dateOfBirth;

    private String country;

    private String city;

    private String streetAddress;

    private String zipCode;

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
