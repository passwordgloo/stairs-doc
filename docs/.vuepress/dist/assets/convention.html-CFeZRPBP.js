import{_ as e,o as s,c as a,a as c}from"./app-BwIZjAV-.js";const n={},l=c(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>大家都知道，<code>reco</code> 主题是在官方默认主题的基础上开发的，而默认主题本身是为文档量身定做的，并且早期没有一个功能齐全的博客主题，<code>reco</code> 主题就是在这样一个环境下迅速推出的，来丰富博客该有的功能元素和模块，但是文章的详情页并没有做过太多的调整，如果你在用 <code>reco</code> 主题来搭建文档，那还 OK，如果是来搭建博客，那文章详情页就会显得有些不搭。</p><h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h2><p>而这个不太搭的元素就是默认的侧边栏。由于单篇文章的侧边栏同自定义侧边栏（文档整合）太相似，单篇文章的展示看起来也很像是文档。所以我在考虑怎么在侧边栏上做出调整，来区分博客和文档？</p><h2 id="动作" tabindex="-1"><a class="header-anchor" href="#动作"><span>动作</span></a></h2><p>基于前面的背景和目标，我将自己的想法在 <code>1.5.3</code> 版本中做了一次尝试：</p><ul><li>将原来的侧边栏中的文章的各级标题，抽离出来，生成副侧边栏，展示在文章内容的右侧。</li><li>当显示自定义的侧边栏时，主侧边栏只展示文章题目，不再展示各级标题，各级标题将由副侧边栏去负责。</li><li>如果是普通文章，只展示副侧边栏，不会再去展示左侧的主侧边栏。</li></ul><h2 id="约定" tabindex="-1"><a class="header-anchor" href="#约定"><span>约定</span></a></h2><p>上面的动作似乎已经达到了预期，在内容展示上也不再略显空旷。但是我还是想和大家聊一下 <code>reco</code> 主题是怎么处理 markdown 数据的，进而约定一下如何处理文档的存放位置和 <code>front-matter</code>，来让主题更好地为你服务。</p><p><code>reco</code> 主题首先会获取设置了 <code>categories</code> 文章数据，再过滤掉没有设置 <code>title</code>、<code>publush === false</code> 和 <code>home: true</code> 的文章，这样就形成了博客的数据，将其定义为 <code>$recoPosts</code>。</p><p>而时间轴的数据，就是在 <code>$recoPosts</code> 的基础上过滤掉没有设置 <code>date</code> 的文章，再按照时间做一些排序整合。</p><p>所以你会发现，<code>front-matter</code> 的一些设置仅对博客有效，对于自定义侧边栏其实是没有作用的。其实 <code>reco</code> 主题是这样来思考的文档和博客的区别的：</p><ul><li>博文是一篇篇独立的文章，它需要 <code>author</code>、<code>date</code>、<code>categories</code>、<code>tags</code> 等这些元素，所以如果你希望它正常显示，一定要设置 <code>title</code>、<code>categories</code>。</li><li>文档是通过侧边栏将其约束在一起才有意义的一类文章，所以侧边栏的数据，不会去过滤它的 <code>date</code>、<code>categories</code>、<code>publush</code> 的。</li></ul><p>如果你希望和主题官网一样既有文档和又有博客，可以这样来存放你的文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">├── .vuepress -------- vuepress 配置文件夹</span>
<span class="line">├── docs ------------- 存放文档的位置</span>
<span class="line">│   ├── vue ------------ vue 相关文档</span>
<span class="line">│   ├── react ---------- react 相关文档</span>
<span class="line">│   └── webpack -------- webpack 相关文档</span>
<span class="line">├── blogs ------------ 存放博客的位置</span>
<span class="line">│   ├── html ----------- 分类 html</span>
<span class="line">│   ├── css ------------ 分类 css</span>
<span class="line">│   └── js ------------- 分类 js</span>
<span class="line">├── README.md -------- 首页</span>
<span class="line">└── package.json ----- package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[l];function o(i,t){return s(),a("div",null,d)}const p=e(n,[["render",o],["__file","convention.html.vue"]]),h=JSON.parse('{"path":"/blogs/convention.html","title":"reco 主题和你的小小约定","lang":"zh-CN","frontmatter":{"title":"reco 主题和你的小小约定","date":"2020-07-11T00:00:00.000Z","categories":["blog"]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"动作","slug":"动作","link":"#动作","children":[]},{"level":2,"title":"约定","slug":"约定","link":"#约定","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/convention.md"}');export{p as comp,h as data};
