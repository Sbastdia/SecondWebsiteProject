var quizForm = document.getElementById("quiz");
var resultsDiv = document.getElementById("results");
var score = 0;

quizForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Obtén las respuestas seleccionadas por el usuario
    var q1Answer = quizForm.elements.q1.value;
    var q2Answer = quizForm.elements.q2.value;
    var q3Answer = quizForm.elements.q3.value;
    var q4Answer = quizForm.elements.q4.value;

    // Compara las respuestas seleccionadas con las respuestas correctas
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

    if (score === 4) {
        resultsDiv.innerHTML = "¡Felicidades! ¡Has obtenido la puntuación máxima!";
    } else {
        resultsDiv.innerHTML = `¡Casi! Tu puntuación es: ${score} / 4`;
    }
});

resultsDiv.style.color = "purple";
resultsDiv.style.fontWeight = "bold";
resultsDiv.style.fontSize = "20px";
resultsDiv.style.textAlign = "center";
