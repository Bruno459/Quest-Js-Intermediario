const camposInput = document.querySelectorAll(".campo-input")

camposInput.forEach(function (item, indice) {
    const botaoEnviar = document.querySelector(".botao-enviar")
    const avisos = document.querySelectorAll(".aviso")

    botaoEnviar.addEventListener("click", function(){
        if(item.value.trim() === ""){
            item.classList.add("nao-preenchido")
            item.classList.remove("preenchido")
            avisos[indice].classList.add("nao-preenchido")
            avisos[indice].classList.remove("preenchido")
        }else{
            item.classList.add("preenchido")
            item.classList.remove("nao-preenchido")
            avisos[indice].classList.add("preenchido")
            avisos[indice].classList.remove("nao-preenchido")
        }
    })
    })

