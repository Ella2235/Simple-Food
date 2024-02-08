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

const swiper = new Swiper(".swiper", {
  loop: false,
  speed: 1000,

  keyboard: {
    enabled: true,
    slidesPerGroup: 4,
    slidesPerView: 1,
    onlyInViewport: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".button-slider-next",
    prevEl: ".button-slider-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  //Mobile Menu
  const burger = document.querySelector(".burger-open"); //наша кнопка
  const mobileMenu = document.querySelector(".info-contacts"); //мобильное меню
  const bodyLock = document.body; //ищем как селектор ТЕГА
  const burgerClose = document.querySelector(".burger-close");

  function openMenu() {
    mobileMenu.classList.add("info-contacts--active");
    bodyLock.classList.add("lock");
    document.addEventListener("click", outsideMenuClickHandler);
  }

  function closeMenu() {
    mobileMenu.classList.remove("info-contacts--active");
    bodyLock.classList.remove("lock");
    document.removeEventListener("click", outsideMenuClickHandler);
  }

  function outsideMenuClickHandler(e) {
    if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  }

  burger.addEventListener("click", openMenu);
  burgerClose.addEventListener("click", closeMenu);

  const btnFilter = document.querySelector(".catalog__btn");
  const catalogFilters = document.querySelector(".blok-offer");
  const filtersClose = document.querySelector(".burger-close-filter");

  function openFilter() {
    catalogFilters.classList.add("blok-offer--active");
    bodyLock.classList.add("lock");
    document.addEventListener("click", outsideFilterClickHandler);
  }

  function closeFilter() {
    catalogFilters.classList.remove("blok-offer--active");
    bodyLock.classList.remove("lock");
    document.removeEventListener("click", outsideFilterClickHandler);
  }

  function outsideFilterClickHandler(e) {
    if (!btnFilter.contains(e.target) && !catalogFilters.contains(e.target)) {
      closeFilter();
    }
  }

  btnFilter.addEventListener("click", openFilter);
  filtersClose.addEventListener("click", closeFilter);

  catalogFilters.addEventListener("click", function (e) {
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
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  resizableSwiper("(max-width: 768px)", ".promotion-cafe__swiper", {
    direction: "horizontal",
    // speed: 700,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

var $range = $(".blok-offer__input-slider");
var $inputFrom = $(".blok-offer--form");
var $inputTo = $(".blok-offer--to");
var instance;
var min = 100;
var max = 1000;
var from = 100;
var to = 1000;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 100,
  to: 1000,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val,
  });

  $(this).prop("value", val);
});

$inputTo.on("change", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val,
  });

  $(this).prop("value", val);
});

(function ($) {
  $(function () {
    $(".select-style").styler();
  });
})(jQuery);

if (window.location.pathname === "/index.html") {
  document.getElementById("home").href = "#!";
}

document.addEventListener("DOMContentLoaded", function () {
  const isHomePage = document
    .querySelector("a[data-is-home-page]")
    .getAttribute("data-is-home-page");
  const link = document.querySelector("a[data-is-home-page]");
  const linkLogo = document.querySelector("a[data-is-logo]");
  link.href = isHomePage === "true" ? "#first-section" : "index.html";
  linkLogo.href = isHomePage === "true" ? "#first-section" : "index.html";

  const catalogLink = document.getElementById("catalog");
  catalogLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (isHomePage === "true") {
      scrollToElement("#first-section");
    } else {
      scrollToTop();
    }
  });

  // Плавный скролл при клике на ссылку с id="logo"
  document.getElementById("logo").addEventListener("click", function () {
    scrollToElement("#first-section");
  });

  // Плавный скролл при клике на ссылку с id="navigation-link"
  document
    .getElementById("navigation-link")
    .addEventListener("click", function () {
      scrollToElement("#first-section");
    });
});

function scrollToElement(element) {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//  counter
let minusTab = document.querySelector("#minus");
let plusTab = document.querySelector("#plus");

minusTab.addEventListener("click", function () {
  let output = document.querySelector("#result");
  let result = Number(output.innerHTML) - 1;
  if (result >= 1) {
    output.innerHTML = result;
  }
});

plusTab.addEventListener("click", function () {
  let output = document.querySelector("#result");
  let result = Number(output.innerHTML) + 1;
  output.innerHTML = result;
});

// tab
const tabHeaders = document.querySelectorAll("[data-tab]");
const contentBoxes = document.querySelectorAll("[data-tab-content]");

tabHeaders.forEach(function (item) {
  item.addEventListener("click", function () {
    contentBoxes.forEach(function (item) {
      item.classList.add("hidden");
    });

    const contentBox = document.querySelector("#" + this.dataset.tab);
    contentBox.classList.remove("hidden");
  });
});

// const burgerSlider = document.querySelectorAll(".product-burger__dots");
// burgerSlider.forEach(function (slider) {
//   const swiper = new Swiper(slider, {
//     navigation: {
//       nextEl: slider.querySelector(".product-burger__next"),
//       prevEl: slider.querySelector(".product-berger__prev"),
//       clickable: false,
//     },
//     pagination: {
//       el: slider.querySelector(".swiper-pagination"),
//       clickable: true,
//     },
//   });
// });

// Start Slider-popup initialization - это мой

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".product-slider");
  sliders.forEach(function (slider) {
    const swiper = new Swiper(slider, {
      navigation: {
        nextEl: slider.querySelector(".product-slider__next"),
        prevEl: slider.querySelector(".product-slider__prev"),
      },
      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });

    const dots = slider.querySelectorAll(".swiper-pagination-bullet");
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        swiper.slideTo(index);
      });
    });
  });

  // Обработчик открытия попапа
  const buttons = document.querySelectorAll("[data-modal-button]");
  const modal = document.querySelector("[data-modal]");
  const buttonClose = document.querySelector("[data-modal-close]");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      modal.classList.remove("hidden");

      const dotsContainer = modal.querySelector(".popup__dots");
      dotsContainer.style.display = "block";

      const popupSlider = modal.querySelector(".popup__slider");
      const swiperModal = new Swiper(popupSlider, {
        navigation: {
          nextEl: modal.querySelector(".popup__next"),
          prevEl: modal.querySelector(".popup__prev"),
        },
        pagination: {
          el: modal.querySelector(".popup__dots"),
          clickable: true,
        },
      });

      document.body.classList.add("body-lock");

      // Обработчик клика на dots для перелистывания слайдов в попапе
      const popupDots = modal.querySelectorAll(".swiper-pagination-bullet");
      popupDots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
          swiperModal.slideTo(index); // Перелистываем на соответствующий слайд в попапе
        });
      });
    });
  });

  // Обработчик закрытия попапа
  buttonClose.addEventListener("click", function () {
    modal.classList.add("hidden");
    document.body.classList.remove("body-lock");
  });
});

const mixer = mixitup(".popular-category");

// popup

// const button = document.querySelector("[data-modal-button]");
// const modal = document.querySelector("[data-modal]");
// const buttonClose = document.querySelector("[data-modal-close]");
// console.log(button);

// button.addEventListener("click", function () {
//   modal.classList.remove("hidden");
// });

// buttonClose.addEventListener("click", function () {
//   modal.classList.add("hidden");
// });
