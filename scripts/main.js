// localStorage

//Screenshot Region

// navigation
function goToScreen(nextScreen) {
    const appScreens = document.getElementById('app-screens').getElementsByTagName('section');

    const openScreen = document.getElementById(nextScreen);
    let counter;
    for(counter = 0; counter < appScreens.length; counter++) {
        appScreens[counter].classList.remove('display-active');
        appScreens[counter].classList.add('display-none');
    }
    openScreen.classList.remove('display-none');
    openScreen.classList.add('display-active');
}

// loading chat variables
let chatProfiles = [];


// flip chat-header-edition
let msgsCounterTag = document.getElementById('screen-chat-header-edition-counter');
let msgsCounter = parseInt(msgsCounterTag.textContent);

function flipChatHeader(msgsCounter){

    const headerDisplay = document.getElementById('screen-chat-header-display');
    const headerEdition = document.getElementById('screen-chat-header-edition');
    const buttonMsgEdit = document.getElementById('button-msg-edit');

    msgsCounterTag.textContent = msgsCounter;

    if(msgsCounter === 0){
        headerDisplay.classList.add('screen-chat-header-display');
        headerDisplay.classList.remove('display-none');
        headerEdition.classList.add('display-none');
        headerEdition.classList.remove('screen-chat-header-display');
        maskedBubblesList = [];

        if(bubbleEditActivated == true){
            closeBubbleEdit();
        }
    }else{
        headerDisplay.classList.add('display-none');
        headerDisplay.classList.remove('screen-chat-header-display');
        headerEdition.classList.add('screen-chat-header-display');
        headerEdition.classList.remove('display-none');
    }

    if(msgsCounter === 1){
        buttonMsgEdit.classList.add('button-chat-edition');
        buttonMsgEdit.classList.remove('display-none');
    }else{
        buttonMsgEdit.classList.add('display-none');
        buttonMsgEdit.classList.remove('button-chat-edition');
    }
}

//chat-list

function newChat(){
    console.log('open new chat');
}

//chat-main
let bubblesIdCount = 0;
let bubbleEditActivated = false;

function bubbleEdit(){
    bubbleEditActivated = true;

    let bubbleEditText = document.getElementById(maskedBubblesList[0]).getElementsByClassName('msg-bubble')[0];
    let bubbleEditTextClone = bubbleEditText.cloneNode(true);
    bubbleEditTextClone.getElementsByClassName('msg-bubble-time')[0].remove();
    document.getElementById('screen-chat-footer-input-msg-field').textContent = bubbleEditTextClone.textContent;

    messageFieldWriting();
}

function closeBubbleEdit(){
    cleanMsgField();
    cleanSelection();
}

function sendBubbleEdited(){
    bubbleEditActivated = false;

    let msg = msgField.innerHTML.replace(/\<div\>/g, '<br>').replace(/\<\/div\>/g, '');

    let bubbleEditText = document.getElementById(maskedBubblesList[0]).getElementsByClassName('msg-bubble')[0];
    
    whatTimeIsIt = bubbleEditText.getElementsByClassName('msg-bubble-time')[0].textContent;

    let pickIcon = tickIcons.find(item => item.value == tickCounter);

    let msgDefault = `${msg}\<button onmousedown='msgSelect(this);' class='button-select'\>\<\/button\>\<div class='msg-bubble-metadata'\>\<p class='msg-bubble-time'\>Editada ${whatTimeIsIt}\<\/p\>\<button onclick='changeTick(this);' value='${tickCounter}' class='msg-bubble-tick'\>\<img src='${pickIcon.icon}'\/\>\<\/button\>\<\/div\>\<\/div\>`;

    bubbleEditText.innerHTML = msgDefault;

    closeBubbleEdit();
}

