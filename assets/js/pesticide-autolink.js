document.addEventListener("DOMContentLoaded", () => {
  // 辞書があるかチェック
  if (!window.pesticideLinks) {
    console.error("辞書データ(pesticideLinks)が見つかりません");
    return;
  }

  document.querySelectorAll(".pesticide").forEach(el => {
    // 前後の空白や改行を完全に除去
    const name = el.textContent.replace(/^\s+|\s+$/g, ''); 
    
    if (window.pesticideLinks[name]) {
      el.innerHTML = `<a href="${window.pesticideLinks[name]}" target="_blank" rel="noopener noreferrer">${name}</a>`;
    } else {
      // リンクがつかない場合、コンソールに名前を出して確認できるようにする
      console.log("辞書に未登録の商品名:", name);
    }
  });
});
