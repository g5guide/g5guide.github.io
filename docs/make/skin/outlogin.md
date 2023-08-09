---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/skin/outlogin.html
description: 아웃로그인 위젯은 그누보드의 회원 로그인 상태에 따라 로그인 폼과 회원의 간략한 정보를 표시한다.
---

# 아웃로그인 스킨

아웃로그인 스킨은 로그인 상태에 따라 파일이 나뉘어있다.

| 파일명              | 설명                                               |
| ------------------- | -------------------------------------------------- |
| outlogin.skin.1.php | 로그인하지 않은 상태. 아이디/비밀번호 입력 폼 표시 |
| outlogin.skin.2.php | 로그인 후 회원의 정보 등을 표시                    |

## 로그인 폼

outlogin.skin.1.php

## 회원 정보

`$member` 전역변수를 사용하여 회원의 정보를 표시할 수 있다.

```php
$memberId = $member['mb_id'];
get_member_profile_img($memberId);
```

```php
// $member 변수에서 활용 가능한 배열 값
array(
  'mb_id' => 'admin', // 아이디
  'mb_name' => '최고관리자', // 이름
  'mb_nick' => '최고관리자', // 닉네임
  'mb_level' => '10', // 레벨
  'mb_point' => '299', // 포인트
  'mb_memo_call' => '', // 새로운 쪽지 수
  'mb_memo_cnt' => '0', // 총 쪽지 수
  'mb_scrap_cnt' => '0', // 스크랩한 항목 수
);
```
