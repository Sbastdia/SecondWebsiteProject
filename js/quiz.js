//Seleccionamos los elementos del DOM que necesitaremos
var quizForm = document.getElementById("quiz");
var resultsDiv = document.getElementById("results");
//Inicializamos la puntuación del usuario
var score = 0;

//Agregamos un event listener para cuando el usuario envíe el formulario
quizForm.addEventListener("submit", function(event) {
  event.preventDefault(); //Evita que la página se recargue al enviar el formulario

    //Obtenemos las respuestas seleccionadas por el usuario
    var q1Answer = quizForm.elements.q1.value;
    var q2Answer = quizForm.elements.q2.value;
    var q3Answer = quizForm.elements.q3.value;
    var q4Answer = quizForm.elements.q4.value;

    //Comparamos las respuestas seleccionadas con las respuestas correctas
    if (q1Answer === "b") {
        score += 1;
    }
    if (q2Answer === "a") {
        score += 1;
    }
    if (q3Answer === "b") {
        score += 1;
    }
    if (q4Answer === "c") {
        score += 1;
    }

    //Mostramos la puntuación del usuario
    if (score === 4) {
        resultsDiv.innerHTML = "¡Felicidades! ¡Has obtenido la puntuación máxima!";
    } else {
        resultsDiv.innerHTML = `¡Casi! Tu puntuación es: ${score} / 4`;
    }
});

//Estilizamos el <div> de resultados
resultsDiv.style.color = "purple";
resultsDiv.style.fontWeight = "bold";
resultsDiv.style.fontSize = "20px";
resultsDiv.style.textAlign = "center";
