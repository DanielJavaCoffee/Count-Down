const dia = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const date = "17 oct 2025"

function countDown(){
    const dateLancamento = new Date(date)
    const hoje = new Date()

    const segTotal = (dateLancamento - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    horas.innerHTML = finalHoras
    minutos.innerHTML = finalMinutos
    segundos.innerHTML = finalSegundos
    
    if(finalSegundos <= 10){
        segundos.style.color = 'red';
    } else {
        segundos.style.color = 'white';
    }
}

function formatoTempo(tempo){
    return tempo < 10? `${tempo}` : tempo;
}

countDown()
setInterval(countDown, 1000)