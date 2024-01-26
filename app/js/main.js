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

$(function () {
  $(".menu-scroll, .logo").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

(function ($) {
  $(function () {
    $(".select-style").styler();
  });
})(jQuery);

if (window.location.pathname === "/index.html") {
  document.getElementById("home").href = "#!";
}

const mixer = mixitup(".popular-category");

// var header = $(".header");
// var content = $(".info-contents__inner");
// var scroll = 1;

// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= scrollChange) {
//     header.addClass("header-fixed");
//     content.addClass("info-contents__inner--fixed");
//   } else {
//     header.removeClass("header-fixed");
//     content.removeClass("info-contents__inner--fixed");
//   }
// });

// burger
// document.addEventListener("DOMContentLoaded", () => {
//   //Mobile Menu
//   const filter = document.querySelector(".catalog-select__btn"); //наша кнопка
//   const filterMenu = document.querySelector(".catalog__filter"); //мобильное меню
//   const bodyLock = document.querySelector("body"); //ищем как селектор ТЕГА
//   const burgerClose = document.querySelector(".burger-close");
//   filter.addEventListener("click", () => {
//     filterMenu.classList.add("catalog__filter--active");
//     if (filterMenu.classList.contains("catalog__filter--active")) {
//       bodyLock.classList.add("lock");
//     }
//   });

//   burgerClose.addEventListener("click", () => {
//     filterMenu.classList.remove("catalog__filter--active");
//     bodyLock.classList.remove("lock");
//   });

//   document.addEventListener("click", function (e) {
//     if (e.target !== filter && e.target !== filterMenu) {
//       filterMenu.classList.remove("catalog__filter--active");
//       bodyLock.classList.remove("lock");
//     }
//   });

//   filterMenu.addEventListener("click", function (e) {
//     e.stopPropagation();
//   });
// });
