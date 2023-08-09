---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/theme/layout.html
description: 레이아웃은 그누보드 테마의 필수 요소이며, 웹사이트의 전체적인 구조를 결정한다. PC와 모바일 레이아웃을 포함할 수 있으며 반응형으로 구성할 수도 있다.
---

# 레이아웃

레이아웃은 테마의 필수 요소이다. 레이아웃은 스마트폰 등 소형 디스플레이 가진 기기를 위한 모바일 전용과 그 외의 공용 레이아웃으로 나눠 볼 수 있으며, 모바일 레이아웃은 필수 요소가 아니다.

공용 레이아웃은 반응형으로 대형 디스플레이부터 소형 디스플레이 기기까지 구성할 수 있으며, 필요에 따라 소형 디스플레이 기기인 모바일 레이아웃을 분리하여 구성할 수 있다.

```txt{3,10-17}
theme // 테마가 설치된 폴더
└── basic // 내장된 `basic` 테마의 폴더
       ├── mobile // 모바일 전용 레이아웃 및 스킨
       │   ├── _common.php
       │   ├── group.php
       │   ├── head.php
       │   ├── index.php
       │   └── tail.php
       ├── _common.php
       ├── head.php // [필수] 레이아웃 상단부 파일
       ├── head.sub.php
       ├── index.php // [필수] index 페이지 파일
       ├── tail.php // [필수] 레이아웃 하단부 파일
       ├── tail.sub.php
       └── theme.config.php // [필수] 테마 설정 파일
```

## 공용 레이아웃

### head, tail

`head.php`, `tail.php` 파일은 테마에 포함되어야 할 **필수 파일**이며, 컨텐츠 영역을 감싸는 사이트의 레이아웃 상단부와 하단부의 코드를 담는다. `<body>` 태그 안에 들어갈 사이트 레이아웃을 구성하는 코드를 작성할 수 있다.

```html{2-3,9-10}
<!-- head.php -->
<section>
    <main class="content-body">
<!-- head.php 끝 -->

        # head.php와 tail.php 파일 사이에 게시판 등 콘텐츠가 출력된다

<!-- tail.php -->
    </main>
</section>
<!-- tail.php 끝 -->
```

`head.php` 파일에는 보통 사이트의 로고, 메뉴 등을 포함하고, `tail.php`에는 사이트의 푸터 등으로 구성할 수 있다.

### head.sub, tail.sub

`head.sub.php`, `tail.sub.php` 파일은 위의 두 파일과는 달리 `<html>` 태그와 `<body>` 태그를 열고 닫는 코드를 담고 있다. `<body>` 안쪽의 컨텐츠를 제외한 HTML 구조는 이 파일에 작성해야 한다.

```html{2-9,17-18}
<!-- head.sub.php -->
<!doctype html>
<html>
    <head>
        <title>사이트 제목</title>
        <link />
        <script>...</script>
    </head>
    <body>
<!-- head.sub.php 끝 -->

        # head.php 출력
            # 게시판 등 콘텐츠 출력
        # tail.php 출력

<!-- tail.sub.php -->
    </body>
</html>
<!-- tail.sub.php 끝 -->
```

## 모바일 전용 레이아웃

소형 디스플레이 기기에서는 `mobile` 폴더의 파일이 대신 사용된다. 파일 구성이나 용도는 비슷하지만 `head.sub.php`, `tail.sub.php` 파일은 모바일 전용으로 따로 없으며 테마 루트의 파일이 공통으로 사용된다.

```txt{3,9-10}
theme // 테마가 설치된 폴더
└── basic // 내장된 `basic` 테마의 폴더
       └── mobile // 모바일 전용 레이아웃
       │   ├── _common.php
       │   ├── group.php
       │   ├── head.php
       │   ├── index.php
       │   └── tail.php
       ├── head.sub.php // 레이아웃 공통
       └── tail.sub.php // 레이아웃 공통
```

모바일 모드에서는 `/head.php` 파일 대신 `/mobile/head.php` 파일이 사용된다.

```html{1,4-5,11-12,15}
# /head.sub.php 출력

    <!-- /mobile/head.php -->
    <section>
        <main class="content-body">
    <!-- /mobile/head.php 끝 -->

            # 게시판 등 콘텐츠 출력

    <!-- /mobile/tail.php -->
        </main>
    </section>
    <!-- /mobile/tail.php 끝 -->

# /tail.sub.php 출력
```

모드에 따라 `head.sub.php`, `tail.sub.php` 파일의 코드가 달라야 한다면 `G5_IS_MOBILE` 상수를 사용하여 분기할 수 있다.

```php
if (G5_IS_MOBILE) {
    // 모바일 전용에서의 코드
} else {
    // 공용 레이아웃 코드
}
```
