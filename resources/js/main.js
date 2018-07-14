$(document).ready(function() {
    $(window).on('scroll', function() {
        let positionTop = $(document).scrollTop();

        //Nav Scroll Events
        if (positionTop) {
            $('nav').addClass('nav-js');
            $('#header .logo svg').addClass('fill');
            $('#header .main-nav ul li a').addClass('nav-item-js');
        } else {
            $('nav').removeClass('nav-js');
            $('#header .logo svg').removeClass('fill');
            $('#header .main-nav ul li a').removeClass('nav-item-js');
        }

        //Section 1 & 2 Events
        if ((positionTop > 500) && (positionTop < 1200)) {
            $('.main-wrapper .section1 .section1-box .hide').removeClass('hide');
            $('.main-wrapper .section1 .section1-box').addClass('animated fadeInRightBig');
        }

        if ((positionTop > 1150) && (positionTop < 1500)) {
            $('.main-wrapper .section2 .section2-box .hide').removeClass('hide');
            $('.main-wrapper .section2 .section2-box').addClass('animated bounceInDown');
        }
        
    });
    
    //Hamburger Event
    $('.toggle-hamburger').on('click', function() {
        $('.main-nav ul').toggleClass('hamburger-active');
    });
    
    //Hero Text Event
    $('#header .hero-box h1').slideDown(3000);
        function fadeSpan() {
            $('#header .hero-box h1 span').fadeIn(3000);
        }
        setTimeout(fadeSpan, 9000); 
    
});





   




