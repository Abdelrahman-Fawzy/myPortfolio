$(function() {
  $('.intro').height($(window).height())
  $(window).resize(function() {
    $('.intro').height($(window).height())
  })

  $('.toggle').click(function() {
    $(this).removeClass('fa-toggle-of').toggleClass('fa-toggle-on')
    $('aside').toggleClass('noSideBar')
    $('.content-area').toggleClass('noSideBar')
  })

  $('.about').click(function() {
    $('html, body').animate({
      scrollTop: $('.about-us').offset().top
    }, 1000);
  })

  $('.experience').click(function() {
    $('html, body').animate({
      scrollTop: $('.experiences').offset().top
    }, 1000);
  })
})