// const modal = document.querySelector('.teste');
// // Busca os elementos com a ID modal-btn no DOM
// const modalBtn = document.querySelector('#modal-cadastrar');
// // Busca os elementos com a classe .close no DOM
// const closeBtn = document.querySelector('.fechar');

// modalBtn.addEventListener('click', () => (modal.style.visibility = 'visible'));
// closeBtn.addEventListener('click', () => (modal.style.visibility = 'hidden'));

function abrir(){
    const modal = document.querySelector(".modal");
    const janela = document.querySelector(".janela_escura");

    modal.style.visibility = "visible"; 
    janela.style.visibility = "visible";
    
}

function fechar(){
    const modal = document.querySelector(".modal");
    const janela = document.querySelector(".janela_escura");

    modal.style.visibility = ""; 
    janela.style.visibility = "";
    
}