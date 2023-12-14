---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/skin/board.html
description: 그누보드의 게시판 스킨을 만들기 위해 알아야 할 게시판 스킨의 구조와 스킨에서 사용할 수 있는 변수를 확인하고 사용해야 한다.
---

# 게시판 글 목록 스킨

글 목록 스킨은 `list.skin.php` 파일을 사용한다. 글 목록이 담긴 전역변수 `$list` 배열을 이용해 목록을 출력할 수 있다.

글 목록을 출력하는 주요 기능을 예시한 코드는 다음과 같다.

```html
<table>
    <thead>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
        </tr>
    </thead>

    <tbody>
    <?php foreach($list as $idx => $article) { ?>
        <tr>
            <td><?= $article['num'] ?></dt>
            <td>
                <!-- 카테고리 -->
                <?php if ($is_category) { ?>
                    <a href="<?= $article['ca_name_href'] ?>"><?= $article['ca_name'] ?></a>
                <?php } ?>

                <!-- 제목 -->
                <a href="<?= $article['href'] ?>"><?= $article['subject'] ?></a>

                <!-- 댓글 수 -->
                <?php if (!!$article['wr_comment']) { ?>
                    댓글(<?= number_format((int) $article['wr_comment']) ?>)
                <?php } ?>

                <!-- 추천 수 -->
                <?php if ($is_good && !!$article['wr_good']) { ?>
                    추천(<?= $article['wr_good'] ?>)
                <?php } ?>
            </dt>
            <td><?= $article['name'] ?></dt>
        </tr>
    <?php } ?>
    </tbody>
</table>
```

::: details `for`문으로 다루기

그누보드에 포함된 `basic` 스킨은 아래처럼 `for()`문을 사용한다. 가독성이 떨어지고 중첩된 반복문에서 실수를 유발할 수 있기 때문에 위 예시처럼 `foreach()` 반복문을 사용하는 것을 권장한다.

```php
<?php for ($i = 0; $i < count($list); $i++) { ?>
    ...
    제목: <?= $list[$i]['subject'] ?>
    ...
<?php } ?>
```

:::

## 글 목록

### 제목과 링크

`subject`에는 글 제목, `href`에는 글 주소가 담겨있다.

```html
<!-- 예시: 글 제목에 링크 걸기 -->
<a href="<?= $article['href'] ?>">
  <?= $article['subject'] ?>
</a>
```

::: info
`subject`에는 게시판 검색 시 제목에서 검색어 강조를 위한 `<b>` 태그가 포함되어 있다. 검색 결과를 표시하기 위해 `subject`를 사용하는 것을 권장한다.

```html
<!-- 원본 제목: $article['wr_subject'] -->
강조 표시된 제목

<!-- 검색한 '표시'가 강조된 제목: $article['subject'] -->
강조 <b class="sch_word">표시</b>된 제목
```

:::

### 카테고리

```php
카테고리 이름: <?= $article['ca_name'] ?>
```

`$is_category`(bool) 전역변수로 카테고리 사용 여부를 확인하여 출력

```php
<?php if ($is_category) { ?>
    카테고리 이름: <?= $article['ca_name'] ?>
<?php } ?>
```

`ca_name_href` 키로 카테고리로 검색하는 링크를 걸 수 있다. 게시판 검색 기능으로 카테고리 명칭으로 검색한 글 목록을 표시한다.

```php
<a href="<?= $article['ca_name_href'] ?>">
    <?= $article['ca_name'] ?>
</a>
```

### 작성자

`name`에는 글쓴이의 정보를 보거나 부가 기능을 위한 메뉴를 표시하는 "사이드뷰" 기능을 위해 `<span>` 태그로 감싼 메뉴가 포함되어 있다. 사이드뷰 태그가 포함되지 않은 원본 이름은 `wr_name`에 담겨있다.

```php
작성자: <?= $article['name'] ?>
작성자: <?= $article['wr_name'] ?>

<!-- 출력 -->
작성자: <span ...>작성자이름</span>
작성자: 작성자이름
```

### 작성일시

작성일시는 `wr_datetime`과 `datetime`, `datetime2`로 구분되어 날짜 표시 형식을 다르게 표시할 수 있다. `datetime2`는 작성 당일에는 `시:분`으로 표시되며, 작성 당일이 지난 글은 `월-일`로 표시된다.

```php
작성일(년-월-일 시-분-초): <?= $article['wr_datetime'] ?>
작성일(년-월-일): <?= $article['datetime'] ?>
작성일(가변): <?= $article['datetime2'] ?>

<!-- 출력 -->
작성일(년-월-일 시-분-초): 2023-12-31 23:59:59
작성일(년-월-일): 2023-12-31
작성일(가변): 12-31 또는 23:59
```

