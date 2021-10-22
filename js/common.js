$(document).ready(function(){

    // 인포그래픽

    $('.chart1').easyPieChart({
        barColor: '#ffb847',
        trackColor: 'rgba(255,184,71,0.2)',
        scaleColor: 'rgba(0,0,0,0)',
        lineCap: 'butt',
        lineWidth: 8,
        size: 170,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });

    $('.chart2').easyPieChart({
        barColor: '#ffb847',
        trackColor: 'rgba(255,184,71,0.2)',
        scaleColor: 'rgba(0,0,0,0)',
        lineCap: 'butt',
        lineWidth: 8,
        size: 170,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });

    $('.chart3').easyPieChart({
        barColor: '#ffb847',
        trackColor: 'rgba(255,184,71,0.2)',
        scaleColor: 'rgba(0,0,0,0)',
        lineCap: 'butt',
        lineWidth: 8,
        size: 170,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });

    $('.chart4').easyPieChart({
        barColor: '#ffb847',
        trackColor: 'rgba(255,184,71,0.2)',
        scaleColor: 'rgba(0,0,0,0)',
        lineCap: 'butt',
        lineWidth: 8,
        size: 170,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });

    $('.chart5').easyPieChart({
        barColor: '#ffb847',
        trackColor: 'rgba(255,184,71,0.2)',
        scaleColor: 'rgba(0,0,0,0)',
        lineCap: 'butt',
        lineWidth: 8,
        size: 170,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });
 

    $('.card').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
});