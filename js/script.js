const phrases = document.querySelectorAll('.latin-p');
  let index = 0;

  setInterval(() => {
    phrases[index].classList.remove('active');
    index = (index + 1) % phrases.length;
    phrases[index].classList.add('active');
  }, 10000); // cambia cada 10 segundos


// $(document).ready(function() {
//     $(".fancybox").fancybox({
//         padding: 0,
//         margin: 20,
//         autoSize: true,
//         autoCenter: true,
//         fitToView: true,
//         scrolling: 'no',
//         openEffect: 'fade',
//         openSpeed: 300,
//         closeEffect: 'fade',
//         closeSpeed: 200,
//         helpers: {
//             overlay: {
//                 closeClick: false
//             }
//         },
//         afterShow: function() {
//             // Agregar botón de cierre solo en mobile si no existe
//             if (window.innerWidth <= 768 && !$('.custom-close-btn').length) {
//                 $('.fancybox-skin').append('<button class="custom-close-btn">×</button>');
//                 $('.custom-close-btn').on('click', function() {
//                     $.fancybox.close();
//                 });
//             }
//         }
//     });
// });

$(document).ready(function() {
    // Verificar si estamos en la página de blog
    var isNewsPage = window.location.pathname.includes('blog.html');
    
    // Solo inicializar aquí si NO es la página de blog
    if (!isNewsPage) {
        $(".fancybox").fancybox({
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
    }
});