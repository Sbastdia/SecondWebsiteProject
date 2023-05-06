var audio1 = document.getElementById("audioFlamenco");
audio1.play();

// Agrega un evento clic al botón para pausar el audio
document.getElementById("pauseButton").addEventListener("click", function() {
    audio1.pause();
});

// Agrega un evento de cambio al deslizador de volumen para cambiar el volumen del audio
document.getElementById("volumeSlider").addEventListener("change", function() {
    audio1.volume = this.value;
});

var audio2 = document.getElementById("audioBallet");
audio2.play();

// Agrega un evento clic al botón para pausar el audio
document.getElementById("pauseButton").addEventListener("click", function() {
    audio2.pause();
});

// Agrega un evento de cambio al deslizador de volumen para cambiar el volumen del audio
document.getElementById("volumeSlider").addEventListener("change", function() {
    audio2.volume = this.value;
});

var audio3 = document.getElementById("audioContemporaneo");
audio3.play();

// Agrega un evento clic al botón para pausar el audio
document.getElementById("pauseButton").addEventListener("click", function() {
    audio3.pause();
});

// Agrega un evento de cambio al deslizador de volumen para cambiar el volumen del audio
document.getElementById("volumeSlider").addEventListener("change", function() {
    audio3.volume = this.value;
});
