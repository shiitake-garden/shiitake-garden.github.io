document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".pesticide").forEach(el => {
    const name = el.textContent.trim();
    if (window.pesticideLinks && pesticideLinks[name]) {
      el.innerHTML = `<a href="${pesticideLinks[name]}" target="_blank" rel="noopener noreferrer">${name}</a>`;
    }
  });
});
