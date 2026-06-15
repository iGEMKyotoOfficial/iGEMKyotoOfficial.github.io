# igemkyotoofficial.github.io（組織ルート）

このリポジトリは GitHub Pages の**組織ルート** `https://igemkyotoofficial.github.io/` を担当します。

サイト本体ではなく、**正規サイト `https://igemkyotoofficial.github.io/homepage/`（repo: [iGEMKyotoOfficial/homepage](https://github.com/iGEMKyotoOfficial/homepage)）へリダイレクトするだけ**の構成です。

## 仕組み

- `dist/index.html` … ルートに来たアクセスを `/homepage/` へ転送
- `dist/404.html` … ルート配下の未一致パスも `/homepage/` へ転送
- `.github/workflows/deploy.yml` … `dist/` を GitHub Pages へ配信（ビルドなし）

サイトの内容を編集したい場合は、このリポジトリではなく **`homepage` リポジトリ**を編集してください。

> 補足: 以前はこのリポジトリにもサイト本体（Next.js 一式）が入っていましたが、`basePath: /homepage` ビルドをルート配信していたためアセットが 404 になり表示が崩れていました。リダイレクト方式に一本化したことで解消しています。`src/` 等の旧 Next.js プロジェクト一式は不要なので、後で削除して構いません。