::: details 글 수정일시는 제공하지 않음
그누보드는 글이 수정된 일시를 저장하지 않는다. 글이 수정되었는지 알 수 없다. [그누보드 이슈 #227](https://github.com/gnuboard/gnuboard5/issues/227)
:::

### 조회 수

조회 수는 1천 단위 이상일 때 읽기 쉽게 표시하기 위해 `number_format()` 함수를 사용하면 좋다.

```php
조회수: <?= $article['wr_hit'] ?>
조회수: <?= number_format((float) $article['wr_hit']) ?>

<!-- 출력 -->
조회수: 100010
조회수: 100,010
```

### 추천, 비추천

`$is_good`(bool), `$is_nogood`(bool)으로 추천, 비추천 기능의 활성화 여부를 확인하고 표시하는 것이 좋다.

```php
<?php if ($is_good) { ?>
    추천 수: <?= $article['wr_good'] ?>
<?php } ?>

<?php if ($is_nogood) { ?>
    비추천 수: <?= $article['wr_nogood'] ?>
<?php } ?>
```

기능이 활성화 되어있고 추천/비추천 수가 있을 때(1 이상)만 표시하려면...

```php
<?php if ($is_good && !!$article['wr_good']) { ?>
    추천 수: <?= $article['wr_good'] ?>
<?php } ?>

<?php if ($is_nogood && !!$article['wr_nogood']) { ?>
    비추천 수: <?= $article['wr_nogood'] ?>
<?php } ?>
```

### 댓글

```php
댓글 수 : <?= $article['wr_comment'] ?>
```

댓글이 있는지 구분하려면 `wr_comment` 값을 확인하면 된다.

```php
<?php if (!!$article['wr_comment']) { ?>
    댓글 수: <?= $article['wr_comment'] ?>
<?php } ?>
```

### 기타

---

위 예시에서 `foreach()` 반복문으로 `$list`를 순회하면서 `$article`에 담긴 변수를 이용해 글 목록을 출력할 수 있다.

| 키                 | 타입   | 설명                                                                 |
| ------------------ | ------ | -------------------------------------------------------------------- |
| `name`             | string | 글 작성자 이름 (사이드뷰 기능이 포함)                                |
| `wr_name`          | string | 글 작성자 이름 (원본)                                                |
| `datetime`         | string | 글 작성일 (년-월-일)                                                 |
| `datetime2`        | string | 글 작성일 (가변. `월-일` 또는 `시:분`)                               |
| `wr_datetime`      | string | 글 작성일시 (년-월-일 시:분:초)                                      |
| `last`             | string | 최근 댓글의 작성일 (년-월-일)                                        |
| `last2`            | string | 최근 댓글의 작성일 (가변. `월-일` 또는 `시:분`)                      |
| `wr_last`          | string | 최근 댓글의 작성일시 (년-월-일 시:분:초)                             |
| `wr_hit`           | string | 조회 수                                                              |
| `wr_good`          | string | 추천 수                                                              |
| `wr_nogood`        | string | 비추천 수                                                            |
| `wr_comment`       | string | 댓글 수                                                              |
| `subject`          | string | 글 제목 (검색어 강조 표시)                                           |
| `wr_subject`       | string | 글 제목 (원본)                                                       |
| `href`             | string | 글 주소                                                              |
| `wr_id`            | string | 글의 고유 번호                                                       |
| `ca_name`          | string | 글이 속한 카테고리 이름                                              |
| `wr_subject`       | string | 글 제목                                                              |
| `wr_name`          | string | 글 작성자 이름                                                       |
| `wr_good`          | string | 추천 수                                                              |
| `wr_nogood`        | string | 비추천 수                                                            |
| `wr_hit`           | string | 조회 수                                                              |
| `wr_num`           | string | 글 정렬 번호(음수)                                                   |
| `wr_reply`         | string | 답변글의 정렬.<br>비어있으면 답변글이 아니며, 값이 있다면 답변글이다 |
| `wr_parent`        | string | 답변글일 때 원글 번호                                                |
| `wr_is_comment`    | string | 댓글 여부. `1`이면 댓글, `0`이면 글(또는 답변글)                     |
| `wr_comment`       | string | 댓글 갯수                                                            |
| `wr_comment_reply` | string | 댓글의 답변글 여부                                                   |

::: info
`wr_last`는 마지막에 작성된 댓글의 작성일시이며, 마지막 댓글이 삭제되면 그 이전에 작성된 댓글의 작성일시로 변경되므로 이 값을 활용할 때 용도에 맞는지 주의해야 한다.
:::

```php
$list = array(
  0 => array(
    "wr_id" => "3028"
    "wr_num" => "-3013"
    "wr_reply" => ""
    "wr_parent" => "3028"
    "wr_is_comment" => "0"
    "wr_comment" => "0"
    "wr_comment_reply" => ""
    "ca_name" => "연예"
    "wr_option" => "html1"
    "wr_subject" => "3027"
    "wr_content" => "<p>3027302730273027</p>"
    "wr_seo_title" => "3027"
    "wr_link1" => ""
    "wr_link2" => ""
    "wr_link1_hit" => "0"
    "wr_link2_hit" => "0"
    "wr_hit" => "2"
    "wr_good" => "0"
    "wr_nogood" => "0"
    "mb_id" => "admin"
    "wr_password" => ""
    "wr_name" => "최고관리자"
    "wr_email" => "admin@domain.com"
    "wr_homepage" => ""
    "wr_datetime" => "2023-12-06 12:56:25"
    "wr_file" => "0"
    "wr_last" => "2023-12-06 12:56:25"
    "wr_ip" => "::1"
    "wr_facebook_user" => ""
    "wr_twitter_user" => ""
    "wr_1" => ""
    "wr_2" => ""
    "wr_3" => ""
    "wr_4" => ""
    "wr_5" => ""
    "wr_6" => ""
    "wr_7" => ""
    "wr_8" => ""
    "wr_9" => ""
    "wr_10" => ""
    "is_notice" => false
    "subject" => "3027"
    "comment_cnt" => ""
    "datetime" => "2023-12-06"
    "datetime2" => "12-06"
    "last" => "2023-12-06"
    "last2" => "12-06"
    "name" => ""
    "reply" => 0
    "icon_reply" => ""
    "icon_link" => ""
    "ca_name_href" => "https://kkigomi.duckdns.org/free?sca=%EC%97%B0%EC%98%88"
    "href" => "https://kkigomi.duckdns.org/free/3028"
    "comment_href" => "https://kkigomi.duckdns.org/free/3028"
    "icon_new" => ""
    "icon_hot" => ""
    "icon_secret" => ""
    "link" => array(
      1 => null
      2 => null
    )
    "link_href" => array:2 [
      1 => "https://kkigomi.duckdns.org/bbs/link.php?bo_table=free&amp;wr_id=3028&amp;no=1"
      2 => "https://kkigomi.duckdns.org/bbs/link.php?bo_table=free&amp;wr_id=3028&amp;no=2"
    ]
    "link_hit" => array:2 [
      1 => 0
      2 => 0
    ]
    "file" => array:1 [
      "count" => "0"
    ]
    "list_content" => "<p>3027302730273027</p>"
    "num" => 2817
  ]
]
```

## 목록 정렬

## 카테고리 목록

## 검색

## 페이징

| 전역변수        | 타입     | 설명                                                                                     |
| --------------- | -------- | ---------------------------------------------------------------------------------------- |
| `$total_count`  | `string` | 전체 또는 검색 결과의 게시물 수<br>카테고리를 선택했거나 검색 시 검색 결과의 게시물 수   |
| `$notice_count` | `int`    | 표시된 공지사항 수                                                                       |
| `$total_page`   | `float`  | 총 페이지 수                                                                             |
| `$page`         | `int`    | 현재 페이지 번호                                                                         |
| `$from_record`  | `int`    | 시작 열의 인덱스(0부터 시작)                                                             |
| `$write_pages`  | `string` | 페이지 이동 네비게이션<br>현재 페이지를 가리키고 다른 페이지로 이동하는 링크를 담은 HTML |

```php
게시물 수: <?= number_format((int) $total_count) ?>
공지사항 수: <?= number_format((int) $notice_count) ?>
전체 페이지 수: <?= number_format($total_page) ?>
현재 페이지: <?= number_format((int) $page) ?>
시작 열: <?= number_format((int) $from_record) ?>
```

::: tip `$total_count` 게시물 수
`$total_count` 전역변수는 카테고리를 선택했거나 검색 결과를 나타낼 때는 검색 결과의 게시물 수를 나타낸다. 검색 여부에 상관없이 전체 게시물 수를 나타내려면 `$board['bo_count_write']` 전역변수를 사용하면 된다.

```php
echo $total_count; // 전체 또는 검색 결과의 게시물 수
echo $board['bo_count_write']; // 전체 게시물 수
```

:::

::: details `$total_page`는 `float` 타입
`$total_page`전역변수는`float`타입이다. 소수점 이하를 올림 처리했지만 `float` 타입으로 유지되므로 필요에 따라 정수로 변환해 사용해야 한다.

```php
echo $total_page; // 1234.0
echo (int) $total_page; // 1234
echo number_format((float) $total_page); // 1,234
```

:::

::: details `$from_record` 시작 열
`$from_record`는 시작 열의 인덱스(`0`부터 시작)이다. 게시물을 10개씩 표시할 때 3페이지의 `$from_record`는 20이다.
:::

## 링크

글 쓰기 페이지 링크는 `$write_href` 전역변수

```php
<?php if ($write_href) { ?>
    <a href="<?= $write_href ?>">글 쓰기</a>
<?php } ?>
```

게시판 설정 링크는 `$admin_href` 전역변수

```php
<?php if ($admin_href) { ?>
    <a href="<?= $admin_href ?>">게시판 설정</a>
<?php } ?>
```

RSS 링크는 `$rss_href` 전역변수

```php
<?php if ($rss_href) { ?>
    <a href="<?= $rss_href ?>">RSS</a>
<?php } ?>
```

## 기타
