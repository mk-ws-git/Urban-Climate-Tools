---
layout: default
title: Case Study Map
---

<section class="section">
<div class="container">
<div class="section__header">
  <h1 class="section__title">Case Study Map</h1>
  <p class="section__description">Explore how cities around the world are implementing climate resilience strategies. Click a pin to learn more.</p>
</div>
</div>
</section>

<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">

<div id="case-study-map" style="height:520px;width:100%;border-radius:var(--radius-lg);overflow:hidden;"></div>

<!-- Filter bar below map -->
<div class="container" style="margin-top:var(--space-6)">
  <div class="map-filter-bar">
    <span class="map-filter-bar__label">Filter by:</span>
    <div class="map-filter-bar__chips" id="map-filter-chips">
      <button class="map-chip map-chip--active" data-filter="all">All</button>
      <button class="map-chip" data-filter="heat">Heat</button>
      <button class="map-chip" data-filter="flood">Flood</button>
      <button class="map-chip" data-filter="coastal">Coastal</button>
      <button class="map-chip" data-filter="green">Green Infra</button>
      <button class="map-chip" data-filter="planning">Planning</button>
    </div>
    <span class="map-filter-bar__count" id="map-count"></span>
  </div>

  <!-- Case study card list below map -->
  <div class="map-card-grid" id="map-card-grid"></div>
</div>

<!-- Case studies data -->
<script>
window.UCT_CASE_STUDIES = {{ site.data.case_studies | jsonify }};
</script>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV/XN/WLs=" crossorigin=""></script>

<script>
(function () {
  // Coordinates for each case study keyed by id
  var COORDS = {
    'norfolk-coastal-resilience': [36.85, -76.29],
    'minneapolis-green-equity':   [44.98, -93.27],
    'phoenix-urban-heat':         [33.45, -112.07],
    'rotterdam-water-resilience': [51.92, 4.48],
    'paris-urban-forestry':       [48.86, 2.35],
    'singapore-sustainability':   [1.35,  103.82],
    'bogota-climate-action':      [4.71,  -74.07],
    'copenhagen-cycling-climate': [55.68, 12.57],
    'melbourne-urban-forest':     [-37.81, 144.96],
    'medellín-green-corridors':   [6.25,  -75.56],
    'london-urban-heat-strategy': [51.51, -0.13],
    'jakarta-flood-resilience':   [-6.21,  106.85],
    'cape-town-water-resilience': [-33.93,  18.42]
  };

  var BASE = '{{ site.baseurl }}';

  var studies = window.UCT_CASE_STUDIES || [];
  var markers = [];
  var activeFilter = 'all';

  // Initialise map
  var map = L.map('case-study-map', {
    center: [30, 10],
    zoom: 2,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom marker icon
  function makeIcon(color) {
    return L.divIcon({
      className: '',
      html: '<div class="map-pin" style="background:' + color + '">' +
            '<div class="map-pin__dot"></div></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });
  }

  var CATEGORY_COLORS = {
    heat: '#e05c2e',
    flood: '#2e7de0',
    coastal: '#1ba3c9',
    green: '#3aad5c',
    planning: '#9b59b6',
    other: '#7f8c8d'
  };

  function primaryCategory(study) {
    var cats = study.categories || [];
    var order = ['heat','flood','coastal','green','planning'];
    for (var i = 0; i < order.length; i++) {
      if (cats.indexOf(order[i]) > -1) return order[i];
    }
    return 'other';
  }

  function buildPopup(study) {
    var url = BASE + '/case-study/' + study.id + '/';
    var cats = (study.categories || []).map(function (c) {
      return '<span class="case-study-card__tag">' + c + '</span>';
    }).join('');
    return '<div class="map-popup">' +
      '<h3 class="map-popup__title">' + study.title + '</h3>' +
      '<p class="map-popup__location">📍 ' + study.city + ', ' + study.country + '</p>' +
      '<div class="case-study-card__tags" style="margin:4px 0 8px">' + cats + '</div>' +
      '<p class="map-popup__desc">' + (study.summary || study.description || '') + '</p>' +
      '<a href="' + url + '" class="about-cta" style="font-size:13px">Read Case Study →</a>' +
      '</div>';
  }

  // Build markers
  studies.forEach(function (study) {
    var coords = COORDS[study.id];
    if (!coords) return;
    var cat = primaryCategory(study);
    var marker = L.marker(coords, { icon: makeIcon(CATEGORY_COLORS[cat] || '#666') })
      .addTo(map)
      .bindPopup(buildPopup(study), { maxWidth: 300 });
    markers.push({ marker: marker, study: study, cat: cat });
  });

  // Filter chips
  function applyFilter(filter) {
    activeFilter = filter;
    var visible = 0;
    markers.forEach(function (m) {
      var cats = m.study.categories || [];
      var show = filter === 'all' || cats.indexOf(filter) > -1;
      if (show) {
        m.marker.addTo(map);
        visible++;
      } else {
        map.removeLayer(m.marker);
      }
    });
    document.getElementById('map-count').textContent = visible + ' ' + (visible === 1 ? 'study' : 'studies');
    renderCards(filter);
  }

  document.getElementById('map-filter-chips').addEventListener('click', function (e) {
    var btn = e.target.closest('.map-chip');
    if (!btn) return;
    document.querySelectorAll('.map-chip').forEach(function (b) { b.classList.remove('map-chip--active'); });
    btn.classList.add('map-chip--active');
    applyFilter(btn.getAttribute('data-filter'));
  });

  // Card list below map
  function renderCards(filter) {
    var grid = document.getElementById('map-card-grid');
    var shown = studies.filter(function (s) {
      var cats = s.categories || [];
      return filter === 'all' || cats.indexOf(filter) > -1;
    });
    grid.innerHTML = shown.map(function (study) {
      var url = BASE + '/case-study/' + study.id + '/';
      var coords = COORDS[study.id];
      var cat = primaryCategory(study);
      var bgColor = CATEGORY_COLORS[cat] || '#666';
      var cats = (study.categories || []).map(function (c) {
        return '<span class="case-study-card__tag">' + c + '</span>';
      }).join('');
      return '<div class="map-mini-card" data-study-id="' + study.id + '" style="--accent:' + bgColor + '">' +
        '<div class="map-mini-card__bar" style="background:' + bgColor + '"></div>' +
        '<div class="map-mini-card__body">' +
          '<h4 class="map-mini-card__title">' + study.title + '</h4>' +
          '<p class="map-mini-card__loc">📍 ' + study.city + ', ' + study.country + '</p>' +
          '<div class="case-study-card__tags" style="margin:var(--space-2) 0">' + cats + '</div>' +
          '<a href="' + url + '" class="about-cta" style="font-size:var(--text-xs)">Read →</a>' +
        '</div>' +
        '</div>';
    }).join('');

    // Click mini-card → pan map to marker and open popup
    grid.querySelectorAll('.map-mini-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') return;
        var id = card.getAttribute('data-study-id');
        var found = markers.find(function (m) { return m.study.id === id; });
        if (!found) return;
        var latlng = found.marker.getLatLng();
        map.flyTo(latlng, 8, { duration: 1.2 });
        setTimeout(function () { found.marker.openPopup(); }, 1300);
      });
    });
  }

  applyFilter('all');
})();
</script>
