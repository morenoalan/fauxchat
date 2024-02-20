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
