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

::: danger 위험은 미리 피하자
그누보드, 영카트는 여전히 보안취약점이 활발하게 발견되고 있는 중이며, 보안취약점을 고친 패치가 배포될 때 해당 보안취약점과 이를 이용한 공격 가능한 방법이 알려지는 셈이다.

보안취약점 패치가 공개되면 빠르게 패치하는 것이 가장 좋지만, 그러지 못할 수 있으므로 영카트를 사용하지 않는다면 관련 파일을 모두 제거하여 위험을 미리 방지할 수 있다.
:::