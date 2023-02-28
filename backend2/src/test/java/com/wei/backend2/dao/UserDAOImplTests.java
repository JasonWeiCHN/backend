package com.wei.backend2.dao;

import com.wei.backend2.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Timestamp;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class UserDAOImplTests {
    private UserDAO userDao;

    @BeforeEach
    public void setUp() {
        userDao = new UserDAOImpl();
    }

    @Test
    public void testSave() {
        User user = new User();
//        user.setUserId(1);
        user.setUsername("testuser");
        user.setPassword("testpassword");
        user.setEmail("testuser@example.com");
        user.setPhone("1234567890");
        user.setFirstName("Test");
        user.setLastName("User");
        user.setGender("male");
        user.setRole("user");
        user.setDateOfBirth(new Date());
        user.setCountry("China");
        user.setCity("Shanghai");
        user.setStreetAddress("123 Main St");
        user.setZipCode("123456");
        user.setLastLoginTime(new Timestamp(System.currentTimeMillis()));
        user.setCreationTime(new Timestamp(System.currentTimeMillis()));
        user.setModificationTime(new Timestamp(System.currentTimeMillis()));
        user.setStatus("active");
        user.setAvatar("avatar.png");
        user.setTimezone("UTC+8");
        user.setLanguage("en");
        user.setOccupation("developer");
        user.setCompany("Example Inc");
        user.setInterests("coding, reading, music");
        user.setEducation("Bachelor's Degree");
        user.setBiography("I am a software developer.");
        user.setAuthenticationToken("token123");
        user.setSocialMediaLinks("token123;32423423424@qqqq.com");

        userDao.save(user);
        User savedUser = userDao.findById(user.getUserId());
        assertNotNull(savedUser);
        assertEquals(user.getUsername(), savedUser.getUsername());
        assertEquals(user.getPassword(), savedUser.getPassword());
        assertEquals(user.getEmail(), savedUser.getEmail());
        assertEquals(user.getPhone(), savedUser.getPhone());
        assertEquals(user.getFirstName(), savedUser.getFirstName());
        assertEquals(user.getLastName(), savedUser.getLastName());
        assertEquals(user.getGender(), savedUser.getGender());
        assertEquals(user.getRole(), savedUser.getRole());
        assertEquals(user.getDateOfBirth(), savedUser.getDateOfBirth());
        assertEquals(user.getCountry(), savedUser.getCountry());
        assertEquals(user.getCity(), savedUser.getCity());
        assertEquals(user.getStreetAddress(), savedUser.getStreetAddress());
        assertEquals(user.getZipCode(), savedUser.getZipCode());
        assertEquals(user.getLastLoginTime(), savedUser.getLastLoginTime());
        assertEquals(user.getCreationTime(), savedUser.getCreationTime());
        assertEquals(user.getModificationTime(), savedUser.getModificationTime());
        assertEquals(user.getStatus(), savedUser.getStatus());
        assertEquals(user.getAvatar(), savedUser.getAvatar());
        assertEquals(user.getTimezone(), savedUser.getTimezone());
        assertEquals(user.getLanguage(), savedUser.getLanguage());
        assertEquals(user.getOccupation(), savedUser.getOccupation());
        assertEquals(user.getCompany(), savedUser.getCompany());
        assertEquals(user.getInterests(), savedUser.getInterests());
        assertEquals(user.getEducation(), savedUser.getEducation());
        assertEquals(user.getBiography(), savedUser.getBiography());
        assertEquals(user.getAuthenticationToken(), savedUser.getAuthenticationToken());
        assertEquals(user.getSocialMediaLinks(), savedUser.getSocialMediaLinks());
    }
}
