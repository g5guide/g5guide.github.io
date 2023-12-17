# 그누보드 Hook 목록

그누보드 5.5 버전부터 추가된 Hook은 버전을 표기하였음.

::: info

- 예시로 작성된 코드의 상단에 PHPDoc은 콜백이 전달받는 파라미터의 정보를 표기한 것이다.

- 콜백에 전달되는 파라미터의 이름은 정해진 것이 아니며, Hook을 실행할 때 전달하는 파라미터의 이름을 기반으로 임의로 작성된 것이므로 자유롭게 변경하여 사용할 수 있다.

:::

## 코어

### common_header <Badge type="info" text="Event" />

`/common.php` 파일에서 공통 HTTP Header를 정의 후 실행된다. 새로운 Header를 설정하거나 교체할 수 있다. 또는 기타 필요한 동작을 실행할 수 있다.

```php
add_event('common_header', function () {
    // 예시: `Content-Type` 헤더 교체
    header('Content-Type: application/json; charset=utf-8');
});
```

::: tip
그누보드가 동작되는 모든 요청에서 실행된다.

플러그인(extend 폴더)에서 활용할 수 있는 가장 먼저 실행되는 Hook이다.

사실 `sql_query_after`, `is_admin` 등의 Hook이 먼저 실행되지만 플러그인, 테마, 스킨 등에서 리스너를 추가할 기회 전에 실행되기 때문에 사실상 활용이 어렵다.
:::

### admin_common <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.7" />

`common_header` Hook이 전체에서 실행되는 것이라면, `admin_common` Hook은 관리페이지 및 기능에서만 실행된다. 관리페이지에서 실행되는 (거의) 모든 코드가 실행될 때 호출된다.

### goto_url <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### alert <Badge type="info" text="Event" />

### alert_close <Badge type="info" text="Event" />

### 환경설정

::: warning 사용하지 않는 것을 권장
환경설정을 로드할 때 실행되는 `get_config`, `get_config_cache` Hook은 사용하지 않는 것을 권장한다.

환경설정 데이터는 `get_config()` 함수 내부와 전역변수 `$config`에 캐시되어 재사용되므로, 이 Hook 들이 실행되지 않을 수 있으며, 관리페이지에서 환경설정을 저장할 때 의도하지 않은 문제를 일으킬 가능성이 있다.

필요하다면, 역시 권장하는 방법은 아니지만 `$config` 전역변수를 직접 변경하여 해결하는 것이 낫다. 결코 좋지 않지만 어쩔 수 없이 그나마 이것이 낫다.
:::

#### get_config <Badge type="info" text="Replace" />

그누보드 환경설정을 가져올 때 실행된다.

::: warning 이 Hook은 실행되지 않을 수 있음
콜백을 등록할 때는 이미 환경설정 데이터가 로드된 이후이며, 이 데이터는 `get_config()` 함수 내에서 캐시되고 또한 `$config` 전역변수에 데이터를 담아 재사용되므로 이 Hook은 실행되지 않을 수 있다.
:::

```php
/**
 * @param array $config 그누보드 환경설정 값
 */
add_replace('get_config', function ($config) {
    // ... 환경설정을 가져올 때 실행될 코드
    return $config;
}, G5_HOOK_DEFAULT_PRIORITY, 1);
```

#### get_config_cache <Badge type="info" text="Replace" />

그누보드 환경설정을 가져올 때 캐시된 데이터가 있을 때 이를 반환할 때 실행된다.

이 Hook이 전달받는 파라미터의 값을 확인해야 한다. `$config`가 빈 배열이라면 추가 동작을 실행하지 않는 것이 좋고, `$is_cache`가 `false`이면 캐시된 데이터를 무시하고 DB에서 새로운 데이터를 가져오기를 요청한 것이므로 역시 이 Hook에서 데이터를 변경하여 반환하면 안 된다.

::: warning 이 Hook은 실행되지 않을 수 있음
콜백을 등록할 때는 이미 환경설정 데이터가 로드된 이후이며, `$config` 전역변수에 데이터를 담아 재사용되므로 이 Hook은 실행되지 않을 수 있다.
:::

