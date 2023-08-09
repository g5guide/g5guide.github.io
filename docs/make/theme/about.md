---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/theme/about.html
description: 그누보드 테마는 사이트의 레이아웃을 꾸미는데 사용된다. 게시판 스킨, 최신글 위젯 스킨 등을 포함시킬 수 있어서 사이트 레이아웃과 어울리는 스킨을 함께 배포하기에 적합하다.
---

# 테마 개요

그누보드 테마는 사이트의 레이아웃을 꾸미는데 사용된다. 게시판 스킨, 최신글 위젯 스킨 등을 포함시킬 수 있어서 사이트 레이아웃과 어울리는 스킨을 함께 배포하기에 적합하다.

`basic` 테마를 내장하고 있으며, 그누보드를 설치할 때 `basic` 테마가 기본으로 적용된다. `theme` 폴더에 테마 파일을 담고 있으며, `basic` 테마를 예시로 한 구조는 아래와 같다.

```txt{2}
theme // 테마가 설치된 폴더
└── basic // 내장된 `basic` 테마의 폴더
       ├── css
       ├── img
       ├── js
       ├── skin
       │   ├── board // 게시판 스킨들의 폴더
       │   ├── connect // 현재 접속자 페이지 스킨
       │   ├── content // 페이지 컨텐츠 스킨
       │   ├── faq // FAQ 스킨
       │   ├── latest // 최신글 스킨
       │   ├── member // 회원페이지 스킨
       │   ├── new // 새글 페이지 스킨
       │   ├── outlogin // 로그인 폼 스킨
       │   ├── poll // 설문조사 스킨
       │   ├── popular // 인기검색어 스킨
       │   ├── qa // QnA 스킨
       │   ├── search // 검색 결과 스킨
       │   └── visit // 접속통계 페이지 스킨
       ├── mobile // 모바일 기기용 레이아웃 및 스킨
       │   ├── skin // 모바일 기기용 스킨. 위 skin 폴더 구조와 같음
       │   │   ├── board
       │   │   ├── ...
       │   │   └── visit
       │   ├── _common.php
       │   ├── group.php
       │   ├── head.php
       │   ├── index.php
       │   └── tail.php
       ├── _common.php
       ├── head.php // [필수] 레이아웃 상단부 파일
       ├── head.sub.php
       ├── index.php // [필수] index 페이지 파일
       ├── readme.txt // [필수] 테마 정보 파일
       ├── screenshot.png
       ├── tail.php // [필수] 레이아웃 하단부 파일
       ├── tail.sub.php
       └── theme.config.php // [필수] 테마 설정 파일
```

## 주요 구성 파일

```txt{4,6,7,9,11}
theme // 테마가 설치되는 폴더
└── basic // 내장된 `basic` 테마의 폴더
       ├── _common.php
       ├── head.php // [필수] 레이아웃 상단부 파일
       ├── head.sub.php
       ├── index.php // [필수] index 페이지 파일
       ├── readme.txt // [필수] 테마 정보 파일
       ├── screenshot.png
       ├── tail.php // [필수] 레이아웃 하단부 파일
       ├── tail.sub.php
       └── theme.config.php // [필수] 테마 설정 파일
```

### 테마 정보 (readme.txt)

`readme.txt` 파일명으로 테마의 이름 및 제작자 정보를 담고 있다.

