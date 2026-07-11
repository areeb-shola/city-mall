(function() {
  'use strict';

  const menuBtn = document.querySelector('.menu-btn');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');
  const body = document.body;

  if (menuBtn && menuOverlay && menuClose) {
    menuBtn.addEventListener('click', function() {
      menuOverlay.classList.add('active');
      body.classList.add('menu-open');
    });

    menuClose.addEventListener('click', function() {
      menuOverlay.classList.remove('active');
      body.classList.remove('menu-open');
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });

    menuOverlay.addEventListener('click', function(e) {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }

  const loader = document.getElementById('pageLoader');
  if (loader) {
    window.addEventListener('load', function() {
      loader.classList.add('hidden-loader');

      setTimeout(function() {
        loader.style.display = 'none';
      }, 500);
    });
  }
})();
