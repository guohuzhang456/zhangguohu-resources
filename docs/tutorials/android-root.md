# Android Root 教程

## 什么是 Root？

Root 是获取 Android 系统最高权限的过程。获取 Root 后，你可以：
- 卸载预装应用
- 安装 Magisk 模块
- 修改系统文件
- 使用 Xposed/LSPosed 框架

## 前置条件

1. **解锁 Bootloader**（不同品牌方法不同）
2. **备份数据**（解锁会清除所有数据）
3. **下载对应机型的 ROM 包**

## 步骤一：解锁 Bootloader

::: warning 注意
解锁 Bootloader 会清除手机所有数据，请务必先备份！
:::

1. 进入「设置 → 关于手机」，连续点击「版本号」7 次，开启开发者模式
2. 进入「设置 → 开发者选项」，开启「OEM 解锁」和「USB 调试」
3. 手机关机，按住 **音量下 + 电源键** 进入 Fastboot 模式
4. 连接电脑，执行解锁命令：

```bash
fastboot oem unlock
# 或
fastboot flashing unlock
```

## 步骤二：刷入 Magisk

1. 下载 [Magisk APK](https://github.com/topjohnwu/Magisk/releases)
2. 从官方固件中提取 `boot.img`
3. 在手机上用 Magisk 修补 `boot.img`
4. 将修补后的文件传到电脑，进入 Fastboot 模式：

```bash
fastboot flash boot magisk_patched.img
fastboot reboot
```

## 步骤三：验证 Root

重启后打开 Magisk 应用，如果显示「已安装」即为成功。

::: tip 提示
建议在 Magisk 设置中开启 Zygisk，以使用更多模块。
:::

## 常见问题

**Q: 解锁后还能收到 OTA 更新吗？**
A: 可以，但更新后 Root 会丢失，需要用同样的方法重新刷入修补后的 boot.img。

**Q: 刷入后卡在第一屏怎么办？**
A: 长按电源键强制重启。如果仍然无法开机，进入 Fastboot 模式刷回官方 boot.img。
