// Importamos proveedor de imagenes
import { cargarImagenesAPI } from './http-provider';

// Funcion con la que dibujamos en el HTML 
export const crearVectorImagenes = async() => {
    const resultados = await cargarImagenesAPI();
    // Recibimos la informacion en un vector y de alli queremos extraer la direccion de las imagenes, esta direccion será la que utilizaremos para establecer el valor en el CSS
    console.log('hola');
    const imagenesNodo = [];
    resultados.forEach((resultado, key) => {
        imagenesNodo[key] = document.createElement('div');
        imagenesNodo[key].classList.add('img');
        imagenesNodo[key].style.backgroundImage =`url(${resultado.urls.small})`
        imagenesNodo[key].addEventListener('dblclick' , () => {
            // Buscamos que al hacer doble click sobre cada una de las imagenes se abra la imagen en su tamaño original para poder descargarla
            // el objeto json que recibimos tiene una propiedad links y dentro otra download que realiza esa accion.
            window.open(resultado.links.download, '_blank')
        })
        imagenes.appendChild(imagenesNodo[key]);
    });
}