---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/make_plugin.html
---

# 플러그인 (extend)

`/extend` 폴더에 `*.php` 파일을 두면 자동으로 include 한다.

`/plugin` 폴더도 있지만 이곳에 있는 파일들을 자동으로 로드하거나 호출하지 않는다. plugin 폴더에는 JS, PHP 라이브러리들이 이미 몇 가지 포함되어 있고 필요 시 이것들을 사용하고 있다.

플러그인을 위한 인터페이스는 따로 없고 `/extend` 폴더에 파일을 넣으면 include 해주는 것과 [Hook](/developers/hook)을 이용해 기능을 확장할 수 있다.

::: info
다른 CMS나 프레임워크 등에서 가리키는 플러그인에 기대하는 것과는 많이 다르다. plugin 폴더는 라이브러리들을 모아둔 폴더일 뿐이고 `/extend` 폴더에 있는 파일을 로드해줄 뿐이다.

`/lib` 폴더에는 그누보드의 내장 라이브러리, `/plugin` 폴더에는 외부에서 가져온 라이브러리라고 봐도 틀리지 않다.
:::

### extend 폴더 이용하기

`/extend` 폴더에 `*.php` 파일을 만들면 그누보드가 동작 시 파일을 자동으로 include하며 즉시 실행 된다.

`.php` 확장자인 PHP 파일이면 되지만 관습을 따라 `*.extend.php`와 같은 파일명을 사용하자.

::: code-group

```php [/extend/my_plugin.extend.php]
add_event('tail_sub', 'myPluginListenerTailSub');
function myPluginListenerTailSub()
{
    // ...
}
```

:::

::: tip
파일명으로 로드 순서가 결정된다.

extend 폴더에 있는 파일명을 [`natsort()`](https://www.php.net/manual/en/function.natsort.php) 함수로 정렬한 후 로드한다. 다른 확장보다 먼저 로드해야한다면 파일명을 변경해서 순서를 조정할 수 있다.
:::

### plugin 폴더로 더 확장하기

`extend` 폴더에 파일 하나만 두면 되지만 구현할 기능이 커져 파일을 나누거나 JS, CSS 및 이미지 파일 등을 모두 담아야할 때는 plugin 폴더에 두는 게 좋다.

extend 폴더에서 PHP 파일을 나눠야 한다면 따로 include 되므로 폴더를 만들어 나눠야하는데 역시 관습을 따라 extend 폴더에 두지않고 plugin 폴더로 분리하는 게 좋다.

앞에서 만든 `/extend/my_plugin.extend.php` 파일을 분리해보자.

::: code-group

```php [/extend/my_plugin.extend.php]
add_event('tail_sub', 'myPluginListenerTailSub'); // [!code --]
function myPluginListenerTailSub() // [!code --]
{ // [!code --]
    // ... // [!code --]
} // [!code --]
include_once '../plugin/my_plugin/bootstrap.php'; // [!code ++]
```

:::

::: code-group

```php [/plugin/my_plugin/bootstrap.php]
# /plugin/my_plugin/bootstrap.php

// CSS 파일 로드
add_stylesheet('<link rel="stylesheet" href="' . G5_PLUGIN_URL . '/my_plugin/assets/css/style.css" />');

// Hook 리스너 등록
add_event('tail_sub', 'myPluginListenerTailSub');
function myPluginListenerTailSub()
{
    // ...
}
```

```css [/plugin/my_plugin/assets/css/style.css]
.my-element {
  // ...
}
```

:::

::: details 폴더를 펼쳐보면

```
├── extend
│   └── my_plugin.extend.php // [!code hl]
└── plugin
    └── my_plugin
        ├── assets
        │   └── css
        │      └── style.css
        └── my_plugin.extend.php // [!code hl]
```

:::

::: tip
plugin 폴더로 파일을 분리했다면 extend 폴더에 있는 파일은 최소한의 코드만 담는 게 좋다.

extend, plugin 폴더가 서로 분리되어있기 때문에 양쪽 파일을 모두 관리하기는 귀찮고 플러그인을 배포할 때도 두 파일을 모두 업데이트하기 귀찮아진다.

`my_plugin.extend.php` 파일의 예시처럼 `include_once` 구문이나 최소한의 버전 체크 등의 코드만 두는 게 좋다.

```php
// PHP 7.4 미만에서는 동작하지 않으니 return
if (version_compare(phpversion(), '7.4', '<')) {
    return;
}

// 앞에서 return 했으으로 PHP 7.4 미만에서는 로드하지 않는다
include_once '../plugin/my_plugin/bootstrap.php';
```

플러그인이 특정 PHP 버전 이상에서만 동작해야할 때 구문 오류를 내지않고 플러그인 동작을 멈출 수 있다.
:::

## 이름 중복 문제 피하기

이러한 확장 방법을 사용하다보면 변수나 함수의 이름이 중복될 수 있다. 글로벌 스코프에서 동작하기 때문이다. 클래스 이름이나 `*.extend.php` 파일 및 플러그인 폴더의 이름도 마찬가지다.

앞의 예시에서 `myPluginListenerTailSub()` 이름을 사용한 것처럼 함수 이름 앞에 자신만의 특정한 이름을 붙여 사용하는 게 좋다.
또는, `onTailSub_82f12ff9()`, `$result_82f12ff9` 이처럼 이름을 간략하게 짓고 임의의 난수를 뒤에 붙여쓰는 등 중복을 피하도록 노력해야한다.

::: info
모든 함수나 변수 이름에 이런 규칙을 사용할 필요는 없다. 글로벌 스코프에 노출되는 것에 주의하자는 것이다.
:::

이름이 겹치면 다른 플러그인이나 그누보드의 주요 동작을 방해할 수 있고, 내 플러그인이 영향을 받을 수 있으므로 방어적으로 작성하는 게 좋다.

[Namespace](https://www.php.net/manual/en/language.namespaces.rationale.php)를 적극 활용하자. PHP 5.3(2014년 출시)부터 지원한다.

::: tip
이름 중복문제를 피하고 [오염된 글로벌 변수](/developers/polluted_variables) 문제에서 벗어나기위해 아래와 같이 include하는 파일이 글로벌 스코프의 영향을 받지 않도록 간단한 방법을 사용할 수 있다(PHP 7 버전 이상).

```php
(function () {
    include_once '../plugin/my_plugin/bootstrap.php';
})();
```

:::
