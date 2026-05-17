# 刷机常见问题 FAQ

## 刷机相关

### Q: 刷机后卡在开机动画（Bootloop）怎么办？

1. 强制关机：长按电源键 10-15 秒
2. 进入 Recovery 模式
3. 清除 Cache/Dalvik Cache
4. 如果仍然无法开机，恢复之前的备份或重刷 ROM

### Q: 手机变砖还能救吗？

**软砖**（能进 Fastboot/Recovery）：
- 通过 Fastboot 刷入官方固件
- 或在 Recovery 中恢复备份

**硬砖**（完全无法开机）：
- 可能需要售后或专业维修
- **建议操作前充分了解风险**

### Q: 刷机需要备份哪些数据？

- 联系人、短信、通话记录
- 照片、视频、文档
- 应用数据（微信聊天记录等）
- **完整 Nandroid 备份**（Recovery → Backup）

## Root 相关

### Q: Root 后银行 App 打不开怎么办？

1. 在 Magisk 设置中开启 **Zygisk**
2. 安装 **Shamiko** 模块隐藏 Root
3. 在 Magisk 的「配置排除列表」中添加银行应用
4. 安装 **Play Integrity Fix** 模块

### Q: Root 后还能 OTA 升级吗？

**A/B 分区设备**：
1. Magisk → 卸载 → 还原原厂镜像
2. 下载并安装 OTA（不要重启）
3. Magisk → 安装到非活动槽位
4. 重启

**A-only 设备**：
1. 下载完整 ROM 包
2. 提取 boot.img 重新用 Magisk 修补
3. 刷入修补后的 boot.img

## 越狱相关

### Q: 越狱后如何隐藏越狱状态？

- 安装 **Choicy** 插件，针对特定 App 禁用插件注入
- 使用 **HideJB** 等屏蔽检测插件
- 部分国内银行 App 需要额外方案

### Q: 不小心升级了系统，还能越狱吗？

大概率不能。越狱漏洞通常很快被 Apple 修补。建议：
- 关闭自动更新
- 安装 **OTADisabler** 等描述文件阻止升级
- 如果已经升级，只能等待新的越狱工具发布

## 通用

### Q: 哪里可以找到可靠的 ROM/资源？

- **XDA Developers**：最大的 Android 开发社区
- **酷安**：中文搞机社区
- **GitHub**：Magisk/LSPosed 模块
- **reddit/r/jailbreak**：iOS 越狱讨论

::: tip 提示
下载 ROM 和工具时请核对文件 MD5/SHA 校验值，确保文件完整未被篡改。
:::
