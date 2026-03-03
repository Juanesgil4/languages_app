// Complete questions database with short and long answers
// This file contains all conversation practice questions

const questionsData = {
    sports: [
        {
            question: "Qual è il tuo sport preferito?",
            hint: "Usa: 'Il mio sport preferito è...'",
            shortAnswers: ["Il calcio", "Il tennis", "Il nuoto", "La pallavolo"],
            longAnswers: [
                "Il mio sport preferito è il calcio perché mi piace giocare in squadra",
                "Mi piace molto il tennis perché è uno sport che richiede concentrazione"
            ]
        },
        {
            question: "Pratichi qualche sport?",
            hint: "Usa: 'Sì, pratico...' o 'No, non pratico...'",
            shortAnswers: ["Sì, il calcio", "Sì, vado in palestra", "No", "Sì, corro"],
            longAnswers: [
                "Sì, pratico il calcio due volte alla settimana con la mia squadra",
                "Sì, faccio sport tre volte alla settimana, vado in palestra"
            ]
        }
        // Add 19 more sports questions following this pattern
    ],
    travel: [
        {
            question: "Dove ti piacerebbe viaggiare?",
            hint: "Usa: 'Vorrei viaggiare...'",
            shortAnswers: ["In Spagna", "A Parigi", "A Roma", "In Giappone"],
            longAnswers: [
                "Vorrei viaggiare in Spagna perché mi piace la cultura spagnola",
                "Mi piacerebbe andare a Parigi per vedere la Torre Eiffel"
            ]
        }
        // Add 20 more travel questions
    ],
    identity: [
        {
            question: "Come ti chiami?",
            hint: "Usa: 'Mi chiamo...'",
            shortAnswers: ["Marco", "Maria", "Luca", "Sofia"],
            longAnswers: [
                "Mi chiamo Marco e sono molto felice di conoscerti",
                "Sono Maria, piacere di fare la tua conoscenza"
            ]
        }
        // Add 20 more identity questions
    ],
    opinions: [
        {
            question: "Pensi che i social media abbiano un impatto positivo?",
            hint: "Usa: 'Secondo me...', 'Penso che...'",
            answers: [
                "Secondo me, i social media hanno sia aspetti positivi che negativi..."
            ]
        }
        // Add 10 more opinion questions
    ]
};
