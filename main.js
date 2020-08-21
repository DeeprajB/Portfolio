$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href="#portfolio"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });
    $('nav a[href="#about"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 130
        }, 2000);
    });
    $('nav a[href="#contact"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 130
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});