export const bulletin = {
  body: [
    {
      type: 'text',
      content: `联系我`,
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
