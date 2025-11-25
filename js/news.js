$(document).ready(function(){
    $('.projects-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,              // velocidad del movimiento continuo
        cssEase: 'linear',
        pauseOnHover: true,       // ¡Esto es lo que necesitas!
        pauseOnFocus: false,
        arrows: false,
        variableWidth: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});