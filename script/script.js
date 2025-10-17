const botao = document.getElementsByClassName('botao')[0];
const mainlinks = document.getElementsByClassName('mainlinks')[0];


botao.addEventListener('click', () => {
    mainlinks.classList.toggle ("active");
}