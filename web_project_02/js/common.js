$(document).ready(function(){

    //2dp
    $('.dp2').hide();

    $('.gnb>li').mouseenter(function(){
      $(this).children('.dp2').stop().fadeIn();
    });

    $('.gnb>li').mouseleave(function(){
      $(this).children('.dp2').stop().fadeOut();
    });

    //mdp2
    $('.mgnb_wrap').hide();

    $('.ham').click(function(){
      $('.mgnb_wrap').fadeIn();

    });

    $('.close').click(function(){
      $('.mgnb_wrap').fadeOut();

    });


    $('.mdp2').hide();

    $('.mgnb>li').click(function(){
      $(this).children('.mdp2').slideDown();
      $(this).siblings().children('.mdp2').slideUp();
    });
    

    //메인슬라이드
    $('.mv').slick({
        autoplay: true,
        dots: true,
        arrows: false
      });

    //인포슬라이드
    $('.info_list').slick({
        autoplay: true,
        dots: false,
        fade: true,
        arrows: false
      });

    //active
    $('#slogan ul li:nth-child(1)').addClass('active');

    $('#slogan ul li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });


    $('.cf_list').slick({
    draggable:false,
    arrows:true,
    adaptiveHeight:true,
    centerMode:true,
    centerPadding:'300px',

    responsive: [
      {
        breakpoint: 1240,
        settings: {
          centerPadding:'0',
          arrows:false
        }
      },
  ],
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    /* 자바스크립트
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
    */
    // IE 호환성을 고려한 제이쿼리
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function(index, node) {
            var $node = $(node);
            
            setTimeout(function() {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
  });
});