export const bulletin = {
  body: [
    // {
    //   type: 'text',
    //   content: `
    //   <ul>
    //     <li>vuepress：2.0.0-rc.12</li>
    //     <li>reco 主题：2.0.0-rc.14</li>
    //   </ul>`,
    //   style: 'font-size: 12px; color: #5D67E8;'
    // },
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
