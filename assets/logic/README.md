# 共通スクリプトディレクトリ

このディレクトリには、複数のアプリで使用される共通のJavaScript機能を配置します。

## 使用方法

### 共通スクリプトの配置

- 複数のアプリで使用される機能はここに配置
- 例：ユーティリティ関数、共通のバリデーション、API呼び出しなど

### アプリ固有のスクリプト

- そのアプリでしか使用されない機能は、HTML内の `<script>` タグに記述
- 例：アプリ固有のイベントハンドラー、UI操作など

## ファイル命名規則

- `common.js` - 一般的なユーティリティ関数
- `validation.js` - バリデーション関連
- `api.js` - API呼び出し関連
- `storage.js` - ローカルストレージ関連

## 例：common.js

```javascript
// ユーティリティ関数
function formatDate(date) {
    return new Date(date).toLocaleDateString("ja-JP");
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// DOM操作ヘルパー
function showElement(id) {
    document.getElementById(id).style.display = "block";
}

function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

function setTextContent(id, text) {
    document.getElementById(id).textContent = text;
}
```

## 新しい共通スクリプトの追加

1. 機能に応じて適切なファイル名を選択
2. 関数は適切にコメントを付けて記述
3. このREADMEを更新して機能を説明
4. 各アプリで `<script src="../assets/logic/filename.js"></script>` で読み込み
