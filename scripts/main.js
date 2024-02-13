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