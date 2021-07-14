
// Llamadas a las funciones
export const diaNocheModo = () => {
    // Primero llamamos al objeto date.
    const fecha = new Date();
    // Segundo extraemos la hora de la fecha.
    const hora = fecha.getHours();
    // Tercero hacemos las condiciones, el metodo getHours, devuelve la hora en formato 0 a 23.
    if(hora > 7 && hora <20){
        // Accedemmos al body desde el docuuento y cambiamos el background-color y el color.
        document.body.style.backgroundColor='#fff';
        document.body.style.color= '#121212';
    } else {
        document.body.style.backgroundColor ='#121212';
        document.body.style.color= '#fff';
    }
}