<script>
const pesticideLinks = {
  "スミチオン": "https://amzn.to/3OsRoDS",
  "ダコニール": "https://amzn.to/46EAJn5",
  "モスピラン": "https://amzn.to/4qtxB4L",
  "ダントツ": "https://amzn.to/4kljwVn",   
　"プレオ": "https://amzn.to/4r4Oiob",
  "スターマイト": "https://amzn.to/3ZY2TFS",
  "カネマイト": "https://amzn.to/3OsRKdG",
  "フェニックス": "https://amzn.to/3Mnyhue",
  "ゼンターリ": "https://amzn.to/3MkOSyR",
  "プレバソン": "https://amzn.to/3LV37uk",
  "トルネード": "https://amzn.to/4cgdfIC",
  "アファーム": "https://amzn.to/46fhSiz",
  "アドマイヤー": "https://amzn.to/4ruVTMC",
  "マラソン": "https://amzn.to/4aBk1Ye",
  "ディアナ": "https://amzn.to/4a5pQNw",
  "コロマイト": "https://amzn.to/46Ev8x4",
　"ウララDF": "https://amzn.to/4tvBk4z",
  "スピノエース": "https://amzn.to/3ZY3mb6",
  "ダニサラバ": "https://amzn.to/3ObkmYQ",
  "スタークル": "https://amzn.to/4apepiz",
  "アクタラ": "https://amzn.to/3O2S2YQ",
  "ダニトロン": "https://amzn.to/4qob616",
  "オルトラン粒剤": "https://amzn.to/3Zkduea",
  "ダイアジノン": "https://amzn.to/4algR9E",
  "トップジンM": "https://amzn.to/46EAKYb" 
};
</script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".pesticide").forEach(el => {
    const name = el.textContent.trim();
    if (pesticideLinks[name]) {
      el.innerHTML = `<a href="${pesticideLinks[name]}" target="_blank">${name}</a>`;
    }
  });
});
</script>