```php
/**
 * @param array $config 그누보드 환경설정 값
 * @param bool $is_cache 캐시된 데이터를 반환할 때 true
 */
add_replace('get_config_cache', function ($config, $is_cache) {
    // 캐시된 데이터 요청이 아니거나 캐시된 데이터가 없으면 추가 동작 중지
    if (!count($config) || !$is_cache) {
        return $config;
    }

    // ... 환경설정을 가져올 때 실행될 코드

    return $config;
}, G5_HOOK_DEFAULT_PRIORITY, 1);
```

## 레이아웃

사이트 디자인 구성을 출력하는 레이아웃이 출력될 때 실행되는 Hook이다.

### pre_head <Badge type="info" text="Event" />

레이아웃 코드를 출력하는 `head.sub.php` 파일에서 `<html>` 태그를 출력하기 전에 실행된다.

```php
run_event('pre_head', function () {
    $GLOBALS['g5']['body_script'] .= ';console.log(window.g5_url);';
});
```

::: warning
테마에 따라 Hook 실행 코드가 없을 수 있으므로 이 Hook의 실행이 보장되지는 않는다.
:::

### tail_sub <Badge type="info" text="Event" />

보통 레이아웃에서 `</body>` 태그를 닫기 전에 실행된다. 테마에 따라 위치가 다르거나 실행되지 않을 수 있다.

```php
add_event('tail_sub', function () {
    echo "<script>console.log('tail_sub');</script>";
});
```

::: warning
테마에 따라 Hook 실행 코드가 없을 수 있으므로 이 Hook의 실행이 보장되지는 않는다.
:::

### html_process_buffer <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

HTML 응답을 출력하기 전에 실행된다. 최종 출력되는 HTML 코드가 `$buffer` 변수에 담겨있으며, 이 값을 변경하여 출력 결과를 변경할 수 있다.

```php
/**
 * @param string $buffer
 */
add_replace('html_process_buffer', function ($buffer) {
    $buffer = str_replace('그누보드', 'GNUBOARD', $buffer);
    return $buffer;
});
```

::: info 활용 예

- HTML 코드에 특정 문자열을 추가하거나 치환하기

:::

## HTMLPurifier

### html_purifier_safeiframes <Badge type="info" text="Replace" />

HTMLPurifier에서 `<iframe>` 태그를 허용할 때 특정 도메인에 대해서만 허용하는 필터가 적용되어 있으며, 이 필터 목록을 변경할 수 있다.

```php
/**
 * @param array $domains 허용된 도메인 목록
 */
add_replace('html_purifier_safeiframes', function ($domains, $html) {
    /*
    예시: 허용 도메인 추가
    호스트 네임만 추가하고 끝에 `/`를 붙이는 것을 권장
    */
    $domains[] = 'www.youtube.com/';

    return $domains;
}, G5_HOOK_DEFAULT_PRIORITY, 2);
```

### html_purifier_config <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.1" />

HTMLPuriier 설정을 정의할 수 있다.

```php
/**
 * @param HTMLPurifier_Config $config
 * @param array{
 *     'html': string,
 *     'write': array,
 *     'is_admin': string,
 * } $data`
 */
add_event('html_purifier_config', function($config, $data) {
    // 예시: figure, figcaption 태그를 허용
    $def = $config->getHTMLDefinition(true);
    $def->addElement('figure', 'Block', 'Flow', 'Common');
    $def->addElement('figcaption', 'Inline', 'Flow', 'Common');
}, G5_HOOK_DEFAULT_PRIORITY, 2);
```

### html_purifier_result <Badge type="info" text="Replace" />

HTMLPurifier에 의해 필터링된 HTML 결과물을 반환할 때 실행된다. 결과물에서 일부를 다시 가공하는데 활용할 수 있다.

```php
/**
 * @param string $html 필터링 된 HTML 코드
 * @param HTMLPurifier $purifier
 * @param string $rawHtml 필터링 되기 전의 원본 HTML 코드
 */
