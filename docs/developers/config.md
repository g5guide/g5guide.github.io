# 설정

TBD

관리자페이지(백오피스)에도 다양한 환경설정을 할 수 있지만 이 설정은 DB에서 로드되므로 초기화 과정에서는 `/config.php` 파일에 지정된 PHP 상수로 정의된 설정 값을 사용한다.

::: info
이 파일을 그누보드 배포파일에 포함되어 있으므로 파일을 덮어쓰면 변경한 설정이 유지되지 않으므로 주의해야 한다.
:::

주로 초기화 과정에서 사용하는 설정이나 그누보드의 주요 디렉토리 경로 및 URL을 변조를 걱정하지 않고 어느곳에서나 쉽게 사용하기위한 상수가 정의되어있다.

이 페이지에서는 전체를 나열할 수 없고 주요 상수에 대한 설정을 나열한다.

## 주요 설정

(작성 중)

```php
/**
 * 디버그 모드
 * true로 변경하면 최고관리자에게 내장된 DebugBar를 표시한다
 */
define('G5_DEBUG', false);
define('G5_COLLECT_QUERY', true);

/**
 * 이 값을 설정하지 않으면 DB의 기본 엔진을 사용한다
 * innodb 또는 myisam을 지정할 수 있다
 */
define('G5_DB_ENGINE', '');

/**
 * DB 캐릭셋
 * DB에서 지원하는 캐릭셋을 지정할 수 있다
 */
define('G5_DB_CHARSET', 'utf8');
define('G5_COOKIE_DOMAIN', '');
define('G5_DBCONFIG_FILE', 'dbconfig.php');
define('G5_SET_DEVICE', 'both');
define('G5_USE_MOBILE', true); // 모바일 홈페이지를 사용하지 않을 경우 false 로 설정
define('G5_USE_CACHE', true); // 최신글등에 cache 기능 사용 여부
define('G5_SERVER_TIME', time());
define('G5_TIME_YMDHIS', date('Y-m-d H:i:s', G5_SERVER_TIME));
define('G5_TIME_YMD', substr(G5_TIME_YMDHIS, 0, 10));
define('G5_TIME_HIS', substr(G5_TIME_YMDHIS, 11, 8));
define('G5_SEO_TITLE_WORD_CUT', 8); // SEO TITLE 문단 길이
define('G5_DIR_PERMISSION', 0755); // 디렉토리 생성시 퍼미션
define('G5_FILE_PERMISSION', 0644); // 파일 생성시 퍼미션
define('G5_MOBILE_AGENT', 'phone|samsung|lgtel|mobile|[^A]skt|nokia|blackberry|BB10|android|sony');
define('G5_SMTP', '127.0.0.1');
define('G5_SMTP_PORT', '25');
//define('G5_STRING_ENCRYPT_FUNCTION', 'sql_password');
define('G5_STRING_ENCRYPT_FUNCTION', 'create_hash');
define('G5_MYSQL_PASSWORD_LENGTH', 41); // mysql password length 41, old_password 의 경우에는 16
define('G5_DISPLAY_SQL_ERROR', false);
define('G5_ESCAPE_FUNCTION', 'sql_escape_string');
//define('G5_ESCAPE_PATTERN',  '/(and|or).*(union|select|insert|update|delete|from|where|limit|create|drop).*/i');
//define('G5_ESCAPE_REPLACE',  '');
define('G5_LINK_COUNT', 2);
define('G5_THUMB_JPG_QUALITY', 90);
define('G5_THUMB_PNG_COMPRESS', 5);
define('G5_IS_MOBILE_DHTML_USE', false);
define('G5_MYSQLI_USE', true);
define('G5_BROWSCAP_USE', true);
define('G5_VISIT_BROWSCAP_USE', false);
define('G5_IP_DISPLAY', '\\1.♡.\\3.\\4');
define('G5_POSTCODE_JS', '<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" async></script>');
```

## 경로 및 URL 상수

(작성 중)

