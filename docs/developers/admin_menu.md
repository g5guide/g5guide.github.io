# 관리자 메뉴 추가

관리페이지에 메뉴를 추가하려면 다소 복잡한 과정을 거쳐야 한다.

관리 메뉴는 `/adm/admin.menu*00.php` 파일을 로드해 정의된 메뉴를 불러온다. 이 방법은 배포 등에서 다소 불편한 문제가 있으므로 그누보드 5.4.6에서 추가된 `admin_menu`, `admin_amenu` Replace Hook을 동적으로 추가할 수 있다.

## 메뉴 추가

메뉴 추가는 `admin_menu` Replace Hook을 이용한다.

`/adm/admin.menu*00.php` 파일 등의 정적 메뉴를 모두 불러온 후 `admin_menu` Replace Hook이 실행되므로 이 메뉴들 사이에 새로운 메뉴를 추가할 수 있다.

### URL 지정

```php
// 리스너 등록
add_replace('admin_menu', 'listener_admin_menu', G5_HOOK_DEFAULT_PRIORITY, 1);

// 메뉴를 추가하는 Callback
function listener_admin_menu($menu = [])
{
    // 이미 존재하는 '100'그룹에 메뉴 추가
    $menu['menu100'][] = [
        // 메뉴ID (중복되면 안 된다)
        '100999',
        // 메뉴 이름
        '추가 설정',
        // 주소
        'https://.../additional_config.php'
    ];

    return $menu; // Replace Hook이므로 반환해야한다
}
```

`admin_menu` Replace Hook을 이용해 `100` 메뉴 그룹에 `100999` ID를 가진 메뉴를 추가했다. 이제 그누보드 관리 메뉴의 첫번째 메뉴그룹의 가장 마지막에 '추가 설정'이라는 메뉴가 보이게 된다. ID는 중복되면 안 되므로 주의해야 한다.

'추가 설정' 메뉴를 선택하면 주소에 지정한 'https://.../additional_config.php' 주소로 이동한다. `additional_config.php` 파일에서 필요한 동작을 처리하고 관리페이지 보여질 내용을 작성하면 된다. 다만, 몇 가지 필요한 규칙을 적용해야 한다.

::: code-group

```php{1-2,4-5,13-14,19-20} [additional_config.php]

// [필수] 메뉴 추가 시 지정한 ID
$sub_menu = '100999';

// [필수] 이 파일을 통해 `/common.php` 파일을 include 해야 한다
require_once './_common.php';

// 메뉴의 접근 권한 확인
auth_check_menu($auth, $sub_menu, 'r');

// 페이지 제목
$g5['title'] = '추가 설정';

// [필수] 관리페이지 레이아웃
require_once '/path/to/adm/admin.head.php';

// 화면에 출력 할 내용
echo '추가 설정';

// [필수] 관리페이지 레이아웃
require_once '/path/to/adm/admin.tail.php';
```

:::

### view.php를 이용

`/adm/view.php` 파일이 있는데 앞에서 `additional_config.php` 파일을 구성하는 것보다 신경써야 할 것을 조금 줄일 수 있다. 메뉴 추가 부분은 크게 다르지 않지만 주소에서 `view.php` 파일을 지정하고 생략했던 `key`를 지정해야 한다.

```php
add_replace('admin_menu', 'listener_admin_menu', G5_HOOK_DEFAULT_PRIORITY, 1);

// 메뉴를 추가하는 Callback
function listener_admin_menu($menu = [])
{
    $menu['menu100'][] = [
        '100999',
        '추가 설정',
         G5_ADMIN_URL . '/view.php?call=additional_config',
        // view.php 파일을 이용하기 위해선 고유한 key를 지정해야 한다
         'additional_config'
    ];

    return $menu;
}
```

주소는 `view.php?call=additional_config` 이처럼 `call` 파라메터에 `key`와 동일한 값을 지정해야 한다.

`admin_get_page_{key}` Event Hook을 이용하는 방법이다. `/adm/view.php`에서 이 Hook을 실행시키고 이를 이용해 내용을 출력하는 방식이다.

이 훅의 태그는 `admin_get_page_additional_config`처럼 메뉴에 설정한 `key` 값을 붙인 이름으로 지정해야 한다.

```php
add_event('admin_get_page_additional_config', 'listener_additional_config');
function listener_additional_config() {
    echo '추가 설정';
}
```

또는, 기존처럼 `additional_config.php` 파일을 이용하되 많이 간소화하여 작성할 수 있다. `view.php` 파일에서 `$sub_menu` 등의 필수 항목들을 처리해준다.

```php
add_event('admin_get_page_additional_config', 'listener_additional_config');
function listener_additional_config() {
    include '/path/to/additional_config.php';
}
```

::: code-group

```php [additional_config.php]

// 메뉴의 접근 권한 확인
auth_check_menu($auth, $sub_menu, 'r');

echo '추가 설정';
```

:::

## 메뉴 그룹 추가

```php
// `admin_amenu` Replace Hook을 이용
add_replace('admin_amenu', 'listener_admin_amenu', G5_HOOK_DEFAULT_PRIORITY, 1);
function listener_admin_amenu($amenu = [])
{
    // 사용되지않는 '800'으로 새 그룹을 만든다
    $amenu['800'] = '#'; // '#' 값은 중요치 않다

    return $amenu
}
```

이제 여기에 메뉴를 추가할 수 있다. 메뉴 추가 방법은 앞에서 설명한 것과 같으나 메뉴의 첫번째 항목은 하나의 메뉴가 아닌 이 메뉴 그룹의 제목으로 취급하여 사용된다는 것만 주의하면 된다.

```php
add_replace('admin_menu', 'listener_admin_menu', G5_HOOK_DEFAULT_PRIORITY, 1);

// 메뉴를 추가하는 Callback
function listener_admin_menu($menu = [])
{
    // 추가한 '800'그룹에 메뉴 추가
    $menu['menu800'] = [
        // 첫번째 항목은 이 그룹의 제목으로 사용된다
        ['800000', '서비스', '#'],
        ['800100', '추가 설정', 'https://...']
    ];

    return $menu;
}
```
