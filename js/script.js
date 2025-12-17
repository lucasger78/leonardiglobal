const phrases = document.querySelectorAll('.latin-p');
  let index = 0;

  setInterval(() => {
    phrases[index].classList.remove('active');
    index = (index + 1) % phrases.length;
    phrases[index].classList.add('active');
  }, 10000); // cambia cada 10 segundos
