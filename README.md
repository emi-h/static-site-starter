branch01で変更
# 静的サイト作成のためのスターターキット

## 使用方法

```console
yarn install
```

```console
yarn watch
```

## 機能

-ディレクトリをクリーンにする(rimraf)  
-html/js を dist へコピー  
-sass コンパイル(sass)  
-画像圧縮<jpg/png/gif/svg>(imagemin imagemin-keep-folder imagemin-mozjpeg imagemin-pngquant imagemin-gifsicle imagemin-svgo)  
-サーバーを立ち上げ(browser-sync) -常時監視(watch)

## 入れてないもの

-EJS -ベンダープレフィックス  
-JS 圧縮、バンドルなど
