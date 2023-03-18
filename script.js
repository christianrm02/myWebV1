//clase= ., id = #
//intro
//SABER MI EDAD
const fechaActual = new Date();
var edad = fechaActual.getFullYear() - 2002;
if(fechaActual.getMonth() < 4 || (fechaActual.getMonth() == 4 && fechaActual.getDate < 20)) {
    edad -=1;
}
//MOSTRAT TEXTO PRESENTACIÓN
const typed = new Typed('#mi_parrafo', {
  strings: [`Buenas! Soy Christian Rivero, actualmente tengo ${edad} años, nací en Barcelona el 20 de abril del 2002 y soy Ingeniero informático, concretamente, de la especialidad de Ingeniería del Software, titulado en la UPC. Desde pequeño me han llamado mucho la atención los ordenadores, las consolas, los diseños de las páginas web, y sobre todo, el porqué de las cosas, me considero una persona muy curiosa y que le gusta aprender y conocer diferentes puntos de vista de todo tipo de persona. Soy trabajador, perfeccionista, perseverante, resolutivo y con capacidad de trabajar en equipo. Si estás leyendo esto es porque o estoy presumiendo de página web (está bien hecha eh <img src="/images/guiño3.png" alt="emoticono guiño" id="emote_guiño"/> ) o estás aquí interesado en mi y en mi portafolio. En ese caso, espero que te sirva esta web para conocerme un poco y más, y si necesitas conocerme mejor, contáctame por privado, puedes encontrar las formas de contacto conmigo clicando <a href="#bloque4" id="enlace">aquí</a>.`],
  typeSpeed: 15,
});

//OBSERVAR Y MOVER APARTADO SKILLS
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if(entry.target.id == "cmas") entry.target.classList.add('cmasvisible');
      else if(entry.target.id == "java") entry.target.classList.add('javavisible');
      else if(entry.target.id == "html") entry.target.classList.add('htmlvisible');
      else if(entry.target.id == "css") entry.target.classList.add('cssvisible');
      else if(entry.target.id == "js") entry.target.classList.add('jsvisible');

      else if(entry.target.id == "esp") entry.target.classList.add('espvisible');
      else if(entry.target.id == "cat") entry.target.classList.add('catvisible');
      else if(entry.target.id == "ing") entry.target.classList.add('ingvisible');
      else if(entry.target.id == "fr") entry.target.classList.add('frvisible');
      else if(entry.target.id == "jp") entry.target.classList.add('jpvisible');
    } else {
      if(entry.target.id == "cmas") entry.target.classList.remove('cmasvisible');
      else if(entry.target.id == "java") entry.target.classList.remove('javavisible');
      else if(entry.target.id == "html") entry.target.classList.remove('htmlvisible');
      else if(entry.target.id == "css") entry.target.classList.remove('cssvisible');
      else if(entry.target.id == "js") entry.target.classList.remove('jsvisible');

      else if(entry.target.id == "esp") entry.target.classList.remove('espvisible');
      else if(entry.target.id == "cat") entry.target.classList.remove('catvisible');
      else if(entry.target.id == "ing") entry.target.classList.remove('ingvisible');
      else if(entry.target.id == "fr") entry.target.classList.remove('frvisible');
      else if(entry.target.id == "jp") entry.target.classList.remove('jpvisible');
    }
  });
});

observer.observe(document.querySelector('#cmas'));
observer.observe(document.querySelector('#java'));
observer.observe(document.querySelector('#html'));
observer.observe(document.querySelector('#css'));
observer.observe(document.querySelector('#js'));

observer.observe(document.querySelector('#esp'));
observer.observe(document.querySelector('#cat'));
observer.observe(document.querySelector('#ing'));
observer.observe(document.querySelector('#fr'));
observer.observe(document.querySelector('#jp'));
/*
<span id="edad"></span>
$('#edad').
*/