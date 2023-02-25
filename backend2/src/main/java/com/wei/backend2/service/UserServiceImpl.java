package com.wei.backend2.service;

import com.wei.backend2.dao.UserDaoImpl;
import com.wei.backend2.dto.UserDTO;
import com.wei.backend2.entity.User;
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
    public List<UserDTO> getUserList() {
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

    private String formatDate(Timestamp timestamp) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return dateFormat.format(timestamp);
    }
}
