---
layout: default
title: Tool Finder Quiz
---

<section class="section">
<div class="container">
<div class="section__header">
  <h1 class="section__title">Tool Finder Quiz</h1>
  <p class="section__description">Answer 4 quick questions and we'll match you with the best tools for your city.</p>
</div>

<div id="quiz-app">

  <!-- Progress bar -->
  <div class="quiz-progress">
    <div class="quiz-progress__bar"><div class="quiz-progress__fill" id="quiz-progress-fill"></div></div>
    <span class="quiz-progress__label" id="quiz-progress-label">Question 1 of 4</span>
  </div>

  <!-- Questions -->
  <div id="quiz-questions">

    <div class="quiz-step" data-step="0">
      <h2 class="quiz-step__question">What is your city's primary climate challenge?</h2>
      <div class="quiz-choices">
        <button class="quiz-choice" data-key="challenge" data-value="heat">🌡️ Urban Heat &amp; Extreme Temperatures</button>
        <button class="quiz-choice" data-key="challenge" data-value="flood">🌊 Flooding &amp; Stormwater</button>
        <button class="quiz-choice" data-key="challenge" data-value="coastal">🌊 Coastal Resilience &amp; Sea Level Rise</button>
        <button class="quiz-choice" data-key="challenge" data-value="green">🌿 Green Infrastructure &amp; Biodiversity</button>
        <button class="quiz-choice" data-key="challenge" data-value="energy">⚡ Energy &amp; Emissions</button>
        <button class="quiz-choice" data-key="challenge" data-value="planning">🏙️ Urban Planning &amp; Policy</button>
        <button class="quiz-choice" data-key="challenge" data-value="data">📊 Data, Analytics &amp; Monitoring</button>
      </div>
    </div>

    <div class="quiz-step" data-step="1" style="display:none">
      <h2 class="quiz-step__question">What is your budget?</h2>
      <div class="quiz-choices">
        <button class="quiz-choice" data-key="budget" data-value="free">💚 Free tools only</button>
        <button class="quiz-choice" data-key="budget" data-value="any">✅ Open to paid or freemium options</button>
      </div>
    </div>

    <div class="quiz-step" data-step="2" style="display:none">
      <h2 class="quiz-step__question">What is your technical skill level?</h2>
      <div class="quiz-choices">
        <button class="quiz-choice" data-key="skill" data-value="Beginner">🟢 Beginner — I need something easy to pick up</button>
        <button class="quiz-choice" data-key="skill" data-value="Intermediate">🟡 Intermediate — comfortable with data tools</button>
        <button class="quiz-choice" data-key="skill" data-value="Advanced">🔴 Advanced — GIS, modelling, scripting</button>
      </div>
    </div>

    <div class="quiz-step" data-step="3" style="display:none">
      <h2 class="quiz-step__question">What scale are you working at?</h2>
      <div class="quiz-choices">
        <button class="quiz-choice" data-key="scale" data-value="local">🏘️ Local / Neighbourhood</button>
        <button class="quiz-choice" data-key="scale" data-value="city">🏙️ City / Regional</button>
        <button class="quiz-choice" data-key="scale" data-value="national">🗺️ National</button>
        <button class="quiz-choice" data-key="scale" data-value="global">🌍 Global / International</button>
      </div>
    </div>

  </div>

  <!-- Results (hidden until quiz complete) -->
  <div id="quiz-results" style="display:none">
    <h2 class="quiz-results__heading">Your recommended tools</h2>
    <p class="quiz-results__sub" id="quiz-results-sub"></p>
    <div class="quiz-results__grid" id="quiz-results-grid"></div>
    <div class="quiz-results__footer">
      <button class="btn btn--secondary" id="quiz-restart">Start over</button>
      <a href="{{ '/tools/' | relative_url }}" class="btn btn--primary">Browse all tools</a>
    </div>
  </div>

</div><!-- #quiz-app -->
</div>
</section>

<!-- Tools data embedded as JSON for the quiz JS -->
<script>
window.UCT_TOOLS = {{ site.data.tools | jsonify }};
</script>

