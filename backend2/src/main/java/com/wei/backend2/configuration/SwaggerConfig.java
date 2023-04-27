package com.wei.backend2.configuration;

import io.swagger.annotations.ApiOperation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
@EnableWebMvc
public class SwaggerConfig {
    @Bean
    public Docket createRestApi() {
        Docket docket =  new Docket(DocumentationType.OAS_30)
                .apiInfo(apiInfo())
                // ture 启用Swagger3.0， false 禁用（生产环境要禁用）
                .enable(true)
                .groupName("test")
                .select()
                // 扫描的路径使用@Api的controller
                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
//                .apis(RequestHandlerSelectors.basePackage("com.wei.backend2.controller"))
                // 指定路径处理PathSelectors.any()代表所有的路径
                .paths(PathSelectors.any())
                .build();
        return docket;

    }

    /**
     * API 页面上半部分展示信息
     */
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Swagger 接口文档")
                .description("backend2")
                .contact(new Contact("backend2", "https://localhost:8080", "hello@163.com"))
                .version("1.0")
                .description("接口文档描述")
                .build();
    }
}
