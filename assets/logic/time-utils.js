/**
 * 時間計算ユーティリティ関数
 * JWTの有効期限計算などに使用
 */

/**
 * 現在時刻から指定時刻までの時間差を計算し、適切な単位で表示
 * @param {number} timestamp - Unix timestamp (秒)
 * @param {boolean} isPast - 過去の時間として表示するかどうか
 * @returns {string} 時間差の文字列（例: "2時間30分後", "3日前", "有効期限切れ"）
 */
function getTimeDifference(timestamp, isPast = false) {
    const now = Math.floor(Date.now() / 1000); // 現在時刻（秒）
    const diff = timestamp - now; // 秒単位の差

    if (diff < 0) {
        if (isPast) {
            // 過去の時間として表示
            const absDiff = Math.abs(diff);
            const years = Math.floor(absDiff / 31536000); // 365日 * 24時間 * 3600秒
            const days = Math.floor((absDiff % 31536000) / 86400);
            const hours = Math.floor((absDiff % 86400) / 3600);
            const minutes = Math.floor((absDiff % 3600) / 60);
            const seconds = absDiff % 60;

            // 最も適切な単位で表示
            if (years > 0) {
                if (days > 0) {
                    if (hours > 0) {
                        if (minutes > 0) {
                            return `${years}年${days}日${hours}時間${minutes}分${seconds}秒`;
                        }
                        if (seconds > 0) {
                            return `${years}年${days}日${hours}時間${seconds}秒`;
                        }
                        return `${years}年${days}日${hours}時間`;
                    }
                    if (minutes > 0) {
                        return `${years}年${days}日${minutes}分${seconds}秒`;
                    }
                    if (seconds > 0) {
                        return `${years}年${days}日${seconds}秒`;
                    }
                    return `${years}年${days}日`;
                }
                if (hours > 0) {
                    return `${years}年${hours}時間${minutes}分${seconds}秒`;
                }
                if (minutes > 0) {
                    return `${years}年${minutes}分${seconds}秒`;
                }
                if (seconds > 0) {
                    return `${years}年${seconds}秒`;
                }
                return `${years}年`;
            }

            if (days > 0) {
                if (hours > 0) {
                    if (minutes > 0) {
                        return `${days}日${hours}時間${minutes}分${seconds}秒`;
                    }
                    if (seconds > 0) {
                        return `${days}日${hours}時間${seconds}秒`;
                    }
                    return `${days}日${hours}時間`;
                }
                if (minutes > 0) {
                    return `${days}日${minutes}分${seconds}秒`;
                }
                if (seconds > 0) {
                    return `${days}日${seconds}秒`;
                }
                return `${days}日`;
            }

            if (hours > 0) {
                if (minutes > 0) {
                    return `${hours}時間${minutes}分${seconds}秒`;
                }
                if (seconds > 0) {
                    return `${hours}時間${seconds}秒`;
                }
                return `${hours}時間`;
            }

            if (minutes > 0) {
                return `${minutes}分${seconds}秒`;
            }

            return `${seconds}秒`;
        }
        return "有効期限切れ";
    }

    if (diff === 0) {
        return "今";
    }

    // 日、時間、分、秒に変換
    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff % 86400) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;

    // 最も適切な単位で表示
    if (days > 0) {
        if (hours > 0) {
            return `${days}日${hours}時間後`;
        }
        return `${days}日後`;
    }

    if (hours > 0) {
        if (minutes > 0) {
            return `${hours}時間${minutes}分後`;
        }
        return `${hours}時間後`;
    }

    if (minutes > 0) {
        if (seconds > 0) {
            return `${minutes}分${seconds}秒後`;
        }
        return `${minutes}分後`;
    }

    return `${seconds}秒後`;
}

/**
 * Unix timestampを日時文字列に変換
 * @param {number} timestamp - Unix timestamp (秒)
 * @returns {string} 日時文字列（例: "2024-01-01 12:00:00"）
 */
function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}

/**
 * 現在時刻をUnix timestampで取得
 * @returns {number} Unix timestamp (秒)
 */
function getCurrentTimestamp() {
    return Math.floor(Date.now() / 1000);
}

/**
 * 指定時間後のUnix timestampを計算
 * @param {number} seconds - 追加する秒数
 * @returns {number} Unix timestamp (秒)
 */
function getFutureTimestamp(seconds) {
    return getCurrentTimestamp() + seconds;
}
