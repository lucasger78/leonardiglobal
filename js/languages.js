const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`js/${language}.json`, {
    headers: {
      'Accept': 'application/json; charset=utf-8'
    }
  });
  
  // Obtener como texto primero para debuggear
  const textResponse = await requestJson.text();
  console.log('Raw response:', textResponse.substring(0, 200)); // Ver los primeros 200 caracteres
  
  const texts = JSON.parse(textResponse);

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }

  localStorage.setItem("selectedLanguage", language);
};

const loadLanguage = () => {
  // Obtiene el idioma seleccionado almacenado en el almacenamiento local del navegador
  const selectedLanguage = localStorage.getItem("selectedLanguage");

  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  } else {
    // Establece catalán (es-ct) como idioma predeterminado
    changeLanguage("es-ct");
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

// Carga el idioma al cargar la página
loadLanguage();

// Selecciona todas las banderas
const flags = document.querySelectorAll('.flags-es-ct, .flags-es, .flags-por, .flags-gb');

// Función para activar la bandera correcta
const activateFlag = (language) => {
  flags.forEach(f => f.classList.remove('active'));
  
  // Encuentra la bandera correspondiente al idioma
  const flagToActivate = document.querySelector(
    language === 'es-ct' ? '.flags-es-ct' :
    language === 'es' ? '.flags-es' :
    language === 'por' ? '.flags-por' :
    '.flags-gb'
  );
  
  if (flagToActivate) {
    flagToActivate.classList.add('active');
  }
};

// Al cargar la página, activa la bandera del idioma guardado (por defecto catalán)
const savedLanguage = localStorage.getItem("selectedLanguage") || "es-ct";
activateFlag(savedLanguage);

// Al hacer click en una bandera
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const language = flag.parentElement.dataset.language;
    
    // Apaga todas las banderas
    flags.forEach(f => f.classList.remove('active'));
    
    // Enciende solo la clickeada
    flag.classList.add('active');
    
    // Ya no es necesario guardar aquí porque changeLanguage() lo hace
  });
});