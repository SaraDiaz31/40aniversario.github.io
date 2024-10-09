var diasEl = document.getElementById('dias')
var horasEl = document.getElementById('horas')
var minutosEl = document.getElementById('minutos')
var segundosEl = document.getElementById('segundos')

function countdownTimer() {
    const countdownDate =  new Date('11/02/2024').getTime();

    //convertir a milisegundos
    const segundos = 1000
    const minutos = segundos *60
    const horas = minutos * 60
    const dias = horas * 24

    //calcular cada segundo
    const intervalo  = setInterval(() => {
        //obtener fecha actual
    const hoy = new Date().getTime()
    const distancia = countdownDate - hoy

    diasEl.innerText = formatNumber(Math.floor(distancia / dias));
    horasEl.innerText = formatNumber(Math.floor((distancia % dias) / horas));
    minutosEl.innerText = formatNumber(Math.floor((distancia % horas) / minutos));
    segundosEl.innerText = formatNumber(Math.floor((distancia % minutos) / segundos));
    }, 1000)
    
}

function formatNumber(number) {
    if (number < 10) {
        return '0' + number
    }

    return number
}
countdownTimer()



