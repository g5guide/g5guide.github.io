---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/helpers.html
---

# 헬퍼 함수

TBD

```php
function get_microtime();
function get_paging($write_pages, $cur_page, $total_page, $url, $add = "");
function page_insertbefore($paging_html, $insert_html);
function page_insertafter($paging_html, $insert_html);
function print_r2($var);
// function goto_url($url);
// function set_session($session_name, $value);
// function get_session($session_name);
// function set_cookie($cookie_name, $value, $expire, $path = '/', $domain = G5_COOKIE_DOMAIN, $secure = false, $httponly = true);
// function get_cookie($cookie_name);
function alert($msg = '', $url = '', $error = true, $post = false);
function alert_close($msg, $error = true);
function confirm($msg, $url1 = '', $url2 = '', $url3 = '');
function url_auto_link($str);
// function set_http($url, $protocol = "http://");
//function get_filesize($file);
function get_filesize($size);
function download_file_nonce_key($bo_table, $wr_id, $timeoutSeconds = 7200);
function download_file_nonce_is_valid($nonce, $bo_table, $wr_id);
function get_file($bo_table, $wr_id);
function get_dirsize($dir);
function get_list($write_row, $board, $skin_url, $subject_len = 40);
function get_view($write_row, $board, $skin_url);
function search_font($stx, $str);
function conv_subject($subject, $len, $suffix = '');
function conv_content($content, $html, $filter = true);
function check_html_link_nofollow($type = '');
function html_purifier($html);
function get_sql_search($search_ca_name, $search_field, $search_text, $search_operator = 'and');
function get_write($write_table, $wr_id, $is_cache = false);
function get_next_num($table);
function get_group($gr_id, $is_cache = false);
function get_member($mb_id, $fields = '*', $is_cache = false);
function subject_sort_link($col, $query_string = '', $flag = 'asc');
function get_admin($admin = 'super', $fields = '*');
function is_admin($mb_id);
function get_category_option($bo_table = '', $ca_name = '');
function get_group_select($name, $selected = '', $event = '');
function option_selected($value, $selected, $text = '');
function get_yn_select($name, $selected = '1', $event = '');
function insert_point($mb_id, $point, $content = '', $rel_table = '', $rel_id = '', $rel_action = '', $expire = 0);
function insert_use_point($mb_id, $point, $po_id = '');
function delete_use_point($mb_id, $point);
function delete_expire_point($mb_id, $point);
function get_point_sum($mb_id);
function get_expire_point($mb_id);
function delete_point($mb_id, $rel_table, $rel_id, $rel_action);
function get_sideview($mb_id, $name = '', $email = '', $homepage = '');
function view_file_link($file, $width, $height, $content = '');
function view_image($view, $number, $attribute);
function view_link($view, $number, $attribute);
// function cut_str($str, $len, $suffix = "…");
function get_text($str, $html = 0, $restore = false);
function hsc($str);
// function html_symbol($str);
// function sql_connect($host, $user, $pass, $db = G5_MYSQL_DB);
// function sql_select_db($db, $connect);
// function sql_set_charset($charset, $link = null);
// function sql_data_seek($result, $offset = 0);
// function sql_query($sql, $error = G5_DISPLAY_SQL_ERROR, $link = null);
// function sql_fetch($sql, $error = G5_DISPLAY_SQL_ERROR, $link = null);
// function sql_fetch_array($result);
// function sql_free_result($result);
// function sql_password($value);
// function sql_insert_id($link = null);
// function sql_num_rows($result);
// function sql_field_names($table, $link = null);
// function sql_error_info($link = null);
function get_table_define($table, $crlf = "\n");
function referer_check($url = '');
function get_yoil($date, $full = 0);
function date_select($date, $name = '');
function time_select($time, $name = "");
function check_demo();
// function check_string($str, $options);
// function cut_hangul_last($hangul);
function explain($sql);
function bad_tag_convert($code);
function _callback_bad_tag_convert($matches);
function _token();
function get_token();
function check_token();
// function is_utf8($str);
// function utf8_strcut($str, $size, $suffix = '...');
// function convert_charset($from_charset, $to_charset, $str);
function sql_real_escape_string($str, $link = null);
function escape_trim($field);
function is_checked($field);
function abs_ip2long($ip = '');
function get_selected($field, $value);
function get_checked($field, $value);
function is_mobile();
function get_uniqid();
// function iconv_utf8($str);
// function iconv_euckr($str);
function check_device($device);
function delete_cache_latest($bo_table);
function delete_board_thumbnail($bo_table, $file);
function get_editor_image($contents, $view = true);
function delete_editor_thumbnail($contents);
function delete_qa_thumbnail($file);
function get_skin_stylesheet($skin_path, $dir = '');
function get_skin_javascript($skin_path, $dir = '');
function html_end();
function add_stylesheet($stylesheet, $order = 0);
function add_javascript($javascript, $order = 0);
function hyphen_hp_number($hp);
// function login_url($url = '');
// function https_url($dir, $https = true);
function board_notice($bo_notice, $wr_id, $insert = false);
function googl_short_url($longUrl);
function autosave_count($mb_id);
function insert_cert_history($mb_id, $company, $method);
function insert_member_cert_history($mb_id, $name, $hp, $birth, $type);
function certify_count_check($mb_id, $type);
function get_qa_config($fld = '*', $is_cache = false);
function get_sock($url, $timeout = 30);
function module_exec_check($exe, $type);
function print_address($addr1, $addr2, $addr3, $addr4);
function check_input_vars();
function htmlspecialchars2($str);
function conv_date_format($format, $date, $add = '');
function get_search_string($stx);
function clean_xss_tags($str, $check_entities = 0, $is_remove_tags = 0, $cur_str_len = 0, $is_trim_both = 1);
function clean_xss_attributes($str);
function clean_relative_paths($path);
function conv_unescape_nl($str);
function member_delete($mb_id);
function get_email_address($email);
function get_safe_filename($name);
function replace_filename($name);
function get_icode_userinfo($id, $pass);
function insert_popular($field, $str);
function get_encrypt_string($str);
function check_password($pass, $hash);
function login_password_check($mb, $pass, $hash);
function check_url_host($url, $msg = '', $return_url = G5_URL, $is_redirect = false);
function clean_query_string($query, $amp = true);
function get_params_merge_url($params, $url = '');
function get_device_change_url();
function get_skin_path($dir, $skin);
function get_skin_url($dir, $skin);
function check_vaild_callback($callback);
function get_write_token($bo_table);
function check_write_token($bo_table);
function get_member_profile_img($mb_id = '', $width = '', $height = '', $alt = 'profile_image', $title = '');
function get_head_title($title);
function is_sms_send($is_type = '');
function is_use_email_certify();
function safe_replace_regex($str, $str_case = '');
function get_real_client_ip();
function check_mail_bot($ip = '');
function get_call_func_cache($func, $args = array());
function is_include_path_check($path = '', $is_input = '');
function is_inicis_url_return($url);
function check_auth_session_token($str = '');
function update_auth_session_token($str = '');
function get_token_encryption_key($str = '');
function get_random_token_string($length = 6);
function filter_input_include_path($path);
function option_array_checked($option, $arr = array());
```

