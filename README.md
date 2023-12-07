# Kurage Utils

Collection of utility functions.

<img src="https://github.com/kiyotd/kurage/assets/41136135/2e429270-6fa5-43f5-98be-de590d927688" width="100%" >

## Installation

```bash
npm i @kiyotd/kurage-utils
```

```bash
yarn add @kiyotd/kurage-utils
```

```bash
pnpm add @kiyotd/kurage-utils
```

<!--
CDN

```shell
<script src="https://unpkg.com/@kiyotd/kurage-utils@latest/dist/index.js"></script>
```
-->

## Examples

- NumberUtils.map

  数値を別の範囲にマッピング

    ```typescript
    import { NumberUtils } from "@kiyotd/kurage-utils";
    
    // 元の範囲が0から100で、新しい範囲が0から1の場合
    NumberUtil.map(50, 0, 100, 0, 1) // 0.5
  
    // 元の範囲が0から100で、新しい範囲が0から10の場合
    NumberUtil.map(50, 0, 100, 0, 10) // 5
    ```

- calculateRgbaForOpacity

  透明度を考慮したRGBA値を計算

    ```typescript
    import { calculateRgbaForOpacity } from '@kiyotd/kurage-utils';

    // "rgb(80,209,173)" に限りなく近い色で、透明度を 0.75 にした場合の RGBA 値を取得
    calculateRgbaForOpacity('80,209,173', 0.75); // rgba(22,194,146,0.75)
   
    // "#50d1ad" に限りなく近い色で、透明度を 0.75 にした場合の RGBA 値を取得  
    calculateRgbaForOpacity('#50d1ad', 0.8); // rgba(22,194,146,0.75)
    ```

<!--
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
-->

etc...

## Documentation

[kurage-utils.vercel.app](https://kurage-utils.vercel.app/)

## License

MIT
