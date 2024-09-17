// localStorage


// screenshot region
/*meed access to API html2canvas*/
function captureDivScreenshot(divId) {
    let div = document.getElementById(divId);
    html2canvas(div).then(canvas => {
        let img = canvas.toDataURL('image/jpeg', 0.9);
        let link = document.createElement('a');
        link.href = img;
        link.download = 'screenshot.jpg';
        link.click();
    });
}

// navigation
function goToScreen(nextScreen) {
    document.querySelectorAll('#app-screens section').forEach(section => {
        section.classList.remove('display-active');
        section.classList.add('display-none');
    });
    document.getElementById(nextScreen).classList.remove('display-none');
    document.getElementById(nextScreen).classList.add('display-active');
}

// loading chat variables
let chatProfiles = [];


// flip chat-header-edition
let msgsCounterTag = document.getElementById('screen-chat-header-edition-counter');
let msgsCounter = parseInt(msgsCounterTag.textContent);

function flipChatHeader(msgsCounter) {

    const headerDisplay = document.getElementById('screen-chat-header-display');
    const headerEdition = document.getElementById('screen-chat-header-edition');
    const buttonMsgEdit = document.getElementById('button-msg-edit');

    msgsCounterTag.textContent = msgsCounter;

    if(msgsCounter === 0) {
        headerDisplay.classList.add('screen-general-header-display');
        headerDisplay.classList.remove('display-none');
        headerEdition.classList.add('display-none');
        headerEdition.classList.remove('screen-general-header-display');
        maskedBubblesList = [];

        if(bubbleEditActivated == true) {
            closeBubbleEdit();
        }
    }else{
        headerDisplay.classList.add('display-none');
        headerDisplay.classList.remove('screen-general-header-display');
        headerEdition.classList.add('screen-general-header-display');
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

// chat-main msg ticks
const tickIcons = [
    {
        'value': '1',
        'icon': './medias/icons/schedule_FILL0_wght400_GRAD0_opsz24.svg'
    },
    {
        'value': '2',
        'icon': './medias/icons/done_FILL0_wght500_GRAD0_opsz48.svg'
    },
    {
        'value': '3',
        'icon': './medias/icons/done_all_FILL0_wght500_GRAD0_opsz48.svg'
    },
    {
        'value': '4',
        'icon': './medias/icons/done_all_blue_FILL0_wght500_GRAD0_opsz48.svg'
    }
];

let tickCounter = 1;

function changeTime(button) {
    console.log(button.textContent);

    let timeChanger = '';
    //chatMain.appendChild(timeBubble);
}

function changeTick(button) {
    tickCounter = (parseInt(button.value) % 4) + 1;
    let btBubbleDone = button.querySelector('img');
    let pickIcon = tickIcons.find(item => item.value == tickCounter);
    btBubbleDone.src = pickIcon.icon;
    button.value = tickCounter;
}

// chat-list
function chatListButton(number0, img0, name0, msg0, time0, status0, unread0) {

    let number = number0;
    let img = img0;
    let name = name0;
    let time = time0;
    let status = status0;
    let statusIcon = tickIcons.find(item => item.value == status).icon;
    let tickDisplayNone = '';
    let lastMsg = msg0;
    const pin = './medias/icons/keep_24dp_000000_FILL1_wght400_GRAD0_opsz24.svg';
    let pinDisplayNone = 'display-none';
    let unread = unread0;

    let unreadDisplayNone = '';

    if(unread == '0' ) {
        unreadDisplayNone = 'display-none';
        timeUnread = 'screen-list-main-chatlink-time-read';
    }else{
        unreadDisplayNone = '';
        timeUnread = 'screen-list-main-chatlink-time-unread';
    }

    let buttonDefault = `\<button class='screen-list-main-chatlink screen-list-main-chatlink-rowalign' name='${number}' onclick='openChat(this.name);'\>\<img class='screen-list-main-chatlink-img' src='${img}'\/\>\<div class='screen-list-main-chatlink-columnalign'\>\<div class='screen-list-main-chatlink-rowalign'\>\<div class='screen-list-main-chatlink-container'\>\<p class='screen-list-main-chatlink-contact'\>${name}\<\/p\>\<\/div\>\<p class='screen-list-main-chatlink-time ${timeUnread}'\>${time}\<\/p\>\<\/div\>\<div class='screen-list-main-chatlink-rowalign'\>\<div class='screen-list-main-chatlink-status msg-bubble-tick ${tickDisplayNone}'\>\<img src='${statusIcon}'\/\>\<\/div\>\<div class='screen-list-main-chatlink-container'\>\<p class='screen-list-main-chatlink-msg'\>${lastMsg}\<\/p\>\<\/div\>\<div class='${pinDisplayNone}'\>\<img class='screen-list-main-chatlink-pin msg-bubble-tick' src='${pin}'\/\>\<\/div\>\<div class='${unreadDisplayNone}'\>\<p class='screen-list-main-chatlink-counter'\>${unread}\<\/p\>\<\/div\>\<\/div\>\<\/div\>\<\/button\>`

    let newButton = document.createElement('li');
    newButton.id = 'chat-'+number;
    newButton.innerHTML = buttonDefault;

    let chatList = document.getElementById('screen-list-main');
    chatList.appendChild(newButton);
}

function chatsList() {
    chats.forEach(function(element) {
        let person = people.find(item => item.phone == element.phone);
        let contactName = '';
        if(person.nickname != "") {
            contactName = person.nickname;
        }else{
            contactName = person.name+" "+person.surname;
        }

        let countStatus3 = 0;
        element.msgs.forEach(msg => {
            if (msg.status === "3" &&
                msg.author !== "00_me" &&
                msg.author !== "00_info") {
                countStatus3++;
            }
        });

        let lastMsg = element.msgs[element.msgs.length - 1];

        let msg = lastMsg.msg;
        let time = lastMsg.time;
        let status = lastMsg.status;

        console.log(person.phone+"; "+person.photo+"; "+contactName+"; "+msg+"; "+time+"; "+status+"; "+countStatus3);

        chatListButton(person.phone, person.photo, contactName, msg, time, status, countStatus3);
    });
}
chatsList();

// contact-list
function contactListButton(img0, name0, number0, bio0) {
    let img = img0;
    let name = name0;
    let number = number0;
    let bio = bio0;

    let buttonDefault = `
    \<button class='screen-list-main-chatlink screen-list-main-chatlink-rowalign' name='${number}' onclick='openChat(this.name);'\>
        \<img class='screen-list-main-chatlink-img' src='${img}'\/\>
        \<div class='screen-list-main-chatlink-columnalign'\>
            \<div class='screen-list-main-chatlink-rowalign'\>
                \<p class='screen-list-main-chatlink-contact'\>${name}\<\/p\>
                \<div\>\<\/div\>
            \<\/div\>
            \<div class='screen-list-main-chatlink-rowalign'\>
                \<p class='screen-list-main-chatlink-msg'\>${bio}\<\/p\>
                \<div\>\<\/div\>
            \<\/div\>
        \<\/div\>
    \<\/button\>`

    let newButton = document.createElement('li');
    newButton.innerHTML = buttonDefault;

    let contactList = document.getElementById('screen-contact-main');
    contactList.appendChild(newButton);
}

function contactList() {
    people.forEach(function(element) {
        let contactName = '';
        if(element.nickname != ""){
            contactName = element.nickname;
        }else{
            contactName = element.name+" "+element.surname;
        }
        contactListButton(element.photo, contactName, element.phone, element.bio);
    });
}
contactList();

// chat-main
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
    // To update: button screen-chat-header-figure-back
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

function loadChat(person0) {
    console.log(person0);
    let person = chats.find(item => item.phone == person0.phone);
    console.log(person.msgs);
    person.msgs.forEach(msg => {
        msgField.innerHTML = msg.msg;
        switch(msg.author){
        case '00_me':
            sendToMe();
            break;
        case '00_info':
            sendToInfo();
            break;
        default:          
            sendToPeople(person);
            break;
        }
    });
}

function openChat(element) {
    goToScreen('screen-chat');
    let chatMain = document.getElementById('screen-chat-main');
    chatMain.innerHTML = '';

    let person = people.find(item => item.phone == element);
    let imgChat = document.getElementById('img-chat');
    let imgChatEdit = document.getElementById('img-chat-edit');
    let imgChatFooter = document.getElementById('img-chat-footer');
    imgChat.src = person.photo;
    imgChatEdit.src = person.photo;
    imgChatFooter.src = person.photo;
    let nameChat = document.getElementById('chat-name');
    if(person.nickname != ""){
        nameChat.textContent = person.nickname;
    }else{
        nameChat.textContent = person.name+" "+person.surname;
    }

    loadChat(person);
}

// chat-header-edition changing side of msgs
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

// chat-main msg selection
let maskedBubblesList = [];

function msgSelect(bubble) {
    let maskedBubble = bubble.parentNode.parentNode.getElementsByClassName('msg-selector')[0];
    maskedBubble.classList.add('mask-selection');
    maskedBubble.classList.remove('display-none');
    msgsCounter++;  
    flipChatHeader(msgsCounter);
    console.log(msgsCounter);
    
    maskedBubblesList.push(maskedBubble.parentNode.id);
    console.log(maskedBubblesList);

}

function msgDeselect(msgSelector) {
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

// chat-footer
const buttonPhoto = document.getElementById('screen-chat-footer-photo');
const buttonMic = document.getElementById('screen-chat-footer-mic');
const buttonSend = document.getElementById('screen-chat-footer-send');
const panelSend = document.getElementById('screen-chat-footer-send-panel');
const msgField = document.getElementById('screen-chat-footer-input-msg-field');
const chatMain = document.getElementById('screen-chat-main');

function messageFieldWriting() {
    buttonPhoto.classList.add("display-none");
    buttonMic.classList.add("display-none");
    buttonSend.classList.remove("display-none");
}

function messageFieldClean() {
    buttonPhoto.classList.remove("display-none");
    buttonMic.classList.remove("display-none");
    buttonSend.classList.add("display-none");
}

msgField.addEventListener('input', function () {
    if(msgField.textContent != "") {
        messageFieldWriting();
    }else{
        messageFieldClean();
        collapseSendPanel();
    }
});

// chat-send
function sendMessage() {
    if(bubbleEditActivated == true) {
        sendBubbleEdited();
    }else{
        panelSend.classList.add('chat-send-panel');
        panelSend.classList.remove('display-none');
    }
}

function collapseSendPanel() {
    panelSend.classList.add('display-none');
    panelSend.classList.remove('chat-send-panel');
    messageFieldClean();
}

function cleanMsgField() {
    msgField.textContent = '';
}

let whatTimeIsIt = '00:00';

/*
function currentTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    whatTimeIsIt = hours + ':' + minutes;

    function getMessageTimeInfo() {
        const date = new Date();
        
        // Get date and time in format: YYYY-MM-DD HH:MM:SS
        const dateString = date.toISOString().slice(0, 19).replace("T", " ");
    
        // Time zone difference in minutes and convert to hours
        const timeZoneOffset = -date.getTimezoneOffset() / 60;
    
        // Format the time zone with the sign (+ or -) and always with two digits
        const timeZone = (timeZoneOffset >= 0 ? "+" : "-") + Math.abs(timeZoneOffset).toString().padStart(2, '0') + ":00";
    
        return {
            dateTime: dateString,
            timeZone: timeZone
        };
    }

    const messageTimeInfo = getMessageTimeInfo();
    console.log(`${messageTimeInfo.dateTime} UTC${messageTimeInfo.timeZone}; Local Time: ${whatTimeIsIt}`);
}
*/

function currentTime() {
    function getMessageTimeInfo() {
        const date = new Date();
        
        // Get date and time in format: YYYY-MM-DD HH:MM:SS
        const dateString = date.toISOString().slice(0, 19).replace("T", " ");
    
        // Time zone difference in minutes and convert to hours
        const timeZoneOffset = -date.getTimezoneOffset() / 60;
    
        // Format the time zone with the sign (+ or -) and always with two digits
        const timeZone = (timeZoneOffset >= 0 ? "+" : "-") + Math.abs(timeZoneOffset).toString().padStart(2, '0') + ":00";
    
        // Calculating local time by adding time zone offset to UTC time
        console.log("getTime: " + timeZoneOffset + "; " + timeZoneOffset * 60 * 60 * 1000);
        const localDate = new Date(date.getTime() + timeZoneOffset * 60 * 60 * 1000);
        let localHours = localDate.getHours().toString().padStart(2, '0');
        let localMinutes = localDate.getMinutes().toString().padStart(2, '0');
        whatTimeIsIt = localHours + ':' + localMinutes;
    
        return {
            dateTime: dateString,
            timeZone: timeZone
        };
    }

    const messageTimeInfo = getMessageTimeInfo();
    console.log(`${messageTimeInfo.dateTime} UTC${messageTimeInfo.timeZone}; Local Time: ${whatTimeIsIt}`);
}

function postMsg(prop){
    let msg = msgField.innerHTML.replace(/\<div\>/g, '<br>').replace(/\<\/div\>/g, '');

    cleanMsgField();
    collapseSendPanel();

    bubblesIdCount++;

    currentTime();

    let pickIcon = tickIcons.find(item => item.value == tickCounter);

    let msgDefault = `\<button onclick='msgDeselect(this);' class='msg-selector display-none'\>\<\/button\><div class='msg-bubble ${prop}'\>${msg}\<button onmousedown='msgSelect(this);' class='button-select'\>\<\/button\>\<div class='msg-bubble-metadata'\>\<button onclick='changeTime(this);' class='msg-bubble-time'\>${whatTimeIsIt}\<\/button\>\<button onclick='changeTick(this);' value='${tickCounter}' class='msg-bubble-tick'\>\<img src='${pickIcon.icon}'\/\>\<\/button\>\<\/div\>\<\/div\>`;

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
function clickObject(input) {
    document.getElementById(input).click();
}

function loadNewPhoto(input, img) {
    let preview = document.getElementById(img);
    let file = input.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        preview.src = e.target.result;
        adaptImage(preview.src, preview);
    };

    if(file){
        reader.readAsDataURL(file);
    }

}

function adaptImage(dataURL, img) {

    let imgLoaded = new Image();
    let ratioImage;

    imgLoaded.onload = function () {
        let imageWidth = imgLoaded.width;
        let imageHeight = imgLoaded.height;
        ratioImage = imageWidth / imageHeight;
        
        if(ratioImage < 1) {
            img.style.width = '100%';
            img.style.height = 'auto';
        }else{
            img.style.width = 'auto';
            img.style.height = '100%';
        }
    };
    imgLoaded.src = dataURL;
}

// drag scrolling
document.addEventListener('DOMContentLoaded', () => {
    const scrollableDivs = document.querySelectorAll('.scrollable');
    
    scrollableDivs.forEach(scrollableDiv => {
        let isDown = false;
        let startY;
        let scrollTop;
    
        scrollableDiv.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollableDiv.classList.add('active');
            startY = e.pageY - scrollableDiv.offsetTop;
            scrollTop = scrollableDiv.scrollTop;
        });
    
        scrollableDiv.addEventListener('mouseleave', () => {
            isDown = false;
            scrollableDiv.classList.remove('active');
        });
    
        scrollableDiv.addEventListener('mouseup', () => {
            isDown = false;
            scrollableDiv.classList.remove('active');
        });
    
        scrollableDiv.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - scrollableDiv.offsetTop;
            const walk = (y - startY) * 3; // Scroll speed
            scrollableDiv.scrollTop = scrollTop - walk;
        });
    
        // Mobile touch
        scrollableDiv.addEventListener('touchstart', (e) => {
            isDown = true;
            startY = e.touches[0].pageY - scrollableDiv.offsetTop;
            scrollTop = scrollableDiv.scrollTop;
        });
    
        scrollableDiv.addEventListener('touchend', () => {
            isDown = false;
        });
    
        scrollableDiv.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.touches[0].pageY - scrollableDiv.offsetTop;
            const walk = (y - startY) * 3; // Scroll speed
            scrollableDiv.scrollTop = scrollTop - walk;
        });
    });
});
