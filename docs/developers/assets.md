---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/assets.html
---

# JS & CSS (Assets)

JS, CSS 파일(코드)을 HTML Head에 추가하기 위해 사용한다. 파일의 경로만 사용하지 않고 `<link>` 또는 `<script>` HTML 태그를 포함하여 추가할 수 있으므로 Assets 파일 뿐 아니라 임의의 코드를 추가할 수 있다.

두 개의 함수를 사용할 수 있으며, 종류에 따라 구분될 뿐 사용 방법은 같다.

## CSS

`<link>` 및 `<style>` 태그를 사용할 수 있다.

```php
/**
 * @param string $stylesheet CSS 파일의 경로를 포함하는 `<link>` 태그
 * @param int $order 로드 순서
 */
function add_stylesheet($stylesheet, $order = 0);

// 예시
add_stylesheet('<link rel="stylesheet" href="path/to/file.css" />');
```

## JS

```php
/**
 * @param string $javascript JS 파일의 경로를 포함하는 `<script>` 태그
 * @param int $order 로드 순서
 */
function add_javascript($javascript, $order = 0);
```

## Cache Busting

브라우저 캐시를 갱신하기 위해 `G5_CSS_VER`, `G5_JS_VER` 상수를 사용할 수 있지만, 그누보드의 업데이트에 의존하고 제때 바뀌지 않으며, 파일이 변경되어도 이 값은 고정된 값이므로 사실상 제 기능을 하지 못한다.

아래의 플러그인 중 선택해서 사용하는 걸 권장한다.

- [CacheBust](https://sir.kr/g5_plugin?sca=&sfl=wr_subject&stx=kg+cachebust)
- https://sir.kr/g5_plugin/10198
