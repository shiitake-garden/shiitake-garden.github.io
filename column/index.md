---
layout: default_care
title: カルティベーションラボ
---
# 診断

- site.pages 件数: {{ site.pages | size }}

{% assign column_pages = site.pages | where: "dir", "/column/" %}
- /column/ 抽出件数: {{ column_pages | size }}

## /column/ 配下ページ一覧（Jekyll視点）
{% for p in column_pages %}
- path: `{{ p.path }}` / dir: `{{ p.dir }}` / name: `{{ p.name }}` / url: `{{ p.url }}` / title: `{{ p.title | default: '(titleなし)' }}`
{% endfor %}
