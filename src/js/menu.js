(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const logoRef = document.querySelector('[data-logo]');
  const bodyRef = document.querySelector('[data-body]');
  const link1Ref = document.querySelector('[data-link_1]');
  const link2Ref = document.querySelector('[data-link_2]');
  const link3Ref = document.querySelector('[data-link_3]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    logoRef.classList.toggle('is-open');
    bodyRef.classList.toggle('is-open');
  });
  link1Ref.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    logoRef.classList.toggle('is-open');
    bodyRef.classList.toggle('is-open');
  });
  link2Ref.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    logoRef.classList.toggle('is-open');
    bodyRef.classList.toggle('is-open');
  });
  link3Ref.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    logoRef.classList.toggle('is-open');
    bodyRef.classList.toggle('is-open');
  });
})();
