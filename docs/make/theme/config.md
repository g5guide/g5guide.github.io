---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/make/theme/config.html
---
# 테마 설정

`theme.config.php` 파일에 테마의 기본 설정 정보를 담고 있다. 테마가 적용되면 이 파일은 우선 include하여 그누보드의 레이아웃, 스킨 등의 적용과 일부 동작을 처리하는데 사용된다.

::: danger
`theme.config.php` 파일은 그누보드가 테마를 이해하는데 필요한 설정을 정의하는 파일이다. 테마 제작자가 새로 정의하는 커스텀 설정 등을 담는 용도로는 적합하지 않다. 커스텀 설정이 필요하다면 별개의 파일에서 처리하는것을 권장한다.

또한, 사용자의 그누보드 관리 기능 일부의 동작을 방해할 우려가 있으므로 오류를 발생시킬 수 있는 코드를 작성하지 않도록 주의해야한다.
:::

## 지원 장치 설정

`G5_THEME_DEVICE` 상수로 테마가 지원하는 레이아웃에 따라 PC/Mobile 모드를 전환하거나 자동으로 적용되는 것을 방지하고 강제할 수 있다. 모바일 기기까지 포함하는 반응형 레이아웃이라면 `pc`로 설정하여 모바일 모드로 전환할 수 없도록 강제하거나, 반대로 `mobile`로 지정하면 소형 기기에서도 PC용 레이아웃으로 강제할 수 있다.

- `pc` : PC 전용
    - 항상 공용 레이아웃 적용
- `mobile` : 모바일 전용
    - 항상 모바일 전용 레이아웃 적용
- `''` (빈 문자열) : 사이트 설정에 따름

```php
if (!defined('G5_THEME_DEVICE')) {
    define('G5_THEME_DEVICE', '');
}
```


::: tip
레이아웃과 스킨을 모두 반응형으로 구성했다면 `pc`로 설정하여 모바일 모드로 전환되는 것을 막는데 사용할 수 있다. 그렇지 않다면 보통은 빈 값으로 두어 사이트 설정에 따르도록하는 것이 좋다.
:::

<!-- if (!defined('G5_COMMUNITY_USE')) define('G5_COMMUNITY_USE', true); -->
## 스킨 교체 옵션

`set_default_skin`는 사용자가 테마를 적용할 때 사이트 설정에서 회원, FAQ 스킨 등을 일괄 변경하는 옵션이다. `true`로 설정하면 이러한 기능이 동작하며, 원치 않을 때는 `false`로 두면 된다. 단, 테마 적용을 해제할 때는 원래 설정으로 복원되지 않으니 고려해서 적용해야 한다.

```php
$theme_config = array(
    /**
     * 스킨 자동 적용
     */
    'set_default_skin' => false
);
```

## 스킨 지정

`set_default_skin` 옵션이 `true`이면 이 스킨 목록을 사용하여 사이트 설정의 스킨을 변경한다. 지정한 스킨만 적용되므로 모두 포함할 필요가 없으며 필요한 항목만 정의하면 된다.

```php
$theme_config = array(
    /**
     * 스킨 지정
     */
    // 회원 스킨
    'cf_member_skin' => 'basic',
    // 회원 모바일 스킨
    'cf_mobile_member_skin' => 'basic',
    // 새 글 스킨
    'cf_new_skin' => 'basic',
    // 새 글 모바일 스킨
    'cf_mobile_new_skin' => 'basic',
    // 검색 결과 스킨
    'cf_search_skin' => 'basic',
    // 검색 결과 모바일 스킨
    'cf_mobile_search_skin' => 'basic',
    // 접속자 목록 스킨
    'cf_connect_skin' => 'basic',
    // 접속자 목록 모바일 스킨
    'cf_mobile_connect_skin' => 'basic',
    // FAQ 스킨
    'cf_faq_skin' => 'basic',
    // FAQ 모바일 스킨
    'cf_mobile_faq_skin' => 'basic',
    // QnA 스킨
    'qa_skin' => 'basic',
    // QnA 모바일 스킨
    'qa_mobile_skin' => 'basic'
);
```

## 게시판 설정

이 설정은 자동으로 적용되지 않으며, 각 게시판 설정에서 '테마 이미지 설정 가져오기' 버튼으로 이 값을 불러와 적용할 수 있다.

```php
$theme_config = array(
    /**
     * 게시판 설정
     */
    // 갤러리 이미지 수
    'bo_gallery_cols' => 4,
    // 갤러리 이미지 폭
    'bo_gallery_width' => 202,
    // 갤러리 이미지 높이
    'bo_gallery_height' => 150,
    // 모바일 갤러리 이미지 폭
    'bo_mobile_gallery_width' => 125,
    // 모바일 갤러리 이미지 높이
    'bo_mobile_gallery_height' => 100,
    // 게시판 뷰 이미지 폭
    'bo_image_width' => 835
);
```

## 테마 미리보기 설정

테마 미리보기 기능에서 게시판 미리보기를 보여줄 때 사용할 스킨을 지정할 수 있다.

```php
$theme_config = array(
    /**
     * 테마 미리보기 옵션
     */
    'preview_board_skin' => 'basic',
    'preview_mobile_board_skin' => 'basic',
);
```

---

이 외에도 영카트에 관련된 설정이 있으나 이 문서에서는 다루지 않는다.
