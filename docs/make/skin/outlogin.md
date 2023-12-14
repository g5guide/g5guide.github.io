---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/skin/outlogin.html
description: 아웃로그인 위젯은 그누보드의 회원 로그인 상태에 따라 로그인 폼과 회원의 간략한 정보를 표시한다.
---

# 아웃로그인 위젯 스킨

아웃로그인 스킨은 로그인 상태에 따라 파일이 나뉘어있다.

| 파일명              | 설명                                               |
| ------------------- | -------------------------------------------------- |
| outlogin.skin.1.php | 로그인하지 않은 상태. 아이디/비밀번호 입력 폼 표시 |
| outlogin.skin.2.php | 로그인 후 회원의 정보 등을 표시                    |

## 로그인 폼 (outlogin.skin.1.php)

로그인 하지 않은 상태에서 보여지는 스킨이다. 로그인을 위해 아이디, 패스워드 입력 폼을 표시한다.

| 변수                   | 타임     | 설명                            |
| ---------------------- | -------- | ------------------------------- |
| `$outlogin_action_url` | `string` | 폼 전송 URL                     |
| `$outlogin_url`        | `string` | 로그인 처리 후 이동할 URL       |
| `$outlogin_skin_url`   | `string` | 스킨 폴더의 경로를 가리키는 URL |

<!-- prettier-ignore -->
```html
<?php
add_stylesheet('<link rel="stylesheet" href="' . $outlogin_skin_url . '/outlogin.css">');
?>

<form action="<?= $outlogin_action_url ?>" method="post">
    <input type="hidden" name="url" value="<?= $outlogin_url ?>" />

    <!-- 아이디 -->
    <input type="text" name="mb_id" required placeholder="아이디" autocomplete="username" />

    <!-- 비밀번호 -->
    <input type="password" name="mb_password" required placeholder="비밀번호" autocomplete="current-password" />

    <!-- 자동로그인 체크박스 -->
    <input type="checkbox" name="auto_login" value="1" />

    <!-- 로그인 버튼 -->
    <button type="submit">로그인</button>
</form>

<!-- 회원가입 링크 -->
<a href="<?= G5_BBS_URL ?>/register.php">회원가입</a>

<!-- 아이디/패스워드 찾기 링크 -->
<a href="<?= G5_BBS_URL ?>/password_lost.php">ID/PW 찾기</a>
```

::: tip 권장 `autocomplete` 속성
브라우저의 자동완성 기능 또는 패스워드 관리 프로그램에게 로그인 아이디와 비밀번호 입력 필드를 알려주기위해 `autocomplete` 속성 사용을 권장한다.

- `mb_id` 필드에는 `autocomplete="username"` 속성을 추가
- `mb_password` 필드에는 `autocomplete="current-password"` 속성을 추가

:::

::: details 폼 전송 시 `outlogin1` 이벤트

로그인 폼에서는 폼을 전송하기 전에 `jQuery.triggerHandler()`로 `outlogin1` 이벤트를 발생시킨다. 잘 알려지거나 사용되는 규격은 아니므로 반드시 구현해야하는 것은 아니다. 이를 구현하려면 아래와 같이 코드를 추가하면 된다.

<!-- prettier-ignore -->
```html
<!-- `<form>` 태그에 `name` 속성을 추가 -->
<form name="foutlogin">
    <!-- ... -->
</form>

<!-- 폼 전송 이벤트 -->
<script>
const loginFormName = 'foutlogin';
document.getElementsByName(loginFormName).addEventListener('submit', function (e) {
    e.preventDefault();

    // 폼 검사. 조건에 충족하지 않으면 `return false;`로 로그인을 중단시킬 수 있다
    // if (...) {
    //     alert('이러저러해서 로그인 실패');
    //     return false;
    // }

    // `outlogin1` 이벤트 트리거
    if ($(document.body).triggerHandler('outlogin1', [e.target, loginFormName]) !== false) {
        e.target.submit();
    }
});
</script>
```

이 이벤트를 활용하려면...

```js
$(document.body).on("outlogin1", function (e, form, formName) {
  if (...) {
      return false;
  }

  return true;
});
```

:::

### 폼 필드

`mb_id`, `mb_password` 필드는 필수 항목이다. `auto_login` 필드는 자동로그인 기능 지원을 위해서 필요하며, `url` 필드는 로그인 처리 후 로그인을 시도한 페이지를 유지하기 위해서 필요하므로 권장한다. `url` 필드가 없으면 로그인 처리 후 사이트의 첫 페이지로 이동된다.

| 필드명        | 필드 타입 | 필수 | 설명                                                                          |
| ------------- | --------- | ---- | ----------------------------------------------------------------------------- |
| `mb_id`       | text      | 필수 | 아이디                                                                        |
| `mb_password` | password  | 필수 | 비밀번호                                                                      |
| `auto_login`  | checkbox  | 권장 | 자동로그인 체크박스.<br>`value` 속성의 값은 `1`이어야 한다.                   |
| `url`         | hidden    | 권장 | 로그인 처리 후 이동할 URL.<br>`$outlogin_url` 변수 또는 URL을 지정할 수 있다. |

## 회원 정보 (outlogin.skin.2.php)

