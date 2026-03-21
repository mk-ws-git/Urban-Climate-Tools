---
layout: default
title: Climate Data Explorer
---

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js"></script>

<section class="section">
<div class="container">
<div class="section__header">
  <h1 class="section__title">Climate Data Explorer</h1>
  <p class="section__description">Search any city worldwide and explore real-time temperature trends, precipitation patterns, and heat-stress indicators — sourced from open APIs with no login required.</p>
</div>

<!-- Attribution row -->
<div class="data-attribution">
  <span>Data sources:</span>
  <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a>
  <span>·</span>
  <a href="https://nominatim.openstreetmap.org/" target="_blank" rel="noopener">OSM Nominatim</a>
  <span>· Both are free and open-source. No API key required.</span>
</div>

<!-- Search bar -->
<div class="data-search-bar" id="data-search-bar">
  <div class="data-search-bar__field">
    <input class="data-search-bar__input" id="city-input" type="text" placeholder="Search a city — e.g. Lagos, Phoenix, Rotterdam…" autocomplete="off" aria-label="City search">
    <button class="data-search-bar__btn" id="city-search-btn" aria-label="Search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </button>
  </div>
  <ul class="data-search-bar__suggestions" id="city-suggestions" role="listbox" aria-label="City suggestions"></ul>
</div>

<!-- Status / loading -->
<div id="data-status" class="data-status" style="display:none"></div>

<!-- Dashboard (hidden until city loaded) -->
<div id="data-dashboard" style="display:none">

  <!-- City header -->
  <div class="data-city-header" id="data-city-header"></div>

  <!-- Summary cards -->
  <div class="data-summary-cards" id="data-summary-cards"></div>

  <!-- Charts row -->
  <div class="data-charts-row">

    <div class="data-chart-card data-chart-card--wide">
      <div class="data-chart-card__header">
        <h3 class="data-chart-card__title">Daily Temperature — Past 12 Months</h3>
        <span class="data-chart-card__sub">Max °C · Min °C</span>
      </div>
      <div class="data-chart-card__body">
        <canvas id="chart-temp-history" height="200"></canvas>
      </div>
    </div>

    <div class="data-chart-card">
      <div class="data-chart-card__header">
        <h3 class="data-chart-card__title">Monthly Precipitation</h3>
        <span class="data-chart-card__sub">mm / month (last 12 months)</span>
      </div>
      <div class="data-chart-card__body">
        <canvas id="chart-precip" height="200"></canvas>
      </div>
    </div>

    <div class="data-chart-card">
      <div class="data-chart-card__header">
        <h3 class="data-chart-card__title">7-Day Forecast</h3>
        <span class="data-chart-card__sub">Max / Min °C</span>
      </div>
      <div class="data-chart-card__body">
        <canvas id="chart-forecast" height="200"></canvas>
      </div>
    </div>

  </div>

  <!-- Heat stress & climate indicators -->
  <div class="data-indicators" id="data-indicators"></div>

  <!-- Research note -->
  <div class="data-research-note">
    <strong>For researchers:</strong> All data is sourced from <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a> (ERA5-based historical reanalysis + numerical forecast). Coordinates are resolved via <a href="https://nominatim.openstreetmap.org/" target="_blank" rel="noopener">OpenStreetMap Nominatim</a>. Data is provided for informational and educational use. Cite as: Open-Meteo.com, accessed {{ 'now' | date: "%B %Y" }}.
  </div>

</div><!-- #data-dashboard -->
</div>
</section>

