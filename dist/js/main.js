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
})