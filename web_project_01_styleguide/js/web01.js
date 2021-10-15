$(document).ready(function(){
    $('.popup').hide();

    $('.img_btn').click(function(){
        $('.popup').fadeIn();
    });

    $('.close_btn').click(function(){
        $('.popup').fadeOut();
    });
});