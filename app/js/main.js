$(function () {
  var stickyHeader = $(".header");
  var scrollChange = 1;

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      stickyHeader.addClass("header__fixed");
    } else {
      stickyHeader.removeClass("header__fixed");
    }
  });
});
