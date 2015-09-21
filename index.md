---
layout: home
permalink: /
title: Home
---
<div class="tiles">
{% for post in site.categories.stories %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->