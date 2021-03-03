
        $(document).ready(function () {
         
            
            
            var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
});
            
            
            
//            
//            var lnb = $("#sp_nav").offset().top;
//$(window).scroll(function() {
//  	var window = $(this).scrollTop();
//
//    if(lnb <= window) {
//      $("#sp_nav").addClass("fixed");
//    } else {
//      $("#sp_nav").removeClass("fixed");
//    }
//});
//            
            
            
            
            
             $('#sp_nav > .nav-links > #service').click(function () {
                var offset = $('.bakcol_f3').offset();
                $('body,html').animate({
                    scrollTop: offset.top
                }, 500, 'linear');
            });
            
      $('#sp_nav > .nav-links > #service').click(function () {
                var offset = $('.bakcol_f3').offset();
                $('body,html').animate({
                    scrollTop: offset.top
                }, 500, 'linear');
            });      
            
            
            
            
            
//end
        });


$(function () {
    $(window).scroll(function () {
        $('.fade_in').each(function () {
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50) {
                $(this).addClass('scrollin');
            }
        });
    });

    $(window).scroll(function () {
        $('.fade_in-text').each(function () {
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50) {
                $(this).addClass('scrollin');
            }
        });
    });

});

