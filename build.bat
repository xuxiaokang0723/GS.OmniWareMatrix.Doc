@echo off
chcp 65001
echo 正在构建生产版本...
npm run docs:build
echo.
echo 构建完成！
echo 输出目录：docs\.vitepress\dist
echo.
pause
