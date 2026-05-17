import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '玩机驿站',
  description: '分享手机玩机经验与实用教程',
  base: '/zhangguohu-resources/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/tutorials/' },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      '/tutorials/': [
        {
          text: '📱 Android 玩机',
          collapsed: false,
          items: [
            { text: 'Root 教程', link: '/tutorials/android-root' },
            { text: 'Magisk 模块推荐', link: '/tutorials/android-magisk' },
            { text: 'ADB 常用命令', link: '/tutorials/android-adb' },
            { text: ' Recovery 刷入指南', link: '/tutorials/android-recovery' },
          ]
        },
        {
          text: '🍎 iOS 技巧',
          collapsed: false,
          items: [
            { text: '越狱入门指南', link: '/tutorials/ios-jailbreak' },
            { text: 'TrollStore 使用教程', link: '/tutorials/ios-trollstore' },
            { text: 'IPA 自签与 sideload', link: '/tutorials/ios-sideload' },
          ]
        },
        {
          text: '🛠 通用工具',
          collapsed: false,
          items: [
            { text: '搞机工具箱推荐', link: '/tutorials/tools' },
            { text: '刷机常见问题 FAQ', link: '/tutorials/faq' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guohuzhang456' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/guohuzhang456/zhangguohu-resources/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 玩机驿站'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  },

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详情'
    }
  }
})
