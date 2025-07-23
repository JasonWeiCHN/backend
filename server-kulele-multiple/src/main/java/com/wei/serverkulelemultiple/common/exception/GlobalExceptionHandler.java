package com.wei.serverkulelemultiple.common.exception;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleUniqueConstraintViolation(DataIntegrityViolationException ex) {
        String message = ex.getCause() != null ? ex.getCause().getMessage() : "";

        // 根据约束名判断唯一性冲突字段
        if (message.contains("product_code")) {
            return ResponseEntity.badRequest().body("商品编号已存在，请使用唯一的编号");
        } else if (message.contains("game_id") || message.contains("uq_game_id")) {
            return ResponseEntity.badRequest().body("该游戏已添加，不能重复添加！");
        }

        return ResponseEntity.status(500).body("数据完整性错误：" + ex.getMessage());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneric(Exception ex) {
        return ResponseEntity.status(500).body("服务器错误：" + ex.getMessage());
    }
}
