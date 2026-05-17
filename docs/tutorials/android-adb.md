# ADB 常用命令

## 什么是 ADB？

ADB（Android Debug Bridge）是 Android 调试桥，通过 USB 或 Wi-Fi 与设备通信。

## 环境搭建

### Windows

1. 下载 [Platform Tools](https://developer.android.com/tools/releases/platform-tools)
2. 解压到任意目录
3. 将目录添加到系统环境变量 PATH 中

### macOS / Linux

```bash
# macOS
brew install android-platform-tools

# Ubuntu/Debian
sudo apt install adb fastboot
```

## 基础命令

```bash
# 查看已连接设备
adb devices

# 进入 shell
adb shell

# 安装应用
adb install app.apk

# 卸载应用
adb uninstall com.example.app

# 推送文件到手机
adb push local_file /sdcard/

# 从手机拉取文件
adb pull /sdcard/file ./
```

## 进阶命令

```bash
# 重启到不同模式
adb reboot          # 正常重启
adb reboot bootloader  # 重启到 Bootloader
adb reboot recovery    # 重启到 Recovery

# 屏幕截图/录屏
adb shell screencap /sdcard/screen.png
adb shell screenrecord /sdcard/video.mp4

# 禁用/启用应用
adb shell pm disable-user com.example.app
adb shell pm enable com.example.app

# 查看已安装应用列表
adb shell pm list packages

# 查看当前 Activity
adb shell dumpsys window | grep mCurrentFocus
```

## 无线调试（Android 11+）

1. 开启开发者选项中的「无线调试」
2. 点击「使用配对码配对设备」
3. 在电脑上执行：

```bash
adb pair <IP>:<配对端口> <配对码>
adb connect <IP>:<连接端口>
```

::: tip 提示
ADB 功能强大，但请谨慎使用。不建议执行网上来源不明的 ADB 命令。
:::
