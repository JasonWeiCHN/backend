package com.wei.product.exception;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleUniqueConstraintViolation(DataIntegrityViolationException ex) {
        if (ex.getCause() != null && ex.getCause().getMessage() != null &&
                ex.getCause().getMessage().contains("product_code")) {
            return ResponseEntity.badRequest().body("商品编号已存在，请使用唯一的编号");
        }

        return ResponseEntity.status(500).body("数据完整性错误：" + ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneric(Exception ex) {
        return ResponseEntity.status(500).body("服务器错误：" + ex.getMessage());
    }
}
