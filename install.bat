@echo off
chcp 65001
echo 正在安装依赖...
npm install
echo.
echo 安装完成！
echo.
echo 使用以下命令启动开发服务器：
echo npm run docs:dev
echo.
pause