<script>
(function () {
  var answers = {};
  var currentStep = 0;
  var TOTAL_STEPS = 4;

  var steps = document.querySelectorAll('.quiz-step');
  var progressFill = document.getElementById('quiz-progress-fill');
  var progressLabel = document.getElementById('quiz-progress-label');
  var resultsEl = document.getElementById('quiz-results');
  var resultsSub = document.getElementById('quiz-results-sub');
  var resultsGrid = document.getElementById('quiz-results-grid');

  function updateProgress() {
    var pct = ((currentStep) / TOTAL_STEPS) * 100;
    progressFill.style.width = pct + '%';
    progressLabel.textContent = currentStep < TOTAL_STEPS
      ? ('Question ' + (currentStep + 1) + ' of ' + TOTAL_STEPS)
      : 'Complete';
  }

  function showStep(n) {
    steps.forEach(function (s) { s.style.display = 'none'; });
    if (steps[n]) steps[n].style.display = '';
    currentStep = n;
    updateProgress();
  }

  function scoreTool(tool, ans) {
    var score = 0;

    // Challenge match (categories)
    var cats = tool.categories || [];
    if (cats.indexOf(ans.challenge) > -1) score += 3;

    // Budget
    if (ans.budget === 'free' && tool.cost === 'Free') score += 2;
    if (ans.budget === 'any') score += 1;

    // Skill level
    if (tool.skillLevel === ans.skill) score += 2;
    if (ans.skill === 'Advanced' && tool.skillLevel === 'Intermediate') score += 1;
    if (ans.skill === 'Intermediate' && tool.skillLevel === 'Beginner') score += 1;

    // Scale (coverage)
    var cov = tool.coverage || [];
    if (cov.indexOf(ans.scale) > -1) score += 2;

    return score;
  }

  function renderResults() {
    var tools = window.UCT_TOOLS || [];
    var scored = tools.map(function (t) {
      return { tool: t, score: scoreTool(t, answers) };
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    var top = scored.slice(0, 4).filter(function (s) { return s.score > 0; });

    progressFill.style.width = '100%';
    progressLabel.textContent = 'Complete';
    document.getElementById('quiz-questions').style.display = 'none';
    resultsEl.style.display = '';

    var challengeLabel = {
      heat: 'heat management', flood: 'flood risk', coastal: 'coastal resilience',
      green: 'green infrastructure', energy: 'energy & emissions',
      planning: 'urban planning', data: 'data & analytics'
    }[answers.challenge] || answers.challenge;

    resultsSub.textContent = 'Based on your focus on ' + challengeLabel +
      ', ' + answers.budget + ' budget, ' + answers.skill.toLowerCase() +
      ' skill level, and ' + answers.scale + '-scale work.';

    if (top.length === 0) {
      resultsGrid.innerHTML = '<p class="quiz-results__empty">No tools matched all your criteria — try <a href="{{ site.baseurl }}/tools/">browsing all tools</a> with manual filters.</p>';
      return;
    }

    resultsGrid.innerHTML = top.map(function (s) {
      var t = s.tool;
      var url = '{{ site.baseurl }}/tool/' + t.id + '/';
      var cats = (t.categories || []).map(function (c) {
        return '<span class="case-study-card__tag">' + c + '</span>';
      }).join('');
      return '<div class="quiz-result-card">' +
        '<div class="quiz-result-card__score">Match: ' + s.score + 'pts</div>' +
        '<h3 class="quiz-result-card__title">' + t.name + '</h3>' +
        '<p class="quiz-result-card__dev">' + t.developer + '</p>' +
        '<p class="quiz-result-card__desc">' + (t.description || '') + '</p>' +
        '<div class="quiz-result-card__meta">' +
          '<span>Cost: <strong>' + t.cost + '</strong></span>' +
          '<span>Skill: <strong>' + t.skillLevel + '</strong></span>' +
        '</div>' +
        '<div class="case-study-card__tags" style="margin-bottom:var(--space-4)">' + cats + '</div>' +
        '<a href="' + url + '" class="about-cta" style="font-size:var(--text-xs)">View Tool →</a>' +
        '</div>';
    }).join('');
  }

  // Wire up choice buttons (delegated)
  document.getElementById('quiz-app').addEventListener('click', function (e) {
    var btn = e.target.closest('.quiz-choice');
    if (!btn) return;
    var key = btn.getAttribute('data-key');
    var val = btn.getAttribute('data-value');
    answers[key] = val;

    // highlight selection briefly then advance
    btn.classList.add('quiz-choice--selected');
    setTimeout(function () {
      btn.classList.remove('quiz-choice--selected');
      if (currentStep < TOTAL_STEPS - 1) {
        showStep(currentStep + 1);
      } else {
        renderResults();
      }
    }, 180);
  });

  // Restart
  document.getElementById('quiz-restart').addEventListener('click', function () {
    answers = {};
    currentStep = 0;
    resultsEl.style.display = 'none';
    document.getElementById('quiz-questions').style.display = '';
    showStep(0);
  });

  showStep(0);
})();
</script>
