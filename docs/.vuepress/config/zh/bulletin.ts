export const bulletin = {
  body: [
    {
      type: 'text',
      content: `
     pdf文档只有本地文件，以后再补在线链接`,
      style: 'font-size: 18px; color: #5D67E8;'
    },
    {
      type: 'title',
      content: 'QQ:1943888301',
    },
    {
      type: 'image',
      src: '/contact.webp',
    },
    {
      type: 'hr',
    },
    {
      type: 'buttongroup',
      children: [
        {
          text: '关于',
          link: '/blogs/about.html'
        }
      ]
    }
  ],
}
