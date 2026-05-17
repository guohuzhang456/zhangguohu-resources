# IPA 自签与 Sideload

## 什么是 Sideload？

Sideload（侧载）是指不通过 App Store，直接从 IPA 文件安装应用到 iOS 设备。

## 三种方案对比

| 方案 | 有效期 | 限制 | 推荐度 |
|------|--------|------|--------|
| **TrollStore** | 永久 | 仅限特定 iOS 版本 | ⭐⭐⭐⭐⭐ |
| **AltStore** | 7 天（免费）/ 1 年（付费） | 需连接电脑续签 | ⭐⭐⭐⭐ |
| **Sideloadly** | 7 天 | 需连接电脑续签 | ⭐⭐⭐ |

## AltStore 教程

### 安装 AltStore

1. 下载 [AltServer](https://altstore.io/)（Windows/macOS）
2. 安装 iCloud（Windows 需要）
3. 连接 iPhone，打开 AltServer
4. 菜单栏点击 AltServer → Install AltStore → 选择你的设备
5. 输入 Apple ID 和密码
6. 手机上信任企业证书：设置 → 通用 → VPN 与设备管理

### 通过 AltStore 安装 IPA

1. 下载 `.ipa` 文件到手机
2. 用 AltStore 打开
3. 输入 Apple ID 签名
4. 等待安装完成

### 自动续签

AltStore 在后台会自动续签（需连接同一 Wi-Fi），7 天内无需手动操作。

## Sideloadly 教程

1. 下载 [Sideloadly](https://sideloadly.io/)
2. 连接 iPhone，打开 Sideloadly
3. 拖入 IPA 文件
4. 输入 Apple ID
5. 点击 Start

::: warning 注意
免费 Apple ID 签名的应用 7 天后会失效，需要重新签名。
付费开发者账号（$99/年）签名有效期为 1 年。
:::
