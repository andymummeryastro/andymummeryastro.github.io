// Mobile nav, theme toggle, persist preference
document.addEventListener('DOMContentLoaded', function () {
  var root = document.documentElement;
  var saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');
  else if (saved === 'dark') root.classList.remove('light');

  var btn = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () { links.classList.toggle('open'); });
  }

  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    function syncLabel() {
      var light = root.classList.contains('light');
      themeBtn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      themeBtn.textContent = light ? '◐' : '◑';
    }
    syncLabel();
    themeBtn.addEventListener('click', function () {
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
      syncLabel();
    });
  }
});
