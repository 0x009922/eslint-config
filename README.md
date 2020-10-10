# @liquidsolid/eslint-config

### Установка

```sh
npm i --save-dev @liquidsolid/eslint-config
```

### Использование

Указать в конфиге `eslint` список расширений:

```json
{
  "extends": [
    "@liquidsolid/eslint-config/base",
    "@liquidsolid/eslint-config/typescript",
    "@liquidsolid/eslint-config/vue",
    "@liquidsolid/eslint-config/vue-2"
  ]
}
```

**Важно**: конфиг для TypeScript **должен идти раньше** конфига для Vue, потому что во Vue свой парсер.

### Пакеты

Друг друга в себя не включают, т. е. если нужен и `typescript`, и `vue`, и `base`, их все надо подключать по отдельности.

#### `@liquidsolid/eslint-config/base`

Конфиг `airbnb-base/whitespace`. Может использоваться самостоятельно.

#### `@liquidsolid/eslint-config/typescript`

Набор правил для TypeScript. Может использоваться самостоятельно.

#### `@liquidsolid/eslint-config/vue`

Набор правил для Vue 3

#### `@liquidsolid/eslint-config/vue-2`

Правила для Vue 2. Просто чтобы были.

## Cookbook

### Добавить алиас `@` на `./src` в eslint

Сначала установить резолвер:

```sh
npm i --save-dev eslint-import-resolver-alias
```

И добавить в конфиг:

```js
module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.ts', '.js', '.json' /* etc */ ]
      }
    }
  }
}
```
