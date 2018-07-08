//Nav Scroll Events
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

//Hamburger Events
$(document).ready(function() {
    $('.toggle-hamburger').on('click', function() {
        $('.main-nav ul').toggleClass('hamburger-active');
    })
});


//Hero Text Event
$(document).ready(function() {
    function fadeSpan() {
        $('#header .hero-box h1 span').fadeIn(2000);
    }
    setTimeout(fadeSpan, 6000); 
});


//Section 1 & 2 Events
$(document).ready(function() {
    $(window).scroll(function() {
        let positionTop = $(document).scrollTop();
        console.log(positionTop);

        if ((positionTop > 500) && (positionTop < 1200)) {
            $('.main-wrapper .section1 .section1-box .hide').removeClass('hide');
            $('.main-wrapper .section1 .section1-box .flex-item').addClass('animated fadeInRightBig');
        }

        if ((positionTop > 1150) && (positionTop < 1500)) {
            $('.main-wrapper .section2 .section2-box .hide').removeClass('hide');
            $('.main-wrapper .section2 .section2-box').addClass('animated bounceInDown');
        }
    });
});
