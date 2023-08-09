---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/debug.html
---

# 디버깅

그누보드에는 실행된 SQL 질의문 목록과 실행된 [Hook](./hook) 목록을 볼 수 있는 간단한 기능이 내장되어있다. 최고관리자로 지정된 계정으로 로그인 했을 떄만 동작하므로 관리자 접속 세션의 상태만 확인할 수 있다.

`/config.php` 파일에서 `G5_DEBUG` 상수를 찾아 `true`로 바꾸면 사이트 하단에 DebugBar가 표시된다.

```php
define('G5_DEBUG', false);
```

이 도구에서 아래와 같은 내용을 확인할 수 있다.

- 실행한 SQL 질의문 목록과 수행 시간
- 오류 등으로 실패한 질의문의 오류 내용
- 실행된 Hook과 리스너 목록과 실행 횟수

::: danger 그누보드가 제공하는 `print_r2()` 함수
그누보드에서 데이터를 보기 좋게 출력하는 기능을 제공하는 `print_r2()` 함수는 사용하지 않는 것을 권장한다. 데이터 중 HTML 태그를 포함하고 있다면 브라우저에서 HTML 태그로 인식하여 화면에 표시하므로 악의적인 코드가 실행되어 보안문제가 발생할 수 있다.
:::
