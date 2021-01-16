'use strict';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const logoRef = document.querySelector('[data-logo]');
  const bodyRef = document.querySelector('body');
  const linksRef = document.querySelectorAll('.tablet-link');

  const toggleMenu = function () {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    logoRef.classList.toggle('is-open');
    bodyRef.classList.toggle('is-open');
  };

  menuBtnRef.addEventListener('click', toggleMenu);
  linksRef.forEach(link => link.addEventListener('click', toggleMenu));
})();
