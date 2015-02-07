# ひよこクーポンプロジェクト

## 開発環境の構築
C:/xampp/htdocs/ ディレクトリ配下で
```bash
git clone https://github.com/NobuyaIshikawa/hiyoko-coupon
```

C:\xampp\apache\conf\httpd.conf のDocument Root を変更してください。
```
DocumentRoot "C:/xampp/htdocs/hiyoko-coupon"
```

httpd.conf のDirectory も変更してください
```
<Directory "C:/xampp/htdocs/hiyoko-coupon">
```

httpd.conf の以下のIfModule 要素内すべてをコメントアウト
```
#<IfModule alias_module>
#～
#</IfModule>
```

httpd.conf の以下のモジュールをコメントアウトしてください。
```
#LoadModule rewrite_module modules/mod_rewrite.so
```

XAMPP のApache を起動して、Web ブラウザでアクセスしてください。
```
http://localhost/
```

メモ：
プログレスバーのサンプル
http://www.minddust.com/project/bootstrap-progressbar/demo/bootstrap-3-3-0/
