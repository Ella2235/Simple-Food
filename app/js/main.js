const stickyHeader = $(".header__inner");
const scrollChange = 1;
$(window).scroll(function () {
  const scroll = $(window).scrollTop();

  if (scroll >= scrollChange) {
    stickyHeader.addClass("header__inner--fixed");
  } else {
    stickyHeader.removeClass("header__inner--fixed");
  }
});

const swiper = new Swiper(".customer-reviews__swiper", {
  loop: false,
  speed: 1000,

  keyboard: {
    enabled: true,
    slidesPerGroup: 4,
    // onlyInViewport: true,
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
  //Mobile Menu
  const burger = document.querySelector(".burger-open"); //наша кнопка
  const mobileMenu = document.querySelector(".info"); //мобильное меню
  const bodyLock = document.querySelector("body"); //ищем как селектор ТЕГА
  const burgerClose = document.querySelector(".burger-close");
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("info--active");
    if (mobileMenu.classList.contains("info--active")) {
      bodyLock.classList.add("lock");
    }
  });

  burgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("info--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("info--active");
      bodyLock.classList.remove("lock");
    }
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enabledSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const destroySwiper = function () {
      if (swiper !== undefined) {
        swiper.destroy(true, true);
        swiper = undefined;
      }
    };

    const togglePaginationVisibility = function (visible) {
      const paginationElement = document.querySelector(
        swiperSettings.pagination.el
      );
      if (paginationElement) {
        paginationElement.style.display = visible ? "block" : "none";
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        enabledSwiper(swiperClass, swiperSettings);
        togglePaginationVisibility(true);
      } else {
        destroySwiper();
        togglePaginationVisibility(false);
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** Swiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", ".best-cafe__swiper", {
    direction: "horizontal",
    speed: 700,
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // resizableSwiper("(max-width: 560px)", ".best-cafe__swiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   slidesPerGroup: 1,
  // });

  // swiper.on("init", function () {
  //   console.log("Swiper initialized successfully");
  // });

  // swiper.on("slideChange", function () {
  //   console.log("Slide changed");
  // });

  // swiper.on("error", function (e) {
  //   console.error("Swiper error", e);
  // });
});

const mixer = mixitup(".popular-category");