//chat-header-edition changing side of Msgs
function cleanSelection(){
    maskedBubblesList.forEach(function (id) {
        let bubbleToClean = document.getElementById(id).getElementsByClassName('msg-selector')[0];
        if (bubbleToClean) {
            bubbleToClean.classList.add('display-none');
            bubbleToClean.classList.remove('mask-selection');
            msgsCounter--;
        }
    });
    flipChatHeader(msgsCounter);
}

function bubbleDelete(){
    maskedBubblesList.forEach(function (id) {
        let bubbleToDelete = document.getElementById(id);
        if (bubbleToDelete) {
            bubbleToDelete.remove();
            msgsCounter--;
        }
    });
    flipChatHeader(msgsCounter);
}

function bubbleLeft(){
    maskedBubblesList.forEach(function (id) {
        let bubbleToLeft = document.getElementById(id);
        if (bubbleToLeft) {
            let msgBubble = bubbleToLeft.getElementsByClassName('msg-bubble')[0];
            msgBubble.classList.add('msg-bubble-left');
            msgBubble.classList.remove('msg-bubble-center');
            msgBubble.classList.remove('msg-bubble-right');
        }
    });
}

function bubbleCenter(){
    maskedBubblesList.forEach(function (id) {
        let bubbleToCenter = document.getElementById(id);
        if (bubbleToCenter) {
            let msgBubble = bubbleToCenter.getElementsByClassName('msg-bubble')[0];
            msgBubble.classList.add('msg-bubble-center');
            msgBubble.classList.remove('msg-bubble-left');
            msgBubble.classList.remove('msg-bubble-right');
        }
        /*
        let msgSelector = bubbleToCenter.getElementsByClassName('msg-selector')[0];
        msgDeselect(msgSelector);
        console.log(id, msgSelector);
        */
    });
}

function bubbleRight(){
    maskedBubblesList.forEach(function (id) {
        let bubbleToRight = document.getElementById(id);
        if (bubbleToRight) {
            let msgBubble = bubbleToRight.getElementsByClassName('msg-bubble')[0];
            msgBubble.classList.add('msg-bubble-right');
            msgBubble.classList.remove('msg-bubble-center');
            msgBubble.classList.remove('msg-bubble-left');
        }
    });
}

// chat-main msg Selection
let maskedBubblesList = [];

function msgSelect(bubble){
    let maskedBubble = bubble.parentNode.parentNode.getElementsByClassName('msg-selector')[0];
    maskedBubble.classList.add('mask-selection');
    maskedBubble.classList.remove('display-none');
    msgsCounter++;  
    flipChatHeader(msgsCounter);
    console.log(msgsCounter);
    
    maskedBubblesList.push(maskedBubble.parentNode.id);
    console.log(maskedBubblesList);

}

function msgDeselect(msgSelector){
    msgSelector.classList.add('display-none');
    msgSelector.classList.remove('mask-selection');
    msgsCounter--;
    flipChatHeader(msgsCounter);
    console.log(msgsCounter);

    let indexMaskedBubblesList = maskedBubblesList.indexOf(msgSelector.parentNode.id);
    if (indexMaskedBubblesList !== -1){
        maskedBubblesList.splice(indexMaskedBubblesList, 1);
    }
    console.log(maskedBubblesList);
}

// chat-main msg ticks
const tickIcons = [
    {
        'value': '1',
        'icon': '/medias/icons/done_all_FILL0_wght500_GRAD0_opsz48.svg'
    },
    {
        'value': '2',
        'icon': '/medias/icons/done_all_blue_FILL0_wght500_GRAD0_opsz48.svg'
    },
    {
        'value': '3',
        'icon': '/medias/icons/schedule_FILL0_wght400_GRAD0_opsz24.svg'
    },
    {
        'value': '4',
        'icon': '/medias//icons/done_FILL0_wght500_GRAD0_opsz48.svg'
    }
];

let tickCounter = 1;

function changeTick(button){
    tickCounter = (parseInt(button.value) % 4) + 1;
    let btBubbleDone = button.querySelector('img');
    let pickIcon = tickIcons.find(item => item.value == tickCounter);
    btBubbleDone.src = pickIcon.icon;
    button.value = tickCounter;
}

