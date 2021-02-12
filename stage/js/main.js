$(function () {
    $('.intro').height($(window).height())
    $(window).resize(function () {
        $('.intro').height($(window).height())
    })

    $('.toggle').click(function () {
        $(this).removeClass('fa-toggle-of').toggleClass('fa-toggle-on')
        $('aside').toggleClass('showSideBar')
    })

    $('.card-image, .card-title').click(function () {
        let cardInfo = `.card-info-${$(this).attr('data-value')}`
        $(`.projects .card ${cardInfo}`).slideDown("slow", function () {
            console.log($(this))
            $(`.projects .card ${cardInfo} .fa-times`).click(function () {
                $(`.projects .card ${cardInfo}`).slideUp("slow")
            })
        });
    })

    $('.about').click(function () {
        $('html, body').animate({
            scrollTop: $('.about-us').offset().top
        }, 1000);
    })

    $('.experience').click(function () {
        $('html, body').animate({
            scrollTop: $('.experiences').offset().top
        }, 1000);
    })

    $('.project').click(function () {
        $('html, body').animate({
            scrollTop: $('.projects').offset().top
        }, 1000);
    })
})