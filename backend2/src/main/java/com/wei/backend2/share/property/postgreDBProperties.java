package com.wei.backend2.share.property;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
public class postgreDBProperties {
    @Value("${aa}")
    private String url;
}
