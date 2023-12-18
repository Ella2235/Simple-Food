$(function () {
  $(".customer-reviews__slider").swiper({
    dots: true,
    arrows: false,
  });
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
