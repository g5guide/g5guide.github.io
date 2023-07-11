import{_ as s,o as a,c as n,U as l}from"./chunks/framework.906c2817.js";const g=JSON.parse('{"title":"레이아웃","description":"","frontmatter":{},"headers":[],"relativePath":"make/theme/layout.md","filePath":"make/theme/layout.md","lastUpdated":1689099667000}'),p={name:"make/theme/layout.md"},e=l(`<h1 id="레이아웃" tabindex="-1">레이아웃 <a class="header-anchor" href="#레이아웃" aria-label="Permalink to &quot;레이아웃&quot;">​</a></h1><p>레이아웃은 테마의 필수 요소이며 테마는 레이아웃을 위한 기능이다. 레이아웃은 스마트폰 등 소형 디스플레이 가진 기기를 위한 모바일 전용과 그 외의 공용 레이아웃으로 나눠 볼 수 있으며, 모바일 레이아웃은 필수 요소가 아니다.</p><p>공용 레이아웃은 반응형으로 대형 디스플레이부터 소형 디스플레이 기기까지 구성할 수 있으며, 필요에 따라 소형 디스플레이 기기인 모바일 레이아웃을 분리하여 구성할 수 있다.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">theme // 테마가 설치된 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">└── basic // 내장된 \`basic\` 테마의 폴더</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── mobile // 모바일 전용 레이아웃 및 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── _common.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── group.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── head.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── index.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   └── tail.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── _common.php</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── head.php // [필수] 레이아웃 상단부 파일</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── head.sub.php</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── index.php // [필수] index 페이지 파일</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── tail.php // [필수] 레이아웃 하단부 파일</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── tail.sub.php</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       └── theme.config.php // [필수] 테마 설정 파일</span></span></code></pre></div><h2 id="공용-레이아웃" tabindex="-1">공용 레이아웃 <a class="header-anchor" href="#공용-레이아웃" aria-label="Permalink to &quot;공용 레이아웃&quot;">​</a></h2><h3 id="head-tail" tabindex="-1">head, tail <a class="header-anchor" href="#head-tail" aria-label="Permalink to &quot;head, tail&quot;">​</a></h3><p><code>head.php</code>, <code>tail.php</code> 파일은 테마에 포함되어야 할 <strong>필수 파일</strong>이며, 컨텐츠 영역을 감싸는 사이트의 레이아웃 상단부와 하단부의 코드를 담는다. <code>&lt;body&gt;</code> 태그 안에 들어갈 사이트 레이아웃을 구성하는 코드를 작성할 수 있다.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- head.php --&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content-body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- head.php 끝 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        # head.php와 tail.php 파일 사이에 게시판 등 콘텐츠가 출력된다</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- tail.php --&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- tail.php 끝 --&gt;</span></span></code></pre></div><p><code>head.php</code> 파일에는 보통 사이트의 로고, 메뉴 등을 포함하고, <code>tail.php</code>에는 사이트의 푸터 등으로 구성할 수 있다.</p><h3 id="head-sub-tail-sub" tabindex="-1">head.sub, tail.sub <a class="header-anchor" href="#head-sub-tail-sub" aria-label="Permalink to &quot;head.sub, tail.sub&quot;">​</a></h3><p><code>head.sub.php</code>, <code>tail.sub.php</code> 파일은 위의 두 파일과는 달리 <code>&lt;html&gt;</code> 태그와 <code>&lt;body&gt;</code> 태그를 열고 닫는 코드를 담고 있다. <code>&lt;body&gt;</code> 안쪽의 컨텐츠를 제외한 HTML 구조는 이 파일에 작성해야 한다.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- head.sub.php --&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">doctype</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">사이트 제목</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;...&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- head.sub.php 끝 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        # head.php 출력</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 게시판 등 콘텐츠 출력</span></span>
<span class="line"><span style="color:#A6ACCD;">        # tail.php 출력</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- tail.sub.php --&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- tail.sub.php 끝 --&gt;</span></span></code></pre></div><h2 id="모바일-전용-레이아웃" tabindex="-1">모바일 전용 레이아웃 <a class="header-anchor" href="#모바일-전용-레이아웃" aria-label="Permalink to &quot;모바일 전용 레이아웃&quot;">​</a></h2><p>소형 디스플레이 기기에서는 <code>mobile</code> 폴더의 파일이 대신 사용된다. 파일 구성이나 용도는 비슷하지만 <code>head.sub.php</code>, <code>tail.sub.php</code> 파일은 모바일 전용으로 따로 없으며 테마 루트의 파일이 공통으로 사용된다.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">theme // 테마가 설치된 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">└── basic // 내장된 \`basic\` 테마의 폴더</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       └── mobile // 모바일 전용 레이아웃</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── _common.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── group.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── head.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── index.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   └── tail.php</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── head.sub.php // 레이아웃 공통</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       └── tail.sub.php // 레이아웃 공통</span></span></code></pre></div><p>모바일 모드에서는 <code>/head.php</code> 파일 대신 <code>/mobile/head.php</code> 파일이 사용된다.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#A6ACCD;"># /head.sub.php 출력</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- /mobile/head.php --&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content-body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- /mobile/head.php 끝 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            # 게시판 등 콘텐츠 출력</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- /mobile/tail.php --&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- /mobile/tail.php 끝 --&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;"># /tail.sub.php 출력</span></span></code></pre></div><p>모드에 따라 <code>head.sub.php</code>, <code>tail.sub.php</code> 파일의 코드가 달라야 한다면 <code>G5_IS_MOBILE</code> 상수를 사용하여 분기할 수 있다.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">G5_IS_MOBILE</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 모바일 전용에서의 코드</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 공용 레이아웃 코드</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,19),t=[e];function o(c,i,h,r,y,d){return a(),n("div",null,t)}const F=s(p,[["render",o]]);export{g as __pageData,F as default};
