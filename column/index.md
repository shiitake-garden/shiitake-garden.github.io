---
layout: default_care
title: カルティベーションラボ
---


<!doctype html>
<html lang="ja">

<body>
<!--ここから記事-->
<section class="article-layout">
  <article class="article-main">


# 診断

- site.pages 件数: {{ site.pages | size }}

{% assign column_pages = site.pages | where: "dir", "/column/" %}
- /column/ 抽出件数: {{ column_pages | size }}

## /column/ 配下ページ一覧（Jekyll視点）
{% for p in column_pages %}
- path: `{{ p.path }}` / dir: `{{ p.dir }}` / name: `{{ p.name }}` / url: `{{ p.url }}` / title: `{{ p.title | default: '(titleなし)' }}`
{% endfor %}




  </article>
  <!--ここからサイドバー-->
  <aside class="article-sidebar">

    <div class="sidebar-block">
      <h3>おすすめ記事</h3>
      <ul>
        <!--
        <li><a href="#">家庭菜園の病害虫対策</a></li>
        <li><a href="#">果樹の年間作業カレンダー</a></li>
        <li><a href="#">初心者向け農薬の選び方</a></li>
        -->
      </ul>
    </div>

    <div class="sidebar-block">
      <h3>おすすめ商品</h3>
      <!-- Amazonアフィリエイトリンクをここに -->
    </div>

    <div class="sidebar-block">
      <h3>広告</h3>
      <!-- AdSense広告枠 -->

    </div>

  </aside>

</section>

</body>
</html>
