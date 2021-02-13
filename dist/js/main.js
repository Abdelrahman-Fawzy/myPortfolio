$(function() {
  //nice scroll
  $('html, body').niceScroll();

  $('.intro').height($(window).height())
  $(window).resize(function() {
    $('.intro').height($(window).height())
  })

  //toggle side bar
  $('.toggle').click(function() {
    $(this).removeClass('fa-toggle-of').toggleClass('fa-toggle-on')
    $('aside').toggleClass('showSideBar')
  })

  // show project info
  $('.card-image, .card-title').click(function() {
    let cardInfo = `.card-info-${$(this).attr('data-value')}`
    $(`.projects .card ${cardInfo}`).slideDown("slow", function() {
      console.log($(this))
      $(`.projects .card ${cardInfo} .fa-times`).click(function() {
        $(`.projects .card ${cardInfo}`).slideUp("slow")
      })
    });
  })

  // sidebar links
  $('aside ul li a').click(function() {
    $('html, body').animate({
      scrollTop: $(`.content-area .${$(this).attr('class')}`).offset().top
    }, 1000);
  })

  // active side bar link and to top button
  $(window).scroll(function() {
    let windowHeight = $(window).scrollTop()
    $('.content-area').children().each(function() {
      let asideClass = `${$(this).attr('class')}`
      if (windowHeight >= $(this).offset().top) {
        $(`aside ul li .${asideClass}`).addClass('active').parent().siblings().children().removeClass('active')
      } else {
        $(`aside ul li .${asideClass}`).removeClass('active')
      }
    })

    if (windowHeight > 500) {
      $('.toTop').fadeIn(100)
    } else {
      $('.toTop').fadeOut(100)
    }
  })
  $('.toTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  })
})