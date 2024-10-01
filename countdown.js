// Define la fecha a la que queremos hacer la cuenta regresiva
var countDownDate = new Date("Nov 2, 2024 00:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var countdownfunction = setInterval(function() {

    // Obtiene la fecha y hora actual
    var now = new Date().getTime();

    // Encuentra la diferencia entre la fecha actual y la de cuenta regresiva
    var distance = countDownDate - now;

    // Calcula el tiempo para días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

    // Si la cuenta regresiva termina, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "¡Evento finalizado!";
    }
}, 1000);
