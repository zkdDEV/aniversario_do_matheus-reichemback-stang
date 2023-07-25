AOS.init();
confetti.start()
setTimeout(function(){confetti.stop();},10000)

const dataDoAniversario = new Date('May 03, 2024 00:00:00')
const timeStampDoAniversario = dataDoAniversario.getTime()

const contaAsHoras = setInterval(function()
{
    const agora = new Date()
    const timeStampAgora = agora.getTime()
    const tempoQueFalta = timeStampDoAniversario - timeStampAgora
    
    const diasAteOAniversario = Math.floor(tempoQueFalta / (1000 * 60 * 60 * 24))
    const horasAteOAniversario = Math.floor((tempoQueFalta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteOAniversario = Math.floor((tempoQueFalta % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteOAniversario = Math.floor((tempoQueFalta % (1000 * 60)) / 1000)

    document.getElementById('tempo').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`

    if(tempoQueFalta <= 0)
    {
        const idade = 19
        document.getElementById('tempo').innerHTML = `Agora Matheus tem ${idade} anos`
        confetti.start()
        setTimeout(function(){confetti.stop();},30000)
    }
}, 1000)