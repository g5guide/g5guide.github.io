---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/theme.html
---
# 테마의 기본 구조

TBD

테마는 그누보드의 코드를 수정하지 않고 사이트 레이아웃과 게시판 등의 스킨을 변경하기위해 사용된다.

`theme` 폴더에 `basic` 테마를 포함하고 있으며, 그누보드를 설치할 때 `basic` 테마가 기본으로 적용된다.

::: info
테마 기능은 그누보드 5.1 버전에서 추가되었다. 그 이전까지는 그누보드의 코드를 수정해서 사이트 디자인을 바꿀 수 있었고 이런 방식은 그누보드의 업데이트를 어렵게하는 가장 큰 문제였다.

마찬가지로 `/theme/basic` 테마의 파일을 수정한다면 역시 같은 문제를 겪게되므로 `basic` 폴더를 복제하여 사용하는 것을 권장한다.
:::

::: info
버퍼는 `tail.sub.php` 파일에서 `html_end()` 함수를 호출하여 출력되므로 `tail.sub.php` 파일을 수정하거나 테마를 만들 때 잊으면 안 된다.
:::

## 테마 폴더

`theme` 폴더에는 `basic` 테마를 포함하고 있다.

```
.
└── theme // 테마 폴더
    └── basic // 내장된 기본 테마
        ├── css
        ├── img
        ├── js
        ├── mobile
        │   ├── shop
        │   └── skin
        │       └── ...
        ├── shop
        ├── skin
        │   ├── board
        │   │   └── basic
        │   ├── connect
        │   ├── content
        │   ├── faq
        │   ├── latest
        │   ├── member
        │   ├── new
        │   ├── outlogin
        │   ├── poll
        │   ├── popular
        │   ├── qa
        │   ├── search
        │   ├── shop
        │   └── visit
        ├── _common.php
        ├── head.php
        ├── head.sub.php
        ├── index.php
        ├── readme.txt
        ├── screenshot.png
        ├── tail.php
        ├── tail.sub.php
        └── theme.config.php
```
