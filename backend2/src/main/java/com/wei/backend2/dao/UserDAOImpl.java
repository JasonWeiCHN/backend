package com.wei.backend2.dao;

import com.wei.backend2.entity.User;
import com.wei.backend2.util.PostgreCon;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.List;
import java.util.ArrayList;

@Component
public class UserDAOImpl implements UserDAO {
    @Override
    public User findById(int id) {
        User user = null;
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        try {
            connection = PostgreCon.getConnection();
            String sql = "SELECT * FROM user WHERE user_id=?";
            statement = connection.prepareStatement(sql);
            statement.setInt(1, id);
            resultSet = statement.executeQuery();
            if (resultSet.next()) {
                user = new User();
                user.setUserId(resultSet.getInt("userid"));
                user.setUsername(resultSet.getString("username"));
                user.setPassword(resultSet.getString("password"));
                user.setEmail(resultSet.getString("email"));
                user.setPhone(resultSet.getString("phone"));
                user.setFirstName(resultSet.getString("first_name"));
                user.setLastName(resultSet.getString("last_name"));
                user.setGender(resultSet.getString("gender"));
                user.setRole(resultSet.getString("role"));
                user.setDateOfBirth(resultSet.getDate("date_of_birth"));
                user.setCountry(resultSet.getString("country"));
                user.setCity(resultSet.getString("city"));
                user.setStreetAddress(resultSet.getString("street_address"));
                user.setZipCode(resultSet.getString("zip_code"));
                user.setLastLoginTime(resultSet.getTimestamp("last_login_time"));
                user.setCreationTime(resultSet.getTimestamp("creation_time"));
                user.setModificationTime(resultSet.getTimestamp("modification_time"));
                user.setStatus(resultSet.getString("status"));
                user.setAvatar(resultSet.getString("avatar"));
                user.setTimezone(resultSet.getString("timezone"));
                user.setLanguage(resultSet.getString("language"));
                user.setOccupation(resultSet.getString("occupation"));
                user.setCompany(resultSet.getString("company"));
                user.setInterests(resultSet.getString("interests"));
                user.setEducation(resultSet.getString("education"));
                user.setBiography(resultSet.getString("biography"));
                user.setAuthenticationToken(resultSet.getString("authentication_token"));
                user.setSocialMediaLinks(resultSet.getString("social_media_links"));
            }
        } catch (SQLException e) {
            // 处理错误
            e.printStackTrace();
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return user;
    }

    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;
        try {
            connection = PostgreCon.getConnection();
            String sql = "SELECT * FROM public.user";
            statement = connection.prepareStatement(sql);
            resultSet = statement.executeQuery();
            while (resultSet.next()) {
                User user = new User();
                user.setUserId(resultSet.getInt("userid"));
                user.setUsername(resultSet.getString("username"));
                user.setPassword(resultSet.getString("password"));
                user.setEmail(resultSet.getString("email"));
                user.setPhone(resultSet.getString("phone"));
                user.setFirstName(resultSet.getString("firstname"));
                user.setLastName(resultSet.getString("lastname"));
                user.setGender(resultSet.getString("gender"));
                user.setRole(resultSet.getString("role"));
                user.setDateOfBirth(resultSet.getDate("dateofbirth"));
                user.setCountry(resultSet.getString("country"));
                user.setCity(resultSet.getString("city"));
                user.setStreetAddress(resultSet.getString("streetaddress"));
                user.setZipCode(resultSet.getString("zipcode"));
                user.setLastLoginTime(resultSet.getTimestamp("lastlogintime"));
                user.setCreationTime(resultSet.getTimestamp("creationtime"));
                user.setModificationTime(resultSet.getTimestamp("modificationtime"));
                user.setStatus(resultSet.getString("status"));
                user.setAvatar(resultSet.getString("avatar"));
                user.setTimezone(resultSet.getString("timezone"));
                user.setLanguage(resultSet.getString("language"));
                user.setOccupation(resultSet.getString("occupation"));
                user.setCompany(resultSet.getString("company"));
                user.setInterests(resultSet.getString("interests"));
                user.setEducation(resultSet.getString("education"));
                user.setBiography(resultSet.getString("biography"));
                user.setAuthenticationToken(resultSet.getString("authenticationtoken"));
                user.setSocialMediaLinks(resultSet.getString("socialmedialinks"));
                users.add(user);
            }
        } catch (SQLException e) {
            // 处理错误
            e.printStackTrace();
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return users;
    }

    @Override
    public void save(User user) {
        Connection connection = null;
        PreparedStatement statement = null;

        try {
            connection = PostgreCon.getConnection();


            String sql = "INSERT INTO public.user(username, password, email, phone, firstname, lastname, gender, role, dateofbirth, country, city, streetaddress, zipcode, lastlogintime, creationtime, modificationtime, status, avatar, timezone, language, occupation, company, interests, education, biography, authenticationtoken, socialmedialinks)" +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            statement = connection.prepareStatement(sql);

            statement.setString(1, user.getUsername());
            statement.setString(2, user.getPassword());
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getPhone());
            statement.setString(5, user.getFirstName());
            statement.setString(6, user.getLastName());
            statement.setString(7, user.getGender());
            statement.setString(8, user.getRole());
            if (user.getDateOfBirth() != null) {
                statement.setDate(9, new java.sql.Date(user.getDateOfBirth().getTime()));
            } else {
                // 如果生日没传 设Type 为 DATE 的 NULL 值
                statement.setNull(9, Types.DATE);
            }
            statement.setString(10, user.getCountry());
            statement.setString(11, user.getCity());
            statement.setString(12, user.getStreetAddress());
            statement.setString(13, user.getZipCode());
            statement.setTimestamp(14, new Timestamp(user.getLastLoginTime().getTime()));
            statement.setTimestamp(15, new Timestamp(user.getCreationTime().getTime()));
            statement.setTimestamp(16, new Timestamp(user.getModificationTime().getTime()));
            statement.setString(17, user.getStatus());
            statement.setString(18, user.getAvatar());
            statement.setString(19, user.getTimezone());
            statement.setString(20, user.getLanguage());
            statement.setString(21, user.getOccupation());
            statement.setString(22, user.getCompany());
            statement.setString(23, user.getInterests());
            statement.setString(24, user.getEducation());
            statement.setString(25, user.getBiography());
            statement.setString(26, user.getAuthenticationToken());
            statement.setObject(27, user.getSocialMediaLinks());

            statement.executeUpdate();
        } catch (SQLException e) {
            // 处理异常
            e.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void update(User user) {
        Connection connection = null;
        PreparedStatement statement = null;
        try {
            connection = PostgreCon.getConnection();
            String sql = "UPDATE user SET username=?, password=?, email=?, phone=?, first_name=?, last_name=?, "
                    + "gender=?, role=?, date_of_birth=?, country=?, city=?, street_address=?, zip_code=?, "
                    + "last_login_time=?, creation_time=?, modification_time=?, status=?, avatar=?, timezone=?, "
                    + "language=?, occupation=?, company=?, interests=?, education=?, biography=?, "
                    + "authentication_token=?, social_media_links=? WHERE user_id=?";
            statement = connection.prepareStatement(sql);
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getPassword());
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getPhone());
            statement.setString(5, user.getFirstName());
            statement.setString(6, user.getLastName());
            statement.setString(7, user.getGender());
            statement.setString(8, user.getRole());
            statement.setDate(9, new java.sql.Date(user.getDateOfBirth().getTime()));
            statement.setString(10, user.getCountry());
            statement.setString(11, user.getCity());
            statement.setString(12, user.getStreetAddress());
            statement.setString(13, user.getZipCode());
            statement.setTimestamp(14, new java.sql.Timestamp(user.getLastLoginTime().getTime()));
            statement.setTimestamp(15, new java.sql.Timestamp(user.getCreationTime().getTime()));
            statement.setTimestamp(16, new java.sql.Timestamp(user.getModificationTime().getTime()));
            statement.setString(17, user.getStatus());
            statement.setString(18, user.getAvatar());
            statement.setString(19, user.getTimezone());
            statement.setString(20, user.getLanguage());
            statement.setString(21, user.getOccupation());
            statement.setString(22, user.getCompany());
            statement.setString(23, user.getInterests());
            statement.setString(24, user.getEducation());
            statement.setString(25, user.getBiography());
            statement.setString(26, user.getAuthenticationToken());
            statement.setString(27, user.getSocialMediaLinks());
            statement.setInt(28, user.getUserId());
            statement.executeUpdate();
        } catch (SQLException e) {
            // 处理错误
            e.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }


    @Override
    public void deleteById(int id) {
        Connection connection = null;
        PreparedStatement statement = null;
        try {
            connection = PostgreCon.getConnection();
            String sql = "DELETE FROM user WHERE user_id=?";
            statement = connection.prepareStatement(sql);
            statement.setInt(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            // 处理错误
            e.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        User user = new User();
//        user.setUserId(1);
        user.setUsername("testuser2");
        user.setPassword("testpassword");
        user.setEmail("testuser@example.com");
        user.setPhone("1234567890");
        user.setFirstName("Test");
        user.setLastName("User");
        user.setGender("male");
        user.setRole("user");
        user.setDateOfBirth(new java.util.Date());
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
        UserDAOImpl userDaoImpl = new UserDAOImpl();
        userDaoImpl.save(user);
    }
}