add_replace('html_purifier_result', function ($html, $purifier, $rawHtml) {
    return $html;
}, G5_HOOK_DEFAULT_PRIORITY, 3);
```

## Database

### sql_query_after <Badge type="info" text="Event" /> <Badge type="warning" text="Updated v5.5.8.2.5" /> <Badge type="warning" text="Updated v5.5.8.2.6" />

DB 쿼리의 결과를 가져온 후 실행된다.

```php
/**
 * @param bool|mysqli_result $result
 * @param string $sql
 * @param float $start_time
 * @param float $end_time
 * @param ?array{
 *     'error_code': int,
 *     'error_message': string,
 * } $error <Badge type="warning" text="Updated v5.5.8.3.3" />
 * @param ?array{
 *     'file': string,
 *     'line': int,
 *     'function': string,
 *     'class': string,
 *     'type': string,
 * } $source
 */
add_event('sql_query_after', function ($result, $sql, $start_time, $end_time, $error = null, $source = []) {
    // ... DB 쿼리 결과를 가져온 후 실행될 코드
}, G5_HOOK_DEFAULT_PRIORITY, 6);
```

::: info

- 5.5.8.2.5 버전에서 `$error` 파라미터가 추가되었다
- 5.5.8.2.6 버전에서 `$source` 파라미터가 추가되었다

:::

### get_db_charset <Badge type="info" text="Replace" />

## 회원

### 로그인

`bbs/login_check.php` 파일에서 로그인 처리 과정 중 아래와 같은 순서로 Hook이 실행된다.

- member_login_check_before
- check_empty_member_login_password
- login_check_need_not_password
- password_is_wrong
- login_session_before
- login_check_post_check_keys
- member_login_check

#### member_login_check_before <Badge type="info" text="Event" />

로그인 처리를 시작하기 전에 실행된다.

```php
/**
 * @param string $mb_id 로그인 시도한 회원 아이디
 */
add_event('member_login_check_before', function ($mb_id) {
    // ... 로그인 처리를 시작하기 전에 실행될 코드
}, G5_HOOK_DEFAULT_PRIORITY, 1);
```

#### check_empty_member_login_password <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.5" />

#### login_check_need_not_password <Badge type="info" text="Event" />

#### login_session_before <Badge type="info" text="Event" />

로그인 계정의 인증을 확인을 완료한 후 세션을 생성하여 로그인 상태로 만들기 전에 실행된다.

<!-- login_check.skin.php -->

```php
/**
 * @param string $mb_id 로그인 시도한 회원 아이디
 * @param bool $is_social_login 소셜 로그인 여부
 */
add_event('login_session_before', function ($mb, $is_social_login) {
    // ... 로그인 세션을 생성하기 전에 실행될 코드

    // 예시: 관리자 계정은 허용된 IP에서만 로그인 허용
    if ($mb['mb_id'] === 'admin' && $_SERVER['REMOTE_ADDR'] !== '127.0.0.1') {
        alert('관리자는 허용된 IP에서만 로그인할 수 있습니다.');
    }
}, G5_HOOK_DEFAULT_PRIORITY, 2);
```

::: info 활용 예

- 차단된 IP 체크하여 로그인 시도 차단
- 관리자 계정은 허용된 IP에서만 로그인 허용
- 이미 로그인된 세션이 있는지 확인하여 로그인 시도 차단

:::

#### login_check_post_check_keys <Badge type="info" text="Replace" />

#### member_login_check <Badge type="info" text="Event" />

로그인 처리를 완료 후 실행된다.

```php
/**
 * @param string $mb_id 로그인 시도한 회원 아이디
 * @param string $link 이동할 페이지 URL
 * @param bool $is_social_login 소셜 로그인 여부
 */
add_event('member_login_check', function ($mb, $link, $is_social_login) {
    // ... 로그인 처리를 완료 후 실행될 코드
}, G5_HOOK_DEFAULT_PRIORITY, 3);
```

#### password_is_wrong <Badge type="info" text="Event" />

회원 로그인 또는 글, 댓글에서 비밀번호가 틀렸을 때 실행된다.

```php
/**
 * @param string $type 실패한 대상의 타입. bbs, login 등
 * @param array<any> $data 대상의 데이터
 * @param ?string $qstr `bbs` 타입일 때 쿼리스트링
 */