// chat-footer
const buttonPhoto = document.getElementById('screen-chat-footer-photo');
const buttonMic = document.getElementById('screen-chat-footer-mic');
const buttonSend = document.getElementById('screen-chat-footer-send');
const panelSend = document.getElementById('screen-chat-footer-send-panel');
const msgField = document.getElementById('screen-chat-footer-input-msg-field');
const chatMain = document.getElementById('screen-chat-main');

function messageFieldWriting(){
    buttonPhoto.classList.add("display-none");
    buttonMic.classList.add("display-none");
    buttonSend.classList.remove("display-none");
}

function messageFieldClean(){
    buttonPhoto.classList.remove("display-none");
    buttonMic.classList.remove("display-none");
    buttonSend.classList.add("display-none");
}

msgField.addEventListener('input', function () {
    if(msgField.textContent != ""){
        messageFieldWriting();
    }else{
        messageFieldClean();
        collapseSendPanel();
    }
});

//chat-send
function sendMessage(){
    if(bubbleEditActivated == true){
        sendBubbleEdited();
    }else{
        panelSend.classList.add('chat-send-panel');
        panelSend.classList.remove('display-none');
    }
}

function collapseSendPanel(){
    panelSend.classList.add('display-none');
    panelSend.classList.remove('chat-send-panel');
    messageFieldClean();
}

function cleanMsgField(){
    msgField.textContent = '';
}

let whatTimeIsIt = '00:00';
function currentTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    whatTimeIsIt = hours + ':' + minutes;
}

function postMsg(prop){
    let msg = msgField.innerHTML.replace(/\<div\>/g, '<br>').replace(/\<\/div\>/g, '');

    cleanMsgField();
    collapseSendPanel();

    bubblesIdCount++;

    currentTime();

    let pickIcon = tickIcons.find(item => item.value == tickCounter);

    let msgDefault = `\<button onclick='msgDeselect(this);' class='msg-selector display-none'\>\<\/button\><div class='msg-bubble ${prop}'\>${msg}\<button onmousedown='msgSelect(this);' class='button-select'\>\<\/button\>\<div class='msg-bubble-metadata'\>\<p class='msg-bubble-time'\>${whatTimeIsIt}\<\/p\>\<button onclick='changeTick(this);' value='${tickCounter}' class='msg-bubble-tick'\>\<img src='${pickIcon.icon}'\/\>\<\/button\>\<\/div\>\<\/div\>`;

    let newMsg = document.createElement('div');
    newMsg.id = 'chat-msg-'+bubblesIdCount;
    newMsg.setAttribute('class','msg-container');
    newMsg.innerHTML = msgDefault;

    chatMain.appendChild(newMsg);
}

function sendToMe(){
    postMsg('msg-bubble-right');
}

function sendToInfo(){
    postMsg('msg-bubble-center');
}

function sendToPeople(people){
    postMsg('msg-bubble-left');
}

// screen-profile
function clickObject(input){
    document.getElementById(input).click();
}

function loadNewPhoto(input, img){
    let preview = document.getElementById(img);
    let file = input.files[0];
    let reader = new FileReader();

    reader.onload = function(e){
        preview.src = e.target.result;
        adaptImage(preview.src, preview);
    };

    if(file){
        reader.readAsDataURL(file);
    }

}

function adaptImage(dataURL, img){

    let imgLoaded = new Image();
    let ratioImage;

    imgLoaded.onload = function (){
        let imageWidth = imgLoaded.width;
        let imageHeight = imgLoaded.height;
        ratioImage = imageWidth / imageHeight;
        
        if(ratioImage < 1){
            img.style.width = '100%';
            img.style.height = 'auto';
        }else{
            img.style.width = 'auto';
            img.style.height = '100%';
        }
    };
    imgLoaded.src = dataURL;
}

console.log(people[0].phone);
