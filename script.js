$(document).ready(function(){

    var prevScrollpos = $(window).scrollTop();
    $(window).on('scroll', function() {
        var currentScrollPos = $(window).scrollTop();
        if (prevScrollpos > currentScrollPos) {
            $('nav').show().addClass("bg-dark");
            if ($(window).scrollTop() === 0) {
                $('nav').removeClass("bg-dark");
            }
        } else {
            $('nav').hide();
        }
        prevScrollpos = currentScrollPos;
    });

    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 20,
        center: true,
        nav: false,
        dots: false,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.home-slider').owlCarousel({
        loop: true,
        margin: 20,
        center: false,
        nav: false,
        dots: false,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $('.playlist').owlCarousel({
        loop: true,
        center: true,
        nav: false,
        dots: false,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
  