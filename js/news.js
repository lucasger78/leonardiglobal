// $(document).ready(function(){
//     $('.projects-slider').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         speed: 6000,              // velocidad del movimiento continuo
//         cssEase: 'linear',
//         pauseOnHover: true,       // ¡Esto es lo que necesitas!
//         pauseOnFocus: false,
//         arrows: false,
//         variableWidth: false,
//         centerMode: false,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: { slidesToShow: 3 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: { slidesToShow: 2 }
//             },
//             {
//                 breakpoint: 576,
//                 settings: { slidesToShow: 1 }
//             }
//         ]
//     });
// });


$(document).ready(function(){
    $('.projects-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: false,
        arrows: true,               // ¡ACTIVAR FLECHAS!
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
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
                settings: { 
                    slidesToShow: 1,
                    arrows: true // Mantener flechas en móvil
                }
            }
        ]
    });
});