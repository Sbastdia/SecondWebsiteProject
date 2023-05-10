const imagen = document.getElementById("img1");
const imagenUrlNueva = "https://img.freepik.com/vector-premium/diseno-silueta-baile-personas-bailando_566661-15790.jpg?w=2000";

// Agregar el evento "mouseover" a la imagen original
imagen.addEventListener("mouseover", () => {
    // Crear una nueva imagen con la URL de la imagen nueva
    const nuevaImagen = new Image();
    nuevaImagen.src = imagenUrlNueva;

    // Reemplazar la imagen original con la nueva imagen
    imagen.src = nuevaImagen.src;

    // Agregar el evento "mouseout" a la imagen original para restaurar la original
    imagen.addEventListener("mouseout", () => {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ouxJRHg09wFHJyT6g6ZIGKiFNHRtVYHr0Q&usqp=CAU";
    });
});



// Seleccionar todos los elementos con la clase "pregunta"
const preguntas = document.querySelectorAll(".pregunta");

// Agregar un event listener para cada pregunta
preguntas.forEach(pregunta => {
    pregunta.addEventListener("click", () => {
    // Seleccionar la respuesta correspondiente
    const respuesta = pregunta.nextElementSibling;

    // Alternar la clase "mostrar" en la respuesta
    respuesta.classList.toggle("mostrar");
    });
});