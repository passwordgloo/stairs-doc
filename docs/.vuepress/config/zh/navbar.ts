export const navbar = [
  { text: '首页', link: '/', icon: 'Home' },
  {
    text: '教育',
    icon: 'Compass',
    children: [
      { text: '教育学原理', link: '/blogs/education/principle1' },
      { text: '中国教育史', link: '/blogs/education/china1' },
      { text: '外国教育史', link: '/blogs/education/foreign1' },
      { text: '发展心理学', link: '/blogs/education/psychology1' },
    ]
  },
  {
    text: '政治',
    icon: 'SubVolume',
    children: [
      { text: '马克思主义原理', link: '/blogs/politics/principle1' },
      { text: '毛中特', link: '/blogs/politics/mzdzt1' },
      { text: '政治经济学', link: '/blogs/politics/economic1' },
      { text: '道德法治', link: '/blogs/politics/law1' },
      { text: '中国近代史', link: '/blogs/politics/history1' },
      { text: '中共党史', link: '/blogs/politics/partyhistory1' },
    ]
  },
  {
    text: '公仆',
    icon: 'Document',
    children: [
      // { text: '法律基础', link: '/docs/law' },
      { text: '常识', link: '/docs/affair/common1' },
      { text: '行测', link: '/docs/affair/ability1' },
      { text: '时政', link: '/docs/affair/current1' },
      { text: '申论', link: '/docs/affair/paper1' },
    ],
  },
  {
    text: '社工',
    icon: 'Chat',
    children: [
      { text: '招聘', link: '/docs/social/job1' },
      { text: '综合能力', link: '/docs/social/comprehensive1' },
      { text: '实务', link: '/docs/social/work1' },
    ],
  },
]
