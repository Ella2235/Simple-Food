const stickyHeader = $(".header__inner");
const stickySection = $(".hero__inner");
const scrollChange = 1;
$(window).scroll(function () {
  const scroll = $(window).scrollTop();

  if (scroll >= scrollChange) {
    stickyHeader.addClass("header__inner--fixed");
    stickySection.addClass("hero__inner--fixed");
  } else {
    stickyHeader.removeClass("header__inner--fixed");
    stickySection.removeClass("hero__inner--fixed");
  }
});

const swiper = new Swiper(".customer-reviews__swiper", {
  loop: false,
  speed: 1000,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".customer-reviews__btn-next",
    prevEl: ".customer-reviews__btn-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".menu__burger"); //наша кнопка
  const mobileMenu = document.querySelector(".menu"); //мобильное меню
  const mobileInfo = document.querySelector(".menu__info");
  const mobileBurger = document.querySelector(".menu__burger-inner");
  const burgerX = document.querySelector(".menu__burger-x");
  const bodyLock = document.querySelector("body"); //ищем как селектор ТЕГА

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu--active"); //когда меню открыто
    mobileInfo.classList.toggle("menu__info--active");
    mobileBurger.classList.toggle("menu__burger-inner--active");
    burgerX.classList.toggle("menu__burger-x--active");

    if (mobileMenu.classList.contains("menu--active")) {
      bodyLock.classList.add("lock"); //Блокируем скролл при открытом меню
    } else {
      //Когда нету активного класса у меню
      bodyLock.classList.remove("lock"); //Разрешаем скроллить
    }

    if (mobileInfo.classList.contains("menu__info--active")) {
      bodyLock.classList.add("lock"); //Блокируем скролл при открытом меню
    } else {
      //Когда нету активного класса у меню
      bodyLock.classList.remove("lock"); //Разрешаем скроллить
    }

    if (mobileBurger.classList.contains("menu__burger-inner--active")) {
      bodyLock.classList.add("lock"); //Блокируем скролл при открытом меню
    } else {
      //Когда нету активного класса у меню
      bodyLock.classList.remove("lock"); //Разрешаем скроллить
    }
  });
});

//Клик вне таргета
document.addEventListener("click", function (e) {
  if (
    e.target !== burger &&
    e.target !== mobileMenu &&
    e.target !== mobileBurger
  ) {
    mobileMenu.classList.remove("menu--active");
    mobileInfo.classList.remove("menu__info--active");
    // burgerX.classList.remove("menu__burger-x--active");
    mobileBurger.classList.remove("menu__burger-inner--active");
    bodyLock.classList.remove("lock");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enabledSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enabledSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("sliderChange", function (e) {
        console.log("***mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", ".best-cafe__swiper", {
    direction: "horizontal",
    speed: 700,
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  resizableSwiper("(max-width: 560px)", ".best-cafe__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
  });
});

const mixer = mixitup(".popular-category");

// document.addEventListener("DOMContentLoaded", function () {
//   const burgerX = document.querySelector(".menu__burger-x");
//   const menuBurgerInner = document.querySelector(".menu__burger-inner");
//   const menu = document.querySelector(".menu");
//   burgerX.addEventListener("click", function () {
//     menuBurgerInner.classList.toggle("active");
//     menu.classList.toggle("active");
//   });

//   menu.addEventListener("click", function () {
//     menuBurgerInner.classList.remove("active");
//     menu.classList.remove("active");
//   });
// });
