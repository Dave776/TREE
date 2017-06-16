
function sideBtn(){
        var scroll = $(window).scrollTop();
        if (scroll>600) {
            $('#up').addClass('up2').fadeIn(1000);
        }
        else if(scroll<600){
            $('#up').fadeOut(1000);
        }
}
$(window , document).scroll(sideBtn);
sideBtn();
$(window).resize(sideBtn);



$('#up').on('click',function(){
    $('body,html').animate({scrollTop:0},1000);
});

var toper = 148

$(window , document).scroll(function(){

    var scrollFix = $(window).scrollTop();

    if(scrollFix > toper){
        $(".menu").addClass('fixed');
        $('header>div>p:nth-of-type(1)').css({
            marginBottom: 77
        });
    }
    if(scrollFix <toper){
        $(".menu").removeClass('fixed');
        $('header>div>p:nth-of-type(1)').css({
            marginBottom: 0
        });
    }
});


$('header ul li').eq(0).on('click', function(){
    $('body,html').animate({
        scrollTop: 0
    },1000);
});
$('header ul li').eq(1).on('click', function(){
    $('body,html').animate({
        scrollTop: $('.section2').position().top-44
    },1000);
});
$('header ul li').eq(2).on('click', function(){
    $('body,html').animate({
        scrollTop: $('.section3').position().top-44
    },1000);
});
$('header ul li').eq(3).on('click', function(){
    $('body,html').animate({
        scrollTop: $('.section4').position().top-44
    },1000);
});

var clickCount = 1;

$('.navMenu').click(function(e){
    e.preventDefault();
    if(clickCount == 1){
        $('.menu ul li').fadeIn(500);
        clickCount = 2;
    }
    else if(clickCount == 2){
        $('.menu ul li').fadeOut(500);
        clickCount = 1;
    }


});

$('.slider').slick({
    arrows: false
});


$(window).resize(function(){
    if($(window).width()>380){
        $('.menu ul li').css({
            display: 'inline-block'
        });
    }

    else if($(window).width()<380){
        $('.menu ul li').css({
            display: 'none'
        });
    }
});
