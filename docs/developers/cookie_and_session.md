---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/cookie_and_session.html
---

# 쿠키 및 세션

TBD

## 쿠키

### set_cookie

```php
/**
 * @param string $cookie_name 쿠키 이름
 * @param string $value 쿠키 값
 * @param string $expire 만료일
 * @param string $path 경로
 * @param string $domain 도메인
 * @param bool $secure
 * @param bool $httponly
 * @return void
 */
function set_cookie($cookie_name, $value, $expire, $path = '/', $domain = G5_COOKIE_DOMAIN, $secure = false, $httponly = true);
```

### get_cookie

```php
/**
 * @param string $cookie_name
 * @return string
 */
function get_cookie($cookie_name);
```

## 세션

### set_session

```php
/**
 * @param string $session_name
 * @param string $value
 * @return void
 */
function set_session($session_name, $value);
```

### get_session

```php
/**
 * @param string $session_name
 * @return string
 */
function get_session($session_name);
```