로그인이 완료된 후 회원의 간략한 정보를 표시하는 스킨이다.

<!-- prettier-ignore -->
```html
<?php
add_stylesheet('<link rel="stylesheet" href="' . $outlogin_skin_url . '/outlogin.css">');
?>

<section>
    <!-- 프로필 이미지 -->
    <?= get_member_profile_img($member['mb_id']); ?>

    <!-- 닉네임 -->
    <?= $nick ?>님

    <!-- 정보수정 링크 -->
    <a href="<?= G5_BBS_URL ?>/member_confirm.php?url=register_form.php">정보수정</a>

    <!-- 로그아웃 링크 -->
    <a href="<?= G5_BBS_URL ?>/logout.php">로그아웃</a>
</section>
```

| 변수                                              | 타입     | 설명                                                       |
| ------------------------------------------------- | -------- | ---------------------------------------------------------- |
| `$is_admin`                                       | `string` | 관리 권한의 등급                                           |
| `$is_auth`                                        | `bool`   | 일부 관리 권한 여부                                        |
| `$nick`                                           | `string` | 닉네임                                                     |
| `$point`                                          | `string` | 포인트                                                     |
| `$memo_not_read`<br>또는 `$member['mb_memo_cnt']` | `string` | 읽지않은 쪽지 수                                           |
| `$mb_scrap_cnt`<br>또는 `$member['mb_scrap_cnt']` | `string` | 스크랩한 항목 수                                           |
| `$member['mb_id']`                                | `string` | 아이디                                                     |
| `$member['mb_name']`                              | `string` | 이름                                                       |
| `$member['mb_nick']`                              | `string` | 닉네임                                                     |
| `$member['mb_level']`                             | `string` | 레벨                                                       |
| `$member['mb_point']`                             | `string` | 포인트                                                     |
| `$member['mb_open']`                              | `string` | 정보(프로필) 공개 여부.<br>`1`이면 공개                    |
| `$member['mb_adult']`                             | `string` | 성인인증 여부.<br>`1` 성인 인증 됨, `0` 미인증             |
| `$member['mb_certify']`                           | `string` | 본인인증 여부.<br>값이 비어있으면 미인증, 값이 있으면 인증 |
| `$member['mb_datetime']`                          | `string` | 가입일시 (년-월-일 시:분:초)                               |
| `$outlogin_skin_url`                              | `string` | 스킨 폴더의 경로를 가리키는 URL                            |

::: warning 민감한 정보
회원의 개인정보 등 민감한 정보는 노출되지 않도록 주의해야 한다. `$member['mb_memo']`는 관리자만 봐야할 정보이므로 회원에게 노출되지 않도록 주의해야 한다.
:::

### 프로필 이미지

회원의 프로필 이미지를 표시하려면 `get_member_profile_img()` 함수를 사용하면 된다.
프로필 이미지 주소를 담은 `<img>` 태그를 반환한다.

<!-- prettier-ignore -->
```html
<?= get_member_profile_img($member['mb_id']); ?>

<!-- 아래와 같은 코드를 출력한다 -->
<img src="https://host/path/to/image" alt="profile_image">
```

::: details `get_member_profile_img()` 함수
`get_member_profile_img()` 함수는 아래와 같은 매개변수를 사용할 수 있다.

```php
get_member_profile_img(회원ID, 너비, 높이, alt 속성값, title 속성 값);

// 예시: 이미지를 100x100 크기로 표시하고, alt 속성값은 "프로필 이미지"로 지정한다
echo get_member_profile_img($member['mb_id'], 100, 100, '프로필 이미지');

// 다음과 출력된다
<img src="https://host/path/to/image" width="100" height="100" alt="프로필 이미지">
```

:::

### 포인트

<!-- prettier-ignore -->
```html
<?php if ($config['cf_use_point']) { ?>
    <a href="<?= G5_BBS_URL ?>/point.php" class="win_point">포인트</a>
    <?= $point ?> 점
<?php } ?>
```

- `$config['cf_use_point']` 전역변수로 포인트 기능 사용 여부를 확인할 수 있다
- `<?= G5_BBS_URL ?>/point.php` 포인트 페이지로 이동하는 링크
- 포인트 페이지를 팝업창으로 열려면 `<a>` 태그에 `class="win_point"` 속성을 추가하면 된다

### 쪽지

`class="win_memo"` 속성을 있으면 쪽지 페이지를 팝업창으로 열 수 있다.

<!-- prettier-ignore -->
```html
<a href="<?= G5_BBS_URL ?>/memo.php" class="win_memo">
    새로운 쪽지: <?= $memo_not_read ?>개
</a>
```

`$memo_not_read` 변수는 자릿수 구분된 문자열이다. 원본 값은 `$member['mb_memo_cnt']`(string) 이다.

### 스크랩

`class="win_scrap"` 속성을 있으면 스크랩 페이지를 팝업창으로 열 수 있다.

<!-- prettier-ignore -->
```html
<a href="<?= G5_BBS_URL ?>/scrap.php" class="win_scrap">
    스크랩: <?= $mb_scrap_cnt ?>개
</a>
```

`$mb_scrap_cnt` 변수는 자릿수 구분된 문자열이다. 원본 값은 `$member['mb_scrap_cnt']`(string) 이다.
