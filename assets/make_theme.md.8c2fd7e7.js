import{_ as s,o as a,c as n,U as p}from"./chunks/framework.906c2817.js";const D=JSON.parse('{"title":"테마의 기본 구조","description":"","frontmatter":{},"headers":[],"relativePath":"make/theme.md","filePath":"make/theme.md","lastUpdated":1689099667000}'),l={name:"make/theme.md"},e=p(`<h1 id="테마의-기본-구조" tabindex="-1">테마의 기본 구조 <a class="header-anchor" href="#테마의-기본-구조" aria-label="Permalink to &quot;테마의 기본 구조&quot;">​</a></h1><p>TBD</p><p>테마는 그누보드의 코드를 수정하지 않고 사이트 레이아웃과 게시판 등의 스킨을 변경하기위해 사용된다.</p><p><code>theme</code> 폴더에 <code>basic</code> 테마를 포함하고 있으며, 그누보드를 설치할 때 <code>basic</code> 테마가 기본으로 적용된다.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>테마 기능은 그누보드 5.1 버전에서 추가되었다. 그 이전까지는 그누보드의 코드를 수정해서 사이트 디자인을 바꿀 수 있었고 이런 방식은 그누보드의 업데이트를 어렵게하는 가장 큰 문제였다.</p><p>마찬가지로 <code>/theme/basic</code> 테마의 파일을 수정한다면 역시 같은 문제를 겪게되므로 <code>basic</code> 폴더를 복제하여 사용하는 것을 권장한다.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>버퍼는 <code>tail.sub.php</code> 파일에서 <code>html_end()</code> 함수를 호출하여 출력되므로 <code>tail.sub.php</code> 파일을 수정하거나 테마를 만들 때 잊으면 안 된다.</p></div><h2 id="테마-폴더" tabindex="-1">테마 폴더 <a class="header-anchor" href="#테마-폴더" aria-label="Permalink to &quot;테마 폴더&quot;">​</a></h2><p><code>theme</code> 폴더에는 <code>basic</code> 테마를 포함하고 있다.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">└── theme // 테마 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── basic // 내장된 기본 테마</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── css</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── img</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── js</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── mobile</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── shop</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   └── skin</span></span>
<span class="line"><span style="color:#A6ACCD;">        │       └── ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── shop</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── skin</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── board</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   │   └── basic</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── connect</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── content</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── faq</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── latest</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── member</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── new</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── outlogin</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── poll</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── popular</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── qa</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── search</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   ├── shop</span></span>
<span class="line"><span style="color:#A6ACCD;">        │   └── visit</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── _common.php</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── head.php</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── head.sub.php</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── index.php</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── readme.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── screenshot.png</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── tail.php</span></span>
<span class="line"><span style="color:#A6ACCD;">        ├── tail.sub.php</span></span>
<span class="line"><span style="color:#A6ACCD;">        └── theme.config.php</span></span></code></pre></div>`,9),o=[e];function c(t,i,C,A,r,d){return a(),n("div",null,o)}const y=s(l,[["render",c]]);export{D as __pageData,y as default};
