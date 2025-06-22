package com.wei.accounting.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*") // ✅ 明确允许 http://localhost:4200
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true); // ✅ 如果带 cookie 必须为 true
    }
}

