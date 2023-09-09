---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/gnuboard/install.html
description: 그누보드5 설치를 위한 조건 및 설치 방법
---

# 설치하기

TBD

## 설치 환경

그누보드5를 설치하기 위해서는 아래 조건을 만족해야한다

- PHP 7.2 이상 권장 (최소 PHP 5.2.17 이상)
- MySQL 5.0 이상 또는 MySQL 5.0 이상의 기능을 만족하는 MariaDB
- 리눅스 호환 OS
- 필수 라이브러리
  - GD Library 2.0 이상
  - iconv

::: info
PHP 7.4 이상, MySQL 5.7(& MariaDB) 사용을 권장한다.
:::

::: danger 환경에 따른 주의 사항

- Nginx에서는 폴더 및 파일에 대한 접근제한 설정이 적용되지 않아 위험에 노출될 수 있으니 주의해야한다
  - Apache를 사용하는 것을 권장하며, Nginx 사용 시 그누보드 개발사가 설정을 가이드하고 있지 않으니 폴더, 파일 접근제한을 사용자가 알아서 설정해야한다
- PHP 8.x에서는 그누보드에서 일부 심각한 오류를 발생시킬 수 있다
- MySQL 8.0.11 이상의 버전에서 MySQL `password()` 함수의 제거로 인해 오류가 발생할 수 있다
  - 그누보드 5.2.9.3 버전(2015년 출시) 이전부터 운영되어 오던 사이트(DB 데이터)에서 문제가 발생할 수 있으며, 일부 회원이 로그인에 실패하는 등의 문제를 겪을 수 있다
  - 이 문제는 보고되었으나 고쳐지지 않고 있다. [그누보드 이슈 247](https://github.com/gnuboard/gnuboard5/issues/247)


:::

## 설치 방법

TBD

- 설치 전 [초기 설정](/gnuboard/config) 참고
- 파일 업로드
- 브라우저
- data 폴더 만들기
- DB, 관리자 정보 입력
