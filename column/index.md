---
layout: default_care
title: カルティベーションラボ｜コラム一覧
---

# コラム一覧

{% assign column_pages = site.pages | where: "dir", "/column/" %}
{% assign sorted = column_pages | sort: "name" %}

{% capture md %}
{% for p in sorted %}
{% unless p.name == "index.html" or p.name == "column_index.html" %}
- {{ p.title | default: p.name }}
{% endunless %}
{% endfor %}
{% endcapture %}

{{ md | markdownify }}
