---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/sql_injection.html
---
# SQL Injection

그누보드는 PHP의 MySQL/MySQLi API를 사용하고 있으며, Prepared Statement를 사용하지 않는다. [오염된 전역변수](/developers/polluted_variables) 문제가 더해져 사용자 입력 변수와 전역변수의 데이터에 모두 위험성이 존재하며, SQL 질의문을 문자열에 변수를 직접 조합하므로 SQL 인젝션 공격에 취약하다.

그누보드의 코드에서는 보안취약점 제보로 패치되고 있지만, 서드파티가 제작한 기능은 이러한 보안취약점이 알려지거나 제보되지 않으므로 좀 더 취약할 수 있다. 스킨 등 확장기능을 개발할 때 SQL Injection에 항상 주의하여 질의문을 사용해야 한다.

## MySQLi 바인딩 사용하기

MySQLi API에서 바인딩을 사용할 수 있지만 그누보드에서는 이를 사용하지 않으며, 개발자가 사용 가능한 헬퍼를 제공하지 않으므로 그누보드에서 자동 연결한 DB 커넥션으로 `mysqli_prepare()` 함수를 사용할 수 있다.

```php
// $connect_db 전역변수를 사용
$stmt = mysqli_prepare($connect_db, 'SELECT * FROM g5_member WHERE mb_id = ?');
mysqli_stmt_bind_param($stmt, "s", $memberId);

$memberId = 'admin';

mysqli_stmt_execute($stmt);
```

## PDO 사용하기