- Theme Name : 테마 이름
- Theme URI : 테마의 상세 정보나 저장소 URL 등
- Maker : 제작자 이름
- Maker URI : 제작자 웹사이트 등
- Version : 테마의 버전
  - [유의적 버전](https://semver.org/lang/ko/)을 사용하자
- Detail : 테마를 설명하는 내용. 줄바꿈하여 작성하면 안 된다
- License : 라이선스의 종류 및 버전 또는 사용권 정보의 간략한 설명
- License URI : 라이선스 전체 내용을 확인할 수 있는 URL

아래는 그누보드에 내장된 `basic` 테마의 readme.txt 파일이며 이를 사용하여 내용을 변경하여 사용하면 된다.

```txt
Theme Name: 베이직
Theme URI: http://theme.sir.kr/gnuboard5/demo/basic
Maker: SIR
Maker URI: http://sir.kr
Version: 3.0.0
Detail: 베이직 테마는  SIR에서 제공하는 그누보드5 테마입니다. 베이직 테마는 웹표준 및 접근성을 준수합니다.
License: GNU LESSER GENERAL PUBLIC LICENSE Version 2.1
License URI: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
```

::: warning 작성 시 주의
`YAML`, `JSON`, `XML` 등 표준화된 포맷을 사용하고 있지 않으며, 줄바꿈과 정해진 라벨로 구분되므로 `Detail` 항목 등에 긴 내용을 포함한다해도 줄바꿈하여 작성하면 안 된다.

각 줄의 시작부터 콜론(`:`)까지 포함한 라벨은 공백을 포함한 어떠한 형태로도 변경하지않고 그대로 사용해야 한다.
:::

### 테마 설정 (theme.config.php)

`theme.config.php` 파일을 사용하며, 상세 내용은 [테마 설정](/make/theme/config) 페이지를 참고하자.

### 사이트 레이아웃

- `head.sub.php` : `<html> <head /> <body>`
  - `head.php` : 메뉴 등 사이트 헤더 부분
    - 게시판 등 컨텐츠가 출력되는 부분
  - `tail.php` : 푸터 등 사이트 하단 부분
- `tail.sub.php` : `</body> </html>`

[레이아웃](/make/theme/layout)

## 스킨

테마는 게시판, 회원 스킨 등을 포함할 수 있으며 `skin` 폴더와 `mobile/skin`에 PC와 모바일 스킨으로 나뉜다. `skin` 폴더 밑에 `board`(게시판), `latest`(최근글) 등 분류별로 나뉘어져있고 분류 밑에 개별 스킨을 넣는다.

```txt{3,5,19,21}
theme // 테마가 설치된 폴더
└── basic // 내장된 `basic` 테마의 폴더
       ├── skin
       │   ├── board // 게시판 스킨들의 폴더
       │   │   └── basic // `basic` 이름을 가진 게시판 스킨
       │   ├── connect // 현재 접속자 페이지 스킨
       │   ├── content // 페이지 컨텐츠 스킨
       │   ├── faq // FAQ 스킨
       │   ├── latest // 최근글 스킨
       │   ├── member // 회원페이지 스킨
       │   ├── new // 새글 페이지 스킨
       │   ├── outlogin // 로그인 폼 스킨
       │   ├── poll // 설문조사 스킨
       │   ├── popular // 인기검색어 스킨
       │   ├── qa // QnA 스킨
       │   ├── search // 검색 결과 스킨
       │   └── visit // 접속통계 페이지 스킨
       └── mobile // 모바일 기기용 레이아웃 및 스킨
           └── skin // 모바일 기기용 스킨. 위 skin 폴더 구조와 같음
               ├── board
               │   └── basic // `basic` 이름을 가진 모바일용 게시판 스킨
               ├── ...
               └── visit
```

::: tip 기본 스킨의 이름(폴더명)
테마에 포함된 스킨은 `theme/white_board`처럼 지정되는데, `theme/`로 시작하면 현재 적용된 테마의 폴더내에서 찾게되므로 다른 테마로 변경했을 때 해당 테마에 `white_board` 스킨이 없다면 잘못된 경로를 나타낼 수 있다. 이는 사용자가 스킨을 다시 지정하기 전까지 오류를 발생시킬 수 있다.

그누보드에서는 기본 스킨의 이름으로 `basic`을 주로 사용하므로 테마에 포함된 스킨의 폴더명을 `basic`으로 짓는 것이 무난하며 이런 문제를 최소화 할 수 있다. 꼭 따라야 할 규칙은 아니지만 사용자의 혼란을 줄이는데 도움이 된다.
:::

---

::: info 테마 기능은...
그누보드 5.1 버전에서 테마 기능이 추가되었고, 그 이전까지는 사이트의 디자인을 변경하기 위해서는 그누보드 배포판에 포함된 코드를 수정해야만했고, 이는 그누보드를 업데이트하는데 가장 큰 걸림돌이었다. 디자인 변경을 위해서 수정한 파일들 때문에 잦은 보안패치를 적용하기 어려워져 그누보드로 제작된 사이트의 보안문제를 악화시키는 주요 원인이었다.
:::

::: info
버퍼는 `tail.sub.php` 파일에서 `html_end()` 함수를 호출하여 출력되므로 `tail.sub.php` 파일을 수정하거나 테마를 만들 때 잊으면 안 된다.
:::

- G5_THEME_DEVICE
- 그누보드에서 사용하는 전역변수
