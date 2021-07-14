// Importamos la clase que necesitamos
import './css/style.css';

// Importamos las funciones que necesitamos para que funcione la app
import { crearVectorImagenes } from './js/imagenes-page';
import { diaNocheModo } from './js/daynight-control';

// Elementos del DOM
const lupa = document.getElementById('lupa');

// EVENTOS
// Evento que controla cuando la pagina se acaba de cargar, este evento llama a la funcion que controla el color de la página.
window.addEventListener('load',diaNocheModo);
// Evento que al pulsar enter en el input inicia la peticion a la API.
input.addEventListener('keyup', (evento) => {
    if (evento.key === 'Enter') {
        crearVectorImagenes();
    }
})
// Evento que al pulsar la lupa se inicia la peticion a la API.
lupa.addEventListener('click', async() => {
    crearVectorImagenes();
})