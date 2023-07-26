---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/lifecycle.html
---
# 라이프 사이클

그누보드는 통일된 Request 처리를 지원하지 않으며 분산된 Endpoint를 사용한다. 요청에 따라 각자의 요청을 처리하고 대부분은 HTML로 응답한다.

대부분의 요청에 같은 초기화 로직이 실행되고 기능 확장을 위한 파일을 로드하므로 대부분의 요청에서 기능 확장을 적용할 수 있다.

::: info
HEAD, OPTIONS 등 HTTP Method에 따라 응답을 다르게 반환하지 않으며, `Accept` 헤더를 인식하여 처리하지 않는다.
:::

## 요청

- 사이트의 첫 페이지: `/index.php`
- 게시판 목록: `/bbs/bbs.php`
- 회원 가입 및 정보수정: `/bbs/register_form.php`
- ... 외 기타 수 십 곳

웹서버의 [URL Rewrite](/developers/path_and_url)를 사용할 수 있지만 Router는 지원하지 않고 각각의 파일로 보내주는 조금 정돈된 _Pretty URL_ 을 만들어주는 역할만 한다.

다양한 Endpoint로 인해 각 요청을 제어하기 어려워보이지만 아래 초기화 과정에서 "대부분의 요청"에 개입할 수 있다.

## 초기화

`/common.php` 파일에서 대부분의 초기화가 처리된다.

DB 연결과 설정, 주요 변수의 초기화가 이 파일에서 이뤄지며, 필수로 include로 사용하는 파일이다. `common.php` 파일을 직접 include하거나 `_common.php`, `head.php`, `_head.php` 및 `*.head.php` 등의 파일을 통해 간접적으로 로드하기도 한다.

그누보드의 환경설정을 로드하고 주요 변수들을 초기화한 후 현재 요청에 대한 회원, 게시판에 대한 정보를 가져온다. [트롤을 풀어 놓기](/developers/polluted_variables)도 하지만 최소한의 보안을 위한 처리도 한다.

[Hook](/developers/hook)을 비롯한 주요 내장 라이브러를 가져온다. 여기까지는 사용자나 개발자가 개입할 수 있는 기회가 없지만 이후에 확장성을 위한 `extend` 폴더의 파일을 불러온다([플러그인](/developers/make_plugin) 참고). 마지막으로 `common_header` Event Hook을 실행한다.

## 레이아웃 적용

요청한 파일을 앞뒤로 감싸는 `head`, `tail`과 같은 이름이 붙은 파일을 붙여서 화면에 출력한다. 레이아웃 HTML 코드를 출력하는 파일들이며 다음과 같은 구조를 가지고 있다.

- `head.sub.php` - HTML `<html><head /><body>`
  - `head.php` - 메뉴
    - 요청된 파일
  - `tail.php`
- `tail.sub.php` - HTML `</body></html>`

이런 형태로 요청된 파일을 감싸는 방식으로 head, tail 같은 파일이 HTML 구조를 출력한다. `head.sub.php` 파일은 html, body 태그를 열기까지의 역할을 하고 `tail.sub.php` 파일은 body, html 태그를 닫는 역할을 한다.

테마를 설정하지 않았다면 그누보드를 설치한 루트에 있는 파일들이 사용되고, 테마를 지정했다면 `/theme/{지정한테마}/` 경로에 있는 같은 이름의 파일로 대체되어 사용된다.

## 요청 페이지 처리

URL로 요청된 경로의 파일이 요청을 처리하게되며 대부분은 HTML 출력이다.
앞의 초기화 과정을 거치는 것 외에는 공통된 인터페이스는 제공하지 않는다.

각 Endpoint에서는 앞의 레이아웃을 적용하려면 `/head.php`, `/tail.php` 파일을 include 해야 한다.

::: warning
예외 처리로 오류 메시지를 출력할 때는 `/bbs/alert.php`로 리다이렉션되어 오류 메시지를 표시한다.
하지만 HTTP 상태 코드는 200으로 응답한다.
:::

## 마무리

오류 없이 처리가 되었다면 요청의 결과로 HTML 컨텐츠가 앞의 레이아웃이 적용된 응답을 출력한다. `html_process::run()`에서 Output Buffer에서 가져와 출력한다.

버퍼에서 JS, CSS 파일과 환경설정 등에서 설정한 `<meta>`태그를 `<head>` 등 적절한 위치에 삽입해준다.

::: info >= 5.5.8.2.6 버전
이런 처리가 완료된 후 버퍼의 내용을 출력하기 전 마지막으로 `html_process_buffer` Replace Hook을 실행한다.
:::

## AJAX 결과 처리

`ajax.*.php` 같은 몇몇 파일은 AJAX 요청을 위한 별도로 만들어진 파일이다. 일관된 요청을 처리하는 인터페이스를 제공하지 않기 때문에 이러한 파일 이름 규칙을 사용해 구분하는 셈이다. 이런 규칙의 파일은 `/bbs` 폴더에서 주로 찾아볼 수 있다. 하지만 `ajax.*.php` 파일 이름 규칙이 적용되지 않은 파일도 있다.

DB에 연결하거나 기타 내장 라이브러리를 사용하기위해 `/common.php` 파일을 include 하므로, 대부분 앞의 초기화 과정이 포함된다.

::: warning
`ajax.*.php` 파일의 응답은 포맷 없는 문자열이거나 HTML, JSON, XML 포맷일 수도 있으며 아무것도 출력하지 않을 수도 있다. 적절한 Content-Type 헤더를 반환하지 않으므로 반환 타입을 예측할 수 없으며 Content-Type 헤더로 포맷을 검증하거나 처리하면 안 된다.

JSON, XML 포맷 또한 escape 처리되었거나 그렇지 않을 수 있으며, UTF-8 문자열에 대한 처리가 되었을 수도 아닐 수도 있다.

오류가 반환될 때도 적절한 HTTP 응답 상태 코드를 기대할 수 없으며, `0` 또는 `false` 같은 문자열을 응답하거나, 브라우저의 `alert()` dialog를 띄우는 HTML 결과를 반환하는 페이지로 리다이렉션 될 수 있다.
:::
