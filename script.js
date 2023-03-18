//clase= ., id = #
//intro


const typed = new Typed('#mi_parrafo', {
  strings: ['Buenas! Soy Christian Rivero, actualmente tengo 20 años, nací en Barcelona el 20 de abril del 2002 y soy Ingeniero informático, concretamente, de la especialidad de Ingeniería del Software, titulado en la UPC. Desde pequeño me han llamado mucho la atención los ordenadores, las consolas, los diseños de las páginas web, y sobre todo, el porqué de las cosas, me considero una persona muy curiosa y que le gusta aprender y conocer diferentes puntos de vista de todo tipo de persona. Soy trabajador, perfeccionista, perseverante, resolutivo y con capacidad de trabajar en equipo. Si estás leyendo esto es porque o estoy presumiendo de página web (está bien hecha eh <img src="/images/guiño3.png" alt="emoticono guiño" id="emote_guiño"/> ) o estás aquí interesado en mi y en mi portafolio. En ese caso, espero que te sirva esta web para conocerme un poco y más, y si necesitas conocerme mejor, contáctame por privado, puedes encontrar las formas de contacto conmigo clicando <a href="#bloque4" id="enlace">aquí</a>.'],
  typeSpeed: 15,
  contentType: 'html',
});

var edad = fechaActual.getFullYear() - 2002;
const fechaActual = new Date();


if(fechaActual.getMonth() < 4 || (fechaActual.getMonth() == 4 && fechaActual.getDate < 20)) {
    edad -=1;
}

document.getElementById('edad').textContent = edad;



/*
<span id="edad"></span>
$('#edad').
*/