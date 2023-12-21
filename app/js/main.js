$(function () {
  var mixer = mixitup(".popular-category");

  var stickyHeader = $(".header__inner");
  var scrollChange = 1;

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      stickyHeader.addClass("header__inner-fixed");
    } else {
      stickyHeader.removeClass("header__inner-fixed");
    }
  });
});

const swiper = new Swiper(".swiper", {
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
