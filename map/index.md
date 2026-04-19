---
layout: default
title: Case Study Map
permalink: /map/
---

<section class="section">
<div class="container">
<div class="section__header">
  <h1 class="section__title">Case Study Map</h1>
  <p class="section__description">Explore how cities around the world are implementing climate resilience strategies. Click a pin to learn more.</p>
</div>
</div>
</section>

<div id="case-study-map" style="height:520px;width:100%;border-radius:var(--radius-lg);overflow:hidden;position:relative;">
  <div id="map-loading" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:var(--color-surface-2);z-index:999;font-size:14px;color:var(--color-text-tertiary);">Loading map…</div>
</div>

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
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<!-- TopoJSON client (converts world-atlas topology to GeoJSON for Leaflet) -->
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>

<script>
(function () {
  var loadingEl = document.getElementById('map-loading');
  var hasLeaflet = typeof L !== 'undefined';

  function setLoadingMessage(message) {
    if (loadingEl) loadingEl.textContent = message;
  }

  if (typeof L === 'undefined') {
    setLoadingMessage('Map could not load. The case study list is still available below.');
  }

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
  var map = null;

  if (hasLeaflet) {
    // Hide loading indicator once the map library is ready.
    if (loadingEl) loadingEl.style.display = 'none';

    map = L.map('case-study-map', {
      center: [30, 10],
      zoom: 2,
      scrollWheelZoom: false,
      // No tile layer — background color acts as ocean/water
      preferCanvas: true
    });

    // Render world countries as vector polygons with exact site palette colors.
    // Water = map container background (#0d1f18), Land = slightly darker surface.
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(function (r) { return r.json(); })
      .then(function (world) {
        var countries = topojson.feature(world, world.objects.countries);
        L.geoJSON(countries, {
          style: {
            fillColor:   '#091510',   // land — just darker than the water background
            fillOpacity: 1,
            color:       '#1a3028',   // subtle border edge (--color-surface-3)
            weight:      0.6,
            opacity:     0.8
          }
        }).addTo(map);

        // Draw shared border mesh on top for subtle edge definition
        var borders = topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b; });
        L.geoJSON(borders, {
          style: { color: '#1a3028', weight: 0.5, fill: false, opacity: 0.7 }
        }).addTo(map);
      })
      .catch(function () {
        // Fallback: basemap failed but markers and cards still work via applyFilter below
      });
  }

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
    heat:     '#EF9F27',
    flood:    '#85B7EB',
    coastal:  '#AFA9EC',
    green:    '#5DCAA5',
    planning: '#7B74D6',
    other:    '#B4B2A9'
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
      '<p class="map-popup__location"><svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline;vertical-align:-2px;margin-right:3px"><path d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 9.5 4.5 9.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0zm0 6.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5z" fill="#5DCAA5"/></svg>' + study.city + ', ' + study.country + '</p>' +
      '<div class="case-study-card__tags" style="margin:4px 0 8px">' + cats + '</div>' +
      '<p class="map-popup__desc">' + (study.summary || study.description || '') + '</p>' +
      '<a href="' + url + '" class="about-cta" style="font-size:13px">Read Case Study →</a>' +
      '</div>';
  }

  // Build markers
  studies.forEach(function (study) {
    if (!hasLeaflet) return;
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
    if (!hasLeaflet || !map) {
      visible = studies.filter(function (study) {
        var cats = study.categories || [];
        return filter === 'all' || cats.indexOf(filter) > -1;
      }).length;
      document.getElementById('map-count').textContent = visible + ' ' + (visible === 1 ? 'study' : 'studies');
      renderCards(filter);
      return;
    }
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
          '<p class="map-mini-card__loc"><svg width="10" height="13" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline;vertical-align:-2px;margin-right:3px"><path d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 9.5 4.5 9.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0zm0 6.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5z" fill="currentColor"/></svg>' + study.city + ', ' + study.country + '</p>' +
          '<div class="case-study-card__tags" style="margin:var(--space-2) 0">' + cats + '</div>' +
          '<a href="' + url + '" class="about-cta" style="font-size:var(--text-xs)">Read →</a>' +
        '</div>' +
        '</div>';
    }).join('');

    // Click mini-card → pan map to marker and open popup
    grid.querySelectorAll('.map-mini-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') return;
        if (!hasLeaflet || !map) return;
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
