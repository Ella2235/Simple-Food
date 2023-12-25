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
  // slidesPerView: 4,
  // spaceBetween: 30,
  loop: true,
  speed: 1000,

  keyboard: {
    enabled: true,
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

const mixer = mixitup(".popular-category");
