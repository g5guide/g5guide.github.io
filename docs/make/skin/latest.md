# 최신글 스킨

| 변수명           | 타입   | 설명              |
| ---------------- | ------ | ----------------- |
| $latest_skin_url | string | 최신글 스킨의 URL |
| $list            | array  | 최신글 목록       |

<!-- prettier-ignore -->
```html
<?php
add_stylesheet('<link rel="stylesheet" href="' . $latest_skin_url . '/style.css">');
?>

<section>
    <?php foreach ($list as $article) { ?>
        제목: <?= $article['subject']; ?>
        날짜: <?= $article['datetime2']; ?>
    <?php } ?>
</section>
```

| 키            | 타입     | 설명                            |
| ------------- | -------- | ------------------------------- |
| `wr_id`       | `string` | 글 번호                         |
| `subject`     | `string` | 글 제목                         |
| `href`        | `string` | 글 링크                         |
| `datetime`    | `string` | 글 작성일시                     |
| `datetime2`   | `string` | 글 작성일시 (년-월-일 시:분:초) |
| `name`        | `string` | 글 작성자 이름                  |
| `mb_id`       | `string` | 글 작성자 아이디                |
| `mb_nick`     | `string` | 글 작성자 닉네임                |
| `comment_cnt` | `string` | 댓글 수                         |

## 썸네일

```html
<?php
$thumbWidth = 100;
$thumbHeight = 100;

$thumb = get_list_thumbnail($bo_table, $article['wr_id'], $thumbWidth, $thumbHeight, false, true);

$thumb['exists'] = true;
if (!$thumb['src']) {
    $thumb['exists'] = false;
    $thumb['src'] = G5_IMG_URL.'/no_img.png';
    $thumb['alt'] = '이미지가 없습니다.';
}
$thumbnail = '<img src="' . $thumb['src'] . '" alt="' . $thumb['alt'] . '" >';
?>

<!-- 이미지 출력 -->
<?= $thumbnail ?>
```
