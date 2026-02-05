// assets/js/schedule.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('schedule.js loaded'); // 読み込み確認用

  const btn = document.querySelector('#toggle-details');
  if (!btn) return;

  const tables = document.querySelectorAll('.schedule-table');

  // 初期：詳細を隠す（CSS側でも隠しますが保険）
  tables.forEach(t => t.classList.add('hide-details'));

  btn.addEventListener('click', () => {
    const isHiding = tables[0]?.classList.contains('hide-details');
    tables.forEach(t => t.classList.toggle('hide-details'));
    btn.textContent = isHiding ? '詳細を非表示' : '詳細を表示';
    btn.setAttribute('aria-pressed', String(isHiding));
  });
});
