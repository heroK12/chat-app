# Chat App

React ReactToolkit Tailwind CSS を用いた簡単なチャットアプリ。<br>
バック側は Firebase を使用。

![](/preview/login.png)

![](/preview/app.png)

# 使い方

FirebaseConfig の内容をローカルの環境変数に登録する。

```env
REACT_APP_FIREBASE_API_KEY=***********************
REACT_APP_FIREBASE_AUTH_DOMAIN==***********************
REACT_APP_FIREBASE_PROJECT_ID==***********************
REACT_APP_FIREBASE_STORAGE_BUCKET==***********************
REACT_APP_FIREBASE_MESSAGING_SENDER_ID==***********************
REACT_APP_FIREBASE_APP_ID==***********************
REACT_APP_MEASUREMENT_ID==***********************
```

依存関係のあるパッケージをインストール、起動する

```
npm i
npm start
```

# Todos

-   [ ] デザインの変更
-   [ ] ロゴの作成
-   [ ] 重複するユーザーの防止
-   [ ] テストの作成
    -   [ ] Jest
    -   [ ] React Testing Library
    -   [ ] Storybook
-   [ ] 機能の追加
-   [ ] バリデーションチェック追加
-   [ ] ユーザー情報編集
-   [ ] ルーム作成
