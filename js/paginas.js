//Voy a añadir un audio a algunas páginas
var audios = document.getElementById("audio"); //Se va actualizando con el id correcto para cada página
var pauseButton = document.getElementById("pauseButton"); //Selecciono el id para usarlo en cada página
var volumeSlider = document.getElementById("volumeSlider"); //Selecciono el id para usarlo en cada página

//Se reproduce el audio al cargar la página
audios.play();

//Añadimos lo siguiente para pausar el audio cuando se hace click en el botón de "Pausar audio"
pauseButton.addEventListener("click", function() {
    if (audios.paused) {
    audios.play();
    pauseButton.innerHTML = "Pausar audio"; //Cambia el texto del botón
    } else {
    audios.pause();
    pauseButton.innerHTML = "Reproducir audio"; //Cambia el texto del botón
    }
});

//Para cambiar el volumen del audio cuando se mueve el control deslizante
volumeSlider.addEventListener("input", function() {
    audios.volume = this.value;
});