# iGEM Kyoto official website

[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) を使用してブートストラップされた [Next.js](https://nextjs.org/) プロジェクトです。

## 開発を始める

### 準備

まずこのリポジトリをローカルディレクトリにクローンします：

```bash
# 必要に応じてリポジトリをクローンしたいディレクトリに移動
cd /path/to/your/directory
# /path/to/your/directory/iGEMKyotoOfficial.github.io にクローンされる
git clone https://github.com/iGEMKyotoOfficial/iGEMKyotoOfficial.github.io.git
```

次にNode.js がマシンにインストールされていることを確認する。

```bash
node -v
```

インストールできている場合はバージョンが表示されるが、インストールできてない場合は、[Node.js の公式サイト](https://nodejs.org/) からインストールする。

次に依存関係をインストールする：

```bash
# リポジトリ内に移動
cd iGEMKyotoOfficial.github.io
# 依存関係をインストール
npm install
```

リポジトリをプルするたびに、最新の依存関係をインストールするために `npm install` を実行する必要があることに注意。

### 編集

次のコマンドで開発サーバーを起動する：

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くことで結果を見ることができます。
ファイルを編集して保存すると、ブラウザで開いているページが自動的に更新されます。

編集が完了したら、プロジェクトをビルドできることを確認してください：

```bash
npm run build
```

何かエラーが出たらエラーメッセージをもとに修正してください。
（エラーを直さずにpushすることもできるが、デプロイでエラーが出て編集が実際のホームページに反映されない）

### デプロイ

このプロジェクトは GitHub Pages にデプロイされています。
デプロイは GitHub Actions によって行われており、新しいコミットが `main` ブランチにpushされると自動的にデプロイされます。

`main` ブランチへのpushは、VSCode 上のボタン操作で行うか、ターミナルから以下のコマンドを実行することで行うことができます。

```bash
# ステージに変更を加える
git add .
# コミットする。コミットメッセージは適宜変更
git commit -m "Your commit message"
# リモートの main ブランチにpushする
git push origin main
```

参考記事：

- [2023年8月版: Next.jsをGitHub ActionsでGitHub Pagesにデプロイする方法 - Zenn](https://zenn.dev/pino0701/articles/nextjs_github_pages#5.-%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%AE%E8%A8%AD%E5%AE%9A)
  - この記事の5節以降のセットアップを行った。
  - このプロジェクトは "Page Router" を使用しているので "App Router" に関する記述は無視してよろしい
