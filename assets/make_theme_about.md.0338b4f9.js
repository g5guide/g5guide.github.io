import{_ as s,o as a,c as n,U as l}from"./chunks/framework.906c2817.js";const m=JSON.parse('{"title":"테마 개요","description":"","frontmatter":{},"headers":[],"relativePath":"make/theme/about.md","filePath":"make/theme/about.md","lastUpdated":1689099667000}'),e={name:"make/theme/about.md"},p=l(`<h1 id="테마-개요" tabindex="-1">테마 개요 <a class="header-anchor" href="#테마-개요" aria-label="Permalink to &quot;테마 개요&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#주요-구성-파일">주요 구성 파일</a><ul><li><a href="#테마-정보-readme-txt">테마 정보 (readme.txt)</a></li><li><a href="#테마-설정-theme-config-php">테마 설정 (theme.config.php)</a></li><li><a href="#사이트-레이아웃">사이트 레이아웃</a></li></ul></li><li><a href="#스킨">스킨</a></li></ul></nav><hr><p>그누보드 테마는 사이트의 레이아웃을 꾸미는데 사용된다. 게시판 스킨, 최신글 위젯 스킨 등을 포함시킬 수 있어서 사이트 레이아웃과 어울리는 스킨을 함께 배포하기에 적합하다.</p><p><code>basic</code> 테마를 내장하고 있으며, 그누보드를 설치할 때 <code>basic</code> 테마가 기본으로 적용된다. <code>theme</code> 폴더에 테마 파일을 담고 있으며, <code>basic</code> 테마를 예시로 한 구조는 아래와 같다.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">theme // 테마가 설치된 폴더</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">└── basic // 내장된 \`basic\` 테마의 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── css</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── img</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── js</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── skin</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── board // 게시판 스킨들의 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── connect // 현재 접속자 페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── content // 페이지 컨텐츠 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── faq // FAQ 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── latest // 최신글 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── member // 회원페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── new // 새글 페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── outlogin // 로그인 폼 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── poll // 설문조사 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── popular // 인기검색어 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── qa // QnA 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── search // 검색 결과 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   └── visit // 접속통계 페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── mobile // 모바일 기기용 레이아웃 및 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── skin // 모바일 기기용 스킨. 위 skin 폴더 구조와 같음</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   │   ├── board</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   │   ├── ...</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   │   └── visit</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── _common.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── group.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── head.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── index.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   └── tail.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── _common.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── head.php // [필수] 레이아웃 상단부 파일</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── head.sub.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── index.php // [필수] index 페이지 파일</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── readme.txt // [필수] 테마 정보 파일</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── screenshot.png</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── tail.php // [필수] 레이아웃 하단부 파일</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── tail.sub.php</span></span>
<span class="line"><span style="color:#A6ACCD;">       └── theme.config.php // [필수] 테마 설정 파일</span></span></code></pre></div><h2 id="주요-구성-파일" tabindex="-1">주요 구성 파일 <a class="header-anchor" href="#주요-구성-파일" aria-label="Permalink to &quot;주요 구성 파일&quot;">​</a></h2><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">theme // 테마가 설치되는 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">└── basic // 내장된 \`basic\` 테마의 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── _common.php</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── head.php // [필수] 레이아웃 상단부 파일</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── head.sub.php</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── index.php // [필수] index 페이지 파일</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── readme.txt // [필수] 테마 정보 파일</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── screenshot.png</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── tail.php // [필수] 레이아웃 하단부 파일</span></span>
<span class="line"><span style="color:#A6ACCD;">       ├── tail.sub.php</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       └── theme.config.php // [필수] 테마 설정 파일</span></span></code></pre></div><h3 id="테마-정보-readme-txt" tabindex="-1">테마 정보 (readme.txt) <a class="header-anchor" href="#테마-정보-readme-txt" aria-label="Permalink to &quot;테마 정보 (readme.txt)&quot;">​</a></h3><p><code>readme.txt</code> 파일명으로 테마의 이름 및 제작자 정보를 담고 있다.</p><ul><li>Theme Name : 테마 이름</li><li>Theme URI : 테마의 상세 정보나 저장소 URL 등</li><li>Maker : 제작자 이름</li><li>Maker URI : 제작자 웹사이트 등</li><li>Version : 테마의 버전 <ul><li><a href="https://semver.org/lang/ko/" target="_blank" rel="noreferrer">유의적 버전</a>을 사용하자</li></ul></li><li>Detail : 테마를 설명하는 내용. 줄바꿈하여 작성하면 안 된다</li><li>License : 라이선스의 종류 및 버전 또는 사용권 정보의 간략한 설명</li><li>License URI : 라이선스 전체 내용을 확인할 수 있는 URL</li></ul><p>아래는 그누보드에 내장된 <code>basic</code> 테마의 readme.txt 파일이며 이를 사용하여 내용을 변경하여 사용하면 된다.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Theme Name: 베이직</span></span>
<span class="line"><span style="color:#A6ACCD;">Theme URI: http://theme.sir.kr/gnuboard5/demo/basic</span></span>
<span class="line"><span style="color:#A6ACCD;">Maker: SIR</span></span>
<span class="line"><span style="color:#A6ACCD;">Maker URI: http://sir.kr</span></span>
<span class="line"><span style="color:#A6ACCD;">Version: 3.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">Detail: 베이직 테마는  SIR에서 제공하는 그누보드5 테마입니다. 베이직 테마는 웹표준 및 접근성을 준수합니다.</span></span>
<span class="line"><span style="color:#A6ACCD;">License: GNU LESSER GENERAL PUBLIC LICENSE Version 2.1</span></span>
<span class="line"><span style="color:#A6ACCD;">License URI: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">작성 시 주의</p><p><code>YAML</code>, <code>JSON</code>, <code>XML</code> 등 표준화된 포맷을 사용하고 있지 않으며, 줄바꿈과 정해진 라벨로 구분되므로 <code>Detail</code> 항목 등에 긴 내용을 포함한다해도 줄바꿈하여 작성하면 안 된다.</p><p>각 줄의 시작부터 콜론(<code>:</code>)까지 포함한 라벨은 공백을 포함한 어떠한 형태로도 변경하지않고 그대로 사용해야 한다.</p></div><h3 id="테마-설정-theme-config-php" tabindex="-1">테마 설정 (theme.config.php) <a class="header-anchor" href="#테마-설정-theme-config-php" aria-label="Permalink to &quot;테마 설정 (theme.config.php)&quot;">​</a></h3><p><code>theme.config.php</code> 파일을 사용하며, 상세 내용은 <a href="/make/theme/config.html">테마 설정</a> 페이지를 참고하자.</p><h3 id="사이트-레이아웃" tabindex="-1">사이트 레이아웃 <a class="header-anchor" href="#사이트-레이아웃" aria-label="Permalink to &quot;사이트 레이아웃&quot;">​</a></h3><ul><li><code>head.sub.php</code> : <code>&lt;html&gt; &lt;head /&gt; &lt;body&gt;</code><ul><li><code>head.php</code> : 메뉴 등 사이트 헤더 부분 <ul><li>게시판 등 컨텐츠가 출력되는 부분</li></ul></li><li><code>tail.php</code> : 푸터 등 사이트 하단 부분</li></ul></li><li><code>tail.sub.php</code> : <code>&lt;/body&gt; &lt;/html&gt;</code></li></ul><p><a href="/make/theme/layout.html">레이아웃</a></p><h2 id="스킨" tabindex="-1">스킨 <a class="header-anchor" href="#스킨" aria-label="Permalink to &quot;스킨&quot;">​</a></h2><p>테마는 게시판, 회원 스킨 등을 포함할 수 있으며 <code>skin</code> 폴더와 <code>mobile/skin</code>에 PC와 모바일 스킨으로 나뉜다. <code>skin</code> 폴더 밑에 <code>board</code>(게시판), <code>latest</code>(최근글) 등 분류별로 나뉘어져있고 분류 밑에 개별 스킨을 넣는다.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">theme // 테마가 설치된 폴더</span></span>
<span class="line"><span style="color:#A6ACCD;">└── basic // 내장된 \`basic\` 테마의 폴더</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       ├── skin</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── board // 게시판 스킨들의 폴더</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">       │   │   └── basic // \`basic\` 이름을 가진 게시판 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── connect // 현재 접속자 페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── content // 페이지 컨텐츠 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── faq // FAQ 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── latest // 최근글 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── member // 회원페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── new // 새글 페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── outlogin // 로그인 폼 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── poll // 설문조사 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── popular // 인기검색어 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── qa // QnA 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   ├── search // 검색 결과 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       │   └── visit // 접속통계 페이지 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">       └── mobile // 모바일 기기용 레이아웃 및 스킨</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">           └── skin // 모바일 기기용 스킨. 위 skin 폴더 구조와 같음</span></span>
<span class="line"><span style="color:#A6ACCD;">               ├── board</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">               │   └── basic // \`basic\` 이름을 가진 모바일용 게시판 스킨</span></span>
<span class="line"><span style="color:#A6ACCD;">               ├── ...</span></span>
<span class="line"><span style="color:#A6ACCD;">               └── visit</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">기본 스킨의 이름(폴더명)</p><p>테마에 포함된 스킨은 <code>theme/white_board</code>처럼 지정되는데, <code>theme/</code>로 시작하면 현재 적용된 테마의 폴더내에서 찾게되므로 다른 테마로 변경했을 때 해당 테마에 <code>white_board</code> 스킨이 없다면 잘못된 경로를 나타낼 수 있다. 이는 사용자가 스킨을 다시 지정하기 전까지 오류를 발생시킬 수 있다.</p><p>그누보드에서는 기본 스킨의 이름으로 <code>basic</code>을 주로 사용하므로 테마에 포함된 스킨의 폴더명을 <code>basic</code>으로 짓는 것이 무난하며 이런 문제를 최소화 할 수 있다. 꼭 따라야 할 규칙은 아니지만 사용자의 혼란을 줄이는데 도움이 된다.</p></div><hr><div class="info custom-block"><p class="custom-block-title">테마 기능은...</p><p>그누보드 5.1 버전에서 테마 기능이 추가되었고, 그 이전까지는 사이트의 디자인을 변경하기 위해서는 그누보드 배포판에 포함된 코드를 수정해야만했고, 이는 그누보드를 업데이트하는데 가장 큰 걸림돌이었다. 디자인 변경을 위해서 수정한 파일들 때문에 잦은 보안패치를 적용하기 어려워져 그누보드로 제작된 사이트의 보안문제를 악화시키는 주요 원인이었다.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>버퍼는 <code>tail.sub.php</code> 파일에서 <code>html_end()</code> 함수를 호출하여 출력되므로 <code>tail.sub.php</code> 파일을 수정하거나 테마를 만들 때 잊으면 안 된다.</p></div><ul><li>G5_THEME_DEVICE</li><li>그누보드에서 사용하는 전역변수</li></ul>`,27),o=[p];function c(t,i,r,h,C,d){return a(),n("div",null,o)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
