// DIRECCION Y API KEY DE UNSPLASH
const accessKey = 'Pon tu clave';
const APIUnsplash = (valorQuery, APIKey)=> `https://api.unsplash.com/search/photos?query=${valorQuery}&per_page=30&client_id=${APIKey}`;


const input = document.getElementById('input');
const imagenes = document.getElementById('imagenes');
const mensajeResultados = document.getElementById('no-resultados');

// Funcion encargada de realizar la conexion a la API
 export const cargarImagenesAPI = async () => {
    // Borramos los elementos que tenemos de la busqueda anterior:
    imagenes.innerHTML ='';
    try {
        const palabraBuscar = input.value;
        const resp = await fetch (APIUnsplash(palabraBuscar, accessKey));
        if (!resp.ok){
            throw 'No se ha podido realizar la conexion con el servidor'
        }
        const {results: resultados} = await resp.json();
        // Si no hay resultados muestro un mensaje
        if(resultados.length === 0){
            mensajeResultados.classList.remove('hidden')
        } else {
            mensajeResultados.classList.add('hidden');
        }
        // Borra lo escrito en el input
        input.value ='';
        return resultados;
    } catch (error) {
        console.log(error);
    }
}