## 문자열

### function cut_str($str, $len, $suffix = "…");

### function get_text($str, $html = 0, $restore = false);

### function html_symbol($str);

### function iconv_utf8($str);

### function iconv_euckr($str);

### function check_string($str, $options);

### function cut_hangul_last($hangul);

### function is_utf8($str);

### function utf8_strcut($str, $size, $suffix = '...');

### function convert_charset($from_charset, $to_charset, $str);

## 경로 및 URL

### get_pretty_url()

전달한 인자를 조합하여 Pretty URL을 생성해준다.

```php
/**
 * @param string $folder rewrite 처리된 URL 기준의 첫 번째 segment
 * @param string|int $no content ID 및 게시물 ID
 *                       rewrite 처리된 URL 기준의 두 번째 segment
 * @param string $query_string 덧붙일 쿼리 문자열
 * @param string $action
 * @return string
 */
function get_pretty_url($folder, $no='', $query_string='', $action='');
```

- `/{bo_table}` : 글 목록
  - `get_pretty_url('{bo_table}')`
- `/{bo_table}/{wr_id|seo_title}` : 글 보기
  - `get_pretty_url('{bo_table}', '{wr_id}')`
- `/{bo_table}/write` : 글 쓰기
  - `get_pretty_url('{bo_table}', '', '', 'write')`
- `/{bo_table}/write?w=u&amp;wr_id={wr_id}` : 글 수정
  - `get_pretty_url('{bo_table}', '', 'w=u&amp;wr_id={wr_id}', 'write')`
- `/rss/{bo_table}` : 게시판 RSS
  - `get_pretty_url('{bo_table}', '', '', 'rss')`
- `/content/{co_id|seo_title}` : content 페이지. ID
  - `get_pretty_url('content', '{co_id}')`

### short_url_clean()

쿼리 문자열을 포함한 완성된 전체 URL을 분석하여 적용 가능한 Pretty URL로 변환한다.

```php
/**
 * @param string $string_url
 * @param string $add_qry
 * @return string
 */
function short_url_clean($string_url, $add_qry='');
```

### generate_seo_title()

### exist_seo_url()
