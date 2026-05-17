# Recovery 刷入指南

## 什么是 Recovery？

Recovery 是 Android 的恢复模式，第三方 Recovery（如 TWRP / OrangeFox）提供了比官方更强大的功能：
- 刷入 ROM / Magisk
- 备份和还原系统
- 清除数据 / 格式化分区
- 文件管理

## 刷入 TWRP

1. 在 [TWRP 官网](https://twrp.me/Devices/) 下载对应机型的镜像文件
2. 手机关机，进入 Fastboot 模式
3. 连接电脑，刷入：

```bash
# 临时启动（推荐先测试）
fastboot boot twrp.img

# 永久刷入
fastboot flash recovery twrp.img
```

::: warning 注意
部分机型（如小米）的 Recovery 和 Boot 分区合并，需要刷入 `boot.img` 方式。
务必确认自己机型的 Recovery 分区情况！
:::

## 刷入 OrangeFox

OrangeFox 是基于 TWRP 的增强版，界面更美观，功能更多。

1. 下载 [OrangeFox Recovery](https://orangefox.download/)
2. 同样通过 Fastboot 刷入：

```bash
fastboot flash recovery OrangeFox.img
```

## Recovery 常用操作

### 备份系统

1. 进入 Recovery → Backup
2. 勾选需要备份的分区：Boot、System、Data、Vendor
3. 选择存储位置（建议外置 SD 卡或 OTG U盘）
4. 滑动确认备份

### 恢复系统

1. Recovery → Restore
2. 选择之前的备份包
3. 滑动确认恢复

### 刷入 ROM

1. Recovery → Wipe → 滑动恢复出厂设置
2. Recovery → Install → 选择 ROM 包
3. 滑动确认刷入
4. 重启系统

::: danger 警告
刷机前务必做好完整备份！跨大版本刷机建议格式化 Data 分区。
:::