```php
# URL
define('G5_DOMAIN', '');
define('G5_HTTPS_DOMAIN', '');
define('G5_URL', G5_DOMAIN);
define('G5_URL', $g5_path['url']);
define('G5_URL', '');
define('G5_PATH', $g5_path['path']);
define('G5_PATH', '');

# 주요 폴더의 이름
// 그누보드의 주요 폴더의 이름을 변경하고 이 값을 설정해주면 된다
// 하지만 CSS 등에서는 이 상수를 참조하지 못하므로 변경하지 않는 것이 좋다
define('G5_ADMIN_DIR', 'adm');
define('G5_BBS_DIR', 'bbs');
define('G5_CSS_DIR', 'css');
define('G5_DATA_DIR', 'data');
define('G5_EXTEND_DIR', 'extend');
define('G5_IMG_DIR', 'img');
define('G5_JS_DIR', 'js');
define('G5_LIB_DIR', 'lib');
define('G5_PLUGIN_DIR', 'plugin');
define('G5_SKIN_DIR', 'skin');
define('G5_EDITOR_DIR', 'editor');
define('G5_MOBILE_DIR', 'mobile');
define('G5_OKNAME_DIR', 'okname');
define('G5_KCPCERT_DIR', 'kcpcert');
define('G5_INICERT_DIR', 'inicert');
define('G5_LGXPAY_DIR', 'lgxpay');
define('G5_SNS_DIR', 'sns');
define('G5_SYNDI_DIR', 'syndi');
define('G5_PHPMAILER_DIR', 'PHPMailer');
define('G5_SESSION_DIR', 'session');
define('G5_THEME_DIR', 'theme');
define('G5_GROUP_DIR', 'group');
define('G5_CONTENT_DIR', 'content');

# 경로
// define('G5_ADMIN_PATH', G5_PATH . '/' . G5_ADMIN_DIR);
// define('G5_BBS_PATH', G5_PATH . '/' . G5_BBS_DIR);
// define('G5_DATA_PATH', G5_PATH . '/' . G5_DATA_DIR);
// define('G5_EXTEND_PATH', G5_PATH . '/' . G5_EXTEND_DIR);
// define('G5_LIB_PATH', G5_PATH . '/' . G5_LIB_DIR);
// define('G5_PLUGIN_PATH', G5_PATH . '/' . G5_PLUGIN_DIR);
// define('G5_SKIN_PATH', G5_PATH . '/' . G5_SKIN_DIR);
// define('G5_MOBILE_PATH', G5_PATH . '/' . G5_MOBILE_DIR);
// define('G5_SESSION_PATH', G5_DATA_PATH . '/' . G5_SESSION_DIR);
// define('G5_EDITOR_PATH', G5_PLUGIN_PATH . '/' . G5_EDITOR_DIR);
// define('G5_OKNAME_PATH', G5_PLUGIN_PATH . '/' . G5_OKNAME_DIR);
// define('G5_KCPCERT_PATH', G5_PLUGIN_PATH . '/' . G5_KCPCERT_DIR);
// define('G5_INICERT_PATH', G5_PLUGIN_PATH . '/' . G5_INICERT_DIR);
// define('G5_LGXPAY_PATH', G5_PLUGIN_PATH . '/' . G5_LGXPAY_DIR);
// define('G5_SNS_PATH', G5_PLUGIN_PATH . '/' . G5_SNS_DIR);
// define('G5_SYNDI_PATH', G5_PLUGIN_PATH . '/' . G5_SYNDI_DIR);
// define('G5_PHPMAILER_PATH', G5_PLUGIN_PATH . '/' . G5_PHPMAILER_DIR);

# URL
define('G5_ADMIN_URL', G5_URL . '/' . G5_ADMIN_DIR);
define('G5_BBS_URL', G5_URL . '/' . G5_BBS_DIR);
define('G5_CSS_URL', G5_URL . '/' . G5_CSS_DIR);
define('G5_DATA_URL', G5_URL . '/' . G5_DATA_DIR);
define('G5_IMG_URL', G5_URL . '/' . G5_IMG_DIR);
define('G5_JS_URL', G5_URL . '/' . G5_JS_DIR);
define('G5_SKIN_URL', G5_URL . '/' . G5_SKIN_DIR);
define('G5_PLUGIN_URL', G5_URL . '/' . G5_PLUGIN_DIR);
define('G5_EDITOR_URL', G5_PLUGIN_URL . '/' . G5_EDITOR_DIR);
define('G5_OKNAME_URL', G5_PLUGIN_URL . '/' . G5_OKNAME_DIR);
define('G5_KCPCERT_URL', G5_PLUGIN_URL . '/' . G5_KCPCERT_DIR);
define('G5_INICERT_URL', G5_PLUGIN_URL . '/' . G5_INICERT_DIR);
define('G5_LGXPAY_URL', G5_PLUGIN_URL . '/' . G5_LGXPAY_DIR);
define('G5_SNS_URL', G5_PLUGIN_URL . '/' . G5_SNS_DIR);
define('G5_SYNDI_URL', G5_PLUGIN_URL . '/' . G5_SYNDI_DIR);
define('G5_MOBILE_URL', G5_URL . '/' . G5_MOBILE_DIR);
```
