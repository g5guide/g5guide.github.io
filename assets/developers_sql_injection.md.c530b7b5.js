import{_ as s,o as a,c as n,U as l}from"./chunks/framework.906c2817.js";const d=JSON.parse('{"title":"SQL Injection","description":"","frontmatter":{},"headers":[],"relativePath":"developers/sql_injection.md","filePath":"developers/sql_injection.md","lastUpdated":1689099667000}'),e={name:"developers/sql_injection.md"},o=l(`<h1 id="sql-injection" tabindex="-1">SQL Injection <a class="header-anchor" href="#sql-injection" aria-label="Permalink to &quot;SQL Injection&quot;">​</a></h1><p>그누보드는 PHP의 MySQL/MySQLi API를 사용하고 있으며, Prepared Statement를 사용하지 않는다. <a href="/developers/polluted_variables.html">오염된 전역변수</a> 문제가 더해져 사용자 입력 변수와 전역변수의 데이터에 모두 위험성이 존재하며, SQL 질의문을 문자열에 변수를 직접 조합하므로 SQL 인젝션 공격에 취약하다.</p><p>그누보드의 코드에서는 보안취약점 제보로 패치되고 있지만, 서드파티가 제작한 기능은 이러한 보안취약점이 알려지거나 제보되지 않으므로 좀 더 취약할 수 있다. 스킨 등 확장기능을 개발할 때 SQL Injection에 항상 주의하여 질의문을 사용해야 한다.</p><h2 id="mysqli-바인딩-사용하기" tabindex="-1">MySQLi 바인딩 사용하기 <a class="header-anchor" href="#mysqli-바인딩-사용하기" aria-label="Permalink to &quot;MySQLi 바인딩 사용하기&quot;">​</a></h2><p>MySQLi API에서 바인딩을 사용할 수 있지만 그누보드에서는 이를 사용하지 않으며, 개발자가 사용 가능한 헬퍼를 제공하지 않으므로 그누보드에서 자동 연결한 DB 커넥션으로 <code>mysqli_prepare()</code> 함수를 사용할 수 있다.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// $connect_db 전역변수를 사용</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">stmt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mysqli_prepare</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">connect_db</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F78C6C;">SELECT</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">*</span><span style="color:#C3E88D;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#C3E88D;"> g5_member </span><span style="color:#F78C6C;">WHERE</span><span style="color:#C3E88D;"> mb_id </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> ?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">mysqli_stmt_bind_param</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">stmt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">memberId</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">memberId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">mysqli_stmt_execute</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">stmt</span><span style="color:#89DDFF;">);</span></span></code></pre></div>`,6),p=[o];function t(c,r,i,D,y,F){return a(),n("div",null,p)}const C=s(e,[["render",t]]);export{d as __pageData,C as default};
