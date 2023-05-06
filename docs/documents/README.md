# dgfAuthBase
Django project with allauth

これはDjangoの認証機能付きアプリを作成するためのひな型（Dockerコンテナ）

以下はWindowsでコンテナを起動し、Djangoアプリを表示するための説明（前提：Windows10にDocker Desktopがインストール済みであること）

1. DOS窓を起動する。

2. docker-compose.ymlがあるフォルダ(このファイルがあるフォルダと同じ)に移動する

```
	cd c:\dgfAuthBase2
```

3. コンテナを起動する

```
	docker compose up -d --build
```

4. コンテナに接続してbashを起動する

```
	docker exec -it -u user1 dgfAuthBase2 bash
```

5. マイグレートを行う

```
	$ python manage.py migrate
```

6. ブラウザを起動して下記アドレスにアクセスすると「こんにちは。 from Django!」が表示される

```
	http://127.0.0.1:8080/
```


ここからは4.で起動したbashでの作業


6. パッケージ一覧を更新しsqlite3をインストールする

```
	~/app$ sudo apt-get update
	~/app$ sudo apt-get install sqlite3
```

7. sqlite3コマンドを実行しdb.sqlite3ファイルを開く

```
	~/app$ sqlite3 db.sqlite3
	SQLite version 3.34.1 2021-01-20 14:10:07
	Enter ".help" for usage hints.
```

8. SQL文を実行しCustomUserテーブルにレコードを追加する

```
	sqlite> .read sql/insert/customuser.sql
```

9. SQL文を実行しarticleテーブルにレコードを追加する

```
	sqlite> .read sql/insert/article.sql
```

ここまで4.で起動したbashでの作業


10. 上記4.のURLを開きログインボタンをクリック後、下記ユーザでログインできることを確認する(2ユーザ)

```
	admin@example.com
	user1@example.com

	記事１００はadminユーザが作成したため、user1でログインした場合は編集不可になる
	adminユーザは管理者であるため、user1が作成した記事も編集可能になる
```


11. 下記URLを開きadminユーザ(上記)で管理画面にログインできることを確認する

```
	http://127.0.0.1:8080/admin 
```




ここからはメモ

・プロジェクトを作成する
	django-admin startproject myproj
	
・アプリを作成する
	cd myproj
	python manage.py startapp myapp

・スーパーユーザを作成する
	python manage.py createsuperuser

・スーパーユーザーのパスワード変更の変更
	python manage.py changepassword [ユーザ名]

・マイグレート
	python manage.py migrate
