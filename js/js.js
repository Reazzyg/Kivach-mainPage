//Мобильное меню
function openMenu() {
  var menuButton = document.querySelector('.header-menu__button');
  menuButton.addEventListener('click', function () {
    document
      .querySelector('.header-menu-mobile')
      .classList.toggle('header-menu-mobile-active');
    document
      .querySelector('.header-button__line')
      .classList.toggle('header-button__line-close');
  });
  var langOpen = document.querySelector('.header-buttonWrapper');
  langOpen.addEventListener('click', function () {
    document
      .querySelector('.header-info__lang')
      .classList.toggle('header-info__lang-active');
  });
}
openMenu();

//показ изображений в пауке
function showImages() {
  var menuButton = document.querySelectorAll('.hero-link');
  var menuButtonImages = document.querySelectorAll('.hero-link__img');
  var menuImg = document.querySelectorAll('.hero-mid');

  menuButton.forEach((element) => {
    element.addEventListener('mouseover', function (element) {
      target = element.target;
      data = target.getAttribute('data-target');
      img = menuImg[data - 1];
      img.classList.add('hero-mid-active');
    });
    element.addEventListener('mouseout', function (element) {
      target = element.target;
      data = target.getAttribute('data-target');
      img = menuImg[data - 1];
      img.classList.remove('hero-mid-active');
    });
  });
  menuButtonImages.forEach((element) => {
    element.addEventListener('mouseover', function (element) {
      target = element.target;
      data = target.getAttribute('data-target');
      img = menuImg[data - 1];
      img.classList.add('hero-mid-active');
    });
    element.addEventListener('mouseout', function (element) {
      target = element.target;
      data = target.getAttribute('data-target');
      img = menuImg[data - 1];
      img.classList.remove('hero-mid-active');
    });
  });
}

showImages();

//тень на шапке при скроле
function headerOffset() {
  let yoffset = window.scrollY;
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    yoffset = window.scrollY;
    if (yoffset >= 1) {
      header.classList.add('header-shadow');
    } else {
      header.classList.remove('header-shadow');
    }
  });
}
headerOffset();

//кнопка наверх
function showToTopButton() {
  let yoffset = window.scrollY;
  const toTopButton = document.querySelector('.to-top');
  window.addEventListener('scroll', function () {
    yoffset = window.scrollY;
    if (yoffset >= 200) {
      toTopButton.classList.add('to-top--visible');
    } else {
      toTopButton.classList.remove('to-top--visible');
    }
  });
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(1, -40);
      setTimeout(backToTop, 0);
    }
  }
  toTopButton.addEventListener('click', backToTop);
}
showToTopButton();

//плавный скрол
function smoothScroll() {
  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      // const topOffset = document.querySelector('.header').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
}
smoothScroll();
