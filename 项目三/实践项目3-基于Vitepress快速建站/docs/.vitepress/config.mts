import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的个人网站',
  description: '使用 VitePress 搭建的个人网站',
  lang: 'zh-CN',


  base: '/web-homework/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '博客', link: '/blog/' },
      { text: '文档', link: '/docs/' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: '博客',
          items: [
            { text: '博客首页', link: '/blog/' },
            { text: '我的第一篇博客', link: '/blog/first-post' }
          ]
        }
      ],
      '/docs/': [
        {
          text: '文档',
          items: [
            { text: '文档首页', link: '/docs/' },
            { text: '快速开始', link: '/docs/guide/getting-started' },
            { text: '配置说明', link: '/docs/guide/configuration' }
          ]
        }
      ]
    },

    footer: {
      message: '实践项目3：基于 VitePress 快速建站',
      copyright: 'Copyright © 2025 张敬熠'
    }
  }
})
