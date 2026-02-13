$(document).ready(function(){
    // Destruir Slick si ya existe (para evitar reinicializaciones)
    if ($('.projects-slider').hasClass('slick-initialized')) {
        $('.projects-slider').slick('unslick');
    }
    
    // Inicializar Slick - CONFIGURACIÓN SIMPLE Y FUNCIONAL
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
        arrows: true, // FLECHAS ACTIVADAS
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        variableWidth: false,
        centerMode: false,
        slide: '.slide',
        responsive: [
            {
                breakpoint: 1200,
                settings: { 
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: { 
                    slidesToShow: 2,
                    arrows: true
                }
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

    // Pausar autoplay cuando se hace clic en las flechas
    $('.slick-prev, .slick-next').on('click', function() {
        var $slider = $('.projects-slider');
        $slider.slick('slickPause');
        
        // Reanudar después de 2 segundos
        setTimeout(function() {
            $slider.slick('slickPlay');
        }, 2000);
    });

    // Reinicializar Fancybox después de que Slick haya terminado
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
