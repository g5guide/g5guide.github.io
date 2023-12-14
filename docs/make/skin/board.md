---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/skin/board.html
description: 그누보드의 게시판 스킨을 만들기 위해 알아야 할 게시판 스킨의 구조와 스킨에서 사용할 수 있는 변수를 확인하고 사용해야 한다.
---

# 게시판 스킨

게시판 스킨은 게시판의 목록, 글 내용 보기, 댓글 및 댓글 쓰기, 글 쓰기 폼의 스킨으로 구성되어 있다.

```shell
skin
└── board
    └── basic # 'basic'이라는 이름을 가진 스킨 폴더
        ├── list.skin.php # 글 목록
        ├── view.skin.php # 글 내용 보기
        ├── view_comment.skin.php # 댓글 및 댓글 쓰기 폼
        └── write.skin.php # 글 쓰기
```

::: details 스킨을 구성하는 전체 파일
위 목록은 스킨을 구성하는 주요 파일이며, 아래는 화면의 구성과 특정 기능이 동작할 때 추가로 동작할 코드를 삽입할 수 있는 전체 파일의 목록이다.

```shell
skin
└── board
    └── basic
        ├── delete_all.head.skin.php # [!code ++]
        ├── delete_all.skin.php # [!code ++]
        ├── delete_all.tail.skin.php # [!code ++]
        ├── delete_comment.head.skin.php # [!code ++]
        ├── delete_comment.skin.php # [!code ++]
        ├── delete_comment.tail.skin.php # [!code ++]
        ├── delete.head.skin.php # [!code ++]
        ├── delete.skin.php # [!code ++]
        ├── delete.tail.skin.php # [!code ++]
        ├── download.head.skin.php # [!code ++]
        ├── download.skin.php # [!code ++]
        ├── download.tail.skin.php # [!code ++]
        ├── good.head.skin.php # [!code ++]
        ├── good.tail.skin.php # [!code ++]
        ├── list.skin.php
        ├── view_comment.head.skin.php # [!code ++]
        ├── view_comment.skin.php
        ├── view_comment.tail.skin.php # [!code ++]
        ├── view.head.skin.php # [!code ++]
        ├── view.skin.php
        ├── view.tail.skin.php # [!code ++]
        ├── write_comment_update.head.skin.php # [!code ++]
        ├── write_comment_update.skin.php # [!code ++]
        ├── write_comment_update.tail.skin.php # [!code ++]
        ├── write_update.head.skin.php # [!code ++]
        ├── write_update.skin.php # [!code ++]
        ├── write_update.tail.skin.php # [!code ++]
        ├── write.head.skin.php # [!code ++]
        ├── write.skin.php
        └── write.tail.skin.php # [!code ++]
```

:::

```php
$list;
$board;

$total_count;
$admin_href;
$rss_href;
$write_href;

$is_checkbox;
$is_good;
$is_nogood;
$width;
$is_category;
$category_option;

$sfl;
$stx;
$spt;
$sca;
$sst;
$sod;
$page;

$is_admin;
$is_auth;
$qstr2;
```
