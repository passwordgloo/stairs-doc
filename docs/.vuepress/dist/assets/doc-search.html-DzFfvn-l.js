import{_ as s,o as n,c as a,a as e}from"./app-BwIZjAV-.js";const p={},t=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>主题已经内置了简单的搜索能力，如果希望使用 <code>Algolia</code>，可以进行配置。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  algolia<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    appId<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    apiKey<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    indexName<span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    inputSelector<span class="token operator">:</span> <span class="token string">&#39;### REPLACE ME ####&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    algoliaOptions<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;facetFilters&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lang:$LANG&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    debug<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// Set debug to true if you want to inspect the dropdown</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function o(c,i){return n(),a("div",null,l)}const u=s(p,[["render",o],["__file","doc-search.html.vue"]]),d=JSON.parse('{"path":"/docs/theme/doc-search.html","title":"搜索功能","lang":"zh-CN","frontmatter":{"title":"搜索功能","date":"2023-02-24T00:00:00.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/theme/doc-search.md"}');export{u as comp,d as data};
