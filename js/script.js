$(window).on("scroll", function () {
    const bodyScroll = $(window).scrollTop();
    const navbar = $(".navbar");

    if (bodyScroll > 130) {
        navbar.addClass("nav-scroll");
        $('.navbar-logo img').attr('src', 'images/logo-blue.png');
    } else {
        navbar.removeClass("nav-scroll");
        $('.navbar-logo img').attr('src', 'images/logo-white.png');
    }
});

$(window).on("load", function () {
    const bodyScroll = $(window).scrollTop();
    const navbar = $(".navbar");

    if (bodyScroll > 130) {
        navbar.addClass("nav-scroll");
        $('.navbar-logo img').attr('src', 'images/logo-blue.png');
    } else {
        navbar.removeClass("nav-scroll");
        $('.navbar-logo img').attr('src', 'images/logo-white.png');
    }

    /* smooth scroll
    -------------------------------------------------------*/
    $.scrollIt({
        easing: 'swing',      // the easing function for animation
        scrollTime: 900,      // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: -63
    });

    /* isotope
    -------------------------------------------------------*/
    const $gallery = $('.gallery').isotope({});
    $('.gallery').isotope({
        itemSelector: '.item-img',
        transitionDuration: '0.5s',
    });

    $(".gallery .single-image").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });

    /* filter items on button click
    -------------------------------------------------------*/
    $('.filtering').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'button', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

$(function () {
    $(".cover-bg").each(function () {
        const attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }
    });

    /* sections background color from data background
    -------------------------------------------------------*/
    $("[data-background-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-background-color"));
    });

    /* Owl Carousel testimonial
    -------------------------------------------------------*/
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        margin: 30,
        dots: true,
        nav: false,
    });
});


// Slide Blog
$(document).ready(function(){
    $('.testimonials-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,                    // SIN FLECHAS
      dots: true,                    // CON PUNTITOS
      center: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 2500,         // 2.5 segundos por slide
      autoplayHoverPause: true,      // PAUSA SOLO AL HOVER
      autoplaySpeed: 500,
      smartSpeed: 500,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        992: { items: 1 }
      }
    });
  });