package com.wei.backend2.service;

import com.wei.backend2.dao.UserDaoImpl;
import com.wei.backend2.dto.UserDTO;
import com.wei.backend2.entity.User;
import com.wei.backend2.request.AddUserRequest;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserDaoImpl userDao;

    public UserServiceImpl(UserDaoImpl userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<UserDTO> getUsers() {
        List<User> userList = userDao.findAll();
        List<UserDTO> userDTOList = new ArrayList<>();
        for (User user : userList) {
            UserDTO userDTO = new UserDTO();
            userDTO.setName(user.getFirstName() + " " + user.getLastName());
            userDTO.setCreationTime(formatDate(user.getCreationTime()));
            userDTO.setEmail(user.getEmail());
            userDTO.setPhone(user.getPhone());
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }

    @Override
    public void addUser(AddUserRequest addUserRequest) {
        User user = new User();
        user.setUsername(addUserRequest.getUsername());
        user.setPassword(addUserRequest.getPassword());
        user.setEmail(addUserRequest.getEmail());
        user.setPhone(addUserRequest.getPhone());
        user.setFirstName(addUserRequest.getFirstName());
        user.setLastName(addUserRequest.getLastName());
        user.setGender(addUserRequest.getGender());
        user.setRole(addUserRequest.getRole());
        user.setDateOfBirth(addUserRequest.getDateOfBirth());
        user.setCountry(addUserRequest.getCountry());
        user.setCity(addUserRequest.getCity());
        user.setStreetAddress(addUserRequest.getStreetAddress());
        user.setZipCode(addUserRequest.getZipCode());
        user.setLastLoginTime(new Timestamp(System.currentTimeMillis()));
        user.setCreationTime(new Timestamp(System.currentTimeMillis()));
        user.setModificationTime(new Timestamp(System.currentTimeMillis()));
        user.setStatus(addUserRequest.getStatus());
        user.setAvatar(addUserRequest.getAvatar());
        user.setTimezone(addUserRequest.getTimezone());
        user.setLanguage(addUserRequest.getLanguage());
        user.setOccupation(addUserRequest.getOccupation());
        user.setCompany(addUserRequest.getCompany());
        user.setInterests(addUserRequest.getInterests());
        user.setEducation(addUserRequest.getEducation());
        user.setBiography(addUserRequest.getBiography());
        user.setAuthenticationToken(addUserRequest.getAuthenticationToken());
        user.setSocialMediaLinks(addUserRequest.getSocialMediaLinks());
        userDao.save(user);
    }

    private String formatDate(Timestamp timestamp) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return dateFormat.format(timestamp);
    }
}