add_event('password_is_wrong', function ($type, $data, $qstr = '') {
    // 비밀번호가 틀렸을 때 실행될 코드
    error_log($type . ' 비밀번호 틀림');
}, G5_HOOK_DEFAULT_PRIORITY, 3);
```

::: info 활용 예

- DB에 저장된 비밀번호를 다른 유형의 알고리즘으로 대조하기
  - `extend/g5_54version_update.extend.php` 파일 참고
- 로그인 시도된 회원에게 이메일 등으로 경고 메시지 보내기
- 계정 탈취 시도로 의심되면 IP 차단 및 관리자에게 알림 보내기

:::

#### member_confirm_next_url <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.5" />

#### member_login_tail <Badge type="info" text="Event" />

### 로그아웃, 차단, 탈퇴

#### member_logout <Badge type="info" text="Event" />

회원 로그아웃 처리를 완료한 후 페이지를 이동시키기 전에 실행된다.

```php
/**
 * @param string $link 이동할 페이지 URL
 */
add_event('member_logout', function ($link) {
    // 로그아웃 처리를 완료한 후 실행될 코드
    error_log('로그아웃');

    // `$link` 변수을 값을 확인할 수 있지만 변경하려면 `$GLOBALS` 변수에서 변경해야 한다
    $GLOBALS['link'] = 'https://...';
}, G5_HOOK_DEFAULT_PRIORITY, 1);
```

::: info 활용 예

- 로그아웃 처리 후 이동할 페이지를 변경하기
- 남은 쿠키 등에 대한 처리

:::

#### member_leave <Badge type="info" text="Event" />

회원이 자신의 계정을 탈퇴할 때 실행된다.

```php
/**
 * @param string $mb_id 탈퇴한 회원 계정의 아이디
 */
add_event('member_leave', function ($mb_id) {
    // ... 회원 탈퇴 후 실행될 코드
}, G5_HOOK_DEFAULT_PRIORITY, 1);
```

::: warning 탈퇴 상태로 일정 기간 보관되므로 주의
그누보드는 회원 탈퇴 시 회원 데이터를 삭제하지 않고 `mb_leave_date` 필드에 탈퇴일을 기록하고 탈퇴된 계정으로 일정기간 보관한다. 그러므로, 이 Hook에서는 회원과 관련된 데이터를 완전히 제거하지 않도록 주의해야 한다. 회원 데이터가 완전히 삭제될 때는 아래 `member_delete_after` Hook이 실행된다.
:::

#### member_delete_after <Badge type="info" text="Event" />

회원 계정의 데이터가 삭제한 후 실행된다. 주로 관리자 권한으로 회원을 삭제할 때이다.

```php
/**
 * @param string $mb_id 삭제된 회원 계정의 아이디
 */
add_event('member_delete_after', function ($mb_id) {
    // 회원 데이터 삭제 후 실행될 코드
    error_log('회원 삭제: ' . $mb_id);
}, G5_HOOK_DEFAULT_PRIORITY, 1);
```

::: info
회원의 계정관련 데이터가 모두 삭제된 후 실행되기 떄문에, `$mb_id` 변수로 받는 회원의 ID 외에는 정보를 확인할 수 없다.

회원 삭제 과정에서 `$GLOBALS['mb']` 전역변수에 담긴 회원정보를 확인할 수도 있지만, 불완전하므로 이 변수를 신뢰하여 사용하는 것은 권장하지 않는다.
:::

::: info 활용 예

- 회원이 작성했던 글, 댓글을 모두 삭제하기

:::

### 회원정보

#### get_member <Badge type="info" text="Replace" />

`get_member()` 함수로 회원정보를 가져올 때 실행된다.

```php
/**
 * @param array $data DB 쿼리 결과로 가져온 회원 정보
 * @param string $mb_id 회원 아이디
 * @param string $fields 요청한 필드 목록
 * @param bool $is_cache 캐시 사용 여부
 */
