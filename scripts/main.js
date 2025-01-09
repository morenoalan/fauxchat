// manifest
const manifest = {
    name: 'FauxChat',
    description: 'Fake chat for social media jokes.',
    url: 'https://fauxchat.com',
    version: '0.0.0',
    author: {
        name: 'Alan Moreno',
        url: 'https://links.alanmoreno.com'
    },
    license: {
        type: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
    }
}

// global variables
let myPhone = '5500999990000';
let globalTime = '';
let localTime = '00:00';
const backgroundStandard = '/medias/backgrounds/spaceman_light.jpg';

// global functions
document.getElementById('copyleft-year').innerHTML = new Date().getUTCFullYear();

function focusOn(element) {
    document.getElementById(element).focus();
}

function toggleButton(element) {

    const srcToggleOff = './medias/icons/toggle_off_24dp_000000_FILL0_wght100_GRAD0_opsz24.svg';
    const srcToggleOn = './medias/icons/toggle_on_24dp_3CB371_FILL1_wght100_GRAD0_opsz24.svg';

    let toggleImg = element.getElementsByTagName('img')[0];
    if (toggleImg.getAttribute('src') == srcToggleOff) {
        toggleImg.setAttribute('src', srcToggleOn);
        toggleImg.classList.toggle('svg-color-gray');
    } else {
        toggleImg.setAttribute('src', srcToggleOff);
        toggleImg.classList.toggle('svg-color-gray');
    }
}

function loadImageTest(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;

        img.onload = function () {
            resolve(src);
        }
        img.onerror = function () {
            resolve(backgroundStandard);
        }
    });
}

function setName(person) {
    let personNickname = person.nickname.replace(/\s+/g, ' ').trim();
    let personName = person.name.replace(/\s+/g, ' ').trim();
    let personSurname = person.surname.replace(/\s+/g, ' ').trim();
    let personPhone = person.phone.replace(/\s+/g, ' ').trim();

    if(personNickname != "") {
        contactName = personNickname;
    }else if(personName != "" || personSurname != "") {
        contactName = personName + " " + personSurname;
    }else{
        contactName = personPhone;
    }
    contactName = contactName.replace(/\s+/g, ' ').trim();
    return contactName;
}

function cleanContainer(containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = '';
}

function addElement(containerId, element) {
    let container = document.getElementById(containerId);
    container.appendChild(element);
}

function detachOne(elementKey, key, array) {
    let theOne = array.find(item => item[key] == elementKey);
    let elementIndex = array.findIndex(item => item[key] == elementKey);
    let newArray = array.map(item => item);
    if (theOne !== -1) {
        newArray.splice(elementIndex, 1);
    }
    return [theOne, newArray];
}

// localStorage
function setToLocalStorage(order){
    order.forEach(item => {
        //console.log(item);
        localStorage.setItem(item, JSON.stringify(eval(item)));
        /*
        switch (item) {
            case 'chats':
                localStorage.setItem('storageChats', JSON.stringify(chats));
                break;
            case 'people':
                localStorage.setItem('storagePeople', JSON.stringify(people));
                break;
            case 'manifest':
                localStorage.setItem('storageManifest', JSON.stringify(manifest));
                break;
            default:
                console.log('saveToLocalStorage failed');
                break;
        }*/
    });
}

setToLocalStorage(['manifest']);

window.addEventListener('beforeunload', function(){
    setToLocalStorage(['chats', 'people']);
});

function getFromLocalStorage(order){
    order.forEach(item => {
        if(localStorage.getItem(item) != 'null') {
            item = JSON.parse(localStorage.getItem(item));
            //console.log(item);
        }
    });
}

getFromLocalStorage(['chats', 'people']);

/*
if(localStorage.getItem('storageChats') != 'null') {
    chats = JSON.parse(localStorage.getItem('storageChats'));
}
if(localStorage.getItem('storagePeople') != 'null') {
    people = JSON.parse(localStorage.getItem('storagePeople'));
}
*/

setInterval(function(){
    setToLocalStorage(['chats']);
}, 60000);

setInterval(function(){
    setToLocalStorage(['people']);
}, 300000);

// screenshot region
/*need access to API html2canvas*/
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
const contactBackButton = document.getElementById('screen-contact-header-figure-back');
const newContactBackButton = document.getElementById('screen-new-contact-header-figure-back');
const newContactButton = document.getElementById('screen-contact-new-contact-button');

