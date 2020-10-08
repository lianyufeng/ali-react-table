const path = require('path')

module.exports = {
  title: 'ali-react-table',
  tagline: '现代化的高性能 React 表格组件',
  url: 'https://ali-react-table.js.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alibaba', // Usually your GitHub org/user name.
  projectName: 'ali-react-table', // Usually your repo name.

  themeConfig: {
    navbar: {
      title: 'ali-react-table',
      logo: {
        alt: 'ali-react-table Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        { to: 'blog', label: '博客', position: 'left' },
        {
          href: process.env.NODE_ENV !== 'production' ? 'http://localhost:2333/' : '/storybook',
          label: '示例',
          position: 'left',
        },
        {
          href: 'https://github.com/alibaba/ali-react-table',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { /* todo*/ label: 'Style Guide', to: 'docs/' },
            { label: 'Second Doc', to: 'docs/doc2/' },
            { label: '更新日志', to: 'docs/changelog' },
          ],
        },
        {
          title: '帮助',
          items: [
            { label: 'Github Issues', href: 'https://github.com/alibaba/ali-react-table/issues' },
            { label: '钉钉', href: 'dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=feichao93' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'Blog', to: 'blog' },
            { label: 'docusaurus', href: 'https://github.com/facebook/docusaurus' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alibaba Inc. Built with ❤️ by feichao.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/alibaba/ali-react-table/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/alibaba/ali-react-table/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [path.resolve(__dirname, 'tspaths-docusaurus-plugin.js')],
}