add_replace('get_member', function ($data, $mb_id, $fields, $is_cache) {
    error_log('회원 정보: ' . print_r($mb_id, true));
    return $data;
}, G5_HOOK_DEFAULT_PRIORITY, 4);
```

### member_sideview_items <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

회원 닉네임을 클릭했을 때 표시되는 "사이드뷰"의 메뉴 목록을 재정의하는데 활용할 수 있다.

```php
/**
 * @param array{
 *     'name_tag_open': string,
 *     'name_tag_close': string,
 *     'name_tag': array{
 *          'profile_image': string,
 *          'name': string
 *      },
 *     'menus': array<string>
 * } $sideview
 * @param array{
 *      'mb_id': string,
 *      'name': string,
 *      'bo_table': string
 * } $data
 */
add_replace('member_sideview_items', function ($sideview, $data = []) {
    return $sideview;
}, G5_HOOK_DEFAULT_PRIORITY, 2);
```

`$sideview['menus']` 배열에는 사이드뷰 메뉴의 항목이 담겨있다. 각 항목은 특정 배열 key에 따라 구분되어 있다.

```php
$siteview['menus']['memo']; // 쪽지 보내기
$siteview['menus']['email']; // 이메일 보내기
$siteview['menus']['homepage']; // 홈페이지 열기
$siteview['menus']['profile']; // 프로필 보기
$siteview['menus']['search_id']; // 게시판에서 아이디로 검색
$siteview['menus']['search_name']; // 게시판에서 아이디로 검색
$siteview['menus']['search_all']; // 전체게시물에서 아이디로 검색
$siteview['menus']['admin_member_modify']; // 회원정보 변경
$siteview['menus']['admin_member_point']; // 포인트 내역
```

::: warning
의도한 순서가 뒤바뀌지 않도록 `$siteview['menus']` 항목의 순서는 재정렬하지 않도록 하자.
:::

### admin_member_form_update <Badge type="info" text="Event" />

### admin_member_form_add <Badge type="info" text="Event" />

### admin_member_form_after <Badge type="info" text="Event" />

### admin_member_list_update <Badge type="info" text="Event" />

### register_member_chk_captcha <Badge type="info" text="Replace" />

### register_member_password_check <Badge type="info" text="Replace" />

### register_form_update_mail_mb_content <Badge type="info" text="Replace" />

### register_form_update_mail_admin_subject <Badge type="info" text="Replace" />

### register_form_update_mail_admin_content <Badge type="info" text="Replace" />

### register_form_update_mail_certify_content <Badge type="info" text="Replace" />

### register_form_update_before <Badge type="info" text="Event" />

### register_form_update_valid <Badge type="info" text="Event" />

### register_form_update_send_mb_mail <Badge type="info" text="Event" />

### register_form_update_send_admin_mail <Badge type="info" text="Event" />

### register_form_update_send_certify_mail <Badge type="info" text="Event" />

### register_form_update_after <Badge type="info" text="Event" />

### register_form_before <Badge type="info" text="Event" />

### register_form_after <Badge type="info" text="Event" />

### get_mb_icon_name <Badge type="info" text="Replace" />

## 쪽지

### memo_list <Badge type="info" text="Event" />

<!-- 이건 대체 왜 있는 Hook 일까... -->

### memo_delete <Badge type="info" text="Event" />

### memo_form_update_before <Badge type="info" text="Event" />

### memo_form_update_after <Badge type="info" text="Event" />

### memo_form_update_failed <Badge type="info" text="Event" />

## 게시판

### 추천/비추천

추천/비추천 과정에서 전, 후 그리고, 요청 방법에 따라 `bbs_increase_good_json`, `bbs_increase_good_html` Hook이 구분되어 실행된다.

::: tip
`$_POST['js']` 값에 따라 구분된다. 이 값이 `on`이면 `bbs_increase_good_json`, 그렇지 않으면 `bbs_increase_good_html` Hook이 실행된다.

::: warning `Accept` 헤더로 구분하는 것이 아니므로 주의
AJAX 요청일 떄에는 `POST`로 `js` 파라미터의 값을 `on`으로 전달하면 된다.
:::

#### bbs_good_before <Badge type="info" text="Event" />

추천/비추천이 처리되기 전에 실행된다.

```php
add_event('bbs_good_before', function ($bo_table, $wr_id, $type) {
    // 추천/비추천 처리 전 실행될 코드
    error_log('추천/비추천 처리 전: ' . $write['wr_id']);
}, G5_HOOK_DEFAULT_PRIORITY, 3);
```

#### bbs_increase_good_json <Badge type="info" text="Event" />

```php
add_event('bbs_increase_good_json', function ($bo_table, $wr_id, $type) {
}, G5_HOOK_DEFAULT_PRIORITY, 3);
```

#### bbs_increase_good_html <Badge type="info" text="Event" />

```php
add_event('bbs_increase_good_html', function ($bo_table, $wr_id, $type, $href) {
}, G5_HOOK_DEFAULT_PRIORITY, 3);
```

#### bbs_good_after <Badge type="info" text="Event" />

```php
add_event('bbs_good_after', function ($bo_table, $wr_id, $type) {
    // 추천/비추천 처리 후 실행될 코드
    error_log('추천/비추천 처리 후: ' . $write['wr_id']);
}, G5_HOOK_DEFAULT_PRIORITY, 3);
```

### 댓글

#### bbs_delete_comment <Badge type="info" text="Event" />

#### comment_update_after <Badge type="info" text="Event" />

### get_board_names_cache <Badge type="info" text="Replace" />

### get_board_db_cache <Badge type="info" text="Replace" />

### get_board_db <Badge type="info" text="Replace" />

### get_bo_table_banned_word <Badge type="info" text="Replace" />

### get_board_sort_fields <Badge type="info" text="Replace" />

### get_board_sfl_select_options <Badge type="info" text="Replace" />

### board_content_head <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### board_mobile_content_head <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### board_content_tail <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### board_mobile_content_tail <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### bbs_delete <Badge type="info" text="Event" />

게시판에서 글을 삭제하고 포함된 댓글과 첨부파일 등의 모든 데이터를 삭제한 후에 실행된다.

```php
/**
 * @param array $write 글 데이터
 * @param array $board 게시판 정보
 */
