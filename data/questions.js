// Conversation practice questions - Complete version
// Format: shortAnswers for quick responses, longAnswers for elaborated responses
// Opinions topic only has answers (paragraph-length responses)

const questionsData = {
    sports: [
        {
            question: "Qual è il tuo sport preferito?",
            hint: "Usa: 'Il mio sport preferito è...'",
            shortAnswers: ["Il calcio", "Il tennis", "Il nuoto", "La pallavolo"],
            longAnswers: [
                "Il mio sport preferito è il calcio perché mi piace giocare in squadra e l'emozione delle partite",
                "Mi piace molto il tennis perché è uno sport individuale che richiede concentrazione e strategia",
                "Adoro il nuoto perché è rilassante e fa bene a tutto il corpo",
                "Preferisco la pallavolo perché è dinamica e divertente giocare con gli amici"
            ]
        },
        {
            question: "Pratichi qualche sport?",
            hint: "Usa: 'Sì, pratico...' o 'No, non pratico...'",
            shortAnswers: ["Sì, il calcio", "Sì, vado in palestra", "No", "Sì, corro"],
            longAnswers: [
                "Sì, pratico il calcio due volte alla settimana con la mia squadra amatoriale",
                "Sì, faccio sport tre volte alla settimana, principalmente vado in palestra e faccio pesi",
                "No, non pratico sport regolarmente ma mi piacerebbe iniziare a correre",
                "Mi piace correre nel parco ogni mattina prima di andare al lavoro"
            ]
        },
        {
            question: "Quanto spesso fai esercizio?",
            hint: "Usa: 'Faccio esercizio...' + frequenza",
            shortAnswers: ["Ogni giorno", "Tre volte a settimana", "Il weekend", "Raramente"],
            longAnswers: [
                "Faccio esercizio ogni giorno perché mi aiuta a sentirmi meglio e più energico",
                "Vado in palestra tre volte alla settimana, di solito lunedì, mercoledì e venerdì",
                "Faccio sport principalmente il weekend quando ho più tempo libero",
                "Non faccio molto esercizio, forse una volta al mese, ma vorrei essere più costante"
            ]
        },
        {
            question: "Preferisci gli sport di squadra o individuali?",
            hint: "Usa: 'Preferisco...'",
            shortAnswers: ["Di squadra", "Individuali", "Entrambi", "Dipende"],
            longAnswers: [
                "Preferisco gli sport di squadra perché mi piace l'aspetto sociale e lavorare insieme",
                "Mi piacciono di più gli sport individuali perché posso allenarmi quando voglio",
                "Preferisco giocare in squadra perché è più divertente e motivante",
                "Mi piace allenarmi da solo perché posso concentrarmi meglio"
            ]
        },
        {
            question: "Hai mai visto una partita dal vivo?",
            hint: "Usa: 'Sì, ho visto...' o 'No, mai'",
            shortAnswers: ["Sì, calcio", "No, mai", "Sì, basket", "Sì, molte"],
            longAnswers: [
                "Sì, ho visto una partita di calcio allo stadio l'anno scorso ed è stata incredibile",
                "No, non ho mai visto una partita dal vivo ma mi piacerebbe molto",
                "Sì, sono andato a vedere una partita di basket e l'atmosfera era fantastica",
                "Ho visto molte partite di tennis dal vivo perché mio padre è un appassionato"
            ]
        },
        {
            question: "Ti piace correre?",
            hint: "Usa: 'Sì, mi piace...' o 'No, preferisco...'",
            shortAnswers: ["Sì, molto", "No, per niente", "A volte", "Sì, al mattino"],
            longAnswers: [
                "Sì, mi piace molto correre perché mi aiuta a liberare la mente",
                "No, non mi piace correre per niente, preferisco andare in bicicletta",
                "A volte mi piace correre, dipende dal mio umore e dal tempo",
                "Sì, adoro correre al mattino presto quando il parco è tranquillo"
            ]
        },
        {
            question: "Fai stretching prima di fare sport?",
            hint: "Usa: 'Sì, sempre...' o 'No, di solito...'",
            shortAnswers: ["Sì, sempre", "No, mai", "A volte", "Solo in palestra"],
            longAnswers: [
                "Sì, sempre faccio stretching prima di correre perché è importante per evitare infortuni",
                "No, di solito non faccio stretching e probabilmente dovrei iniziare",
                "Sì, è molto importante per me preparare i muscoli prima dell'attività fisica",
                "Faccio stretching solo quando vado in palestra, ma non quando corro da solo"
            ]
        },
        {
            question: "Quale sport vorresti imparare?",
            hint: "Usa: 'Vorrei imparare...'",
            shortAnswers: ["Il tennis", "Il surf", "Lo yoga", "Il karate"],
            longAnswers: [
                "Vorrei imparare a giocare a tennis perché sembra elegante e divertente",
                "Mi piacerebbe fare surf perché adoro il mare e sembra emozionante",
                "Vorrei provare lo yoga per migliorare la mia flessibilità e ridurre lo stress",
                "Mi piacerebbe imparare il karate per la disciplina e per difendermi"
            ]
        },
        {
            question: "Pensi che lo sport sia importante per i bambini?",
            hint: "Usa: 'Sì, penso che...'",
            shortAnswers: ["Sì, molto", "Assolutamente", "Sì, fondamentale", "Sì, per la salute"],
            longAnswers: [
                "Sì, penso che lo sport sia molto importante per i bambini perché li aiuta a crescere sani",
                "Assolutamente sì, lo sport insegna ai bambini il lavoro di squadra e la disciplina",
                "Sì, è fondamentale per lo sviluppo fisico e sociale dei bambini",
                "Sì, lo sport è importante per la salute fisica e mentale dei più giovani"
            ]
        },
        {
            question: "Ti piace guardare le Olimpiadi?",
            hint: "Usa: 'Sì, mi piace...' o 'No, preferisco...'",
            shortAnswers: ["Sì, sempre", "No, non molto", "Sì, alcuni sport", "Ogni quattro anni"],
            longAnswers: [
                "Sì, mi piace sempre guardare le Olimpiadi perché ci sono sport che non vedo mai",
                "No, non mi piace molto guardare le Olimpiadi, preferisco i campionati regolari",
                "Sì, guardo alcuni sport olimpici come il nuoto e l'atletica leggera",
                "Sì, ogni quattro anni aspetto con entusiasmo le Olimpiadi, è un evento speciale"
            ]
        },
        {
            question: "Qual è il tuo atleta preferito?",
            hint: "Usa: 'Il mio atleta preferito è...'",
            shortAnswers: ["Cristiano Ronaldo", "Serena Williams", "Valentino Rossi", "Roger Federer"],
            longAnswers: [
                "Il mio atleta preferito è Cristiano Ronaldo perché è molto bravo e professionale",
                "Mi piace Serena Williams perché è una campionessa straordinaria",
                "Adoro Valentino Rossi perché è un grande pilota italiano",
                "Il mio preferito è Roger Federer per il suo stile elegante"
            ]
        },
        {
            question: "Hai mai partecipato a una competizione sportiva?",
            hint: "Usa: 'Sì, ho partecipato...' o 'No, ma mi piacerebbe...'",
            shortAnswers: ["Sì, una maratona", "No, mai", "Sì, calcio", "Sì, da giovane"],
            longAnswers: [
                "Sì, ho partecipato a una maratona l'anno scorso ed è stata un'esperienza gratificante",
                "No, ma mi piacerebbe provare a partecipare a una gara di corsa locale",
                "Sì, gioco in una squadra di calcio amatoriale e facciamo tornei ogni mese",
                "Ho fatto una gara di nuoto quando ero giovane e ho vinto una medaglia"
            ]
        },
        {
            question: "Quale sport è più difficile secondo te?",
            hint: "Usa: 'Secondo me lo sport più difficile è...'",
            shortAnswers: ["La ginnastica", "Il golf", "Il tennis", "Il pugilato"],
            longAnswers: [
                "Secondo me lo sport più difficile è la ginnastica perché richiede forza e flessibilità",
                "Penso che il golf sia molto difficile perché sembra semplice ma richiede precisione",
                "Il tennis è difficile perché devi avere resistenza, velocità e strategia",
                "Il pugilato è lo sport più duro perché richiede coraggio e preparazione fisica"
            ]
        },
        {
            question: "Preferisci guardare o praticare sport?",
            hint: "Usa: 'Preferisco...'",
            shortAnswers: ["Praticare", "Guardare", "Entrambi", "Dipende"],
            longAnswers: [
                "Preferisco praticare sport perché mi piace muovermi e sentirmi attivo",
                "Mi piace di più guardare sport in TV perché posso rilassarmi",
                "Preferisco giocare perché è più divertente e mi fa sentire parte dell'azione",
                "Adoro guardare le partite con gli amici, è un modo perfetto per socializzare"
            ]
        },
        {
            question: "Qual è lo sport più popolare nel tuo paese?",
            hint: "Usa: 'Nel mio paese lo sport più popolare è...'",
            shortAnswers: ["Il calcio", "Il baseball", "Il basket", "Il rugby"],
            longAnswers: [
                "Nel mio paese lo sport più popolare è sicuramente il calcio, tutti lo seguono",
                "Il baseball è lo sport nazionale e quasi tutti i bambini lo giocano",
                "Il basket è molto popolare, specialmente dopo i successi della nazionale",
                "Il rugby ha una grande tradizione nel mio paese e le partite sono sempre seguite"
            ]
        },
        {
            question: "Hai mai fatto sport estremi?",
            hint: "Usa: 'Sì, ho fatto...' o 'No, ho paura'",
            shortAnswers: ["Sì, paracadutismo", "No, ho paura", "Sì, bungee jumping", "No, mai"],
            longAnswers: [
                "Sì, ho fatto paracadutismo una volta ed è stata l'esperienza più emozionante della mia vita",
                "No, ho paura degli sport estremi, preferisco attività più tranquille e sicure",
                "Sì, ho provato il bungee jumping e mi è piaciuto molto l'adrenalina",
                "No, non ho mai fatto sport estremi ma mi piacerebbe provare il rafting"
            ]
        },
        {
            question: "Quale squadra sportiva tifi?",
            hint: "Usa: 'Tifo per...' o 'Sono tifoso di...'",
            shortAnswers: ["La Juventus", "Il Real Madrid", "I Lakers", "La nazionale"],
            longAnswers: [
                "Tifo per la Juventus da quando ero bambino, è la squadra del mio cuore",
                "Sono tifoso del Real Madrid perché mi piace il loro stile di gioco",
                "Tifo per i Lakers, adoro il basket e sono fan da anni",
                "Tifo principalmente per la nazionale italiana, specialmente durante i mondiali"
            ]
        },
        {
            question: "Ti piace andare in palestra?",
            hint: "Usa: 'Sì, mi piace...' o 'No, preferisco...'",
            shortAnswers: ["Sì, molto", "No, preferisco correre", "A volte", "Sì, regolarmente"],
            longAnswers: [
                "Sì, mi piace molto andare in palestra perché posso fare diversi tipi di esercizi",
                "No, non mi piace la palestra, preferisco correre all'aperto o fare sport di squadra",
                "A volte vado in palestra, soprattutto d'inverno quando fa freddo fuori",
                "Sì, vado in palestra regolarmente tre volte a settimana per mantenermi in forma"
            ]
        },
        {
            question: "Qual è il tuo momento sportivo preferito da guardare?",
            hint: "Usa: 'Il mio momento preferito è...'",
            shortAnswers: ["I mondiali", "Le Olimpiadi", "La Champions League", "Il Super Bowl"],
            longAnswers: [
                "Il mio momento preferito è guardare i mondiali di calcio, l'atmosfera è incredibile",
                "Adoro guardare le Olimpiadi perché ci sono tanti sport diversi e storie ispiratrici",
                "La Champions League è il mio momento preferito, le partite sono sempre emozionanti",
                "Mi piace guardare il Super Bowl anche se non seguo il football americano regolarmente"
            ]
        },
        {
            question: "Hai mai avuto un infortunio facendo sport?",
            hint: "Usa: 'Sì, mi sono fatto male...' o 'No, fortunatamente'",
            shortAnswers: ["Sì, alla caviglia", "No, mai", "Sì, al ginocchio", "Sì, piccoli infortuni"],
            longAnswers: [
                "Sì, mi sono fatto male alla caviglia giocando a calcio e sono stato fermo per due mesi",
                "No, fortunatamente non ho mai avuto infortuni seri facendo sport",
                "Sì, ho avuto un problema al ginocchio correndo e ho dovuto fare fisioterapia",
                "Sì, ho avuto piccoli infortuni come distorsioni ma niente di grave"
            ]
        }
    ],
    travel: [
        {
            question: "Dove ti piacerebbe viaggiare?",
            hint: "Usa: 'Vorrei viaggiare...'",
            shortAnswers: ["In Spagna", "A Parigi", "A Roma", "In Giappone"],
            longAnswers: [
                "Vorrei viaggiare in Spagna perché mi piace la cultura spagnola e voglio praticare la lingua",
                "Mi piacerebbe andare a Parigi per vedere la Torre Eiffel e visitare i musei famosi",
                "Vorrei visitare Roma perché sono appassionato di storia antica e architettura",
                "Mi piacerebbe vedere il Giappone per scoprire una cultura completamente diversa"
            ]
        },
        {
            question: "Qual è il tuo posto preferito che hai visitato?",
            hint: "Usa: 'Il mio posto preferito è...'",
            shortAnswers: ["Venezia", "Firenze", "Milano", "La Toscana"],
            longAnswers: [
                "Il mio posto preferito è Venezia perché è una città unica al mondo con i suoi canali",
                "Mi è piaciuta molto Firenze per l'arte, la cultura e il cibo delizioso",
                "La mia città preferita è Milano perché è moderna, elegante e piena di vita",
                "Adoro la Toscana per i suoi paesaggi bellissimi e i piccoli borghi medievali"
            ]
        },
        {
            question: "Preferisci la spiaggia o la montagna?",
            hint: "Usa: 'Preferisco...'",
            shortAnswers: ["La spiaggia", "La montagna", "Entrambe", "Dipende"],
            longAnswers: [
                "Preferisco la spiaggia perché mi piace il mare e rilassarmi al sole",
                "Mi piace di più la montagna perché l'aria è fresca e i paesaggi sono bellissimi",
                "Adoro il mare perché posso nuotare e fare sport acquatici",
                "Preferisco andare in montagna perché mi piace camminare e fare trekking"
            ]
        },
        {
            question: "Come preferisci viaggiare?",
            hint: "Usa: 'Preferisco viaggiare...'",
            shortAnswers: ["In aereo", "In treno", "In macchina", "In autobus"],
            longAnswers: [
                "Preferisco viaggiare in aereo perché è veloce e comodo per le lunghe distanze",
                "Mi piace viaggiare in treno perché posso vedere il paesaggio e rilassarmi",
                "Preferisco andare in macchina perché ho più libertà e posso fermarmi dove voglio",
                "Adoro viaggiare in autobus perché è economico e posso conoscere persone nuove"
            ]
        },
        {
            question: "Hai mai viaggiato da solo?",
            hint: "Usa: 'Sì, ho viaggiato...' o 'No, preferisco...'",
            shortAnswers: ["Sì, in Europa", "No, mai", "Sì, mi piace", "No, preferisco compagnia"],
            longAnswers: [
                "Sì, ho viaggiato da solo in Europa ed è stata un'esperienza incredibile",
                "No, non ho mai viaggiato da solo ma mi piacerebbe provare",
                "Sì, mi piace l'indipendenza di viaggiare da solo e decidere tutto io",
                "No, preferisco viaggiare con amici perché è più divertente condividere l'esperienza"
            ]
        },
        {
            question: "Cosa fai quando viaggi?",
            hint: "Usa: 'Quando viaggio...'",
            shortAnswers: ["Visito musei", "Provo il cibo", "Faccio foto", "Parlo con la gente"],
            longAnswers: [
                "Quando viaggio, visito sempre i musei perché mi piace imparare la storia del posto",
                "Mi piace provare il cibo locale perché è il modo migliore per conoscere la cultura",
                "Faccio molte foto per ricordare i momenti belli e condividerli con gli amici",
                "Parlo con la gente del posto perché mi piace conoscere le loro storie"
            ]
        },
        {
            question: "Preferisci pianificare tutto o essere spontaneo?",
            hint: "Usa: 'Preferisco...'",
            shortAnswers: ["Pianificare tutto", "Essere spontaneo", "Un po' entrambi", "Dipende"],
            longAnswers: [
                "Preferisco pianificare tutto per essere organizzato e non perdere tempo",
                "Mi piace essere spontaneo e decidere sul momento cosa fare",
                "Pianifico solo l'alloggio e i trasporti, il resto lo decido sul momento",
                "Preferisco avere un piano generale ma con flessibilità per cambiare"
            ]
        },
        {
            question: "Qual è il viaggio più lungo che hai fatto?",
            hint: "Usa: 'Il viaggio più lungo è stato...'",
            shortAnswers: ["In Australia", "In Giappone", "In Sud America", "Un weekend"],
            longAnswers: [
                "Il viaggio più lungo è stato in Australia, sono stato via per un mese",
                "Sono andato in Giappone per tre settimane ed è stato fantastico",
                "Ho fatto un viaggio di un mese in Sud America visitando diversi paesi",
                "Il più lungo è stato solo un weekend a Parigi, ma vorrei fare viaggi più lunghi"
            ]
        },
        {
            question: "Dove vorresti andare per il tuo prossimo viaggio?",
            hint: "Usa: 'Per il prossimo viaggio vorrei...'",
            shortAnswers: ["In Islanda", "Al Machu Picchu", "A Venezia", "In Patagonia"],
            longAnswers: [
                "Per il prossimo viaggio vorrei andare in Islanda per vedere l'aurora boreale",
                "Mi piacerebbe visitare il Machu Picchu in Perù perché sembra magico",
                "Vorrei tornare a Venezia perché la prima volta non ho visto tutto",
                "Voglio esplorare la Patagonia per i suoi paesaggi naturali incredibili"
            ]
        },
        {
            question: "Ti piace fare shopping quando viaggi?",
            hint: "Usa: 'Sì, mi piace...' o 'No, preferisco...'",
            shortAnswers: ["Sì, molto", "No, per niente", "A volte", "Solo souvenir"],
            longAnswers: [
                "Sì, mi piace molto fare shopping quando viaggio per comprare cose tipiche del posto",
                "No, non mi piace fare shopping quando viaggio, preferisco visitare e vedere cose nuove",
                "A volte compro qualcosa se trovo qualcosa di speciale o unico",
                "Compro solo piccoli souvenir per ricordare il viaggio e regalare agli amici"
            ]
        },
        {
            question: "Qual è la cosa più strana che hai mangiato in viaggio?",
            hint: "Usa: 'La cosa più strana è stata...'",
            shortAnswers: ["Sushi", "Insetti", "Trippa", "Niente di strano"],
            longAnswers: [
                "La cosa più strana è stata il sushi in Giappone, non ero abituato al pesce crudo",
                "Ho mangiato insetti fritti in Thailandia, era una sfida ma interessante",
                "Ho provato la trippa a Firenze, non mi è piaciuta molto ma l'ho provata",
                "Non ho mai mangiato niente di veramente strano, preferisco i cibi familiari"
            ]
        },
        {
            question: "Viaggi con molti bagagli o viaggi leggero?",
            hint: "Usa: 'Viaggio con...' o 'Preferisco viaggiare...'",
            shortAnswers: ["Molti bagagli", "Leggero", "Dipende", "Solo uno zaino"],
            longAnswers: [
                "Viaggio sempre con molti bagagli perché mi piace avere tutto quello che potrebbe servirmi",
                "Preferisco viaggiare leggero con solo uno zaino, è più comodo e pratico",
                "Dipende dalla durata del viaggio, per un weekend porto poco",
                "Cerco sempre di viaggiare con il minimo indispensabile per essere più libero"
            ]
        },
        {
            question: "Preferisci hotel o Airbnb?",
            hint: "Usa: 'Preferisco...' e spiega perché",
            shortAnswers: ["Hotel", "Airbnb", "Dipende", "Ostelli"],
            longAnswers: [
                "Preferisco gli hotel perché offrono più servizi e sono più comodi",
                "Mi piace Airbnb perché è più economico e puoi vivere come un locale",
                "Dipende dal viaggio, per lavoro hotel, per vacanza Airbnb",
                "Preferisco gli ostelli quando viaggio da solo perché posso conoscere persone"
            ]
        },
        {
            question: "Hai mai perso un volo o un treno?",
            hint: "Usa: 'Sì, una volta...' o 'No, mai'",
            shortAnswers: ["Sì, un volo", "No, mai", "Sì, un treno", "Quasi"],
            longAnswers: [
                "Sì, una volta ho perso un volo perché c'era traffico e sono arrivato tardi",
                "No, non ho mai perso un volo o un treno, sono sempre molto puntuale",
                "Sì, ho perso un treno perché mi sono addormentato in stazione",
                "Quasi ho perso un volo ma sono corso e sono arrivato all'ultimo minuto"
            ]
        },
        {
            question: "Qual è il tuo ricordo di viaggio più bello?",
            hint: "Usa: 'Il mio ricordo più bello è...'",
            shortAnswers: ["Il tramonto a Santorini", "Safari in Africa", "Aurora boreale", "Machu Picchu"],
            longAnswers: [
                "Il mio ricordo più bello è vedere il tramonto a Santorini, era magico",
                "Fare un safari in Africa e vedere gli animali in libertà è stato incredibile",
                "Vedere l'aurora boreale in Islanda è stata un'esperienza indimenticabile",
                "Visitare il Machu Picchu in Perù è stato il momento più emozionante della mia vita"
            ]
        },
        {
            question: "Parli altre lingue quando viaggi?",
            hint: "Usa: 'Sì, parlo...' o 'No, uso...'",
            shortAnswers: ["Sì, inglese", "No, uso gesti", "Sì, un po'", "No, uso app"],
            longAnswers: [
                "Sì, parlo inglese abbastanza bene quindi riesco a comunicare nella maggior parte dei paesi",
                "No, non parlo altre lingue bene, uso gesti e cerco di farmi capire",
                "Sì, parlo un po' di spagnolo e francese, mi aiuta molto quando viaggio",
                "No, ma uso app di traduzione sul telefono che funzionano abbastanza bene"
            ]
        },
        {
            question: "Qual è il paese più interessante che hai visitato?",
            hint: "Usa: 'Il paese più interessante è stato...'",
            shortAnswers: ["Il Giappone", "L'India", "Il Marocco", "L'Islanda"],
            longAnswers: [
                "Il paese più interessante è stato il Giappone per la sua cultura unica e la tecnologia",
                "L'India mi ha colpito molto per i colori, i sapori e la spiritualità",
                "Il Marocco è stato affascinante per i mercati, l'architettura e l'ospitalità",
                "L'Islanda mi ha stupito per i paesaggi naturali incredibili e l'energia geotermica"
            ]
        },
        {
            question: "Preferisci viaggi culturali o di relax?",
            hint: "Usa: 'Preferisco viaggi...'",
            shortAnswers: ["Culturali", "Di relax", "Entrambi", "Dipende"],
            longAnswers: [
                "Preferisco viaggi culturali perché mi piace visitare musei, monumenti e imparare la storia",
                "Mi piacciono i viaggi di relax, voglio solo stare in spiaggia e non pensare a niente",
                "Mi piacciono entrambi, dipende dal mio stato d'animo e da quanto sono stanco",
                "Dipende dalla stagione, d'estate relax, in altre stagioni più culturali"
            ]
        },
        {
            question: "Hai mai fatto un viaggio in solitaria?",
            hint: "Usa: 'Sì, sono andato...' o 'No, preferisco...'",
            shortAnswers: ["Sì, in Europa", "No, mai", "Sì, è stato bello", "No, ho paura"],
            longAnswers: [
                "Sì, sono andato in Europa da solo per un mese ed è stata un'esperienza di crescita personale",
                "No, non ho mai viaggiato da solo, preferisco avere compagnia",
                "Sì, ho fatto un viaggio in solitaria ed è stato bellissimo, molto liberatorio",
                "No, ho un po' paura di viaggiare da solo, preferisco andare con amici o famiglia"
            ]
        },
        {
            question: "Qual è la tua destinazione da sogno?",
            hint: "Usa: 'La mia destinazione da sogno è...'",
            shortAnswers: ["Le Maldive", "La Nuova Zelanda", "L'Alaska", "La Polinesia"],
            longAnswers: [
                "La mia destinazione da sogno sono le Maldive per le spiagge paradisiache e il mare cristallino",
                "Vorrei tanto andare in Nuova Zelanda per i paesaggi mozzafiato e le attività all'aperto",
                "L'Alaska è il mio sogno per vedere la natura selvaggia e gli animali",
                "La Polinesia Francese è la mia destinazione da sogno per il mare e la tranquillità"
            ]
        },
        {
            question: "Ti piace provare il cibo locale quando viaggi?",
            hint: "Usa: 'Sì, sempre...' o 'No, preferisco...'",
            shortAnswers: ["Sì, sempre", "No, sono schizzinoso", "Sì, è importante", "Dipende"],
            longAnswers: [
                "Sì, sempre provo il cibo locale perché è il modo migliore per conoscere una cultura",
                "No, sono un po' schizzinoso e preferisco mangiare cose che conosco",
                "Sì, penso che sia molto importante provare la cucina locale quando si viaggia",
                "Dipende, alcune cose le provo volentieri, altre mi fanno un po' paura"
            ]
        }
    ],
    identity: [
        {
            question: "Come ti chiami?",
            hint: "Usa: 'Mi chiamo...'",
            shortAnswers: ["Marco", "Maria", "Luca", "Sofia"],
            longAnswers: [
                "Mi chiamo Marco e sono molto felice di conoscerti",
                "Sono Maria, piacere di fare la tua conoscenza",
                "Il mio nome è Luca, vengo da Roma",
                "Mi chiamo Sofia e studio italiano da sei mesi"
            ]
        },
        {
            question: "Di dove sei?",
            hint: "Usa: 'Sono di...' o 'Vengo da...'",
            shortAnswers: ["Di Roma", "Dalla Spagna", "Italiano/a", "Da Milano"],
            longAnswers: [
                "Sono di Roma, la capitale d'Italia, una città bellissima e piena di storia",
                "Vengo dalla Spagna ma vivo in Italia da tre anni",
                "Sono italiano, nato e cresciuto a Napoli",
                "Vengo da Milano, la città della moda e del business"
            ]
        },
        {
            question: "Quanti anni hai?",
            hint: "Usa: 'Ho... anni'",
            shortAnswers: ["25 anni", "30 anni", "18 anni", "40 anni"],
            longAnswers: [
                "Ho venticinque anni e lavoro come insegnante",
                "Ho trent'anni e sono sposato con due figli",
                "Ho diciotto anni e studio all'università",
                "Ho quaranta anni e vivo a Firenze da sempre"
            ]
        },
        {
            question: "Che lavoro fai?",
            hint: "Usa: 'Sono...' o 'Faccio...'",
            shortAnswers: ["Studente", "Insegnante", "Ingegnere", "Medico"],
            longAnswers: [
                "Sono studente, studio medicina all'università di Bologna",
                "Lavoro come insegnante di italiano in una scuola superiore",
                "Sono ingegnere informatico e lavoro per una grande azienda",
                "Faccio il medico in un ospedale, sono specializzato in pediatria"
            ]
        },
        {
            question: "Cosa ti piace fare nel tempo libero?",
            hint: "Usa: 'Nel tempo libero...' o 'Mi piace...'",
            shortAnswers: ["Leggere", "Ascoltare musica", "Guardare film", "Uscire con amici"],
            longAnswers: [
                "Nel tempo libero mi piace leggere libri, soprattutto romanzi storici",
                "Mi piace ascoltare musica di tutti i tipi, dal classico al rock",
                "Adoro guardare film al cinema, specialmente i film d'azione",
                "Mi piace uscire con gli amici, andare al bar o al ristorante"
            ]
        },
        {
            question: "Hai fratelli o sorelle?",
            hint: "Usa: 'Sì, ho...' o 'No, sono figlio/a unico/a'",
            shortAnswers: ["Un fratello", "Due sorelle", "Figlio unico", "Un fratello e una sorella"],
            longAnswers: [
                "Sì, ho un fratello più grande che vive a Torino",
                "Ho due sorelle più piccole, una ha 15 anni e l'altra 12",
                "No, sono figlio unico e a volte mi sento un po' solo",
                "Sì, ho un fratello e una sorella, siamo molto uniti"
            ]
        },
        {
            question: "Dove abiti?",
            hint: "Usa: 'Abito a...' o 'Vivo in...'",
            shortAnswers: ["A Roma", "In un paese", "In un appartamento", "In campagna"],
            longAnswers: [
                "Abito a Roma in centro, vicino al Colosseo",
                "Vivo in un piccolo paese vicino a Milano, è molto tranquillo",
                "Abito in un appartamento in città con la mia famiglia",
                "Vivo in una casa in campagna, lontano dal rumore della città"
            ]
        },
        {
            question: "Qual è il tuo piatto preferito?",
            hint: "Usa: 'Il mio piatto preferito è...'",
            shortAnswers: ["La pizza", "La carbonara", "Il risotto", "Il tiramisù"],
            longAnswers: [
                "Il mio piatto preferito è la pizza margherita, semplice ma deliziosa",
                "Adoro la pasta alla carbonara, è il mio comfort food",
                "Mi piace molto il risotto ai funghi, specialmente quello fatto da mia nonna",
                "Il mio preferito è il tiramisù, non posso resistere ai dolci"
            ]
        },
        {
            question: "Hai animali domestici?",
            hint: "Usa: 'Sì, ho...' o 'No, ma mi piacerebbe...'",
            shortAnswers: ["Un cane", "Due gatti", "No, ma vorrei", "Un pesce"],
            longAnswers: [
                "Sì, ho un cane che si chiama Max, è un golden retriever molto affettuoso",
                "Ho due gatti, sono molto indipendenti ma dolci",
                "No, ma mi piacerebbe avere un cane quando avrò più tempo",
                "Sì, ho un pesce rosso in un acquario, è molto rilassante guardarlo"
            ]
        },
        {
            question: "Che tipo di musica ascolti?",
            hint: "Usa: 'Ascolto...' o 'Mi piace...'",
            shortAnswers: ["Pop", "Rock", "Jazz", "Musica italiana"],
            longAnswers: [
                "Ascolto principalmente musica pop, mi piacciono le canzoni orecchiabili",
                "Mi piace il rock classico, band come i Queen e i Led Zeppelin",
                "Ascolto di tutto, ma preferisco il jazz quando voglio rilassarmi",
                "Adoro la musica italiana, soprattutto i cantautori come De André"
            ]
        },
        {
            question: "Qual è il tuo colore preferito?",
            hint: "Usa: 'Il mio colore preferito è...'",
            shortAnswers: ["Il blu", "Il verde", "Il rosso", "Il nero"],
            longAnswers: [
                "Il mio colore preferito è il blu perché mi rilassa e mi ricorda il mare",
                "Mi piace molto il verde perché è il colore della natura",
                "Preferisco il rosso perché è un colore forte e passionale",
                "Adoro il nero perché è elegante e va bene con tutto"
            ]
        },
        {
            question: "Sei una persona mattiniera o notturna?",
            hint: "Usa: 'Sono una persona...'",
            shortAnswers: ["Mattiniera", "Notturna", "Dipende", "Né l'una né l'altra"],
            longAnswers: [
                "Sono una persona mattiniera, mi sveglio presto e sono più produttivo al mattino",
                "Sono decisamente notturno, la sera sono più creativo e concentrato",
                "Dipende dal periodo, a volte sono mattiniero, a volte notturno",
                "Non sono né mattiniero né notturno, preferisco il pomeriggio"
            ]
        },
        {
            question: "Qual è il tuo libro preferito?",
            hint: "Usa: 'Il mio libro preferito è...'",
            shortAnswers: ["Il Piccolo Principe", "1984", "Harry Potter", "La Divina Commedia"],
            longAnswers: [
                "Il mio libro preferito è Il Piccolo Principe perché è profondo e poetico",
                "Mi piace molto 1984 di Orwell perché fa riflettere sulla società",
                "Adoro la saga di Harry Potter perché mi ha fatto sognare da bambino",
                "La Divina Commedia è il mio preferito per la sua bellezza letteraria"
            ]
        },
        {
            question: "Sei bravo a cucinare?",
            hint: "Usa: 'Sì, sono bravo...' o 'No, non sono...'",
            shortAnswers: ["Sì, molto", "No, per niente", "Abbastanza", "Sto imparando"],
            longAnswers: [
                "Sì, sono molto bravo a cucinare, mi piace sperimentare nuove ricette",
                "No, non sono per niente bravo, brucio anche l'acqua",
                "Sono abbastanza bravo, so fare i piatti base ma niente di complicato",
                "Sto imparando a cucinare, seguo corsi online e miglioro ogni giorno"
            ]
        },
        {
            question: "Qual è il tuo sogno più grande?",
            hint: "Usa: 'Il mio sogno più grande è...'",
            shortAnswers: ["Viaggiare il mondo", "Avere una famiglia", "Essere felice", "Avere successo"],
            longAnswers: [
                "Il mio sogno più grande è viaggiare il mondo e conoscere culture diverse",
                "Vorrei avere una famiglia felice e vivere in una bella casa",
                "Il mio sogno è semplicemente essere felice e in pace con me stesso",
                "Voglio avere successo nel mio lavoro e fare la differenza nella società"
            ]
        },
        {
            question: "Sei una persona timida o estroversa?",
            hint: "Usa: 'Sono una persona...'",
            shortAnswers: ["Timida", "Estroversa", "Nel mezzo", "Dipende"],
            longAnswers: [
                "Sono una persona abbastanza timida, mi ci vuole tempo per aprirmi con le persone nuove",
                "Sono molto estroverso, mi piace conoscere gente nuova e socializzare",
                "Sono nel mezzo, non troppo timido ma neanche super estroverso",
                "Dipende dalla situazione, con gli amici sono estroverso, con gli sconosciuti più timido"
            ]
        },
        {
            question: "Qual è la tua stagione preferita?",
            hint: "Usa: 'La mia stagione preferita è...'",
            shortAnswers: ["L'estate", "L'inverno", "La primavera", "L'autunno"],
            longAnswers: [
                "La mia stagione preferita è l'estate perché fa caldo e posso andare al mare",
                "Adoro l'inverno per la neve, il Natale e l'atmosfera accogliente",
                "La primavera è la mia preferita perché tutto fiorisce e le giornate si allungano",
                "Mi piace l'autunno per i colori delle foglie e le temperature miti"
            ]
        },
        {
            question: "Hai tatuaggi o piercing?",
            hint: "Usa: 'Sì, ho...' o 'No, non mi piacciono'",
            shortAnswers: ["Sì, un tatuaggio", "No, niente", "Sì, piercing", "Sì, entrambi"],
            longAnswers: [
                "Sì, ho un tatuaggio sul braccio che rappresenta qualcosa di importante per me",
                "No, non ho né tatuaggi né piercing, non mi piacciono molto",
                "Sì, ho alcuni piercing alle orecchie, mi piace come stanno",
                "Sì, ho sia tatuaggi che piercing, mi piace esprimermi attraverso il corpo"
            ]
        },
        {
            question: "Qual è il tuo film preferito?",
            hint: "Usa: 'Il mio film preferito è...'",
            shortAnswers: ["Il Padrino", "Forrest Gump", "Inception", "La vita è bella"],
            longAnswers: [
                "Il mio film preferito è Il Padrino perché è un capolavoro del cinema",
                "Adoro Forrest Gump per la sua storia toccante e i messaggi positivi",
                "Inception è il mio preferito per la trama complessa e gli effetti speciali",
                "La vita è bella mi fa sempre piangere, è un film italiano meraviglioso"
            ]
        },
        {
            question: "Sei bravo con la tecnologia?",
            hint: "Usa: 'Sì, sono bravo...' o 'No, ho difficoltà...'",
            shortAnswers: ["Sì, molto", "No, per niente", "Abbastanza", "Dipende"],
            longAnswers: [
                "Sì, sono molto bravo con la tecnologia, lavoro nel settore informatico",
                "No, non sono per niente bravo, ho sempre bisogno di aiuto con il computer",
                "Sono abbastanza bravo, so usare le cose base ma non sono un esperto",
                "Dipende, con alcune cose sono bravo, con altre ho più difficoltà"
            ]
        },
        {
            question: "Qual è la tua paura più grande?",
            hint: "Usa: 'La mia paura più grande è...'",
            shortAnswers: ["L'altezza", "I ragni", "Il buio", "Parlare in pubblico"],
            longAnswers: [
                "La mia paura più grande è l'altezza, non riesco a stare su posti alti",
                "Ho una paura terribile dei ragni, anche quelli piccoli mi spaventano",
                "Ho paura del buio da quando ero bambino, ancora oggi mi mette a disagio",
                "La mia paura più grande è parlare in pubblico, mi viene l'ansia"
            ]
        }
    ],
    opinions: [
        {
            question: "Pensi che i social media abbiano un impatto positivo o negativo sulla società?",
            hint: "Usa: 'Secondo me...', 'Da un lato...', 'Tuttavia...', 'Per questo motivo...'",
            answers: [
                "Secondo me, i social media hanno sia aspetti positivi che negativi. Da un lato, ci permettono di rimanere in contatto con amici e familiari lontani. Inoltre, possiamo condividere informazioni rapidamente. Dall'altro lato, tuttavia, possono creare dipendenza e problemi di privacy. Per questo motivo, penso che sia importante usarli con moderazione.",
                "Personalmente, credo che i social media abbiano più svantaggi che vantaggi. Prima di tutto, molte persone passano troppo tempo online invece di vivere nel mondo reale. In secondo luogo, le fake news si diffondono facilmente. Infine, possono causare problemi di autostima, specialmente tra i giovani.",
                "A mio parere, i social media sono uno strumento molto utile se usati correttamente. Innanzitutto, facilitano la comunicazione globale. Inoltre, permettono alle piccole imprese di crescere. Naturalmente, ci sono anche rischi, come la disinformazione. Tuttavia, i benefici superano gli svantaggi se siamo consapevoli."
            ]
        },
        {
            question: "È meglio vivere in città o in campagna?",
            hint: "Usa: 'Preferisco...', 'Il vantaggio è...', 'Anche se...', 'In conclusione...'",
            answers: [
                "Preferisco vivere in città perché ci sono più opportunità di lavoro e svago. Il vantaggio principale è la comodità: tutto è vicino e accessibile. Anche se la città può essere caotica e stressante, offre una vita culturale ricca con musei, teatri e ristoranti. D'altra parte, la campagna è più tranquilla, ma per me la città è più stimolante.",
                "Secondo me, la campagna è molto meglio della città. Prima di tutto, l'aria è più pulita e c'è meno inquinamento. Inoltre, la vita è più rilassata e meno stressante. Anche se ci sono meno servizi, la qualità della vita è superiore. In conclusione, preferisco la tranquillità e il contatto con la natura.",
                "Penso che dipenda dalla fase della vita. Da giovane, la città offre più opportunità per studiare e lavorare. Tuttavia, quando si ha una famiglia, la campagna può essere ideale per crescere i figli in un ambiente sano. In definitiva, entrambe hanno vantaggi e svantaggi."
            ]
        },
        {
            question: "È importante imparare più lingue straniere?",
            hint: "Usa: 'Ritengo che...', 'In primo luogo...', 'Inoltre...', 'Pertanto...'",
            answers: [
                "Ritengo che imparare lingue straniere sia estremamente importante. In primo luogo, apre opportunità professionali in un mondo sempre più globalizzato. Oltre a questo, permette di conoscere altre culture e modi di pensare. Per di più, studi dimostrano che migliora le capacità cognitive. Pertanto, consiglio a tutti di studiare almeno una lingua straniera.",
                "Secondo me, sì, ma non è essenziale per tutti. Certamente, per chi lavora nel commercio internazionale o nel turismo è fondamentale. Tuttavia, con la tecnologia moderna, la traduzione automatica sta migliorando rapidamente. Inoltre, non tutti hanno il tempo o le risorse per studiare lingue. Quindi, è utile ma non indispensabile.",
                "Penso che sia una delle cose più preziose che si possano fare. Non solo per motivi pratici, ma anche per crescita personale. Quando impari una lingua, scopri una nuova prospettiva sul mondo. Inoltre, ti permette di comunicare con milioni di persone in più. Infine, viaggiare diventa molto più ricco quando parli la lingua locale."
            ]
        },
        {
            question: "Dovremmo preoccuparci di più del cambiamento climatico?",
            hint: "Usa: 'Assolutamente...', 'È fondamentale...', 'Non solo... ma anche...', 'Bisogna...'",
            answers: [
                "Assolutamente sì! Il cambiamento climatico è la sfida più importante del nostro tempo. È fondamentale che tutti, governi e cittadini, agiscano immediatamente. Non solo dobbiamo ridurre le emissioni, ma anche cambiare il nostro stile di vita. Di conseguenza, bisogna usare meno plastica, risparmiare energia e scegliere trasporti sostenibili.",
                "Penso che sia un problema serio, ma spesso viene esagerato. Certamente, dobbiamo proteggere l'ambiente, ma senza creare panico. È importante trovare un equilibrio tra sviluppo economico e sostenibilità. Inoltre, la tecnologia può aiutarci a risolvere molti problemi. Quindi, sì, dobbiamo preoccuparci, ma con un approccio razionale.",
                "Secondo me, non ci preoccupiamo abbastanza. I segnali sono evidenti: temperature in aumento, ghiacciai che si sciolgono, eventi climatici estremi. Tuttavia, molte persone ignorano il problema. È necessario che i governi investano in energie rinnovabili e che le aziende riducano l'inquinamento. Inoltre, ognuno di noi deve fare la propria parte."
            ]
        },
        {
            question: "È meglio lavorare da casa o in ufficio?",
            hint: "Usa: 'Secondo me...', 'Il vantaggio è...', 'Lo svantaggio è...', 'Dipende da...'",
            answers: [
                "Secondo me, lavorare da casa è meglio per la flessibilità. Il vantaggio principale è che risparmi tempo negli spostamenti e puoi organizzare meglio la giornata. Tuttavia, lo svantaggio è che può essere difficile separare vita privata e lavoro. Inoltre, manca l'interazione sociale con i colleghi. In conclusione, dipende dal tipo di lavoro e dalla personalità.",
                "Personalmente, preferisco lavorare in ufficio. Prima di tutto, è più facile concentrarsi senza le distrazioni di casa. Inoltre, la collaborazione con i colleghi è più efficace di persona. Anche se il tragitto può essere stressante, l'ambiente professionale mi aiuta a essere più produttivo. Quindi, per me l'ufficio è la scelta migliore.",
                "Penso che la soluzione ideale sia un modello ibrido. Da un lato, lavorare da casa offre flessibilità e comfort. Dall'altro, andare in ufficio alcune volte alla settimana mantiene i rapporti sociali e la cultura aziendale. In questo modo, si possono combinare i vantaggi di entrambe le opzioni. Pertanto, il lavoro ibrido è il futuro."
            ]
        },
        {
            question: "La tecnologia ci rende più o meno sociali?",
            hint: "Usa: 'A mio parere...', 'Da una prospettiva...', 'Bisogna considerare...', 'In definitiva...'",
            answers: [
                "A mio parere, la tecnologia ci rende meno sociali nelle interazioni faccia a faccia. Anche se possiamo comunicare con persone in tutto il mondo, spesso ignoriamo chi ci sta vicino. Bisogna considerare che molte persone preferiscono messaggiare piuttosto che parlare di persona. In definitiva, stiamo perdendo le abilità sociali tradizionali.",
                "Secondo me, la tecnologia ci rende più sociali in modi diversi. Da una prospettiva, possiamo mantenere contatti con amici lontani che altrimenti perderemmo. Inoltre, le persone timide trovano più facile comunicare online. Certamente, non sostituisce l'interazione fisica, ma amplia le nostre possibilità sociali. Quindi, è uno strumento che arricchisce le relazioni.",
                "Penso che dipenda da come usiamo la tecnologia. Se la usiamo per complementare le relazioni reali, può essere positiva. Tuttavia, se sostituisce completamente l'interazione fisica, diventa un problema. Bisogna trovare un equilibrio tra mondo digitale e reale. In conclusione, la tecnologia è neutra: siamo noi a decidere come influenza la nostra socialità."
            ]
        },
        {
            question: "È importante seguire la moda?",
            hint: "Usa: 'Ritengo che...', 'Non è necessario...', 'Ciò che conta è...', 'Alla fine...'",
            answers: [
                "Ritengo che seguire la moda non sia importante. Ciò che conta è sentirsi a proprio agio con quello che si indossa. Inoltre, la moda cambia continuamente e può essere costoso stare al passo. È meglio sviluppare un proprio stile personale piuttosto che seguire ciecamente le tendenze. Alla fine, l'importante è essere autentici.",
                "Secondo me, la moda è una forma di espressione personale e può essere divertente. Non è necessario seguire ogni tendenza, ma essere consapevoli dello stile può aiutare nella vita professionale e sociale. Inoltre, vestirsi bene aumenta la fiducia in se stessi. Quindi, sì, la moda ha la sua importanza, ma senza esagerare.",
                "Personalmente, penso che la moda sia superficiale e poco importante. Ci sono cose molto più significative nella vita come l'educazione, le relazioni e i valori personali. Inoltre, l'industria della moda spesso sfrutta i lavoratori e danneggia l'ambiente. Pertanto, è meglio concentrarsi su aspetti più sostanziali della vita."
            ]
        },
        {
            question: "Dovremmo mangiare meno carne per aiutare l'ambiente?",
            hint: "Usa: 'Sono convinto che...', 'È evidente che...', 'Sebbene...', 'Di fatto...'",
            answers: [
                "Sono convinto che dovremmo ridurre il consumo di carne. È evidente che l'allevamento intensivo contribuisce enormemente al cambiamento climatico. Inoltre, richiede molta acqua e terra. Sebbene la carne sia parte della nostra dieta tradizionale, dobbiamo adattarci per il bene del pianeta. Di fatto, anche ridurre il consumo senza eliminarlo completamente farebbe una grande differenza.",
                "Secondo me, sì, ma deve essere una scelta personale, non imposta. Certamente, l'impatto ambientale dell'allevamento è significativo. Tuttavia, ci sono anche allevamenti sostenibili che rispettano l'ambiente. Inoltre, la carne fornisce nutrienti importanti. Quindi, la soluzione è mangiare meno carne ma di migliore qualità, da fonti sostenibili.",
                "Personalmente, penso che il problema sia più complesso. Non è solo la carne, ma tutto il sistema alimentare che deve cambiare. Anche l'agricoltura intensiva danneggia l'ambiente. Inoltre, sprechiamo troppo cibo. Sebbene ridurre la carne possa aiutare, dobbiamo ripensare completamente come produciamo e consumiamo il cibo. In sintesi, serve un cambiamento sistemico."
            ]
        },
        {
            question: "I libri cartacei sono meglio degli e-book?",
            hint: "Usa: 'Dal mio punto di vista...', 'Per quanto riguarda...', 'Nondimeno...', 'Tutto sommato...'",
            answers: [
                "Dal mio punto di vista, i libri cartacei sono insostituibili. C'è qualcosa di speciale nel toccare le pagine e sentire l'odore della carta. Inoltre, non affaticano gli occhi come gli schermi. Per quanto riguarda la praticità, gli e-book sono comodi per viaggiare, ma l'esperienza di lettura non è la stessa. Tutto sommato, preferisco i libri tradizionali.",
                "Secondo me, gli e-book sono superiori per molti motivi. Prima di tutto, puoi portare centinaia di libri in un solo dispositivo. Inoltre, sono più economici e più ecologici perché non richiedono carta. Nondimeno, capisco il fascino dei libri fisici. Tuttavia, per praticità e sostenibilità, gli e-book sono la scelta migliore.",
                "Personalmente, penso che entrambi abbiano il loro posto. I libri cartacei sono perfetti per casa e per la collezione personale. Gli e-book sono ideali per viaggiare o per leggere in movimento. Per quanto riguarda la lettura stessa, l'importante è il contenuto, non il formato. Quindi, non c'è una risposta giusta: dipende dalla situazione e dalle preferenze personali."
            ]
        },
        {
            question: "L'intelligenza artificiale migliorerà o peggiorerà la nostra vita?",
            hint: "Usa: 'Credo che...', 'Da una parte...', 'Allo stesso tempo...', 'Nonostante...', 'In futuro...'",
            answers: [
                "Credo che l'intelligenza artificiale migliorerà significativamente la nostra vita. Da una parte, può aiutarci in medicina, rendendo le diagnosi più precise. Inoltre, può automatizzare lavori pericolosi o ripetitivi. Allo stesso tempo, dobbiamo essere cauti e stabilire regole etiche. Nonostante i rischi, penso che i benefici siano maggiori se la usiamo responsabilmente.",
                "Personalmente, sono preoccupato per l'intelligenza artificiale. Prima di tutto, potrebbe eliminare molti posti di lavoro. In secondo luogo, solleva questioni etiche importanti sulla privacy e il controllo. Anche se può essere utile in alcuni campi, i rischi sono troppo grandi. In futuro, potremmo perdere il controllo sulla tecnologia che abbiamo creato.",
                "Secondo me, dipende da come la utilizziamo. L'intelligenza artificiale è solo uno strumento: può essere usata per il bene o per il male. Da un lato, può risolvere problemi complessi e migliorare l'efficienza. Dall'altro, può essere usata per scopi negativi. Quindi, è fondamentale che ci siano leggi e regolamenti per guidarne lo sviluppo."
            ]
        },
        {
            question: "I giovani di oggi hanno una vita più facile o più difficile rispetto al passato?",
            hint: "Usa: 'A mio avviso...', 'Se da un lato...', 'Per contro...', 'Ciò nonostante...', 'In sintesi...'",
            answers: [
                "A mio avviso, i giovani di oggi affrontano sfide diverse ma non necessariamente più facili. Se da un lato hanno accesso a tecnologia e informazioni illimitate, dall'altro devono competere in un mercato del lavoro molto più difficile. Per contro, le generazioni passate avevano meno opportunità educative. Ciò nonostante, penso che ogni epoca abbia le sue difficoltà specifiche.",
                "Secondo me, la vita è più difficile per i giovani di oggi. Prima di tutto, il costo della vita è aumentato enormemente, specialmente per la casa. Inoltre, il mercato del lavoro è instabile e precario. Anche se abbiamo più tecnologia, questo crea anche più stress e pressione sociale. In sintesi, le sfide economiche e psicologiche sono maggiori rispetto al passato.",
                "Personalmente, credo che i giovani di oggi abbiano più opportunità. Grazie a internet, possono imparare qualsiasi cosa gratuitamente. Inoltre, ci sono più diritti e libertà rispetto al passato. Certamente, ci sono anche nuove sfide come la competizione globale. Tuttavia, nel complesso, penso che le possibilità siano maggiori se si è disposti a lavorare sodo."
            ]
        }
    ]
};
