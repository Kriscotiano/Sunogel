$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('nav-js');
    } else {
        $('nav').removeClass('nav-js');
    }
});

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('#header .logo svg').addClass('fill');
    } else {
        $('#header .logo svg').removeClass('fill');
    }
});

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('#header .main-nav ul li a').addClass('nav-item-js');
    } else {
        $('#header .main-nav ul li a').removeClass('nav-item-js');
    }
});

$(document).ready(function() {
    $('.toggle-hamburger').on('click', function() {
        $('.main-nav ul').toggleClass('hamburger-active');
    })
});