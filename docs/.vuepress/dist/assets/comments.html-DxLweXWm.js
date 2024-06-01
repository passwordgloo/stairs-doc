import{_ as t,r as l,o,c as i,b as s,d as n,e as p,a}from"./app-BwIZjAV-.js";const c={},r=a(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>主题内置评论插件 <code>@vuepress-reco/vuepress-plugin-comments</code>，目前支持 <code>Valine、Waline、Giscus</code>；</p><p>如果你想默认不加载评论，而只在某些页面显示评论功能，可以在 <code>commentConfig.options</code> 中设置 <code>hideComments: true</code>，并在需要展示评论的页面设置 <code>hideComments: false</code>。</p><p>如果仅是某篇文章不想设置开启评论功能，可以在 <code>front-matter</code> 设置 <code>hideComments: true</code>。</p><h2 id="option-api" tabindex="-1"><a class="header-anchor" href="#option-api"><span>Option API</span></a></h2><h3 id="valine" tabindex="-1"><a class="header-anchor" href="#valine"><span>Valine</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    commentConfig<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">&#39;valine&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      options<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        appId<span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token comment">// your appId</span></span>
<span class="line">        appKey<span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token comment">// your appKey</span></span>
<span class="line">        hideComments<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 全局隐藏评论，默认 false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u={href:"https://valine.js.org/configuration.html",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>如果 valine 的获取评论的接口报 <code>404</code> 错误的话，不用担心，这是因为你还没有添加评论，只要存在 1 条评论，就不会报错了，这是 <code>leanCloud</code> 的请求处理操作而已；</p></div><h3 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    commentConfig<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      options<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        serverURL<span class="token operator">:</span> <span class="token string">&#39;your serverURL&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token operator">...</span></span>
<span class="line">        hideComments<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 全局隐藏评论，默认 false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<h3 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus"><span>Giscus</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    commentConfig<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">&#39;giscus&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      options<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        repo<span class="token operator">:</span> <span class="token string">&#39;reco/blog-comments&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        repoId<span class="token operator">:</span> <span class="token string">&#39;R_kgDOxxxxxx&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        category<span class="token operator">:</span> <span class="token string">&#39;Announcements&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        categoryId<span class="token operator">:</span> <span class="token string">&#39;xxxxx&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        mapping<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token operator">...</span></span>
<span class="line">        hideComments<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 全局隐藏评论，默认 false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"https://giscus.app",target:"_blank",rel:"noopener noreferrer"},h=a('<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>Giscus 会在页面内放置指向 giscus.app 的 iframe，而该组件需要加载网站中的 css 文件才能使用配置文件中的主题，这会造成跨域问题。在使用开发服务器问题时，该问题无需处理；在正式部署时，需要配置 <code>Access-Control-Allow-Origin</code> 和 <code>Access-Control-Allow-Headers</code> 请求头，否则评论样式会出现问题。</p></div>',1);function g(b,f){const e=l("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("其他参数参考 "),s("a",u,[n("Valine 官网"),p(e)]),n("。")]),d,s("p",null,[n("使用教程及 options 其它参数参考 "),s("a",k,[n("Waline 官网"),p(e)]),n("。")]),m,s("p",null,[n("使用教程及 options 其它参数参考"),s("a",v,[n("Giscus"),p(e)]),n("。")]),h])}const x=t(c,[["render",g],["__file","comments.html.vue"]]),y=JSON.parse('{"path":"/docs/theme/comments.html","title":"评论","lang":"zh-CN","frontmatter":{"title":"评论","date":"2021-11-06T23:41:31.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"Option API","slug":"option-api","link":"#option-api","children":[{"level":3,"title":"Valine","slug":"valine","link":"#valine","children":[]},{"level":3,"title":"Waline","slug":"waline","link":"#waline","children":[]},{"level":3,"title":"Giscus","slug":"giscus","link":"#giscus","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/theme/comments.md"}');export{x as comp,y as data};
