document.addEventListener("DOMContentLoaded", () => {
  // あなたのアソシエイトタグをここに入れてください
  const associateTag = "あなたのアソシエイトタグ"; 

  document.querySelectorAll(".pesticide").forEach(el => {
    const name = el.textContent.trim();
    if (!name) return; // 空文字の場合はスキップ

    let url = null;

    // 1. 辞書(pesticideLinks)に存在するかチェック
    if (window.pesticideLinks && window.pesticideLinks[name]) {
      url = window.pesticideLinks[name];
    } else {
      // 2. 辞書にない場合はAmazonでの検索URLを生成
      const encoded = encodeURIComponent(name);
      url = `https://www.amazon.co.jp/s?k=${encoded}&tag=${associateTag}`;
    }

    // リンクを生成（アイコン表示用のクラス amazon-link を付与）
    el.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="amazon-link">${name}</a>`;
  });
});
