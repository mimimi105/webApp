# UI テンプレートガイド

このガイドでは、統一されたUIデザインで新しいアプリを作成する方法を説明します。

## 基本構造

### HTMLテンプレート

```html
<!doctype html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>アプリ名 - WebApp Collection</title>

        <!-- 共通スタイル -->
        <link rel="stylesheet" href="../assets/styles/colors.css" />
        <link rel="stylesheet" href="../assets/styles/common.css" />

        <!-- アプリ固有のスタイル（必要に応じて） -->
        <style>
            /* アプリ固有のスタイルをここに記述 */
        </style>
    </head>
    <body>
        <div class="container">
            <div class="app-container">
                <h1>アプリ名</h1>

                <!-- アプリのコンテンツ -->
            </div>
        </div>

        <!-- 共通スクリプト（必要に応じて） -->
        <script src="../assets/logic/common.js"></script>

        <!-- アプリ固有のスクリプト -->
        <script>
            // アプリ固有のJavaScriptをここに記述
        </script>
    </body>
</html>
```

## スタイルガイドライン

### カラーパレット

- **プライマリ**: `var(--primary-color)` (#4caf50)
- **セカンダリ**: `var(--secondary-color)` (#2196f3)
- **テキスト**: `var(--text-primary)` (#333)
- **背景**: `var(--bg-primary)` (#ffffff)

### コンポーネント

#### ボタン

```html
<!-- プライマリボタン -->
<button>アクション</button>

<!-- セカンダリボタン -->
<button class="secondary">セカンダリ</button>

<!-- 危険なアクション -->
<button class="danger">削除</button>

<!-- ボタングループ -->
<div class="button-group">
    <button>ボタン1</button>
    <button>ボタン2</button>
</div>
```

#### フォーム要素

```html
<!-- テキスト入力 -->
<label for="input">ラベル</label>
<input type="text" id="input" placeholder="プレースホルダー" />

<!-- テキストエリア -->
<label for="textarea">テキストエリア</label>
<textarea id="textarea" placeholder="テキストを入力..."></textarea>

<!-- スライダー -->
<label for="slider">スライダー: <span id="value">50</span></label>
<input type="range" id="slider" min="0" max="100" value="50" />
```

#### カード

```html
<div class="card">
    <div class="card-header">
        <h3>カードタイトル</h3>
    </div>
    <p>カードの内容</p>
</div>
```

#### アラート

```html
<div class="alert success">成功メッセージ</div>
<div class="alert warning">警告メッセージ</div>
<div class="alert error">エラーメッセージ</div>
<div class="alert info">情報メッセージ</div>
```

## JavaScript ガイドライン

### 共通スクリプトの使用

- **共通機能**: `assets/logic/` に配置
- **アプリ固有**: HTML内の `<script>` タグに記述

### 関数命名規則

```javascript
// 動詞 + 名詞の形式
function updateValue() {}
function validateInput() {}
function processData() {}

// イベントハンドラー
function handleSubmit() {}
function handleClick() {}
```

### DOM操作

```javascript
// 要素の取得
const element = document.getElementById("id");
const elements = document.querySelectorAll(".class");

// イベントリスナー
element.addEventListener("click", handleClick);

// スタイル変更
element.style.display = "block";
element.classList.add("class-name");
```

## レスポンシブデザイン

- モバイルファーストで設計
- `max-width: 800px` のコンテナを使用
- ボタンはモバイルで全幅表示

## アクセシビリティ

- 適切な `label` 要素の使用
- `alt` 属性の設定
- キーボードナビゲーションの対応
- コントラスト比の確保

## ファイル構造

```
app-name/
├── index.html          # アプリのメインファイル
├── assets/            # アプリ固有のアセット（必要に応じて）
└── README.md          # アプリの説明（推奨）
```

## 新しいアプリの追加手順

1. 新しいディレクトリを作成
2. 上記のHTMLテンプレートを使用して `index.html` を作成
3. アプリ固有の機能を実装
4. ルートの `index.html` にアプリを追加
5. 必要に応じて `README.md` を作成

## 例：シンプルなアプリ

```html
<!doctype html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>カウンター - WebApp Collection</title>
        <link rel="stylesheet" href="../assets/styles/colors.css" />
        <link rel="stylesheet" href="../assets/styles/common.css" />
    </head>
    <body>
        <div class="container">
            <div class="app-container">
                <h1>カウンター</h1>

                <div class="text-center">
                    <h2 id="count">0</h2>
                    <div class="button-group">
                        <button onclick="decrement()">-</button>
                        <button onclick="reset()">リセット</button>
                        <button onclick="increment()">+</button>
                    </div>
                </div>
            </div>
        </div>

        <script>
            let count = 0;

            function updateDisplay() {
                document.getElementById("count").textContent = count;
            }

            function increment() {
                count++;
                updateDisplay();
            }

            function decrement() {
                count--;
                updateDisplay();
            }

            function reset() {
                count = 0;
                updateDisplay();
            }
        </script>
    </body>
</html>
```
