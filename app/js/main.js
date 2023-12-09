$(function () {
  //   Fancybox.bind('[data-fancybox="gallery"]', {});

  var stickyHeader = $(".menu");
  var stickyContent = $(".header__inner");
  var scrollChange = 1;

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      stickyHeader.addClass("menu__fixed");
      stickyContent.addClass("inner__fixed");
    } else {
      stickyHeader.removeClass("menu__fixed");
      stickyContent.removeClass("inner__fixed");
    }
  });
});
