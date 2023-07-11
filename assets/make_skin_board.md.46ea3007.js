import{_ as s,o as a,c as n,U as p}from"./chunks/framework.906c2817.js";const d=JSON.parse('{"title":"게시판 스킨","description":"","frontmatter":{},"headers":[],"relativePath":"make/skin/board.md","filePath":"make/skin/board.md","lastUpdated":1689099667000}'),l={name:"make/skin/board.md"},o=p(`<h1 id="게시판-스킨" tabindex="-1">게시판 스킨 <a class="header-anchor" href="#게시판-스킨" aria-label="Permalink to &quot;게시판 스킨&quot;">​</a></h1><table><thead><tr><th>파일명</th><th></th></tr></thead><tbody><tr><td>list.skin.php</td><td>목록</td></tr><tr><td>view.skin.php</td><td>글 보기</td></tr><tr><td>view_comment.skin.php</td><td>댓글</td></tr><tr><td>write.skin.php</td><td>글 쓰기</td></tr></tbody></table><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">board</span></span>
<span class="line"><span style="color:#A6ACCD;">└── basic</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── img</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── list.skin.php</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── style.css</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── view.skin.php</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── view_comment.skin.php</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── write.skin.php</span></span></code></pre></div><h2 id="목록" tabindex="-1">목록 <a class="header-anchor" href="#목록" aria-label="Permalink to &quot;목록&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">board</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">total_count</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">admin_href</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">rss_href</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">write_href</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">is_checkbox</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">is_good</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">is_nogood</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">is_category</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">category_option</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sfl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">stx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">spt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sca</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sst</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sod</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">page</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">is_admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">is_auth</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">qstr2</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,5),e=[o];function t(c,r,D,i,F,y){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
