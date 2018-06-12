(function setMenuWidth() {
  const width = [
    document.querySelector('.nav__menu').offsetWidth,
    document.querySelector('.nav__menu').offsetHeight
  ];
  const height = document.querySelector('.header').offsetHeight;
  const menu = document.querySelector('.nav__wall');
  menu.style.width = `${width[0]}px`;
  menu.style.height = `${height - width[1]}px`;
})();

(function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const hamburgerButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav__wall');
    hamburgerButton.classList.toggle('is-active');
    menu.classList.toggle('nav__wall-show');
  }
})();
