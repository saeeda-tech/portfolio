// Progressive enhancement: category filter on projects.html (all projects show without JS).
(function () {
  var links = document.querySelectorAll('[data-filter]');
  var rows = document.querySelectorAll('.project-row');
  if (!links.length || !rows.length) return;
  var count = document.getElementById('count');

  function apply() {
    var key = (location.hash || '#all').slice(1);
    if (!document.querySelector('[data-filter="' + key + '"]')) key = 'all';
    var shown = 0;
    rows.forEach(function (row) {
      var show = key === 'all' || row.getAttribute('data-group') === key;
      row.hidden = !show;
      if (show) shown++;
    });
    links.forEach(function (a) {
      if (a.getAttribute('data-filter') === key) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    if (count) count.textContent = 'Showing ' + shown + ' of ' + rows.length + ' projects';
  }
  window.addEventListener('hashchange', apply);
  apply();
})();
