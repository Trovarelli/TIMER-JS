var display = document.getElementById('display')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var comecar = document.getElementById('comecar')

for(let i = 0; i <= 60; i++){
    minutos.innerHTML += `<option value = "${i}">${i}</option>`
}
for(let i = 0; i <= 60; i++){
    segundos.innerHTML += `<option value = "${i}">${i}</option>`
}

comecar.addEventListener('click', ()=>{
    var minutoAtual = minutos.value
    var segundoAtual = segundos.value
    var milissegundoAtual = 100

    comecar.disabled = true


         if (minutoAtual < 10 && segundoAtual < 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `0${minutoAtual}:0${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual < 10 && segundoAtual < 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `0${minutoAtual}:0${segundoAtual}:0${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual >= 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual >= 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}:0${milissegundoAtual}`
    else if (minutoAtual < 10 && segundoAtual >= 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `0${minutoAtual}:${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual < 10 && segundoAtual >= 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `0${minutoAtual}:${segundoAtual}:0${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual < 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `${minutoAtual}:0${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual < 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `${minutoAtual}:0${segundoAtual}:0${milissegundoAtual}`
        
        
    let interval = setInterval(()=>{
        
        if(minutoAtual < 0){
            alert('Acabou')
            document.getElementById('sound').play()
            clearInterval(interval)
            display.childNodes[1].innerHTML = '00:00:00'
            comecar.disabled = false
        
        } else {
            if(milissegundoAtual <= 0){
                if(segundoAtual >= 0){
                    segundoAtual--
                    milissegundoAtual = 99
                }
            }
            if(segundoAtual <= 0){
                minutoAtual--
                segundoAtual = 59
            }
        }
        milissegundoAtual--
        
         if (minutoAtual < 10 && segundoAtual < 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `0${minutoAtual}:0${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual < 10 && segundoAtual < 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `0${minutoAtual}:0${segundoAtual}:0${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual >= 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual >= 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}:0${milissegundoAtual}`
    else if (minutoAtual < 10 && segundoAtual >= 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `0${minutoAtual}:${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual < 10 && segundoAtual >= 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `0${minutoAtual}:${segundoAtual}:0${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual < 10 && ( milissegundoAtual < 100 && milissegundoAtual >= 10)) display.childNodes[1].innerHTML = `${minutoAtual}:0${segundoAtual}:${milissegundoAtual}`
    else if (minutoAtual >= 10 && segundoAtual < 10 && milissegundoAtual < 10) display.childNodes[1].innerHTML = `${minutoAtual}:0${segundoAtual}:0${milissegundoAtual}`
    }, 10)
})
