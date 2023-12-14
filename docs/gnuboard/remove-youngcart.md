# 영카트 제거하기

## 설치된 영카트 설정 제거

이미 설치된 영카트를 제거하려면 `/data/dbconfig.php` 파일에서 영카트 관련 설정을 제거해야 한다.

`dbconfig.php` 파일에서 `G5_USE_SHOP` 상수의 값을 `true`에서 `false`로 변경한다.

```php
define('G5_USE_SHOP', false);
```

또는, 아래와 같은 코드 전체를 삭제해도 된다.

::: tip
이 코드를 삭제 후 아래 영카트 파일까지 전부 제거하는 것을 권장한다.
:::

```php
define('G5_USE_SHOP', true);

define('G5_SHOP_TABLE_PREFIX', 'g5_shop_');

$g5['g5_shop_default_table'] = G5_SHOP_TABLE_PREFIX.'default'; // 쇼핑몰설정 테이블
$g5['g5_shop_banner_table'] = G5_SHOP_TABLE_PREFIX.'banner'; // 배너 테이블
$g5['g5_shop_cart_table'] = G5_SHOP_TABLE_PREFIX.'cart'; // 장바구니 테이블
$g5['g5_shop_category_table'] = G5_SHOP_TABLE_PREFIX.'category'; // 상품분류 테이블
$g5['g5_shop_event_table'] = G5_SHOP_TABLE_PREFIX.'event'; // 이벤트 테이블
$g5['g5_shop_event_item_table'] = G5_SHOP_TABLE_PREFIX.'event_item'; // 상품, 이벤트 연결 테이블
$g5['g5_shop_item_table'] = G5_SHOP_TABLE_PREFIX.'item'; // 상품 테이블
$g5['g5_shop_item_option_table'] = G5_SHOP_TABLE_PREFIX.'item_option'; // 상품옵션 테이블
$g5['g5_shop_item_use_table'] = G5_SHOP_TABLE_PREFIX.'item_use'; // 상품 사용후기 테이블
$g5['g5_shop_item_qa_table'] = G5_SHOP_TABLE_PREFIX.'item_qa'; // 상품 질문답변 테이블
$g5['g5_shop_item_relation_table'] = G5_SHOP_TABLE_PREFIX.'item_relation'; // 관련 상품 테이블
$g5['g5_shop_order_table'] = G5_SHOP_TABLE_PREFIX.'order'; // 주문서 테이블
$g5['g5_shop_order_delete_table'] = G5_SHOP_TABLE_PREFIX.'order_delete'; // 주문서 삭제 테이블
$g5['g5_shop_wish_table'] = G5_SHOP_TABLE_PREFIX.'wish'; // 보관함(위시리스트) 테이블
$g5['g5_shop_coupon_table'] = G5_SHOP_TABLE_PREFIX.'coupon'; // 쿠폰정보 테이블
$g5['g5_shop_coupon_zone_table'] = G5_SHOP_TABLE_PREFIX.'coupon_zone'; // 쿠폰존 테이블
$g5['g5_shop_coupon_log_table'] = G5_SHOP_TABLE_PREFIX.'coupon_log'; // 쿠폰사용정보 테이블
$g5['g5_shop_sendcost_table'] = G5_SHOP_TABLE_PREFIX.'sendcost'; // 추가배송비 테이블
$g5['g5_shop_personalpay_table'] = G5_SHOP_TABLE_PREFIX.'personalpay'; // 개인결제 정보 테이블
$g5['g5_shop_order_address_table'] = G5_SHOP_TABLE_PREFIX.'order_address'; // 배송지이력 정보 테이블
$g5['g5_shop_item_stocksms_table'] = G5_SHOP_TABLE_PREFIX.'item_stocksms'; // 재입고SMS 알림 정보 테이블
$g5['g5_shop_post_log_table'] = G5_SHOP_TABLE_PREFIX.'order_post_log'; // 주문요청 로그 테이블
$g5['g5_shop_order_data_table'] = G5_SHOP_TABLE_PREFIX.'order_data'; // 모바일 결제정보 임시저장 테이블
$g5['g5_shop_inicis_log_table'] = G5_SHOP_TABLE_PREFIX.'inicis_log'; // 이니시스 모바일 계좌이체 로그 테이블
```

## 영카트 파일 제거

영카트(쇼핑몰) 기능을 사용하지 않는다면 영카트 관련 폴더와 파일들을 삭제할 것을 권장한다. 보안취약점이 발생하면 영향을 받을 수 있기 때문에 영카트 기능을 사용하지 않는다면 아예 제거해두는 것이 좋다.

```shell
.
├── adm
│   └── shop_admin // 폴더 전체 삭제 # [!code --]
├── extend
│   └── shop.extend.php // 파일 삭제 # [!code --]
├── lib
│   ├── shop.uri.lib.php // 파일 삭제 # [!code --]
│   └── shop.lib.php // 파일 삭제 # [!code --]
├── mobile
│   └── shop // 폴더 전체 삭제 # [!code --]
├── shop // 폴더 전체 삭제 # [!code --]
├── orderupgrade.php // 파일 삭제 # [!code --]
├── shop.config.php // 파일 삭제 # [!code --]
├── yc4_import_run.php // 파일 삭제 # [!code --]
└── yc4_import.php // 파일 삭제 # [!code --]
```

추가로 테마와 스킨에서도 영카트 관련 파일을 제거하는 것을 권장한다.

```shell
.
├── mobile
│   └── skin
│       └── shop // 폴더 전체 삭제 # [!code --]
├── skin
│   └── shop // 폴더 전체 삭제 # [!code --]
└── theme
    └── basic
        ├── shop // 폴더 전체 삭제 # [!code --]
        ├── mobile
        │   ├── shop // 폴더 전체 삭제 # [!code --]
        │   └── skin
        │       └── shop // 폴더 전체 삭제 # [!code --]
        └── skin
            └── shop // 폴더 전체 삭제 # [!code --]
```

::: warning 위험은 미리 피하자
그누보드, 영카트는 여전히 보안취약점이 활발하게 발견되고 있는 중이며, 보안취약점을 고친 패치가 배포될 때 해당 보안취약점과 이를 이용한 공격 가능한 방법이 알려지는 셈이다.

보안취약점 패치가 공개되면 빠르게 패치하는 것이 가장 좋지만, 그러지 못할 수 있으므로 영카트를 사용하지 않는다면 관련 파일을 모두 제거하여 위험을 미리 방지할 수 있다.
:::
