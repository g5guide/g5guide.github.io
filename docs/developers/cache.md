# 캐시 (Cache)

TBD

DB에서 가져온 값이나 가공된 값을 캐시에 담아두고 빠르게 재사용할 수 있다.
그누보드에서는 현재 최근게시물 위젯의 캐시만 사용하고 있다.

클래스 객체의 멤버 변수를 이용한 Object Cache와 파일을 이용한 캐시를 지원하며 파일 캐시는 사용자가 다른 수단으로 대체할 수 있다.

## 오브젝트 캐시

오브젝트 캐시는 접속자의 세션에서만 유지된다. 즉, 휘발성이다.
[전역변수의 오염](/developers/polluted_variables)을 방지하고 공유하는 용도로 사용할 수 있다.

오브젝트 캐시는 `type`으로 분류되며 `bbs` 또는 `content` 두 가지 타입을 지원 한다.
`bbs`는 게시판의 글의 데이터, `content`는 '게시판 관리 -> 내용관리'의 데이터가 저장된다.

`type`의 하위 분류로 `group`을 지정할 수 있으며 group을 지정하지 않으면 `default` 그룹 이름으로 분류된다.

`G5_object_cache` 클래스로 이용할 수 있지만, 단일 인스턴스를 위해 `$g5_object` 전역변수를 사용해야 한다.

### set()

::: warning
`bbs`, `content` 외의 커스텀 타입은 임의의 공통 타입으로 지정되어 사실상 타입 지정이 무시되어 구분되지 않으므로 주의해야 한다. group과 key를 고유한 이름으로 지정해야한다.
:::

```php
# 게시물 타입 예시
$data = [];
$g5_object->set('bbs', $wr_id, $data, $bo_table);

# 커스텀 타입 예시
$type = 'my_plugin';
$key = 'config1';
$data = [];
$g5_object->set($type, $key, $data, 'my_plugin_config');
```

### get()

캐시에 저장된 데이터를 반환하고, 저장된 데이터가 없으면 `false`를 반환 한다.

```php
# 게시물 데이터 가져오기
// 게시물은 세번째 인자인 그룹은 게시판 ID(bo_table)를 지정해야 한다
$document = $g5_object->get('bbs', $wr_id, $bo_table);
```

캐시에서 가져온 데이터를 변경 후 캐시 데이터에도 반영하려면 변경한 데이터를 캐시에 다시 저장해야 한다.

```php
$document['wr_subject'] = str_replace(' ', '&nbsp;', $document['wr_subject']);
$g5_object->set('bbs', $wr_id, $document, $bo_table);
```

::: tip
값으로 `false`를 저장하면 데이터가 없는 상태(`false`)와 구분하지 못하므로 귀찮아도 배열에 담아 저장해두는 것이 좋다.
:::

### exists()

```php
function exists($type, $key, $group = 'default');
```

### delete()

```php
function delete($type, $key, $group = 'default');
```

## 파일 캐시

파일 캐시는 오브젝트 캐시와 달리 파일에 저장하고 모든 접속자의 세션에서 공유하여 사용할 수 있다.

캐시를 저장할 때 유지시간(TTL)을 지정하여 자동으로 만료시킬 수 있으며, TTL을 설정하지 않았더라도 데이터를 가져올 때 `$expired_time`을 지정하여 만료시킬 수 있다.

데이터를 가져올 때 지정하는 `$expired_time`은 목적에 따라 캐시를 만료시키는 상황을 분리할 수 있다. 예로, 

### g5_set_cache()

`$ttl`을 지정하면 지정된 시간(초 단위)이 지나면 자동으로 만료된다. TTL은 선택사항이며 지정하지 않으면 자동으로 만료되지 않는다.

오브젝트 캐시와 마찬가지로 값으로 `false`를 저장하면 캐시가 없거나 만료된 상태와 구분할 수 없으므로 주의해야 한다.

```php
# 데이터 저장
$key = 'my_plugin_cache_data';
$save_data = array();
$ttl = 600; // 초(second)
g5_set_cache($key, $save_data, $ttl);
```

::: details

```php
/**
 * @param string $key
 * @param mixed $save_data
 * @param int $ttl 초 단위
 * @return false|mixed
 */
function g5_set_cache($key, $save_data, $ttl = null);
```

:::

### g5_get_cache()

파일 캐시에서 데이터를 가져온다.
저장된 데이터가 없거나 만료되었다면 `false`를 반환 한다.

```php
$myPluginConfig = g5_get_cache($key);

// 캐시에서 데이터를 가져오지 못하면 DB에서 가져오기
if ($myPluginConfig === false) {
    // $myPluginConfig = ...;
}
```

`$expired_time`은 초(second) 단위로 지정할 수 있으며, 현재로부터 n초 이내의 데이터만 유지되며 그 이전의 캐시는 만료시킨다.

```php
$expired_time = 600; // 초 단위
$myPluginConfig = g5_get_cache($key, $expired_time);
```

```php
function g5_set_cache($key, $save_data, $ttl = null);
function g5_get_cache($key, $expired_time=0);
function g5_delete_cache($key);
function g5_delete_all_cache();
function g5_delete_cache_by_prefix($key);
```

::: warning
그누보드의 데이터는 예상하거나 감지할 수 없는 변경이 발생할 수 있어 캐시를 제때 갱신하지 못할 수 있다. 데이터를 가져오거나 저장하는 인터페이스가 거의 제공되지 않기 때문에 통제되지 않는 데이터 변경이 예상된다면 캐시를 사용하지 않는 것을 권장한다.
:::

### 확장하기

- function get_cachemanage_instance()

- https://sir.kr/g5_plugin/8665
