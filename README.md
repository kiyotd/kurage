# @kiyotd/kurage

海に漂うクラゲのように散らばってしまった関数を集めておく場所。（再利用しそうな関数をまとめているだけ）

<img src="https://github.com/kiyotd/kurage/assets/41136135/2e429270-6fa5-43f5-98be-de590d927688" width="50%" >

## インストール

npm

```bash
npm i @kiyotd/kurage
```

yarn

```bash
yarn add @kiyotd/kurage
```

CDN

```shell
<script src="https://unpkg.com/@kiyotd/kurage@latest/dist/index.js"></script>
```

## ドキュメント

[kurage-utils.vercel.app](https://kurage-utils.vercel.app/)

## 関数の例

- NumberUtils.map

  数値を別の範囲にマッピング

    ```typescript
    import { NumberUtils } from "@kiyotd/kurage";
    
    // 元の範囲が0から100で、新しい範囲が0から1の場合
    NumberUtil.map(50, 0, 100, 0, 1) // 0.5
  
    // 元の範囲が0から100で、新しい範囲が0から10の場合
    NumberUtil.map(50, 0, 100, 0, 10) // 5
    ```

- kebabCaseToCamelCase

  ケバブケースをキャメルケースに変換
    ```typescript
    import { kebabCaseToCamelCase } from "@kiyotd/kurage";
    
    kebabCaseToCamelCase("set-user-name"); // setUserName
    ```

- camelCaseToKebabCase

  キャメルケースをケバブケースに変換

    ```typescript
    import { camelCaseToKebabCase } from "@kiyotd/kurage";
    
    camelCaseToKebabCase("setUserName"); // set-user-name
    ```

- isEmail

  Emailアドレスのバリデーション

    ```typescript
    import { isEmail } from "@kiyotd/kurage";
    
    isEmail("example@example.com"); // true
    isEmail("example@exam@ple.com"); // false
    ```

- isIPv4

  IPv4アドレスのバリデーション

    ```typescript
    import { isIPv4 } from "@kiyotd/kurage";
    
    isIPv4("255.255.255.255"); // true
    isIPv4("255.255.255.256"); // false
    ```

他の関数は [ドキュメント](https://kurage-utils.vercel.app/) を参照してください。

## License

The MIT License
