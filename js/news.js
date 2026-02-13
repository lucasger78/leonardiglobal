$(document).ready(function(){
    // Destruir Slick si ya existe
    if ($('.projects-slider').hasClass('slick-initialized')) {
        $('.projects-slider').slick('unslick');
    }
    
    // Inicializar Slick
    var slickConfig = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Movimiento continuo
        speed: 8000, // Velocidad del movimiento continuo (8 segundos)
        cssEase: 'linear', // Movimiento lineal continuo
        pauseOnHover: true, // Se pausa al hacer hover
        pauseOnFocus: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev" style="display: flex !important; position: absolute !important; left: 15px !important; top: 50% !important; transform: translateY(-50%) !important; z-index: 9999 !important; width: 50px !important; height: 50px !important; background: rgba(46, 74, 90, 0.95) !important; border: none !important; border-radius: 50% !important; color: white !important; cursor: pointer !important; align-items: center !important; justify-content: center !important; box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;"><i class="fas fa-chevron-left" style="font-size: 22px !important; color: white !important;"></i></button>',
        nextArrow: '<button type="button" class="slick-next" style="display: flex !important; position: absolute !important; right: 15px !important; top: 50% !important; transform: translateY(-50%) !important; z-index: 9999 !important; width: 50px !important; height: 50px !important; background: rgba(46, 74, 90, 0.95) !important; border: none !important; border-radius: 50% !important; color: white !important; cursor: pointer !important; align-items: center !important; justify-content: center !important; box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;"><i class="fas fa-chevron-right" style="font-size: 22px !important; color: white !important;"></i></button>',
        variableWidth: false,
        centerMode: false,
        slide: '.slide',
        waitForAnimate: false,
        rtl: false,
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
    };
    
    $('.projects-slider').slick(slickConfig);

    // Variable para controlar si el autoplay debe estar pausado permanentemente
    var autoplayPausedByUser = false;

    // FORZAR que las flechas sean clicables y PAUSAR autoplay al usarlas
    setTimeout(function() {
        $('.slick-prev, .slick-next').css({
            'display': 'flex',
            'pointer-events': 'auto',
            'z-index': '9999'
        });
        
        // Flecha ANTERIOR
        $('.slick-prev').off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Click en flecha PREV - Autoplay PAUSADO');
            
            // Pausar el autoplay permanentemente
            $('.projects-slider').slick('slickPause');
            autoplayPausedByUser = true;
            
            // Cambiar a velocidad rápida para navegación manual
            $('.projects-slider').slick('slickSetOption', 'speed', 500, false);
            $('.projects-slider').slick('slickPrev');
            
            // Restaurar velocidad lenta después de 1 segundo
            setTimeout(function() {
                $('.projects-slider').slick('slickSetOption', 'speed', 8000, false);
            }, 1000);
        });
        
        // Flecha SIGUIENTE
        $('.slick-next').off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Click en flecha NEXT - Autoplay PAUSADO');
            
            // Pausar el autoplay permanentemente
            $('.projects-slider').slick('slickPause');
            autoplayPausedByUser = true;
            
            // Cambiar a velocidad rápida para navegación manual
            $('.projects-slider').slick('slickSetOption', 'speed', 500, false);
            $('.projects-slider').slick('slickNext');
            
            // Restaurar velocidad lenta después de 1 segundo
            setTimeout(function() {
                $('.projects-slider').slick('slickSetOption', 'speed', 8000, false);
            }, 1000);
        });
        
        console.log('Flechas configuradas - Click en flecha PAUSA el autoplay');
    }, 300);

    // Reinicializar Fancybox
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
