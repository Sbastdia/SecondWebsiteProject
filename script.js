var audio = document.getElementById("audioFlamenco");
audio.play();

// Agrega un evento clic al botón para pausar el audio
document.getElementById("pauseButton").addEventListener("click", function() {
    audio.pause();
});

// Agrega un evento de cambio al deslizador de volumen para cambiar el volumen del audio
document.getElementById("volumeSlider").addEventListener("change", function() {
    audio.volume = this.value;
});
