---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/polluted_variables.html
description: 그누보드는 요청받은 데이터를 전역변수로 풀어놓는 `extract()` 함수를 사용하고 있어 전역변수가 오염되는 문제가 있다. 오염된 전역변수는 동작에 영향을 주기도하며, 보안취약점으로 이어질 수 있으므로 전역변수 사용에 항상 주의해야 한다.
---

# 그누보드가 오염시킨 전역변수

그누보드는 `extract()` 함수로 `$_GET`, `$_POST`, `$_SERVER` 슈퍼 글로벌 변수의 모든 항목을 개별 전역변수로 모두 풀어놓는다.

이로인해 전역변수가 오염된다. 그누보드 배포본의 코드는 물론 테마나 스킨, 플러그인 및 그누보드와 연동되는 모든 영역에서 전역변수가 오염되며, URL에 파라메터를 전달하는 것만으로 전역변수를 쉽게 변조될 수 있는 위험에 노출되어있다.

```php
@extract($_GET); // [!code error]
@extract($_POST); // [!code error]
@extract($_SERVER); // [!code error]
```

PHP 매뉴얼에서는 [`extract()`](https://www.php.net/manual/en/function.extract.php) 함수로 `$_GET`, `$_FILES` 등의 사용자 입력 값처럼 신뢰할 수 없는(외부로부터 수신한) 데이터에 사용하지 말라고 경고한다.

> Warning Do not use extract() on untrusted data, like user input (e.g. $\_GET, $\_FILES).

::: details extract & register_globals
`extract()` 함수를 이용해 `register_globals = on`과 같은 PHP 설정과 비슷한 효과를 내주며 편의를 위해 사용했던 방법이지만 디버깅을 어렵게하고 보안에 좋지 않다. `register_globals` 옵션은 2012년 출시한 PHP 5.4.0 버전에서 완전히 제거됐다.

[PHP Right Way](https://modernpug.github.io/php-the-right-way/#register_globals)에서는 만약 PHP 5.4 미만의 버전을 사용하고 있다면 보안 이슈에 노출될 수 있으니 `register_globals` 옵션을 켜지 말 것을 경고한다.

Wordpress는 2012년부터 일부에서 사용된 `extract()` 함수를 코드에서 모두 제거했고, [Wordpress 코딩 표준](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#dont-extract)에서는 "디버깅을 어렵게 만드는 끔찍한 기능"이라고 말하며 사용하지 말 것을 경고한다

::: warning
그누보드는 이러한 경고와는 반대로 가장 끔찍한 방법으로 사용해버렸고 이 문제를 해결하지 않고 있다.
:::

스킨이나 플러그인 등 모든 글로벌 스코프에서 변수의 이름이 겹치지 않도록 주의해야 한다. 그누보드에서 초기화하는 변수 외에도 게시판, 아웃로그인, 최근게시물 등의 스킨에서 보편적으로 사용하는 변수명을 사용한다면 발견하기 어려운 문제를 겪을 수 있다.

::: danger 연동된 프로그램에도 영향을 준다
이 문제는 그누보드와 연동된 타사 프로그램에도 영향을 줄 수 있다.
`/common.php` 파일을 직간접적으로 사용한다면 이 위험에 노출된다. 그누보드와 연동이 필요하다면 직접 링크하지 않도록 필요한 데이터에대한 별개의 인터페이스를 만들어 사용하는 것을 권장한다.
:::

### 문제의 예시

전역변수의 오염으로 발생할 수 있는 문제의 예시이다.

```php
if (!$foo) { // 어떠한 특정한 조건
    $link = '/bbs/board.php?bo_table=free';
}
echo '<a href="' . $link . '">돌아가기</a>'; // 골로 갈 수 있다
```

이와 같이 `if` 조건문 안에서만 초기화된 변수는 `http://.../?foo=1&link=hack_code` 같은 방법으로 `$link` 변수에 `hack_code` 값이 할당되어 공격에 이용될 수 있다.

먼저 실행된 코드에서 `$foo` 또는 `$link` 변수에 값을 할당했다면 의도와 다르게 동작할 수 있다. 모든 곳에서 격리되지 않고 전역변수로 정의되고 사용되기 때문이다.

물론 그누보드에서 `$_POST`, `$_GET`, `$_COOKIE`, `$_REQUEST` 변수에 담긴 모든 요청 값에 따옴표 등의 문자에 백슬래시(`\`)를 추가하는 등의 방법을 사용하여 악의적인 접근에 대비하고있다.

### 그누보드에서 초기화하는 변수들

그누보드에서 주요하게 사용되고 초기화 해주는 변수는 대부분 `/common.php` 파일에서 찾아볼 수 있으며, `/bbs/board.php` 등에서 게시판 스킨에서 사용될 변수를 초기화하고 있으므로 확인해 보고 사용해야 한다.

그누보드에서 초기화하고 DB에서 가져온 데이터를 담고 있는 `$write`, `$config`, `$member` 등의 주요 전역변수들이 있으며, 이 변수를 대체하거나 값을 변경하면 그누보드의 동작에 영향을 주므로 피해야 한다. 물론 이 목록이 전부는 아니며 호출되는 파일에 따라 매우 다양하며 어떤 변수가 보호되어야 하는지 예측할 수 없다.

```php
# 기본설정 및 환경 정보
array $g5
array $config 기본환경설정
array $group
bool $is_mobile
string $write_table

# 회원
array $member 회원정보를 담고 있지만 `$member['mb_id']` 값이 비어있다면
    `Undefined index` 경고 또는 오류를 감추기 위한 더미일 뿐이므로 주의
bool $is_member
bool $is_guest
string $is_admin `super`, `group`, `board` 등의 값이 있을 수 있다

# 게시판 및 페이지
string $bo_table
array $board 게시판 정보를 담고 있지만 `$board['bo_table']` 값이 비어있다면
    `Undefined index` 경고 또는 오류를 감추기 위한 더미일 뿐이므로 주의
int $wr_id
array $write 글(article) 정보를 담고 있지만 `$write['wr_id']` 값이 비어있다면
    `Undefined index` 경고 또는 오류를 감추기 위한 더미일 뿐이므로 주의
array $qaconfig
string $gr_id

# 검색 및 페이징, URL
string $qstr 검색어
string $sca 카테고리
string $sfl 검색 대상 필드
string $stx
string $sst
string $sod
string $sop and|or
string $spt
int|string $page 페이지 숫자
string $w
string $url
string $urlencode

# 스킨...
string $board_skin_path
string $board_skin_url
string $member_skin_path
string $member_skin_url
string $new_skin_path
string $new_skin_url
string $search_skin_path
string $search_skin_url
string $connect_skin_path
string $connect_skin_url
string $faq_skin_path
string $faq_skin_url
```

### 위험에서 벗어나기

자바스크립트 특히, jQuery에서 자주 사용해왔던 IIFE 방식을 이용할 수 있다. 함수는 전역범위와 격리되는 것을 이용하는 방법이다. PHP 7.0부터 지원하며 전역변수 오염에서 벗어날 수 있다. 격리된 코드에서 새로 정의한 변수 또한 다른 전역변수에 영향을 주지않으므로 사이드 이펙트를 줄일 수 있다.

```php
(function() {
    // $href 변수를 초기화하는 걸 까먹었다!
    if ($href) {
        // 출력되지 않으며 extract()로 인한 위험에서도 벗어날 수 있다
        echo '<a href="' . $href . '">목록보기</a>';
    }
})();
```

안전하다고 판단되는 전역변수를 골라 가져올 수도 있다.

```php
(function($articleId = 0) {
    echo '글 번호: ' . $articleId;
    echo '$wr_id: ' . $wr_id; // $wr_id 변수의 값은 출력되지 않는다
})((int) $wr_id);

// 물론 use()나 $GLOBALS를 이용할 수도 있다.
(function($articleId = 0) use ($bo_table) {
    echo '글 번호: ' . $articleId;
    echo '$wr_id: ' . $wr_id; // $wr_id 변수의 값은 출력되지 않는다
    echo '$bo_table: ' . $bo_table;
    echo '$memberId: ' . $GLOBALS['member']['mb_id'];

    // 이 안에서 include 하는 파일도 이 격리된 공간이 적용되고,
    // 가져온 변수들을 동일하게 사용할 수 있다.
    include_once('file.php');
})((int) $wr_id);

// 간략하게 보면 이런 형태다
(function() {
    // ... 이곳은 격리된 공간이다
})();
```

::: warning
변수를 사용할 때는 반드시 먼저 초기화 후에 사용하자.
사용자 입력 값은 적절한 타입으로 변경하고, 문자열은 적절한 처리를 거쳐야 한다.

그누보드를 믿어서는 안 되며, 나 자신도 믿지 말자.
:::