function goToScreen(nextScreen) {

    switch (nextScreen) {
    case 'screen-contact':
        contactList('msg');
        contactBackButton.setAttribute('onclick', 'goToScreen("screen-list");');
        newContactButton.setAttribute('onclick', 'goToScreen("screen-new-contact");');
        break;
    case 'screen-contact-calls':
        nextScreen = 'screen-contact';
        contactList('call');
        contactBackButton.setAttribute('onclick', 'goToScreen("screen-calls");');
        newContactButton.setAttribute('onclick', 'goToScreen("screen-new-contact-calls");');
        break;
    case 'screen-new-contact':
        newContactBackButton.setAttribute('onclick', 'goToScreen("screen-contact");');
        openScreenNewContact();
        break;
    case 'screen-new-contact-calls':
        nextScreen = 'screen-new-contact';
        newContactBackButton.setAttribute('onclick', 'goToScreen("screen-contact-calls");');
        openScreenNewContact();
        break;
    case 'screen-list':
        chatsList();
        break;
    case 'screen-updates':
        loadUpdatesStatuses();
        loadUpdatesChannels();
        break;
    default:
        break;
    }

    document.querySelectorAll('#app-screens section').forEach(section => {
        section.classList.remove('display-active');
        section.classList.add('display-none');
    });
    document.getElementById(nextScreen).classList.remove('display-none');
    document.getElementById(nextScreen).classList.add('display-active');
}

function callGallery(withCam) {
    switch (withCam) {
    case 'withCam':
        break;
    default:
        break;
    }
    document.getElementById('screen-glass').classList.remove('display-none');
    document.getElementById('screen-glass').classList.add('display-active');
    document.getElementById('screen-gallery').classList.remove('display-none');
    document.getElementById('screen-gallery').classList.add('display-active');
}

function closeGallery() {
    document.getElementById('screen-glass').classList.remove('display-active');
    document.getElementById('screen-glass').classList.add('display-none');
    document.getElementById('screen-gallery').classList.remove('display-active');
    document.getElementById('screen-gallery').classList.add('display-none');
}

function goAnotherStatus(target) {
    switch (target) {
    case 'previous':

        break;
    case 'next':

        break;
    default:
        break;
    }
}

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
    let time = globalToLocalTime(time0);
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

    let buttonDefault = `\<button class='screen-list-main-chatlink screen-list-main-chatlink-rowalign' onclick='openChat(${number});'\>\<img class='screen-list-main-chatlink-img' src='${img}'\/\>\<div class='screen-list-main-chatlink-columnalign'\>\<div class='screen-list-main-chatlink-rowalign'\>\<div class='screen-list-main-chatlink-container'\>\<p class='screen-list-main-chatlink-contact'\>${name}\<\/p\>\<\/div\>\<p class='screen-list-main-chatlink-time ${timeUnread}'\>${time}\<\/p\>\<\/div\>\<div class='screen-list-main-chatlink-rowalign'\>\<div class='screen-list-main-chatlink-status msg-bubble-tick ${tickDisplayNone}'\>\<img src='${statusIcon}'\/\>\<\/div\>\<div class='screen-list-main-chatlink-container'\>\<p class='screen-list-main-chatlink-msg'\>${lastMsg}\<\/p\>\<\/div\>\<div class='${pinDisplayNone}'\>\<img class='screen-list-main-chatlink-pin msg-bubble-tick' src='${pin}'\/\>\<\/div\>\<div class='${unreadDisplayNone}'\>\<p class='screen-list-main-chatlink-counter'\>${unread}\<\/p\>\<\/div\>\<\/div\>\<\/div\>\<\/button\>`

    let newButton = document.createElement('li');
    newButton.id = 'chat-'+number;
    newButton.innerHTML = buttonDefault;

    addElement('screen-list-main', newButton);
/*
    let chatList = document.getElementById('screen-list-main');
    chatList.appendChild(newButton);
    */
}

function chatsList() {
    cleanContainer('screen-list-main');

    chats.forEach(function(element) {
        let person = people.find(item => item.phone == element.phone);
        let contactName = setName(person);

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

        //console.log(person.phone+"; "+person.photo+"; "+contactName+"; "+msg+"; "+time+"; "+status+"; "+countStatus3);

        chatListButton(person.phone, person.photo, contactName, msg, time, status, countStatus3);
    });
}
chatsList();

