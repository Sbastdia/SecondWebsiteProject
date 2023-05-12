//La idea es que cuando ponga el mouse sobre la imagen, esta cambie a otra imagen y cuando lo quite vuelva a la imagen original.
//Primero seleccionamos la imagen original
const imagen = document.getElementById("img1");
//Luego escribo el url de la nueva imagen
const imagenUrlNueva = "https://img.freepik.com/vector-premium/diseno-silueta-baile-personas-bailando_566661-15790.jpg?w=2000";

// Agregamos el evento "mouseover" a la imagen original
imagen.addEventListener("mouseover", () => {
    //Creamos una nueva imagen con la URL de la imagen nueva
    const nuevaImagen = new Image();
    nuevaImagen.src = imagenUrlNueva;

    //Reemplazamos la imagen original con la nueva imagen
    imagen.src = nuevaImagen.src;

    //Agregamos el evento "mouseout" a la imagen original para restaurar la original
    imagen.addEventListener("mouseout", () => {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ouxJRHg09wFHJyT6g6ZIGKiFNHRtVYHr0Q&usqp=CAU";
    });
});


//Esta parte del fichero es para las preguntas frecuentes
//Seleccionamos todos los elementos con la clase "pregunta"
const preguntas = document.querySelectorAll(".pregunta");

//Agregamos un event listener para cada pregunta (para que el usuario haga click en la pregunta)
preguntas.forEach(pregunta => {
    pregunta.addEventListener("click", () => {
    //Seleccionamos la respuesta correspondiente
    const respuesta = pregunta.nextElementSibling;

    //Alternamos la clase "mostrar" en la respuesta
    respuesta.classList.toggle("mostrar");
    });
});