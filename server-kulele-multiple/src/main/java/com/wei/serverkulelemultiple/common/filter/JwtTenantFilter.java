package com.wei.serverkulelemultiple.common.filter;

import com.wei.serverkulelemultiple.common.context.TenantContext;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.Key;

@Component
public class JwtTenantFilter extends OncePerRequestFilter {

    private static final String SECRET = "myS3cr3tKeyForJWT_TokenAuthSystem2025!";
    private static final Key KEY = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String jwt = authHeader.substring(7);
            String tenantId = extractTenantIdFromJwt(jwt);

            if (tenantId != null) {
                TenantContext.setCurrentTenant(tenantId);
            }
        }

        try {
            filterChain.doFilter(request, response);
        } finally {
            TenantContext.clear();
        }
    }

    private String extractTenantIdFromJwt(String jwt) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(KEY)
                    .build()
                    .parseClaimsJws(jwt)
                    .getBody();

            return claims.get("tenantId", String.class);
        } catch (Exception e) {
            System.out.println("JWT 解析失败: " + e.getMessage()); // ✅ 如果你没用日志框架，临时用打印
            return null;
        }
    }
}
