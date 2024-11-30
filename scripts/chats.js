let chats = [
    {
        chat_id: "0",
        phone: "5500999990002",
        pin: "0",
        background: "/medias/backgrounds/coffeebreak_light.jpg",
        msgs: [
            {
                msgId: "0",
                time: "2024-09-19 12:00:00 UTC-03:00",
                author: "00_info",
                msg: "Diálogo informativo",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-19 12:01:00 UTC-03:00",
                author: "5500999990002",
                msg: "Oi, você já ouviu falar sobre fake news?",
                status: "4"
            },
            {
                msgId: "2",
                time: "2024-09-19 12:02:00 UTC-03:00",
                author: "00_me",
                msg: "Já ouvi o termo, mas nunca entendi muito bem o que significa.",
                status: "4"
            },
            {
                msgId: "3",
                time: "2024-09-19 12:02:30 UTC-03:00",
                author: "00_me",
                msg: "Você pode me explicar?",
                status: "4"
            },
            {
                msgId: "4",
                time: "2024-09-19 12:04:00 UTC-03:00",
                author: "5500999990002",
                msg: "Claro!",
                status: "4"
            },
            {
                msgId: "5",
                time: "2024-09-19 12:04:30 UTC-03:00",
                author: "5500999990002",
                msg: "Fake news são basicamente notícias falsas, criadas com a intenção de enganar as pessoas.",
                status: "4"
            },
            {
                msgId: "6",
                time: "2024-09-19 12:05:00 UTC-03:00",
                author: "5500999990002",
                msg: "Elas podem parecer verdadeiras, mas na realidade, são fabricadas ou distorcidas deliberadamente.",
                status: "4"
            },
            {
                msgId: "7",
                time: "2024-09-19 12:05:30 UTC-03:00",
                author: "5500999990002",
                msg: "Muitas vezes, elas usam manchetes sensacionalistas ou conteúdos manipulados para chamar a atenção.",
                status: "4"
            },
            {
                msgId: "8",
                time: "2024-09-19 12:06:00 UTC-03:00",
                author: "00_me",
                msg: "E por que alguém faria isso?",
                status: "4"
            },
            {
                msgId: "9",
                time: "2024-09-19 12:06:30 UTC-03:00",
                author: "5500999990002",
                msg: "Existem vários motivos.",
                status: "4"
            },
            {
                msgId: "10",
                time: "2024-09-19 12:08:00 UTC-03:00",
                author: "5500999990002",
                msg: "Algumas vezes, é por questões políticas, para manipular a opinião pública. Outras vezes, é simplesmente por lucro. Quanto mais cliques uma notícia recebe, mais dinheiro pode ser gerado com publicidade, mesmo que a história seja falsa.",
                status: "4"
            },
            {
                msgId: "11",
                time: "2024-09-19 12:09:00 UTC-03:00",
                author: "5500999990002",
                msg: "Além disso, também existem grupos que fazem isso para semear o caos ou desacreditar instituições.",
                status: "4"
            },
            {
                msgId: "12",
                time: "2024-09-19 12:09:30 UTC-03:00",
                author: "00_me",
                msg: "Mas como essas fake news se espalham tão rápido? 🤔",
                status: "4"
            },
            {
                msgId: "13",
                time: "2024-09-19 12:12:00 UTC-03:00",
                author: "5500999990002",
                msg: "Boa pergunta. Veja:",
                status: "4"
            },
            {
                msgId: "14",
                time: "2024-09-19 12:16:00 UTC-03:00",
                author: "5500999990002",
                msg: "As redes sociais são uma ferramenta poderosa nesse processo. Quando uma notícia falsa é postada, se ela for interessante ou provocativa, as pessoas compartilham sem verificar a veracidade. Isso cria um efeito cascata, onde milhares de pessoas veem e espalham ainda mais. Algoritmos de redes sociais também ajudam nesse processo, porque priorizam conteúdo que gera engajamento, e infelizmente, fake news tendem a gerar mais reações que notícias verdadeiras.",
                status: "4"
            },
            {
                msgId: "15",
                time: "2024-09-19 12:18:00 UTC-03:00",
                author: "00_me",
                msg: "Nossa! 😱 Não tinha ideia de que isso era tão comum.",
                status: "4"
            },
            {
                msgId: "16",
                time: "2024-09-19 12:18:30 UTC-03:00",
                author: "5500999990002",
                msg: "Pois é!",
                status: "4"
            },
            {
                msgId: "17",
                time: "2024-09-19 12:19:00 UTC-03:00",
                author: "00_me",
                msg: "E quais são as consequências disso?",
                status: "4"
            },
            {
                msgId: "18",
                time: "2024-09-19 12:20:00 UTC-03:00",
                author: "5500999990002",
                msg: "As consequências podem ser devastadoras.",
                status: "4"
            },
            {
                msgId: "19",
                time: "2024-09-19 12:24:00 UTC-03:00",
                author: "5500999990002",
                msg: "Fake news podem influenciar eleições, criar desinformação em crises de saúde, como durante a pandemia, ou até provocar violência. Elas geram desconfiança na mídia, nas instituições e, no fim das contas, polarizam ainda mais a sociedade.",
                status: "4"
            },
            {
                msgId: "20",
                time: "2024-09-19 12:27:00 UTC-03:00",
                author: "5500999990002",
                msg: "E a tecnologia, que deveria ser usada para informar e conectar as pessoas, acaba sendo usada para o oposto: para enganar e dividir.",
                status: "4"
            },
            {
                msgId: "21",
                time: "2024-09-19 12:30:00 UTC-03:00",
                author: "00_me",
                msg: "Faz sentido. Então, espalhar fake news é realmente perigoso...",
                status: "4"
            },
            {
                msgId: "22",
                time: "2024-09-19 12:32:00 UTC-03:00",
                author: "5500999990002",
                msg: "Sem dúvida. É por isso que é tão importante sermos críticos com o que consumimos e compartilhamos online.",
                status: "3"
            },
            {
                msgId: "23",
                time: "2024-09-19 12:33:00 UTC-03:00",
                author: "5500999990002",
                msg: "As imagens e áudios que são disseminados pela internet podem não ser reais por mais que pareçam, sobretudo com o desenvolvimento absurdo que as inteligências artificiais estão tendo.",
                status: "3"
            },
            {
                msgId: "24",
                time: "2024-09-19 12:33:30 UTC-03:00",
                author: "5500999990002",
                msg: "Verificar a fonte de uma notícia, checar os fatos e questionar aquilo que parece sensacionalista são passos fundamentais para combater essa prática.",
                status: "3"
            },
        ]
    },
    /*
    {
        chat_id: "1",
        phone: "5500999990035",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 12:00:17 UTC-03:00",
                author: "5500999990035",
                respId: "",
                resp: "",
                msg: "Hi!",
                status: "1"
            },
        ]
    },
    {
        chat_id: "2",
        phone: "5500999990036",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 17:00:00 UTC-03:00",
                author: "5500999990036",
                respId: "",
                resp: "",
                msg: "Hello!",
                status: "2"
            },
        ]
    },
    {
        chat_id: "3",
        phone: "5500999990030",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 16:00:00 UTC-03:00",
                author: "5500999990030",
                respId: "",
                resp: "",
                msg: "what's up?",
                status: "4"
            },
        ]
    },
    {
        chat_id: "4",
        phone: "5500999990028",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 20:00:00 UTC-03:00",
                author: "5500999990028",
                respId: "",
                resp: "",
                msg: "hey",
                status: "3"
            },
            {
                msgId: "1",
                time: "2024-09-20 20:15:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "hey",
                status: "3"
            },
        ]
    },
    {
        chat_id: "5",
        phone: "5500999990025",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 17:31:00 UTC-03:00",
                author: "5500999990025",
                respId: "",
                resp: "",
                msg: "starting a chat here, friend",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 18:10:00 UTC-03:00",
                author: "5500999990025",
                respId: "",
                resp: "",
                msg: "hey",
                status: "4"
            },
        ]
    },
    {
        chat_id: "6",
        phone: "5500999990026",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 12:33:00 UTC-03:00",
                author: "5500999990026",
                respId: "",
                resp: "",
                msg: "remember the meeting friday night",
                status: "4"
            },
        ]
    },
    {
        chat_id: "7",
        phone: "5500999990031",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 04:00:00 UTC-03:00",
                author: "5500999990031",
                respId: "",
                resp: "",
                msg: "This isn't a pyramid scheme, just listen to our proposal",
                status: "3"
            },
        ]
    },
    {
        chat_id: "8",
        phone: "5500999990032",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 11:23:00 UTC-03:00",
                author: "5500999990032",
                respId: "",
                resp: "",
                msg: "Are you all right?",
                status: "4"
            },
        ]
    },
    {
        chat_id: "9",
        phone: "5500999990040",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 14:48:00 UTC-03:00",
                author: "5500999990040",
                respId: "",
                resp: "",
                msg: "Hello?",
                status: "4"
            },
        ]
    },
    {
        chat_id: "10",
        phone: "5500999990027",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 06:14:00 UTC-03:00",
                author: "5500999990027",
                respId: "",
                resp: "",
                msg: "Make a count to me. Take the length of a circle and divide it by 2 times the radius.",
                status: "3"
            },
        ]
    },
    {
        chat_id: "11",
        phone: "5500999990023",
        pin: '1',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 19:20:00 UTC-03:00",
                author: "5500999990023",
                respId: "",
                resp: "",
                msg: "Don't do it, please.",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 19:21:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Don't worry.",
                status: "4"
            },
            {
                msgId: "2",
                time: "2024-09-20 19:21:20 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Be happy.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "12",
        phone: "5500999990029",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-21 02:44:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Can you want to go with us?",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-21 02:50:00 UTC-03:00",
                author: "5500999990029",
                respId: "",
                resp: "",
                msg: "Tomorrow I don't.",
                status: "4"
            },
            {
                msgId: "2",
                time: "2024-09-21 02:52:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Everything ok.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "13",
        phone: "5500999990024",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 08:43:00 UTC-03:00",
                author: "5500999990024",
                respId: "",
                resp: "",
                msg: "Are you Sebastian?",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 09:23:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "No.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "14",
        phone: "5500999990045",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 10:42:00 UTC-03:00",
                author: "5500999990045",
                respId: "",
                resp: "",
                msg: "Hello, there!",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 13:37:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "General, Kenobi!",
                status: "4"
            },
        ]
    },
    {
        chat_id: "15",
        phone: "5500999990046",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 11:02:00 UTC-03:00",
                author: "5500999990046",
                respId: "",
                resp: "",
                msg: "Morning, friend!",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 11:03:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "I'm here already.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "16",
        phone: "5500999990047",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 11:24:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Right?",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 11:29:00 UTC-03:00",
                author: "5500999990047",
                respId: "",
                resp: "",
                msg: "Right.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "17",
        phone: "5500999990048",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 15:02:00 UTC-03:00",
                author: "5500999990048",
                respId: "",
                resp: "",
                msg: "Lunch is ready.",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 15:11:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Ok, I'm coming.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "18",
        phone: "5500999990049",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 16:13:00 UTC-03:00",
                author: "5500999990049",
                respId: "",
                resp: "",
                msg: "13.",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 20:17:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "50.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "19",
        phone: "5500999990050",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 14:19:00 UTC-03:00",
                author: "5500999990050",
                respId: "",
                resp: "",
                msg: "It's Sebas's number?",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 22:38:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "No.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "20",
        phone: "5500999990051",
        pin: '2',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 19:00:00 UTC-03:00",
                author: "5500999990051",
                respId: "",
                resp: "",
                msg: "Learn to dance with teacher Coisinha de Jesus.",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 19:04:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Seems great!",
                status: "4"
            },
            {
                msgId: "2",
                time: "2024-09-20 19:05:00 UTC-03:00",
                author: "5500999990051",
                respId: "",
                resp: "",
                msg: "Do you want to visit us for a free class?",
                status: "4"
            },
            {
                msgId: "3",
                time: "2024-09-20 19:06:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Of course.",
                status: "4"
            },
            {
                msgId: "4",
                time: "2024-09-20 19:07:00 UTC-03:00",
                author: "5500999990051",
                respId: "",
                resp: "",
                msg: "Can you come here next tuesday, at 2PM?",
                status: "4"
            },
            {
                msgId: "5",
                time: "2024-09-20 19:08:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Yes, I can.",
                status: "4"
            },
            {
                msgId: "6",
                time: "2024-09-20 19:08:50 UTC-03:00",
                author: "5500999990051",
                respId: "",
                resp: "",
                msg: "So we are waiting for you.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "21",
        phone: "5500999990052",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-21 00:34:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Bia, a need to see you tomorrow.",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-21 01:02:00 UTC-03:00",
                author: "5500999990052",
                respId: "",
                resp: "",
                msg: "It's so late!",
                status: "4"
            },
            {
                msgId: "2",
                time: "2024-09-21 01:08:00 UTC-03:00",
                author: "5500999990052",
                respId: "",
                resp: "",
                msg: "But ok, I see you.",
                status: "4"
            },
            {
                msgId: "3",
                time: "2024-09-21 01:08:40 UTC-03:00",
                author: "5500999990052",
                respId: "",
                resp: "",
                msg: "Write it down, don't forget.",
                status: "4"
            },
            {
                msgId: "4",
                time: "2024-09-21 01:09:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "ok!",
                status: "4"
            },
            {
                msgId: "5",
                time: "2024-09-21 01:25:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "I forgot a thing. Where you will be?",
                status: "4"
            },
            {
                msgId: "6",
                time: "2024-09-21 01:30:00 UTC-03:00",
                author: "5500999990052",
                respId: "",
                resp: "",
                msg: "In front of the library. At 9 a.m.",
                status: "4"
            },
            {
                msgId: "7",
                time: "2024-09-21 01:31:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Right.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "22",
        phone: "5500999990053",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 06:31:00 UTC-03:00",
                author: "5500999990053",
                respId: "",
                resp: "",
                msg: "Are you awake?",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 06:33:10 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "No. Go to sleep!",
                status: "4"
            },
            {
                msgId: "2",
                time: "2024-09-20 06:33:40 UTC-03:00",
                author: "5500999990053",
                respId: "",
                resp: "",
                msg: "I can't.",
                status: "4"
            },
            {
                msgId: "3",
                time: "2024-09-20 06:34:10 UTC-03:00",
                author: "5500999990053",
                respId: "",
                resp: "",
                msg: "Stay here.",
                status: "4"
            },
            {
                msgId: "4",
                time: "2024-09-20 06:35:00 UTC-03:00",
                author: "5500999990053",
                respId: "",
                resp: "",
                msg: "Are you still here?",
                status: "4"
            },
            {
                msgId: "5",
                time: "2024-09-20 06:38:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "I'm sleeping. Bye.",
                status: "4"
            },
            {
                msgId: "6",
                time: "2024-09-20 06:39:00 UTC-03:00",
                author: "5500999990053",
                respId: "",
                resp: "",
                msg: "Please, don't go!",
                status: "4"
            },
            {
                msgId: "7",
                time: "2024-09-20 06:39:45 UTC-03:00",
                author: "5500999990053",
                respId: "",
                resp: "",
                msg: "Don't go. Don't go away!",
                status: "4"
            },
        ]
    },
    {
        chat_id: "23",
        phone: "5500999990054",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 15:04:00 UTC-03:00",
                author: "5500999990054",
                respId: "",
                resp: "",
                msg: "Gabi here.",
                status: "4"
            },
            {
                msgId: "0",
                time: "2024-09-20 15:21:00 UTC-03:00",
                author: "5500999990054",
                respId: "",
                resp: "",
                msg: "Do you still have this number?",
                status: "4"
            },
            {
                msgId: "0",
                time: "2024-09-20 18:37:00 UTC-03:00",
                author: "5500999990054",
                respId: "",
                resp: "",
                msg: "please answer me asap.",
                status: "4"
            },
            {
                msgId: "0",
                time: "2024-09-20 19:25:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Hi, I'm here now.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "23",
        phone: "5500999990055",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 19:26:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Hello",
                status: "4"
            },
            {
                msgId: "1",
                time: "2024-09-20 19:29:00 UTC-03:00",
                author: "5500999990055",
                respId: "",
                resp: "",
                msg: "Hey, wup?",
                status: "4"
            },
            {
                msgId: "2",
                time: "2024-09-20 19:31:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "I talk to you in a minute.",
                status: "4"
            },
            {
                msgId: "3",
                time: "2024-09-20 20:55:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Sorry, I'm full of work here.",
                status: "4"
            },
            {
                msgId: "4",
                time: "2024-09-21 00:03:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Ok, now I can text.",
                status: "4"
            },
            {
                msgId: "5",
                time: "2024-09-21 00:04:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "Are you there right now?",
                status: "4"
            },
            {
                msgId: "6",
                time: "2024-09-21 00:08:00 UTC-03:00",
                author: "5500999990055",
                respId: "",
                resp: "",
                msg: "It's late.",
                status: "4"
            },
            {
                msgId: "7",
                time: "2024-09-21 00:08:50 UTC-03:00",
                author: "5500999990055",
                respId: "",
                resp: "",
                msg: "We can talk tomorrow.",
                status: "4"
            },
            {
                msgId: "8",
                time: "2024-09-21 00:10:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "ok.",
                status: "4"
            },
        ]
    },
    {
        chat_id: "24",
        phone: "5500999990056",
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 14:11:00 UTC-03:00",
                author: "00_me",
                respId: "",
                resp: "",
                msg: "What's up, Pereba?",
                status: "4"
            },
        ]
    },
    /*
    {
        chat_id: "25",
        phone: "00_group_1",
        group: {
            name: "Rá-Tim-Bum",
            img: "",
            phones: [
                "5500999990036",
                "5500999990045",
                "5500999990037",
                "5500999990046",
                "5500999990043",
                "5500999990044",
                "5500999990034",
                "5500999990064",
                "5500999990035",
                "5500999990060",
                "5500999990059",
                "5500999990061"
            ]
        },
        pin: '0',
        msgs: [
            {
                msgId: "0",
                time: "2024-09-20 12:30:00 UTC-03:00",
                author: "5500999990060",
                respId: "",
                resp: "",
                msg: "Playtime!",
                status: "3"
            },
        ]
    },
    */
];
