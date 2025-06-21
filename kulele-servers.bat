@echo off
echo 启动 server-accounting...
start cmd /k "cd /d F:\backend\server-accounting && mvnw spring-boot:run"

echo 启动 server-appointment...
start cmd /k "cd /d F:\backend\server-appointment && mvnw spring-boot:run"

echo 启动 server-expense...
start cmd /k "cd /d F:\backend\server-expense && mvnw spring-boot:run"

echo 启动 server-games...
start cmd /k "cd /d F:\backend\server-games && mvnw spring-boot:run"

echo 所有服务已尝试启动，查看各窗口日志以确认。
pause
