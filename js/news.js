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


// $(document).ready(function(){
//     $('.projects-slider').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         speed: 6000,
//         cssEase: 'linear',
//         pauseOnHover: true,
//         pauseOnFocus: false,
//         arrows: true,               // ¡ACTIVAR FLECHAS!
//         prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
//         nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
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
//                 settings: { 
//                     slidesToShow: 1,
//                     arrows: true // Mantener flechas en móvil
//                 }
//             }
//         ]
//     });
// });


$(document).ready(function(){
    // Destruir Slick si ya existe (para evitar reinicializaciones)
    if ($('.projects-slider').hasClass('slick-initialized')) {
        $('.projects-slider').slick('unslick');
    }
    
    // Inicializar Slick
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
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        variableWidth: false,
        centerMode: false,
        slide: '.slide', // Especificar que los slides tienen clase 'slide'
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
                    arrows: true
                }
            }
        ]
    });

    // Reinicializar Fancybox para los elementos clonados por Slick
    // Sin rel, cada modal será independiente (no galería)
    setTimeout(function() {
        $('.projects-slider .fancybox').fancybox({
            padding: 0,
            margin: 20,
            autoSize: true,
            autoCenter: true,
            fitToView: true,
            scrolling: 'no',
            openEffect: 'fade',
            openSpeed: 300,
            closeEffect: 'fade',
            closeSpeed: 200,
            type: 'inline',
            helpers: {
                overlay: {
                    closeClick: false
                }
            },
            afterShow: function() {
                // Agregar botón de cierre solo en mobile si no existe
                if (window.innerWidth <= 768 && !$('.custom-close-btn').length) {
                    $('.fancybox-skin').append('<button class="custom-close-btn">×</button>');
                    $('.custom-close-btn').on('click', function() {
                        $.fancybox.close();
                    });
                }
            }
        });
    }, 100);
});