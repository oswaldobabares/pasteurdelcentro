"use strict";


jQuery(document).ready(function ($) {

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
    /*---------------------------------------------*
     * Menu
     ---------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 540) {
            $('.navbar').css("position","fixed");
        } else {
            $('.navbar').css("position","initial");
        }
    });
    /*---------------------------------------------*
     * Scroll Total Navbar
     ---------------------------------------------*/
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });
    /*---------------------------------------------*
     * Scroll Up
     ---------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
            $('.scrollup').css("display","block");
        } else {
            $('.scrollup').fadeOut('slow');
            $('.scrollup').css("display","none");
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
    /*---------------------------------------------*
     * parallax 
     ---------------------------------------------*/

    function parallaxInit() {
        $('#instagram').parallax("50%", 0.4);
    }

    $(window).bind("load", function () {
        parallaxInit()
    });
});