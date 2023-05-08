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