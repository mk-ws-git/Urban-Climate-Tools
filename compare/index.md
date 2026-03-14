---
layout: default
title: Compare Tools
---

<section class="section">
<div class="container">
<div class="section__header">
  <h1 class="section__title">Compare Tools Side by Side</h1>
  <p class="section__description">Select two tools to compare their features, cost, and best-fit use cases.</p>
</div>

<div class="compare-selectors" id="compare-selectors">
  <div class="compare-selector__col">
    <label class="compare-selector__label" for="compare-left">Tool A</label>
    <select class="compare-selector__select" id="compare-left">
      <option value="">— Choose a tool —</option>
    </select>
  </div>
  <div class="compare-selector__vs">VS</div>
  <div class="compare-selector__col">
    <label class="compare-selector__label" for="compare-right">Tool B</label>
    <select class="compare-selector__select" id="compare-right">
      <option value="">— Choose a tool —</option>
    </select>
  </div>
</div>

<div id="compare-app">
  <p class="compare-placeholder" id="compare-placeholder">Select two tools above to see a comparison.</p>

  <!-- Comparison table (hidden until both tools selected) -->
  <div id="compare-table-wrap" style="display:none">
    <div class="compare-table-scroll">
    <table class="compare-table" id="compare-table">
      <thead>
        <tr>
          <th class="compare-table__row-header">Feature</th>
          <th class="compare-table__col-header" id="compare-col-a"></th>
          <th class="compare-table__col-header" id="compare-col-b"></th>
        </tr>
      </thead>
      <tbody id="compare-body"></tbody>
    </table>
    </div>

    <div class="compare-actions" id="compare-actions"></div>
  </div>
</div>

</div>
</section>

<script>
window.UCT_TOOLS = {{ site.data.tools | jsonify }};
</script>

<script>
(function () {
  var tools = window.UCT_TOOLS || [];
  var BASE = '{{ site.baseurl }}';

  var selectLeft  = document.getElementById('compare-left');
  var selectRight = document.getElementById('compare-right');
  var tableWrap   = document.getElementById('compare-table-wrap');
  var placeholder = document.getElementById('compare-placeholder');
  var colA        = document.getElementById('compare-col-a');
  var colB        = document.getElementById('compare-col-b');
  var tbody       = document.getElementById('compare-body');
  var actionsEl   = document.getElementById('compare-actions');

  // Populate selects
  tools.forEach(function (t) {
    var optA = document.createElement('option');
    var optB = document.createElement('option');
    optA.value = optB.value = t.id;
    optA.textContent = optB.textContent = t.name;
    selectLeft.appendChild(optA);
    selectRight.appendChild(optB.cloneNode(true));
    selectRight.lastChild.textContent = t.name;
  });

  function findTool(id) {
    return tools.find(function (t) { return t.id === id; });
  }

  function yesNo(val) {
    if (val === true || val === 'Yes') return '<span class="compare-yes">✓ Yes</span>';
    if (val === false || val === 'No') return '<span class="compare-no">✗ No</span>';
    return val || '—';
  }

  function listBadges(arr) {
    if (!arr || !arr.length) return '—';
    return arr.map(function (v) {
      return '<span class="case-study-card__tag">' + v + '</span>';
    }).join(' ');
  }

  function costBadge(val) {
    if (!val) return '—';
    var cls = val.toLowerCase().indexOf('free') > -1 ? 'compare-cost--free' : 'compare-cost--paid';
    return '<span class="compare-cost ' + cls + '">' + val + '</span>';
  }

  function skillBadge(val) {
    if (!val) return '—';
    var cls = { 'Beginner': 'skill--beginner', 'Intermediate': 'skill--intermediate', 'Advanced': 'skill--advanced' }[val] || '';
    return '<span class="filter__skill-badge ' + cls + '">' + val + '</span>';
  }

  var ROWS = [
    { label: 'Developer',           render: function (t) { return t.developer || '—'; } },
    { label: 'Categories',          render: function (t) { return listBadges(t.categories); } },
    { label: 'Cost',                render: function (t) { return costBadge(t.cost); } },
    { label: 'Skill Level',         render: function (t) { return skillBadge(t.skillLevel); } },
    { label: 'Coverage',            render: function (t) { return listBadges(t.coverage); } },
    { label: 'Country of Origin',   render: function (t) { return t.country || '—'; } },
    { label: 'Continent',           render: function (t) { return t.continent || '—'; } },
    { label: 'Last Updated',        render: function (t) { return t.lastUpdated || '—'; } },
    { label: 'Description',         render: function (t) { return '<span class="compare-desc">' + (t.description || '—') + '</span>'; } },
    { label: 'Best For',            render: function (t) { return t.bestFor || '—'; } },
    { label: 'Limitations',         render: function (t) { return t.limitations || '—'; } },
    { label: 'User Types',          render: function (t) { return listBadges(t.user_categories); } },
  ];

  function render(toolA, toolB) {
    colA.innerHTML = '<div class="compare-col-header">' +
      '<span class="compare-col-name">' + toolA.name + '</span>' +
      '<span class="compare-col-dev">' + toolA.developer + '</span>' +
      '</div>';
    colB.innerHTML = '<div class="compare-col-header">' +
      '<span class="compare-col-name">' + toolB.name + '</span>' +
      '<span class="compare-col-dev">' + toolB.developer + '</span>' +
      '</div>';

    tbody.innerHTML = ROWS.map(function (row) {
      var valA = row.render(toolA);
      var valB = row.render(toolB);
      return '<tr>' +
        '<td class="compare-table__row-header">' + row.label + '</td>' +
        '<td class="compare-table__cell">' + valA + '</td>' +
        '<td class="compare-table__cell">' + valB + '</td>' +
        '</tr>';
    }).join('');

    actionsEl.innerHTML =
      '<a href="' + BASE + '/tool/' + toolA.id + '/" class="btn btn--secondary">View ' + toolA.name + ' →</a>' +
      '<a href="' + BASE + '/tool/' + toolB.id + '/" class="btn btn--secondary">View ' + toolB.name + ' →</a>';

    tableWrap.style.display = '';
    placeholder.style.display = 'none';
  }

  function onChange() {
    var a = findTool(selectLeft.value);
    var b = findTool(selectRight.value);
    if (a && b && a.id !== b.id) {
      render(a, b);
    } else {
      tableWrap.style.display = 'none';
      placeholder.style.display = '';
      if (a && b && a.id === b.id) {
        placeholder.textContent = 'Please choose two different tools.';
      } else {
        placeholder.textContent = 'Select two tools above to see a comparison.';
      }
    }
  }

  selectLeft.addEventListener('change', onChange);
  selectRight.addEventListener('change', onChange);
})();
</script>
