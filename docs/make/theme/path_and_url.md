---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/theme/path_and_url.html
---
# 테마 경로 및 URL

`G5_BBS_URL`처럼 테마 경로를 기반으로 서버 내 경로 및 URL을 담은 상수를 사용할 수 있다.
제작하는 테마 내에서 활용하기 적합하며 호환성을 위해 적극 활용하는 것이 좋다.

## 경로 상수

- `G5_THEME_PATH` : 서버 내 절대 경로. `/.../theme/basic`
- `G5_THEME_URL` : 테마 폴더명까지 포함하는 URL. `https://.../theme/basic`
- `G5_THEME_MOBILE_PATH` : 모바일 폴더의 경로. `/.../theme/basic/mobile`
- `G5_THEME_LIB_PATH` : `lib` 폴더까지 포함한 경로. `/.../theme/basic/lib`
- `G5_THEME_CSS_URL` : `css` 폴더까지 포함한 URL. `https://.../theme/basic/css`
- `G5_THEME_JS_URL` : `js` 폴더까지 포함한 URL. `https://.../theme/basic/js`
- `G5_THEME_IMG_URL` : `img` 폴더까지 포함한 URL. `https://.../theme/basic/img`

## 경로 변수 활용

스킨 제작 등에 활용할 수 있는 `$board_skin_path` 등의 전역변수도 활용할 수 있다. 테마의 스킨으로 지정되어있다면 적용 중인 테마의 폴더 내에서 스킨 경로를 만들어준다.

::: tip 기본 스킨의 이름(폴더명)
테마에 포함된 스킨은 `theme/white_board`처럼 지정되는데, `theme/`로 시작하면 현재 적용된 테마의 폴더내에서 찾게되므로 다른 테마로 변경했을 때 해당 테마에 `white_board` 스킨이 없다면 잘못된 경로를 나타낼 수 있다. 이는 사용자가 스킨을 새로 지정하기 전까지 오류를 발생시킬 수 있다.

그누보드에서는 기본 스킨의 이름으로 `basic`을 주로 사용하므로 테마에 포함된 스킨의 폴더명을 `basic`으로 짓는 것이 무난하며 이런 문제를 최소화 할 수 있다. 꼭 따라야 할 규칙은 아니지만 사용자의 혼란을 줄이는데 도움이 된다.
:::

G5_THEME_DEVICE

<!-- G5_THEME_DIR -->

G5_THEME_MOBILE_PATH
G5_THEME_LIB_PATH
G5_THEME_CSS_URL
G5_THEME_IMG_URL
G5_THEME_JS_URL

G5_THEME_SHOP_PATH
G5_THEME_SHOP_URL
G5_THEME_MSHOP_PATH
G5_THEME_MSHOP_URL
G5_THEME_NO_PROFILE_IMG
G5_THEME_USE_THUMB_RATIO
G5_THEME_USE_OPTIONS_TRTD
G5_THEME_USE_ITEM_CATEGORY