add_event('bbs_delete', function ($write, $board) {
    // 글 삭제를 처리한 후 실행될 코드
    error_log('글 삭제: ' . $write['wr_id']);
}, G5_HOOK_DEFAULT_PRIORITY, 2);
```

### bbs_delete_all <Badge type="info" text="Event" />

### download_file_header <Badge type="info" text="Event" />

### admin_board_copy_file <Badge type="info" text="Event" />

### admin_board_form_update <Badge type="info" text="Event" />

### adm_board_form_before <Badge type="info" text="Event" />

### admin_board_list_update <Badge type="info" text="Event" />

### admin_boardgroup_form_update <Badge type="info" text="Event" />

### admin_boardgroup_list_update <Badge type="info" text="Event" />

### write_update_before <Badge type="info" text="Event" />

### write_update_file_insert <Badge type="info" text="Event" />

### write_update_after <Badge type="info" text="Event" />

### bbs_write <Badge type="info" text="Event" />

### bbs_move_copy <Badge type="info" text="Event" />

### bbs_move_update <Badge type="info" text="Event" />

### move_html_footer <Badge type="info" text="Event" />

### bbs_new_delete <Badge type="info" text="Event" />

## 1:1문의

### admin_qa_config_updated <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### qa_delete <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.3" />

### qa_download_file_header <Badge type="info" text="Event" />

### qa_download_file_exist_check <Badge type="info" text="Replace" />

### qa_content_head <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### qa_mobile_content_head <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### qa_content_tail <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### qa_mobile_content_tail <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### get_qa_config <Badge type="info" text="Replace" />

### get_qa_sfl_select_options <Badge type="info" text="Replace" />

### qawrite_update <Badge type="info" text="Event" /> <Badge type="warning" text="Updated v5.5.8.3.3" />

::: info

- 5.5.8.3.3 버전에서 `$answer_id` 파라미터가 추가되었다

:::

## 인증/권한

### is_admin <Badge type="info" text="Replace" /> <Badge type="danger" text="DO NOT USE" />

::: danger 사용하지 않는 것을 권장
이 Hook은 `is_admin()` 함수가 반환하는 값을 변경할 수 있지만 그누보드의 권한 처리에 심각한 영향을 줄 수 있으므로 사용하지 않는 것을 권장한다.

아래와 같이 관리 권한을 확인할 때 영향을 줄 수 있으며, 매우 심각한 권한 문제를 발생시킬 수 있다.

```php
if (!is_admin($member['mb_id'])) {
    // ... 관리자가 아닌 경우에만 실행될 코드
}

