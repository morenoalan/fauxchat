// flip chat-header-edition
let msgsCounterTag = document.getElementById('screen-chat-header-edition-counter');
let msgsCounter = parseInt(msgsCounterTag.textContent);

function flipChatHeader(msgsCounter){

    const headerDisplay = document.getElementById('screen-chat-header-display');
    const headerEdition = document.getElementById('screen-chat-header-edition');
    const buttonMsgEdit = document.getElementById('button-msg-edit');

    msgsCounterTag.textContent = msgsCounter;

    if(msgsCounter === 0) {
        headerDisplay.classList.add('screen-chat-headers');
        headerDisplay.classList.remove('display-none');
        headerEdition.classList.add('display-none');
        headerEdition.classList.remove('screen-chat-headers');
        maskedBubblesList = [];
    }else{
        headerDisplay.classList.add('display-none');
        headerDisplay.classList.remove('screen-chat-headers');
        headerEdition.classList.add('screen-chat-headers');
        headerEdition.classList.remove('display-none');
    }

    if(msgsCounter === 1) {
        buttonMsgEdit.classList.add('button-chat-edition');
        buttonMsgEdit.classList.remove('display-none');
    }else{
        buttonMsgEdit.classList.add('display-none');
        buttonMsgEdit.classList.remove('button-chat-edition');
    }
}

//chat-main
let bubblesIdCount = 0;

//chat-header-edition changing side of Msgs
function cleanSelection() {
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

function bubbleDelete() {
    maskedBubblesList.forEach(function (id) {
        let bubbleToDelete = document.getElementById(id);
        if (bubbleToDelete) {
            bubbleToDelete.remove();
            msgsCounter--;
        }
    });
    flipChatHeader(msgsCounter);
}

function bubbleLeft() {
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

function bubbleCenter() {
    maskedBubblesList.forEach(function (id) {
        let bubbleToCenter = document.getElementById(id);
        if (bubbleToCenter) {
            let msgBubble = bubbleToCenter.getElementsByClassName('msg-bubble')[0];
            msgBubble.classList.add('msg-bubble-center');
            msgBubble.classList.remove('msg-bubble-left');
            msgBubble.classList.remove('msg-bubble-right');
        }
    });
}

function bubbleRight() {
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

function msgSelect(bubble) {
    let maskedBubble = bubble.parentNode.parentNode.getElementsByClassName('msg-selector')[0];
    maskedBubble.classList.add('mask-selection');
    maskedBubble.classList.remove('display-none');
    msgsCounter++;  
    flipChatHeader(msgsCounter);
    
    maskedBubblesList.push(maskedBubble.parentNode.id);

}

function msgDeselect(msgSelector) {
    msgSelector.classList.add('display-none');
    msgSelector.classList.remove('mask-selection');
    msgsCounter--;
    flipChatHeader(msgsCounter);

    let indexMaskedBubblesList = maskedBubblesList.indexOf(msgSelector.parentNode.id);
    if (indexMaskedBubblesList !== -1) {
        maskedBubblesList.splice(indexMaskedBubblesList, 1);
    }

}

// chat-main msg ticks
const iconDone = '/medias//icons/done_FILL0_wght500_GRAD0_opsz48.svg';
const iconDoneAll = '/medias/icons/done_all_FILL0_wght500_GRAD0_opsz48.svg';
const iconDoneAllBlue = '/medias/icons/done_all_blue_FILL0_wght500_GRAD0_opsz48.svg';
const iconSchedule = '/medias/icons/schedule_FILL0_wght400_GRAD0_opsz24.svg'

function changeTicks(button) {

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

// chat-footer
const buttonPhoto = document.getElementById('screen-chat-footer-photo');
const buttonMic = document.getElementById('screen-chat-footer-mic');
const buttonSend = document.getElementById('screen-chat-footer-send');
const msgField = document.getElementById('screen-chat-footer-input-msg-field');

msgField.addEventListener('input', function () {
    if(msgField.textContent != ""){
        buttonPhoto.classList.add("display-none");
        buttonMic.classList.add("display-none");
        buttonSend.classList.remove("display-none");
    }else{
        buttonPhoto.classList.remove("display-none");
        buttonMic.classList.remove("display-none");
        buttonSend.classList.add("display-none");
    }
});