/* Lógica de Programação 
    [X] Saber quando o usuário clicou no botão
    [X] Mudar o posicionamento do modal
    [X] Fazer a máscara ficar visível
    [X] Quando clicar na máscara, fechar o modal
*/

const modal = document.querySelector(".modal");
const mascaraModal = document.querySelector(".mascara-modal");

function mostrarModal(){
    modal.style.left = '50%'
    mascaraModal.style.visibility = 'visible'
};

function esconderModal(){
    modal.style.left = '-50%'
    mascaraModal.style.visibility = 'hidden'
}

/* Lógica de Programação para o menu mobile 
    [X] Saber quando o usuário clicou no botão
    [X] Abrir o menu mobile
    [X] Fazer a máscara ficar visível
    [X] Quando clicar no botão x, fechar o menu mobile
*/

const menuMobile = document.querySelector(".menu-mobile");
const mascaraMobile = document.querySelector(".mascara-mobile");


function mostrarMenuMobile() {
    menuMobile.style.width = '40%'
    mascaraMobile.style.visibility = 'visible'
}

function fecharMenuMobile() {
    menuMobile.style.width = '0'
    mascaraMobile.style.visibility = 'hidden'
} 