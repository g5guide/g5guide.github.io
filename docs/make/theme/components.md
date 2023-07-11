# 메뉴 및 위젯

## 메뉴

관리페이지 '환경설정 -> 메뉴설정'에서 구성한 사이트 메뉴는 `get_menu_db()` 함수를 사용하여 배열로 목록을 가져올 수 있다.

```php
// PC용 메뉴
get_menu_db(0);

// 모바일용 메뉴
get_menu_db(1);

// get_menu_db() 함수가 반환하는 배열 형태
// 주요 속성 일부만 표시하고 나머지는 생략한 예시이다
// 메뉴 트리의 깊이가 최대 2단계이다
array(
  0 => array(
    'me_name' => '공지사항',
    'me_link' => 'https://.../bbs/board.php?bo_table=notice',
    'sub' => array(
    ),
  ),
  1 => array(
    'me_name' => '커뮤니티',
    'me_link' => 'https://.../bbs/group.php?gr_id=community',
    'sub' => array(
      0 => array(
        'me_name' => '자유게시판',
        'me_link' => 'https://.../bbs/board.php?bo_table=free',
        // 서브메뉴는 자신의 하위에 서브메뉴를 가질 수 없음
      ),
    ),
  ),
);
```

## 위젯

::: info
그누보드에서는 '위젯'이라는 용어를 사용하지 않지만, 이것들을 마땅히 부를 이름이 없다.
:::

### 최근게시물

```php
latest('theme/basic');
```

### 아웃로그인

```php
outlogin('theme/basic');
```

### 설문조사

```php
poll('theme/basic');
```

### 인기검색어

```php
popular('theme/basic');
```

### 접속자 통계

```php
visit('theme/basic');
```
