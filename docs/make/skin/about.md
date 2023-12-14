---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/skin/about.html
description: 그누보드의 게시판 스킨을 만들기 위해 알아야 할 게시판 스킨의 구조와 스킨에서 사용할 수 있는 변수를 확인하고 사용해야 한다.
---

# 스킨

스킨은 게시판, 회원, 최신글 위젯 등의 디자인(UI)을 표현하는데 사용된다.

그누보드 스킨은 `skin` 폴더와 `mobile/skin`에 PC와 모바일 스킨으로 나뉜다. `skin` 폴더 밑에 `board`(게시판), `latest`(최신글) 등 분류별로 나뉘어져있고 분류 밑에 개별 스킨을 넣는다.

```shell{2,18}
.
├── skin # 스킨이 설치된 폴더
│   ├── board # 게시판 스킨들의 폴더
│   │   └── basic # `basic` 이름을 가진 게시판 스킨
│   ├── connect # 현재 접속자 페이지 스킨
│   ├── content # 페이지 컨텐츠 스킨
│   ├── faq # FAQ 스킨
│   ├── latest # 최신글 스킨
│   ├── member # 회원페이지 스킨
│   ├── new # 새글 페이지 스킨
│   ├── outlogin # 로그인 폼 스킨
│   ├── poll # 설문조사 스킨
│   ├── popular # 인기검색어 스킨
│   ├── qa # 1:1문의 스킨
│   ├── search # 검색 결과 스킨
│   └── visit # 접속통계 페이지 스킨
└── mobile # 모바일 기기용 스킨
    └── skin # 모바일 기기용 스킨. 위 skin 폴더 구조와 같음
        ├── board
        │   └── basic # `basic` 이름을 가진 모바일용 게시판 스킨
        ├── ...
        └── visit
```


테마, 스킨 만들기는 HTML, PHP 그리고 JS와 CSS를 이용하여 만들 수 있다. 이 가이드에서는 HTML, PHP를 일정 수준 이상 이해하고 있다고 가정하고 설명한다.