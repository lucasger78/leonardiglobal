const phrases = document.querySelectorAll('.latin-p');
  let index = 0;

  setInterval(() => {
    phrases[index].classList.remove('active');
    index = (index + 1) % phrases.length;
    phrases[index].classList.add('active');
  }, 10000); // cambia cada 10 segundos


  // Función para mostrar el modal
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
//         }
//     });
// });



$(document).ready(function() {
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
        closeBtn: true,
        closeClick: false,
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>'
        },
        helpers: {
            overlay: {
                closeClick: false
            }
        },
        beforeShow: function() {
            // Forzar que el botón de cierre sea visible
            $('.fancybox-close').show();
        }
    });
});