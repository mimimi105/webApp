// 共通ユーティリティ関数

/**
 * 日付を日本語形式でフォーマット
 * @param {Date|string} date - フォーマットする日付
 * @returns {string} フォーマットされた日付文字列
 */
function formatDate(date) {
    return new Date(date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/**
 * デバウンス関数
 * @param {Function} func - 実行する関数
 * @param {number} wait - 待機時間（ミリ秒）
 * @returns {Function} デバウンスされた関数
 */
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

/**
 * DOM要素を表示
 * @param {string} id - 要素のID
 */
function showElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = "block";
    }
}

/**
 * DOM要素を非表示
 * @param {string} id - 要素のID
 */
function hideElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = "none";
    }
}

/**
 * 要素のテキストコンテンツを設定
 * @param {string} id - 要素のID
 * @param {string} text - 設定するテキスト
 */
function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

/**
 * 要素のHTMLコンテンツを設定
 * @param {string} id - 要素のID
 * @param {string} html - 設定するHTML
 */
function setHTMLContent(id, html) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = html;
    }
}

/**
 * アラートメッセージを表示
 * @param {string} message - 表示するメッセージ
 * @param {string} type - アラートのタイプ (success, warning, error, info)
 */
function showAlert(message, type = "info") {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;

    const container = document.querySelector(".app-container");
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);

        // 3秒後に自動で削除
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
}

/**
 * ローカルストレージにデータを保存
 * @param {string} key - キー
 * @param {any} data - 保存するデータ
 */
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error("Failed to save to localStorage:", error);
    }
}

/**
 * ローカルストレージからデータを取得
 * @param {string} key - キー
 * @param {any} defaultValue - デフォルト値
 * @returns {any} 取得したデータ
 */
function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error("Failed to load from localStorage:", error);
        return defaultValue;
    }
}

/**
 * ランダムなIDを生成
 * @param {number} length - IDの長さ
 * @returns {string} ランダムなID
 */
function generateId(length = 8) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * 文字列をクリップボードにコピー
 * @param {string} text - コピーするテキスト
 * @returns {Promise<boolean>} コピーが成功したかどうか
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
        return false;
    }
}