<script>
(function () {
  'use strict';

  var cityInput    = document.getElementById('city-input');
  var searchBtn    = document.getElementById('city-search-btn');
  var suggestEl    = document.getElementById('city-suggestions');
  var statusEl     = document.getElementById('data-status');
  var dashboardEl  = document.getElementById('data-dashboard');

  var chartTempHistory = null;
  var chartPrecip      = null;
  var chartForecast    = null;

  var suggestTimer = null;
  var selectedCity = null;

  /* ---- UTILS ---- */
  function showStatus(msg, isError) {
    statusEl.textContent = msg;
    statusEl.className = 'data-status' + (isError ? ' data-status--error' : ' data-status--loading');
    statusEl.style.display = '';
    dashboardEl.style.display = 'none';
  }

  function hideStatus() {
    statusEl.style.display = 'none';
  }

  function formatDate(d) {
    return d.toISOString().slice(0, 10);
  }

  function addDays(d, n) {
    var r = new Date(d); r.setDate(r.getDate() + n); return r;
  }

  function monthLabel(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleString('default', { month: 'short' });
  }

  function weekdayLabel(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleString('default', { weekday: 'short' }) + ' ' + d.getDate();
  }

  /* ---- NOMINATIM GEOCODING ---- */
  function geocode(query, cb) {
    var url = 'https://nominatim.openstreetmap.org/search?q=' +
      encodeURIComponent(query) +
      '&format=json&limit=6&featuretype=city&addressdetails=1';
    fetch(url, { headers: { 'Accept-Language': 'en' } })
      .then(function (r) { return r.json(); })
      .then(function (data) { cb(null, data); })
      .catch(function (err) { cb(err, null); });
  }

  /* ---- SUGGESTIONS ---- */
  cityInput.addEventListener('input', function () {
    clearTimeout(suggestTimer);
    var q = cityInput.value.trim();
    if (q.length < 2) { suggestEl.innerHTML = ''; suggestEl.style.display = 'none'; return; }
    suggestTimer = setTimeout(function () {
      geocode(q, function (err, results) {
        if (err || !results || !results.length) { suggestEl.innerHTML = ''; suggestEl.style.display = 'none'; return; }
        suggestEl.innerHTML = results.slice(0, 6).map(function (r, i) {
          var label = r.display_name.split(',').slice(0, 3).join(', ');
          return '<li class="data-suggest-item" data-idx="' + i + '" role="option" tabindex="0">' + label + '</li>';
        }).join('');
        suggestEl.style.display = '';
        suggestEl._results = results;
      });
    }, 350);
  });

  suggestEl.addEventListener('click', function (e) {
    var li = e.target.closest('.data-suggest-item');
    if (!li) return;
    var idx = parseInt(li.getAttribute('data-idx'), 10);
    var r = suggestEl._results[idx];
    selectResult(r);
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#data-search-bar')) {
      suggestEl.style.display = 'none';
    }
  });

  function selectResult(r) {
    var label = r.display_name.split(',').slice(0, 3).join(', ');
    cityInput.value = label;
    suggestEl.innerHTML = '';
    suggestEl.style.display = 'none';
    selectedCity = { lat: parseFloat(r.lat), lon: parseFloat(r.lon), name: label };
    loadClimateData(selectedCity);
  }

  /* ---- SEARCH BUTTON ---- */
  searchBtn.addEventListener('click', function () {
    var q = cityInput.value.trim();
    if (!q) return;
    showStatus('Searching for "' + q + '"…', false);
    geocode(q, function (err, results) {
      if (err || !results || !results.length) {
        showStatus('No city found — try a different spelling.', true); return;
      }
      selectResult(results[0]);
    });
  });

  cityInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') searchBtn.click();
  });

  /* ---- OPEN-METEO FETCH ---- */
  function loadClimateData(city) {
    showStatus('Loading climate data for ' + city.name + '…', false);

    var today    = new Date();
    var yearAgo  = addDays(today, -365);
    var startStr = formatDate(yearAgo);
    var endStr   = formatDate(addDays(today, -1));

    // Historical + forecast requests in parallel
    var histUrl = 'https://archive-api.open-meteo.com/v1/archive' +
      '?latitude=' + city.lat + '&longitude=' + city.lon +
      '&start_date=' + startStr + '&end_date=' + endStr +
      '&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,et0_fao_evapotranspiration' +
      '&timezone=auto';

    var forecastUrl = 'https://api.open-meteo.com/v1/forecast' +
      '?latitude=' + city.lat + '&longitude=' + city.lon +
      '&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,apparent_temperature_max' +
      '&current_weather=true' +
      '&timezone=auto&forecast_days=7';

    Promise.all([
      fetch(histUrl).then(function (r) { return r.json(); }),
      fetch(forecastUrl).then(function (r) { return r.json(); })
    ]).then(function (results) {
      renderDashboard(city, results[0], results[1]);
    }).catch(function (err) {
      showStatus('Failed to load climate data. Please try again.', true);
    });
  }

  /* ---- RENDER DASHBOARD ---- */
  function renderDashboard(city, hist, forecast) {
    hideStatus();
    dashboardEl.style.display = '';

    var hd = hist.daily;
    var fd = forecast.daily;
    var cw = forecast.current_weather;

    // ---- City header ----
    var cityShort = city.name.split(',')[0];
    document.getElementById('data-city-header').innerHTML =
      '<div class="data-city-header__name">' + cityShort + '</div>' +
      '<div class="data-city-header__coords">' + city.lat.toFixed(4) + '°, ' + city.lon.toFixed(4) + '° · ' + (hist.timezone || '') + '</div>';

    // ---- Summary stats ----
    var temps    = hd.temperature_2m_max.filter(function (v) { return v !== null; });
    var mins     = hd.temperature_2m_min.filter(function (v) { return v !== null; });
    var precips  = hd.precipitation_sum.filter(function (v) { return v !== null; });
    var et0s     = (hd.et0_fao_evapotranspiration || []).filter(function (v) { return v !== null; });

    var avgMax   = (temps.reduce(function (a, b) { return a + b; }, 0) / temps.length).toFixed(1);
    var avgMin   = (mins.reduce(function (a, b) { return a + b; }, 0) / mins.length).toFixed(1);
    var totalPr  = precips.reduce(function (a, b) { return a + b; }, 0).toFixed(0);
    var heatDays = temps.filter(function (v) { return v >= 30; }).length;
    var coldDays = mins.filter(function (v) { return v <= 0; }).length;

    var currentTemp = cw ? cw.temperature.toFixed(1) : '—';
    var currentCode = cw ? cw.weathercode : null;

    function wmoIcon(code) {
      if (code === null) return '🌡️';
      if (code === 0) return '☀️';
      if (code <= 3) return '⛅';
      if (code <= 49) return '🌫️';
      if (code <= 67) return '🌧️';
      if (code <= 77) return '❄️';
      if (code <= 82) return '🌦️';
      if (code <= 99) return '⛈️';
      return '🌡️';
    }

    document.getElementById('data-summary-cards').innerHTML = [
      { label: 'Current Temp', value: currentTemp + '°C', icon: wmoIcon(currentCode), note: '(now)' },
      { label: 'Avg Daily Max', value: avgMax + '°C', icon: '🌡️', note: '12-month avg' },
      { label: 'Avg Daily Min', value: avgMin + '°C', icon: '🌙', note: '12-month avg' },
      { label: 'Annual Precip', value: totalPr + ' mm', icon: '🌧️', note: '12-month total' },
      { label: 'Heat Days ≥30°C', value: heatDays, icon: '🔥', note: 'past 12 months' },
      { label: 'Frost Days ≤0°C', value: coldDays, icon: '🧊', note: 'past 12 months' },
    ].map(function (c) {
      return '<div class="data-stat-card">' +
        '<div class="data-stat-card__icon">' + c.icon + '</div>' +
        '<div class="data-stat-card__value">' + c.value + '</div>' +
        '<div class="data-stat-card__label">' + c.label + '</div>' +
        '<div class="data-stat-card__note">' + c.note + '</div>' +
        '</div>';
    }).join('');

    // ---- Temp history chart ----
    // Downsample to ~weekly to keep chart readable (every 7th)
    var dates    = hd.time;
    var dsMax    = [], dsMin = [], dsLabels = [];
    for (var i = 0; i < dates.length; i += 7) {
      dsLabels.push(monthLabel(dates[i]) + ' ' + new Date(dates[i]).getDate());
      dsMax.push(hd.temperature_2m_max[i]);
      dsMin.push(hd.temperature_2m_min[i]);
    }

    if (chartTempHistory) chartTempHistory.destroy();
    var ctxH = document.getElementById('chart-temp-history').getContext('2d');
    chartTempHistory = new Chart(ctxH, {
      type: 'line',
      data: {
        labels: dsLabels,
        datasets: [
          { label: 'Max °C', data: dsMax, borderColor: '#e05c2e', backgroundColor: 'rgba(224,92,46,0.08)', pointRadius: 0, borderWidth: 1.5, tension: 0.4, fill: false },
          { label: 'Min °C', data: dsMin, borderColor: '#2e7de0', backgroundColor: 'rgba(46,125,224,0.08)', pointRadius: 0, borderWidth: 1.5, tension: 0.4, fill: false },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { position: 'top', labels: { boxWidth: 10, font: { size: 11 } } }, tooltip: { mode: 'index', intersect: false } },
        scales: { x: { ticks: { maxTicksLimit: 12, font: { size: 10 } } }, y: { ticks: { font: { size: 10 } } } }
      }
    });

    // ---- Monthly precipitation chart ----
    // Group historical precipitation into months
    var monthlyPrecip = {};
    for (var j = 0; j < dates.length; j++) {
      var mKey = dates[j].slice(0, 7); // YYYY-MM
      if (!monthlyPrecip[mKey]) monthlyPrecip[mKey] = 0;
      if (hd.precipitation_sum[j] !== null) monthlyPrecip[mKey] += hd.precipitation_sum[j];
    }
    var months = Object.keys(monthlyPrecip).sort();
    var precipVals = months.map(function (m) { return parseFloat(monthlyPrecip[m].toFixed(1)); });
    var precipLabels = months.map(function (m) {
      var d = new Date(m + '-01'); return d.toLocaleString('default', { month: 'short' }) + ' ' + d.getFullYear().toString().slice(2);
    });

    if (chartPrecip) chartPrecip.destroy();
    var ctxP = document.getElementById('chart-precip').getContext('2d');
    chartPrecip = new Chart(ctxP, {
      type: 'bar',
      data: {
        labels: precipLabels,
        datasets: [{ label: 'Precip (mm)', data: precipVals, backgroundColor: 'rgba(46,125,224,0.55)', borderRadius: 4 }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return c.parsed.y.toFixed(1) + ' mm'; } } } },
        scales: { x: { ticks: { font: { size: 10 } } }, y: { beginAtZero: true, ticks: { font: { size: 10 } } } }
      }
    });

    // ---- 7-day forecast chart ----
    var fLabels = fd.time.map(function (d) { return weekdayLabel(d); });

    if (chartForecast) chartForecast.destroy();
    var ctxF = document.getElementById('chart-forecast').getContext('2d');
    chartForecast = new Chart(ctxF, {
      type: 'bar',
      data: {
        labels: fLabels,
        datasets: [
          { label: 'Max °C', data: fd.temperature_2m_max, backgroundColor: 'rgba(224,92,46,0.65)', borderRadius: 4 },
          { label: 'Min °C', data: fd.temperature_2m_min, backgroundColor: 'rgba(46,125,224,0.55)', borderRadius: 4 },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { position: 'top', labels: { boxWidth: 10, font: { size: 11 } } } },
        scales: { x: { ticks: { font: { size: 10 } } }, y: { ticks: { font: { size: 10 }, callback: function (v) { return v + '°'; } } } }
      }
    });

    // ---- Climate indicators ----
    var avgET0 = et0s.length ? (et0s.reduce(function (a, b) { return a + b; }, 0) / et0s.length).toFixed(1) : '—';
    var wetDays = precips.filter(function (v) { return v > 1; }).length;
    var maxTemp = Math.max.apply(null, temps).toFixed(1);
    var minTemp = Math.min.apply(null, mins).toFixed(1);
    var tempRange = (parseFloat(maxTemp) - parseFloat(minTemp)).toFixed(1);

    document.getElementById('data-indicators').innerHTML =
      '<h3 class="data-indicators__heading">Climate Indicators (past 12 months)</h3>' +
      '<div class="data-indicators__grid">' +
      indicator('Hottest Day', maxTemp + '°C', 'Maximum recorded daily max temperature') +
      indicator('Coldest Night', minTemp + '°C', 'Minimum recorded daily min temperature') +
      indicator('Temp Range', tempRange + '°C', 'Absolute range between hottest and coldest') +
      indicator('Wet Days (>1mm)', wetDays, 'Days with precipitation above 1mm') +
      indicator('Avg ET₀', avgET0 + ' mm/day', 'Reference evapotranspiration — useful for water stress analysis') +
      indicator('Heat Days ≥30°C', heatDays, 'Days where max temperature reached or exceeded 30°C') +
      '</div>';
  }

  function indicator(label, value, note) {
    return '<div class="data-indicator">' +
      '<div class="data-indicator__value">' + value + '</div>' +
      '<div class="data-indicator__label">' + label + '</div>' +
      '<div class="data-indicator__note">' + note + '</div>' +
      '</div>';
  }

  // Default load: London
  cityInput.value = 'London, England';
  loadClimateData({ lat: 51.5074, lon: -0.1278, name: 'London, England, United Kingdom' });

})();
</script>
