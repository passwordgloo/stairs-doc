import{_ as s,o as n,c as a,a as e}from"./app-BwIZjAV-.js";const t={},l=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>为了节约用户的时间成本，主题可以自动为 <code>blogs</code> 文件夹下的博客设置分类，也就是将该文件所在文件夹的名称设置为该文件的 <code>frontmatter</code> 的 <code>categories</code> 的值。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">/</span>
<span class="line">└─ .vuepress</span>
<span class="line">└─ blogs</span>
<span class="line">  └─ 分类1</span>
<span class="line">    └─ 博客1.md</span>
<span class="line">  └─ 分类2</span>
<span class="line">    └─ 博客2.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p><code>autoAddCategoryToNavbar</code> API 后期会做调整，但不会废弃，请谨慎使用。</p></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 自动设置分类</span></span>
<span class="line">    autoSetBlogCategories<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 自动将分类和标签添加至头部导航条</span></span>
<span class="line">    autoAddCategoryToNavbar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      location<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 默认 0</span></span>
<span class="line">      categoryText<span class="token operator">:</span> <span class="token string">&#39;分类&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认 categories</span></span>
<span class="line">      tagText<span class="token operator">:</span> <span class="token string">&#39;标签&#39;</span> <span class="token comment">// 默认 tags</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值</span></span>
<span class="line">    autoAddCategoryToNavbar<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[l];function c(i,o){return n(),a("div",null,p)}const d=s(t,[["render",c],["__file","auto-set-category.html.vue"]]),u=JSON.parse('{"path":"/docs/theme/auto-set-category.html","title":"自动设置分类","lang":"zh-CN","frontmatter":{"title":"自动设置分类","date":"2021-12-12T17:58:24.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/theme/auto-set-category.md"}');export{d as comp,u as data};
