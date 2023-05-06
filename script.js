var audios = document.getElementById("audio"); // Actualizar con el ID correcto para cada página
var pauseButton = document.getElementById("pauseButton");
var volumeSlider = document.getElementById("volumeSlider");

// Reproducir el audio al cargar la página
audios.play();

// Pausar el audio cuando se hace clic en el botón de pausa
pauseButton.addEventListener("click", function() {
    if (audios.paused) {
    audios.play();
    pauseButton.innerHTML = "Pausar audio";
    } else {
    audios.pause();
    pauseButton.innerHTML = "Reproducir audio";
    }
});

// Cambiar el volumen del audio cuando se mueve el control deslizante
volumeSlider.addEventListener("input", function() {
    audios.volume = this.value;
});


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
        resultsDiv.innerHTML = `¡Has obtenido una puntuación de ${score} de 4!`;
    }
});
