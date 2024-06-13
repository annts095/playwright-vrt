# playwright-vrt

## セットアップ

### リポジトリの Clone

```sh
git clone https://github.com/annts095/playwright-vrt.git
```

### volta

Volta を使用して Nodejs のバージョン管理を行っているため、[公式サイト](https://volta.sh)からインストールしてください。

windows の場合は、[公式サイト](https://nodejs.org/en/download/package-manager)から Node.js の LTS となっているバージョンをインストールしてください。その後

### パッケージのインストール

npm を使ってパッケージをインストールしてください。

```sh
npm ci
```

## テストの実行手順

### 1. 対象ドメインの設定

playwright.config.ts の baseUrl を対象のドメインに変更してください。

### 2. 対象ページの設定

/tests/vrt.spec.ts の `page.goto` の引数に対象のページの URL を設定してください。
設定したいページを全て記載します。

### 3. 基準となるスクリーンショットの作成

基準となるスクリーンショットを生成します。

```bash
npx playwright test --update-snapshots
```

### 4. テストの実行

テストを実施します。3 で作成したスクリーンショットとと比較し、差分がある場合はエラーとなります。

```bash
npx playwright test
```

## 使用例

### 別サーバに移行したものが全く同じものであるか確認する

1. 対象ドメインを移行元に設定
2. テスト対象ページを記載
3. `npx playwright test --update-snapshots` を実行して基準となるスクリーンショットを作成
4. 対象ドメインを移行先に設定
5. `npx playwright test`を実行してテストを実施

## 参考 URL

- https://higelog.brassworks.jp/4407
