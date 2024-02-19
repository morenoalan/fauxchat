const buttonPhoto = document.getElementById('screen-chat-footer-photo');
const buttonMic = document.getElementById('screen-chat-footer-mic');
const buttonSend = document.getElementById('screen-chat-footer-send');
const messageField = document.getElementById('screen-chat-footer-input-message-field');

messageField.addEventListener('input', function () {
    if(messageField.textContent != ""){
        buttonPhoto.classList.add("display-none");
        buttonMic.classList.add("display-none");
        buttonSend.classList.remove("display-none");
    }else{
        buttonPhoto.classList.remove("display-none");
        buttonMic.classList.remove("display-none");
        buttonSend.classList.add("display-none");
    }
});
/*
const svgUrl = '/medias/icons/done_all_FILL0_wght500_GRAD0_opsz48.svg'; // Substitua pelo caminho real do seu arquivo SVG
/*
// Referência ao elemento SVG no DOM
const svgElement = document.getElementById('svg-done-all'); // Substitua pelo ID real do seu elemento SVG

// Mudar o atributo fill
//svgElement.setAttribute('fill', 'gray');
svgUrl.style.filter = 'invert(0.5)';
*/
/*
// Selecionar o elemento <object> que contém o SVG
// Criar um novo elemento img
const svgElement = new Image();
// Definir o atributo src com o valor do svgUrl
svgElement.src = svgUrl;

document.body.appendChild(svgElement);
svgElement.onload = function() {
    svgElement.setAttribute('fill', 'gray');
};
*/
/*
// URL do seu arquivo SVG
const svgUrl = '/medias/icons/done_all_FILL0_wght500_GRAD0_opsz48.svg';

// Fetch do conteúdo do SVG
fetch(svgUrl)
    .then(response => response.text())
    .then(svgData => {
    // Criar um elemento div temporário para armazenar o SVG como HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = svgData;
    console.log(tempDiv.innerHTML);

    // Selecionar o elemento <path> dentro do SVG
    const pathElement = tempDiv.querySelector('path');
    console.log(pathElement);

    // Modificar a cor do preenchimento
    pathElement.style.fill = 'red';

    // Criar um novo elemento div para adicionar o SVG modificado
    const divComSvg = document.createElement('div');
        
    // Adicionar o SVG modificado ao novo elemento div
    divComSvg.appendChild(tempDiv.firstChild);

    // Adicionar o novo elemento div à sua página
    document.body.appendChild(divComSvg);
    })
    .catch(error => console.error('Erro ao carregar o SVG:', error));
*/

const iconDone = '/medias//icons/done_FILL0_wght500_GRAD0_opsz48.svg';
const iconDoneAll = '/medias/icons/done_all_FILL0_wght500_GRAD0_opsz48.svg';
const iconDoneAllBlue = '/medias/icons/done_all_blue_FILL0_wght500_GRAD0_opsz48.svg';
const iconSchedule = '/medias/icons/schedule_FILL0_wght400_GRAD0_opsz24.svg'

function changeBubbleDone(button) {

    let btBubbleDone = button.querySelector('img');
    
    let num = (parseInt(button.value) % 4) + 1;

    switch (num) {
        case 1:
            btBubbleDone.src = iconDoneAll;
            break;
        case 2:
            btBubbleDone.src = iconDoneAllBlue;
            break;
        case 3:
            btBubbleDone.src = iconSchedule;
            break;
        case 4:
            btBubbleDone.src = iconDone;
            break;
    }
    button.value = num;
}