if (is_admin($member['mb_id'])) {
    // ... 관리 권한이 있을때만 실행될 코드
}
```

또한, 다음과 같이 특정 권한을 확인할 떄에도 영향을 줄 수 있다.

```php
if (is_admin($member['mb_id']) === 'group') {
    // ... 'group' 관리자일 때만 실행될 코드
}
```

::: details 그래도 변경이 필요하다면...

`$is_authority` 값이이 비어있는지 확인하여 변경하는 것이 좋다. 반드시 관리자 수준의 권한 부여에만 사용되어야하며 기타 목적으로 응용하면 안 된다.

```php
/**
 * @param string $is_authority
 * @param string $mb_id
 */
add_replace('is_admin', function ($is_authority, $mb_id) {
    // 예시: 관리자 권한을 변경
    if (!$is_authority) {
        $condition = false;
        if ($condition === true) {
            $is_authority = 'manager';
        }
    }

    // 또는
    if ($is_authority !== 'super') {
        $condition = false;
        if ($condition === true) {
            $is_authority = 'manager';
        }
    }

    return $is_authority;
}, G5_HOOK_DEFAULT_PRIORITY, 2);
```

:::

### cert_refresh_update_after <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.2" />

## FAQ

### admin_faq_item_created <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_faq_item_updated <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_faq_item_deleted <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_faq_master_created <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_faq_master_updated <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_faq_master_deleted <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

## URL / 짧은주소

### add_nginx_conf_pre_rules <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.8" />

### add_nginx_conf_rules <Badge type="info" text="Replace" />

### add_mod_rewrite_pre_rules <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.8" />

### add_mod_rewrite_rules <Badge type="info" text="Replace" />

### get_pretty_url <Badge type="info" text="Replace" />

### url_clean_page_names <Badge type="info" text="Replace" />

### false_short_url_clean <Badge type="info" text="Replace" />

### exist_check_seo_title <Badge type="info" text="Replace" />

### url_clean_page_paths <Badge type="info" text="Replace" />

## cache

### adm_cache_file_delete_before <Badge type="info" text="Event" />

### adm_cache_file_delete <Badge type="info" text="Event" />

### g5_set_cache_event <Badge type="info" text="Event" />

### adm_cache_delete <Badge type="info" text="Event" />

### delete_cache_latest <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.9" />

## 썸네일

### delete_editor_thumbnail_before <Badge type="info" text="Event" />

### delete_editor_thumbnail_after <Badge type="info" text="Event" />

### is_secret_list_thumbnail <Badge type="info" text="Replace" />

### get_list_thumbnail_info <Badge type="info" text="Replace" />

### get_file_thumbnail_tags <Badge type="info" text="Replace" />

### thumbnail_is_animated_gif_content <Badge type="info" text="Replace" />

### get_view_thumbnail <Badge type="info" text="Replace" />

### thumb_image_tag <Badge type="info" text="Replace" />

### thumb_view_image_href <Badge type="info" text="Replace" />

---

## Event

### adm_auth_delete_member <Badge type="info" text="Event" />

### adm_auth_update <Badge type="info" text="Event" />

### admin_config_form_update <Badge type="info" text="Event" />

### admin_content_created <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_content_updated <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_content_deleted <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_mail_deleted <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_mail_created <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_mail_updated <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_newwin_created <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_newwin_updated <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_newwin_deleted <Badge type="info" text="Event" /> <Badge type="warning" text="Since v5.5.8.3.2" />

### admin_menu_list_update <Badge type="info" text="Event" />

### adm_theme_update <Badge type="info" text="Event" />

### admin_request_handler\_\* <Badge type="info" text="Event" />

### admin_get_page\_\* <Badge type="info" text="Event" />

### password_lost_certify_before <Badge type="info" text="Event" />

### password_lost_certify_after <Badge type="info" text="Event" />

### password_lost2_after <Badge type="info" text="Event" />

### mail_send_result <Badge type="info" text="Event" />

### is_animated_gif_after <Badge type="info" text="Event" />

## Replace

### adm_index_addtional_content_before <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.9" />

### adm_index_addtional_content_after <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.9" />

### get_editor_upload_url <Badge type="info" text="Replace" /> <Badge type="warning" text="Updated v5.5.8.3.2" />

### head_css_url <Badge type="info" text="Replace" />

### admin_amenu <Badge type="info" text="Replace" />

### admin_menu <Badge type="info" text="Replace" />

### safe_admin_add_script_boolean <Badge type="info" text="Replace" />

### admin_copy_update_file <Badge type="info" text="Replace" />

### admin_dbupgrade <Badge type="info" text="Replace" />

### theme_config_load_keys <Badge type="info" text="Replace" />

### content_admin_button_html <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### content_head_image_html <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### content_tail_image_html <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.2.6" />

### delete_file_path <Badge type="info" text="Replace" />

### download_file_exist_check <Badge type="info" text="Replace" />

### bbs_move_update_file <Badge type="info" text="Replace" />

### exists_view_image <Badge type="info" text="Replace" />

### get_view_imagesize <Badge type="info" text="Replace" />

### get_editor_content_url <Badge type="info" text="Replace" />

### get_file_board_url <Badge type="info" text="Replace" />

### write_update_upload_file <Badge type="info" text="Replace" />

### write_update_upload_array <Badge type="info" text="Replace" />

### write_update_mail_list <Badge type="info" text="Replace" />

### write_update_move_url <Badge type="info" text="Replace" />

### invalid_password <Badge type="info" text="Replace" />

### get_cachemanage_instance <Badge type="info" text="Replace" />

### g5_get_cache_replace <Badge type="info" text="Replace" />

### g5_delete_cache_by_prefix <Badge type="info" text="Replace" />

### set_cookie_params <Badge type="info" text="Replace" />

### url_auto_link <Badge type="info" text="Replace" />

### get_files <Badge type="info" text="Replace" />

### get_group_db_cache <Badge type="info" text="Replace" />

### get_group <Badge type="info" text="Replace" />

### ss_mb_key_user_agent <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.10" />

### html_process_css_files <Badge type="info" text="Replace" />

### html_process_script_files <Badge type="info" text="Replace" />

### html_process_add_meta <Badge type="info" text="Replace" />

### googl_short_url <Badge type="info" text="Replace" /> <Badge type="danger" text="Deprecated" />

### check_url_host_before <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.1" />

### check_same_url_host <Badge type="info" text="Replace" /> <Badge type="warning" text="Since v5.5.8.1" />

### get_menu_db_cache <Badge type="info" text="Replace" />

### get_menu_db <Badge type="info" text="Replace" />

### get_class_encrypt <Badge type="info" text="Replace" />

### get_permission_debug_show <Badge type="info" text="Replace" />

### mailer <Badge type="info" text="Replace" />

### mail_options <Badge type="info" text="Replace" />

### outlogin_content <Badge type="info" text="Replace" />

### get_editor_filename <Badge type="info" text="Replace" />

## shop

```
get_item_image_url
shop_item_qa_created
shop_item_qa_updated
shop_item_qa_deleted
shop_item_use_created
shop_item_use_updated
shop_item_use_deleted
shop_item_image_exists
shop_item_image_tag
shop_admin_category_created
shop_admin_category_updated
shop_admin_category_deleted
shop_admin_configformupdate <Badge type="warning" text="Since v5.5.3" />
shop_admin_itemcopy <Badge type="warning" text="Since v5.5.8.3.3" />
shop_admin_delete_item_file
shop_admin_event_created
shop_admin_event_updated
shop_admin_event_deleted
shop_admin_itemformupdate
shop_admin_item_qa_updated
shop_admin_item_qa_deleted
shop_admin_item_use_updated
shop_admin_item_use_deleted
shop_orderform_easypay_buttons
shop_it_head_html
shop_it_tail_html
shop_it_mobile_head_html
shop_it_mobile_tail_html
get_shop_category_array
get_it_image_tag
get_it_thumbnail_tag
is_exists_item_file
get_image_by_item
```
