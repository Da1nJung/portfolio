$(document).ready(function(){

    //2차메뉴
    $('.dp2').hide();

    $('.gnb>li').mouseenter(function(){
        $(this).children('.dp2').stop().slideDown();
    });

    $('.gnb>li').mouseleave(function(){
        $(this).children('.dp2').stop().slideUp();
    });

    //메인배너

    $('.banner').slick({
        dots: true,
        autoplay: true
      });

    //스크롤트리거

    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });    

    //포토갤러리
    $('.photogallery').slick({
        dots: true,
        autoplay: true,
        fade: true,
        arrows: false
      });


});