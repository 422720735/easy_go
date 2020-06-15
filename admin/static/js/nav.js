$(function () {
    // $('.nav-item>a').on('click', function () {
    //     if (!$('.nav').hasClass('nav-mini')) {
    //         if ($(this).next().css('display') == "none") {
    //             $('.nav-item').children('ul').slideUp(300);
    //             $(this).next('ul').slideDown(300);
    //             $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
    //         } else {
    //             $(this).next('ul').slideUp(300);
    //             $('.nav-item.nav-show').removeClass('nav-show');
    //         }
    //     }
    // });
    // $('#mini').on('click', function () {
    //     if (!$('.nav').hasClass('nav-mini')) {
    //         $('.nav-item.nav-show').removeClass('nav-show');
    //         $('.nav-item').children('ul').removeAttr('style');
    //         $('.nav').addClass('nav-mini');
    //     } else {
    //         $('.nav').removeClass('nav-mini');
    //     }
    // });


    $('.nav > ul >  li.nav-item').click(function () {
        $('.nav > ul >  li.nav-item').removeClass('nav-show');
        $(this).addClass('nav-show');
    });

    $('.nav > ul >  li.nav-item > ul li').click(function () {
        $('.nav > ul >  li.nav-item > ul li').removeClass('active');
        $(this).addClass('active');
    });
});