// contact-list
function contactListButton(img0, name0, number0, bio0, action0) {
    let img = img0;
    let name = name0;
    let number = number0;
    let bio = bio0;
    let action = '';
    
    switch (action0) {
    case 'call':
        action = 'openCall';
        break;
    default:
        action = 'openChat';
        break;
    }

    let buttonDefault = `
    \<button class='screen-list-main-chatlink screen-list-main-chatlink-rowalign' onclick='${action}(${number});'\>
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

    let contactList = document.getElementById('screen-contact-main-list');
    contactList.appendChild(newButton);
}

function contactList(action) {
    const ul = document.getElementById('screen-contact-main-list');
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    let peopleNames = [];
    people.forEach(function(element) {
        let contactName = '';
        if(element.nickname != ""){
            contactName = element.nickname;
        }else{
            contactName = element.name+" "+element.surname;
        }
        element.contactName = contactName;
        peopleNames.push(element);
    })
    peopleNames.sort(function(a, b) {
        return a['contactName'].localeCompare(b['contactName']);
    });

    peopleNames.forEach(function(element) {
        contactListButton(element.photo, element.contactName, element.phone, element.bio, action);
    });
}

// handling chats data
function updateChatList() {
    console.log('update chat list');

}

function updateChatData(msgId0, time0, author0, msg0, status0) {
    let chat = chats.find(item => item.phone == personChat.phone);
    chat.msgs.push({msgId: msgId0.toString(), time: time0.toString(), author: author0.toString(), msg: msg0.toString(), status: status0.toString()});
}

// chat-main
let bubblesIdCount = 0;
let bubbleEditActivated = false;

function bubbleEdit() {
    bubbleEditActivated = true;

    let bubbleEditText = document.getElementById(maskedBubblesList[0]).getElementsByClassName('msg-bubble')[0];
    let bubbleEditTextClone = bubbleEditText.cloneNode(true);
    bubbleEditTextClone.getElementsByClassName('msg-bubble-time')[0].remove();
    document.getElementById('screen-chat-footer-input-msg-field').textContent = bubbleEditTextClone.textContent;

    messageFieldWriting();
}

function closeBubbleEdit() {
    cleanMsgField();
    cleanSelection();
}

function sendBubbleEdited() {
    bubbleEditActivated = false;

    let msg = msgField.innerHTML.replace(/\<div\>/g, '<br>').replace(/\<\/div\>/g, '');

    let bubbleEditText = document.getElementById(maskedBubblesList[0]).getElementsByClassName('msg-bubble')[0];

    localTime = bubbleEditText.getElementsByClassName('msg-bubble-time-span')[0].textContent;

    let pickIcon = tickIcons.find(item => item.value == tickCounter);

    let msgDefault = `${msg}\<button onmousedown='msgSelect(this);' class='button-select'\>\<\/button\>\<div class='msg-bubble-metadata'\>\<p class='msg-bubble-time'\>Editada \<span 'msg-bubble-time-span'\>${localTime}\<\/span\>\<\/p\>\<button onclick='changeTick(this);' value='${tickCounter}' class='msg-bubble-tick'\>\<img src='${pickIcon.icon}'\/\>\<\/button\>\<\/div\>\<\/div\>`;

    bubbleEditText.innerHTML = msgDefault;

    closeBubbleEdit();
}

async function loadChat(person0) {
    bubblesIdCount = 0;
    let person = chats.find(item => item.phone == person0.phone);
    let chatBackground = document.getElementById('screen-chat-background');
    let src = person.background;

    src = await loadImageTest(src);
    chatBackground.style.background = `url('${src}')`;

    person.msgs.forEach(msg => {
        msgField.innerHTML = msg.msg;
        postMsg(msg.author, msg);
    });
}

function removePeopleChatFooter() {
    let parentDiv = document.getElementById('screen-chat-footer-send-panel');
    let children = parentDiv.children;
    while (children.length > 2) {
        parentDiv.removeChild(children[2]);
    }
}

function addPeopleChatFooter(person) {
    removePeopleChatFooter();

    let buttonDefault = `<img src='${person.photo}' class='image-send-people'/>`;

    let newButton = document.createElement('button');
    newButton.setAttribute('onclick', `postMsg("${person.phone}", false);`);
    newButton.innerHTML = buttonDefault;

    let sendPanel = document.getElementById('screen-chat-footer-send-panel');

    sendPanel.appendChild(newButton);
}

let personChat = '';
function openChat(element) {
    goToScreen('screen-chat');
    let chatMain = document.getElementById('screen-chat-main');
    chatMain.innerHTML = '';

    let person = people.find(item => item.phone == element);
    let imgChat = document.getElementById('img-chat');
    let imgChatEdit = document.getElementById('img-chat-edit');
    imgChat.src = person.photo;
    imgChatEdit.src = person.photo;
    addPeopleChatFooter(person);
    let nameChat = document.getElementById('chat-name');
    if(person.nickname != "") {
        nameChat.textContent = person.nickname;
    }else{
        nameChat.textContent = person.name+" "+person.surname;
    }

    personChat = person;
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

function globalToLocalTime(globalTime) {

    let utcHours = parseInt(globalTime.slice(11, 13)); 
    let utcMinutes = parseInt(globalTime.slice(14, 16));
    let timeZone = parseInt(globalTime.slice(23, 26)); 

    let localHours = utcHours + timeZone;

    if (localHours >= 24) {
        localHours -= 24;
    } else if (localHours < 0) {
        localHours += 24;
    }

    localHours = localHours.toString().padStart(2, '0');
    let localMinutes = utcMinutes.toString().padStart(2, '0');

    localTime = localHours + ':' + localMinutes;

    return localTime;
}

function currentTime() {

    let date = new Date();
    let dateTime = date.toISOString().slice(0, 19).replace("T", " ");
    let timeZoneOffset = -date.getTimezoneOffset() / 60;

    let timeZone = (timeZoneOffset >= 0 ? "+" : "-") + Math.abs(timeZoneOffset).toString().padStart(2, '0') + ":00";
    
    globalTime = `${dateTime} UTC${timeZone}`;

    globalToLocalTime(globalTime);

    //console.log(`${dateTime} UTC${timeZone}; Local Time: ${localTime}`);
}

function postMsg(author0, msg0){
    let author = author0;
    let msg = msg0;
    let prop = '';
    let text = '';
    let pickIcon = '';
    let goUpdateChat = false;

    switch(author) {
    case '00_me':
        prop = 'msg-bubble-right';
        break;
    case '00_info':
        prop = 'msg-bubble-center';
        break;
    default:
        prop = 'msg-bubble-left';
        break;
    }

    if(msg != false) {
        text = msg.msg;
        tickCounter = msg.status;
        localTime = globalToLocalTime(msg.time);
        bubblesIdCount = msg.msgId;
        goUpdateChat = false;
    }else{
        text = msgField.innerHTML.replace(/\<div\>/g, '<br>').replace(/\<\/div\>/g, '');
        currentTime();
        bubblesIdCount++;
        goUpdateChat = true;
    }

    pickIcon = tickIcons.find(item => item.value == tickCounter);

    cleanMsgField();
    collapseSendPanel();

    let msgDefault = `\<button onclick='msgDeselect(this);' class='msg-selector display-none'\>\<\/button\><div class='msg-bubble ${prop}'\>${text}\<button onmousedown='msgSelect(this);' class='button-select'\>\<\/button\>\<div class='msg-bubble-metadata'\>\<button onclick='changeTime(this);' class='msg-bubble-time'\>\<span class='msg-bubble-time-span'\>${localTime}\<\/span\>\<\/button\>\<button onclick='changeTick(this);' value='${tickCounter}' class='msg-bubble-tick'\>\<img src='${pickIcon.icon}'\/\>\<\/button\>\<\/div\>\<\/div\>`;

    let newMsg = document.createElement('div');
    newMsg.id = 'chat-msg-'+bubblesIdCount;
    newMsg.setAttribute('class','msg-container');
    newMsg.innerHTML = msgDefault;

    chatMain.appendChild(newMsg);
    newMsg.scrollIntoView({ behavior: "smooth" });

    if(goUpdateChat == true) {
        updateChatData(bubblesIdCount, globalTime, author, text, tickCounter);
    }
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

// screen-calling
function openCall(element) {
    goToScreen('screen-calling');
}

// screen-new-contact
function openScreenNewContact() {
    const selectCountry = document.getElementById('select-country');
    
    for(let i = 0; i < countries.length; i++) {
        let option = document.createElement('option');
        option.value = countries[i];
        option.textContent = countries[i];
        if (countries[i] === 'BR +55') {
            option.selected = true;
        }
        selectCountry.appendChild(option);
    }
}

// screen-updates

function loadButtonStatus(contactName, phone, photo, objects) {
    console.log(contactName+"; "+phone+"; "+photo+"; "+objects);
}

function loadUpdatesStatuses() {
    cleanContainer('screen-updates-main-status');
    let result = detachOne(myPhone, 'phone', statuses);
    let myStatus = result[0];
    let otherStatuses = result[1];

    function loadMyStatus() {
        let person = people.find(item => item.phone == myPhone);
        let contactName = setName(person);
        let phone = person.phone;
        let photo = person.photo;
        let objects = myStatus.objects.length;
        
        let buttonMyStatus = `
            \<button onclick='loadStatus(${phone});'\>
                \<img src='${photo}'\/\>
            \<\/button\>
            \<button\>
                \<img src='.\/medias\/icons\/add_circle_24dp_000000_FILL1_wght400_GRAD0_opsz24.svg' alt='add' class='add-icon' \/\>
            \<\/button\>
            \<figcaption\>${contactName}\<\/figcaption\>
        `;

        let taggedElement = document.createElement('li');
        taggedElement.innerHTML = buttonMyStatus;
        addElement('screen-updates-main-status', taggedElement);
    }
    loadMyStatus();

    otherStatuses.forEach(function(element) {
        let person = people.find(item => item.phone == element.phone);
        let contactName = setName(person);
        let phone = person.phone;
        let photo = person.photo;
        let objects = element.objects.length;

        let buttonStatus = `
            \<button onclick='loadStatus(${phone});'\>
                \<img src='${photo}'\/\>
            \<\/button\>
            \<figcaption\>${contactName}\<\/figcaption\>
        `;

        let taggedElement = document.createElement('li');
        taggedElement.innerHTML = buttonStatus;
        addElement('screen-updates-main-status', taggedElement);
    });

}

function loadUpdatesChannels() {
    //cleanContainer('screen-updates-main-channels');
}

// screen-status
function pauseCronometer() {

}
function cronometer() {
}

function loadStatus(phone0) {
    goToScreen('screen-status');
    console.log(phone0);

    cleanContainer('screen-status-background');

    let person = people.find(item => item.phone == phone0);
    let contactName = setName(person);
    console.log(contactName);

    let objectTime = '';
    let objectMedia = '';
    let objectSubtitle = '';
    let status = statuses.find(item => item.phone == phone0);
    status.objects.forEach(object => {
        objectTime = object.time;
        objectMedia = object.media;
        objectSubtitle = object.subtitle;
        console.log(objectTime+'; '+objectMedia+'; '+objectSubtitle);
    });

    let divImg = `
    \<div\>
        \<img src='' class='mediaStatus'\/\>
        \<button class='previousAndNext' onclick='previousStatus();'\>\<\/button\>
        \<button class='previousAndNext' onclick='nextStatus();'\>\<\/button\>
    \<\/div\>
    `;

    let barTime = `
    \<div class='screen-status-bar-time'\>
        \<div class='screen-status-bar-progress'\>
        \<\/div\>
    \<\/div\>
    `;

}

function callFooterStatus() {
    console.log("calling status footer");
}

function toggleLikeStatus(this0) {
    imgLike01 = this0.getElementsByClassName("display-none")[0];
    imgLike02 = this0.getElementsByClassName("img-active")[0];

    imgLike01.classList.toggle("display-none");
    imgLike01.classList.toggle("img-active");

    imgLike02.classList.toggle("display-none");
    imgLike02.classList.toggle("img-active");
}

function recordLikeStatus() {
    console.log("recordLikeStatus");
}

function likeStatus(this0) {
    toggleLikeStatus(this0);
    recordLikeStatus();
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
            const walk = (y - startY) * 1; // Scroll speed
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
            const walk = (y - startY) * 1; // Scroll speed
            scrollableDiv.scrollTop = scrollTop - walk;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollableXDivs = document.querySelectorAll('.scrollableX');
    
    scrollableXDivs.forEach(scrollableXDiv => {
        let isDown = false;
        let startX;
        let scrollLeft;
    
        scrollableXDiv.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollableXDiv.classList.add('active');
            startX = e.pageX - scrollableXDiv.offsetLeft;
            scrollLeft = scrollableXDiv.scrollLeft;
        });
    
        scrollableXDiv.addEventListener('mouseleave', () => {
            isDown = false;
            scrollableXDiv.classList.remove('active');
        });
    
        scrollableXDiv.addEventListener('mouseup', () => {
            isDown = false;
            scrollableXDiv.classList.remove('active');
        });
    
        scrollableXDiv.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollableXDiv.offsetLeft;
            const walk = (x - startX) * 1; // Scroll speed
            scrollableXDiv.scrollLeft = scrollLeft - walk;
        });
    
        // Mobile touch
        scrollableXDiv.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - scrollableXDiv.offsetLeft;
            scrollLeft = scrollableXDiv.scrollLeft;
        });
    
        scrollableXDiv.addEventListener('touchend', () => {
            isDown = false;
        });
    
        scrollableXDiv.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - scrollableXDiv.offsetLeft;
            const walk = (x - startX) * 1; // Scroll speed
            scrollableXDiv.scrollLeft = scrollLeft - walk;
        });
    });
});
