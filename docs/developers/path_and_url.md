---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/path_and_url.html
---

# 경로 및 URL Rewrite

파일을 include 하거나 스킨의 경로 지정, JS/CSS 파일을 로드하는 등 서버 내 경로나 URL을 사용할 때 미리 만들어진 상수나 헬퍼 함수를 활용할 수 있다.

경로나 URL의 악의적인 공격이나 실수를 막기위해 경로와 URL을 상수로 제공하고 있으며 그누보드에서 처리를 거쳐 만들어졌으므로 비교적 안전하다.

::: danger
TBD.
보안 섹션 참고
사용자 입력 값을 사용하지 말 것. 사용자 입력 값은 검증 후 사용할 것
:::

## 서버 내 경로

파일을 include 하는 등 서버 내 경로가 필요할 때는 아래의 상수를 이용하는 것이 좋다. 대상 폴더의 서버 내 절대경로를 담고 있다.

- `G5_ADMIN_PATH` : adm 폴더
- `G5_BBS_PATH` : bbs 폴더
- `G5_DATA_PATH` : data 폴더
- `G5_EDITOR_PATH` : 에디터 플러그인 폴더
- `G5_LIB_PATH` : lib 폴더
- `G5_PLUGIN_PATH` : plugin 폴더
- `G5_SKIN_PATH` skin 폴더
- `G5_MOBILE_PATH` : mobile(모바일 스킨) 폴더

환경설정에서 가져온 기본 스킨들의 경로를 담은 전역변수를 사용할 수도 있다. 현재 보여지는 기기 모드에 따라 모바일 스킨 경로로 대체된다.

- `$board_skin_path` 및 `$board_skin_url`
- `$member_skin_path` 및` member_skin_url`
- `$new_skin_path` 및 `$new_skin_url`
- `$search_skin_path` 및 `$search_skin_url`
- `$connect_skin_path` 및 `$connect_skin_url`
- `$faq_skin_path` 및 `$faq_skin_url`

::: info
`$board_skin_*` 변수는 현재 보여지는 게시판 설정의 스킨 경로를 담고있지만 게시판이 보여지고있지 않을 때는 '.../skin/board/' 경로까지인 잘못된 경로를 나타내므로 사용에 주의해야 한다.
:::

## URL Rewrite

웹서버의 Rewrite를 이용한 Pretty URL을 사용할 수 있지만 게시판과 영카트 일부에만 적용되어있고 Router가 없어서 규칙을 확장할 수 없다.

Apache/Nginx 웹서버에서 짧은 주소를 `bbs.php` 등의 파일에 파라메터를 붙인 전통적인 URL로 변환하여 호출한다. 그누보드 자체에서는 짧은 주소를 처리하지 않고 웹서버에서 변환하여 넘겨준 주소만을 처리하므로 웹서버의 Rewrite 룰에 의존한다.

### Rewrite Rule 제안

Router가 없어 자동으로 설정되지는 않지만 Apache/Nginx Rewrite 설정을 돕는 제안을 할 수 있다. Replace Hook을 이용한다.

::: details
이 제안은 자동으로 설정되지 않는다. 관리자는 관리페이지 환경설정에서 이 제안을 볼 수 있지만 참고하여 서버에 직접 설정해야 한다.
:::

- `add_nginx_conf_rules`
- `add_mod_rewrite_rules`

```php
add_replace('add_mod_rewrite_rules', 'myRewriteRules', G5_HOOK_DEFAULT_PRIORITY, 1);
function myRewriteRules($rules = '')
{
    $rules .= PHP_EOL;
    // /data/tmp 디렉토리 접근 제한
    $rules .= 'RewriteRule ^data/tmp/ - [L,R=404]' . PHP_EOL;

    return $rules;
}
```

::: tip

- 문자열을 반환해야하며 이 Hook을 사용하는 다른 확장과의 문제가 없도록 앞뒤로 개행문자(`PHP_EOL`, `'\n'`)를 포함해야 한다.
- 제안이 제대로 적용되었는지 확인하려면 '환경설정 -> 기본환경설정 -> 짧은주소' 에서 'Apache 설정 코드 보기' 버튼을 클릭해야 한다. Apache/Nginx 서버에 따라 버튼이 하나만 보이므로 브라우저 콘솔을 이용하자.
  `php
// apache
$('[data-remodal-id=modal_apache]').remodal().open();
// nginx
$('[data-remodal-id=modal_nginx]').remodal().open();
`
  :::
