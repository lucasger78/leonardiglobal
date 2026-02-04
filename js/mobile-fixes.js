/* ===================================
   JAVASCRIPT CORREGIDO - LEONARDI GLOBAL
   =================================== */

// //1. CAROUSEL - ASEGURAR 3 INDICADORES FUNCIONANDO
// $(document).ready(function() {
//     if (window.innerWidth <= 767) {
//         var carousel = $('#home-carousel');
//         var indicators = $('.carousel-indicators');
        
//         // Asegurar que hay 3 indicadores
//         if (indicators.find('li').length < 3) {
//             indicators.empty();
//             for (var i = 0; i < 3; i++) {
//                 var li = $('<li></li>')
//                     .attr('data-target', '#home-carousel')
//                     .attr('data-slide-to', i);
//                 if (i === 0) li.addClass('active');
//                 indicators.append(li);
//             }
//         }
        
//         // Click en indicadores
//         indicators.find('li').off('click touchend').on('click touchend', function(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             var index = $(this).data('slide-to');
//             carousel.carousel(index);
//             return false;
//         });
        
//         // Actualizar activo
//         carousel.on('slid.bs.carousel', function() {
//             var current = carousel.find('.item.active').index();
//             indicators.find('li').removeClass('active').eq(current).addClass('active');
//         });
        
//         // Swipe
//         var startX = 0;
//         carousel.on('touchstart', function(e) {
//             startX = e.originalEvent.touches[0].pageX;
//         });
//         carousel.on('touchend', function(e) {
//             var endX = e.originalEvent.changedTouches[0].pageX;
//             if (startX - endX > 50) carousel.carousel('next');
//             else if (endX - startX > 50) carousel.carousel('prev');
//         });
//     }
// });




// $(document).ready(function() {
//     if (window.innerWidth <= 767) {
//         var carousel = $('#home-carousel');
//         var indicators = $('.carousel-indicators');

//         // Forzar que solo haya 2 indicadores (porque hay 2 slides)
//         if (indicators.find('li').length !== 2) {
//             indicators.empty();
//             for (var i = 0; i < 2; i++) {
//                 var li = $('<li></li>')
//                     .attr('data-target', '#home-carousel')
//                     .attr('data-slide-to', i);
//                 if (i === 0) li.addClass('active');
//                 indicators.append(li);
//             }
//         }

//         // Click en indicadores
//         indicators.find('li').off('click touchend').on('click touchend', function(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             var index = $(this).data('slide-to');
//             carousel.carousel(index);
//             return false;
//         });

//         // Actualizar activo al terminar transición
//         carousel.on('slid.bs.carousel', function() {
//             var current = carousel.find('.item.active').index(); // usar .item porque tu HTML es Bootstrap 3
//             indicators.find('li').removeClass('active').eq(current).addClass('active');
//         });

//         // Swipe en móviles
//         var startX = 0;
//         carousel.on('touchstart', function(e) {
//             startX = e.originalEvent.touches[0].pageX;
//         });
//         carousel.on('touchend', function(e) {
//             var endX = e.originalEvent.changedTouches[0].pageX;
//             if (startX - endX > 50) carousel.carousel('next');
//             else if (endX - startX > 50) carousel.carousel('prev');
//         });

//         // Intervalo más largo (ejemplo: 6 segundos)
//         carousel.carousel({
//             interval: 6000,
//             pause: "hover"
//         });
//     }
// });

// 2. SLIDER NOTICIAS - MOVIMIENTO MANUAL
$(document).ready(function() {
    if (window.innerWidth <= 767) {
        var slider = $('.auto-slider');
        if (!slider.length) return;
        
        var track = $('.slider-track');
        var isDragging = false;
        var startX, scrollStart;
        
        slider.on('touchstart', function(e) {
            isDragging = true;
            startX = e.originalEvent.touches[0].pageX;
            scrollStart = slider.scrollLeft();
            // Pausar animación
            track.css('animation-play-state', 'paused');
        });
        
        slider.on('touchmove', function(e) {
            if (!isDragging) return;
            var x = e.originalEvent.touches[0].pageX;
            var walk = (startX - x);
            slider.scrollLeft(scrollStart + walk);
        });
        
        slider.on('touchend', function() {
            isDragging = false;
            // Reanudar después de 3 segundos
            setTimeout(function() {
                track.css('animation-play-state', 'running');
            }, 3000);
        });
    }
});
