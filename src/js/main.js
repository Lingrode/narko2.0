// Custom scripts
$(function () {
  $('.header-nav__list-item').hover(
    function () {
      $(this).children('div').addClass('visible');
    }, function () {
      $(this).children('div').removeClass('visible');
    }
  );

  //let menuLink = $('.header-nav__list-link');
  let menuItem = $('.header-nav__list-item');
  // menuItem.each(function() {
  menuItem.hover(
    function () {
      $(this).addClass('hovered');
    },
    function () {
      $(this).removeClass('hovered');
    }
  )
});