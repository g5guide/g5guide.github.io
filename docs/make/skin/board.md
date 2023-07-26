---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/skin/board.html
---
# 게시판 스킨


|파일명||
|---|---|
|list.skin.php|목록|
|view.skin.php|글 보기|
|view_comment.skin.php|댓글|
|write.skin.php|글 쓰기|


```
board
└── basic
    ├── img
    ├── list.skin.php
    ├── style.css
    ├── view.skin.php
    ├── view_comment.skin.php
    └── write.skin.php
```

## 목록

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
