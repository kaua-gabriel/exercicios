let tituloNome = document.querySelector("#Titulo-nome")

const MudarNome = () => {
    tituloNome.innerText = "kaua gab"
}

tituloNome.addEventListener("click", MudarNome)


function voltarPagina() {
    window.history.back()
}

function fecharPagina  (){
    window.close()
}
