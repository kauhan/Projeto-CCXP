const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento = "04 dec 2024"

function countDown() {

    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const diasFormatados = formatoTempo(finalDias);

    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const horasFormatadas = formatoTempo(finalHoras);


    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const minutoFormatados = formatoTempo(finalMinutos);

    const finalSegundos = Math.floor(segTotal) % 60;
    const segundoFormatado = formatoTempo(finalSegundos)


    dia.innerHTML = finalDias
    dia.innerHTML = `${diasFormatados} D`;

    hora.innerHTML = finalHoras
    hora.innerHTML = horasFormatadas;
    hora.innerHTML = `${horasFormatadas} H`;


    minuto.innerHTML = finalMinutos
    minuto.innerHTML = minutoFormatados;
    minuto.innerHTML = `${minutoFormatados} M`;

    segundo.innerHTML = finalSegundos
    segundo.innerHTML = segundoFormatado;
    segundo.innerHTML = `${segundoFormatado} S`;

}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();

setInterval(countDown, 1000)


