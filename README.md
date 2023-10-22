# kurage-utils

Collection of utility functions.

<img src="https://github.com/kiyotd/kurage/assets/41136135/2e429270-6fa5-43f5-98be-de590d927688" width="25%" >

## インストール

npm

```bash
npm i @kiyotd/kurage-utils
```

yarn

```bash
yarn add @kiyotd/kurage-utils
```

CDN

```shell
<script src="https://unpkg.com/@kiyotd/kurage-utils@latest/dist/index.js"></script>
```

## ドキュメント

[kurage-utils.vercel.app](https://kurage-utils.vercel.app/)

## 関数の例

- NumberUtils.map

  数値を別の範囲にマッピング

    ```typescript
    import { NumberUtils } from "@kiyotd/kurage-utils";
    
    // 元の範囲が0から100で、新しい範囲が0から1の場合
    NumberUtil.map(50, 0, 100, 0, 1) // 0.5
  
    // 元の範囲が0から100で、新しい範囲が0から10の場合
    NumberUtil.map(50, 0, 100, 0, 10) // 5
    ```

- kebabCaseToCamelCase

  ケバブケースをキャメルケースに変換
    ```typescript
    import { kebabCaseToCamelCase } from "@kiyotd/kurage-utils";
    
    kebabCaseToCamelCase("set-user-name"); // setUserName
    ```

- camelCaseToKebabCase

  キャメルケースをケバブケースに変換

    ```typescript
    import { camelCaseToKebabCase } from "@kiyotd/kurage-utils";
    
    camelCaseToKebabCase("setUserName"); // set-user-name
    ```

- isEmail

  Emailアドレスのバリデーション

    ```typescript
    import { isEmail } from "@kiyotd/kurage-utils";
    
    isEmail("example@example.com"); // true
    isEmail("example@exam@ple.com"); // false
    ```

- isIPv4

  IPv4アドレスのバリデーション

    ```typescript
    import { isIPv4 } from "@kiyotd/kurage-utils";
    
    isIPv4("255.255.255.255"); // true
    isIPv4("255.255.255.256"); // false
    ```

他の関数は [ドキュメント](https://kurage-utils.vercel.app/) を参照してください。

## License

The MIT License
