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