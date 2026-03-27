// Challenges data — paragraph-level exercises combining multiple grammar points
// Each challenge has a situation, a set of fill-in-the-blank exercises, and answers

const challengesData = {
    ch_01: {
        id: "ch_01",
        title: "Al Negozio di Abbigliamento",
        icon: "👗",
        situation: "Sei in un negozio di abbigliamento a Firenze. Vuoi comprare un vestito per una cena speciale.",
        grammarFocus: ["Condizionale", "Imperativo", "Imperfetto", "Congiuntivo"],
        exercises: [
            { q: "Buongiorno! _____ (volere — condizionale) vedere qualcosa di elegante.", a: "vorrei", hint: "Condizionale di VOLERE — forma cortese" },
            { q: "Che taglia _____ (portare — presente)?", a: "porta", hint: "Presente di PORTARE — Lei formale" },
            { q: "_____ (portare — presente) la quarantadue.", a: "Porto", hint: "Presente di PORTARE — io" },
            { q: "_____ (cercare — presente) qualcosa di classico.", a: "Cerco", hint: "Presente di CERCARE — io" },
            { q: "_____ (guardare — imperativo, Lei) questi vestiti!", a: "Guardi", hint: "Imperativo formale di GUARDARE" },
            { q: "_____ (arrivare — passato prossimo) ieri dalla collezione autunnale.", a: "Sono arrivati", hint: "Passato prossimo con ESSERE — loro" },
            { q: "Questo rosso _____ (essere — condizionale) perfetto!", a: "sarebbe", hint: "Condizionale di ESSERE — lui/lei" },
            { q: "_____ (potere — condizionale) provarlo?", a: "Potrei", hint: "Condizionale di POTERE — io" },
            { q: "Il camerino _____ (essere — presente) in fondo a destra.", a: "è", hint: "Presente di ESSERE — lui/lei" },
            { q: "_____ (accomodarsi — imperativo, Lei) pure!", a: "Si accomodi", hint: "Imperativo formale riflessivo" },
            { q: "Quando _____ (essere — imperfetto) giovane, _____ (mettere — imperfetto) sempre vestiti così.", a: "ero / mettevo", hint: "Imperfetto — descrizione abitudine passata" },
            { q: "Le _____ (stare — presente) benissimo!", a: "sta", hint: "Presente di STARE — lui/lei" },
            { q: "Quanto _____ (costare — presente)?", a: "costa", hint: "Presente di COSTARE — lui/lei" },
            { q: "Se _____ (comprare — presente) anche la giacca, _____ (fare — condizionale) uno sconto.", a: "compra / farei", hint: "Presente + Condizionale — ipotesi reale" },
            { q: "Speravo che _____ (costare — congiuntivo) meno.", a: "costasse", hint: "Congiuntivo imperfetto di COSTARE" },
            { q: "_____ (prendere — presente) entrambe.", a: "Le prendo", hint: "Presente di PRENDERE — io" },
            { q: "_____ (potere — condizionale) pagare con la carta?", a: "Potrei", hint: "Condizionale di POTERE — io" },
            { q: "_____ (seguire — imperativo, Lei) alla cassa, per favore.", a: "Segua", hint: "Imperativo formale di SEGUIRE" },
            { q: "_____ (aspettare — imperativo, Lei) un momento.", a: "Aspetti", hint: "Imperativo formale di ASPETTARE" },
            { q: "_____ (andare — presente) a prenderla subito.", a: "Vado", hint: "Presente di ANDARE — io" }
        ]
    },

    ch_02: {
        id: "ch_02",
        title: "Visita al Colosseo",
        icon: "🏛️",
        situation: "Sei a Roma con una guida turistica. State visitando il Colosseo.",
        grammarFocus: ["Passato Prossimo", "Imperfetto", "Imperativo", "Congiuntivo", "Futuro"],
        exercises: [
            { q: "_____ (volere — condizionale) dirvi qualcosa sulla storia di questo posto.", a: "Vorrei", hint: "Condizionale di VOLERE — io" },
            { q: "_____ (potere — condizionale) dirci quando _____ (costruire — passato prossimo) il Colosseo?", a: "Potrebbe / è stato costruito", hint: "Condizionale + Passato prossimo passivo" },
            { q: "Quando _____ (essere — imperfetto) nuovo, _____ (potere — imperfetto) contenere ottantamila spettatori.", a: "era / poteva", hint: "Imperfetto — descrizione nel passato" },
            { q: "Io non _____ (sapere — imperfetto) che _____ (essere — imperfetto) così grande.", a: "sapevo / fosse", hint: "Imperfetto + Congiuntivo imperfetto" },
            { q: "_____ (sapere — presente) che sotto l'arena _____ (esserci — imperfetto) dei tunnel?", a: "Sa / c'era", hint: "Presente + Imperfetto" },
            { q: "_____ (seguire — imperativo, voi) da questa parte.", a: "Seguite", hint: "Imperativo informale plurale" },
            { q: "_____ (stare — imperativo, voi) attenti ai gradini.", a: "State", hint: "Imperativo di STARE — voi" },
            { q: "Penso che _____ (essere — congiuntivo) uno dei posti più emozionanti.", a: "sia", hint: "Congiuntivo presente di ESSERE" },
            { q: "Quando _____ (venire — futuro) di nuovo a Roma, _____ (dovere — futuro) visitare il Foro.", a: "verrà / dovrà", hint: "Futuro di VENIRE e DOVERE" },
            { q: "_____ (volere — condizionale) assolutamente farlo.", a: "Vorrei", hint: "Condizionale di VOLERE — io" },
            { q: "Se _____ (avere — presente) tempo oggi, _____ (potere — condizionale) farlo subito.", a: "avete / potreste", hint: "Presente + Condizionale — ipotesi" },
            { q: "_____ (ricordare — imperativo, voi) che i prezzi sono più alti vicino ai monumenti.", a: "Ricordate", hint: "Imperativo di RICORDARE — voi" },
            { q: "È importante che i turisti _____ (sapere — congiuntivo) queste cose.", a: "sappiano", hint: "Congiuntivo presente di SAPERE" },
            { q: "_____ (guardare — imperativo, voi) in alto: _____ (vedere — presente) quei fori?", a: "Guardate / vedete", hint: "Imperativo + Presente — voi" },
            { q: "_____ (essere — imperfetto) i punti dove _____ (fissare — imperfetto) le travi.", a: "Erano / fissavano", hint: "Imperfetto — descrizione passata" },
            { q: "Quando _____ (essere — imperfetto) intatto, il Colosseo _____ (avere — imperfetto) un tetto.", a: "era / aveva", hint: "Imperfetto — condizione passata" },
            { q: "Non _____ (immaginare — imperfetto) che _____ (avere — imperfetto) un tetto!", a: "immaginavo / avesse", hint: "Imperfetto + Congiuntivo imperfetto" },
            { q: "Ogni volta che _____ (visitare — presente) un posto storico, _____ (imparare — presente) qualcosa.", a: "visito / imparo", hint: "Presente — abitudine attuale" },
            { q: "Quando _____ (essere — imperfetto) giovane, _____ (sognare — imperfetto) di visitare Roma.", a: "ero / sognavo", hint: "Imperfetto — abitudine passata" },
            { q: "_____ (volere — condizionale) comprare una guida turistica.", a: "Vorrei", hint: "Condizionale di VOLERE — io" }
        ]
    },

    ch_03: {
        id: "ch_03",
        title: "Al Mercato Rionale",
        icon: "🛒",
        situation: "Sei al mercato di quartiere a Bologna. Compri ingredienti per una cena italiana.",
        grammarFocus: ["Presente", "Condizionale", "Imperativo formale", "Passato Prossimo", "Imperfetto"],
        exercises: [
            { q: "_____ (volere — condizionale) dei pomodori freschi.", a: "Vorrei", hint: "Condizionale di VOLERE — io" },
            { q: "_____ (arrivare — passato prossimo) stamattina dalla campagna.", a: "Sono arrivati", hint: "Passato prossimo con ESSERE — loro" },
            { q: "_____ (prendere — imperativo, Lei) pure uno e _____ (sentire — imperativo, Lei) che profumo!", a: "Prenda / senta", hint: "Imperativo formale di PRENDERE e SENTIRE" },
            { q: "Me ne _____ (dare — presente) un chilo?", a: "dà", hint: "Presente di DARE — Lei formale" },
            { q: "_____ (prendere — futuro) mezzo chilo.", a: "Prenderò", hint: "Futuro di PRENDERE — io" },
            { q: "Quanto _____ (venire — presente) in tutto?", a: "viene", hint: "Presente di VENIRE — prezzo totale" },
            { q: "_____ (tenere — imperativo, Lei) il resto.", a: "Tenga", hint: "Imperativo formale di TENERE" },
            { q: "_____ (tornare — imperativo, Lei) quando _____ (volere — presente)!", a: "Torni / vuole", hint: "Imperativo formale + Presente" },
            { q: "_____ (fare — passato prossimo) le tagliatelle stamattina.", a: "Ho fatto", hint: "Passato prossimo di FARE — io" },
            { q: "Quando _____ (essere — imperfetto) bambino, mia nonna _____ (fare — imperfetto) sempre le tagliatelle.", a: "ero / faceva", hint: "Imperfetto — ricordo d'infanzia" },
            { q: "_____ (prendere — imperativo, Lei) queste, _____ (essere — presente) fatte con uova fresche.", a: "Prenda / sono", hint: "Imperativo formale + Presente" },
            { q: "_____ (andare — imperativo, Lei) da Marco, _____ (avere — presente) il migliore della zona.", a: "Vada / ha", hint: "Imperativo formale di ANDARE + Presente" },
            { q: "È importante che _____ (cuocere — congiuntivo) lentamente per due ore.", a: "cuocia", hint: "Congiuntivo presente di CUOCERE" },
            { q: "_____ (aggiungere — imperativo, Lei) un po' di latte, _____ (rendere — presente) il sugo più cremoso.", a: "Aggiunga / rende", hint: "Imperativo formale + Presente" },
            { q: "Non _____ (sapere — imperfetto) del latte! _____ (provare — futuro) sicuramente.", a: "sapevo / Proverò", hint: "Imperfetto + Futuro" },
            { q: "_____ (essere — presente) nel posto giusto!", a: "È", hint: "Presente di ESSERE — Lei formale" },
            { q: "_____ (potere — condizionale) assaggiare tutti e tre?", a: "Potrei", hint: "Condizionale di POTERE — io" },
            { q: "Penso che _____ (prendere — congiuntivo) quello di 36 mesi.", a: "prenda", hint: "Congiuntivo presente di PRENDERE" },
            { q: "_____ (dare — imperativo, Lei) duecento grammi.", a: "Mi dia", hint: "Imperativo formale di DARE con pronome" },
            { q: "_____ (dire — imperativo, Lei) che _____ (mandare — passato prossimo) Marco.", a: "Dica / ha mandato", hint: "Imperativo formale di DIRE + Passato prossimo" }
        ]
    },

    ch_04: {
        id: "ch_04",
        title: "Presentarsi",
        icon: "🙋",
        situation: "Sei a un corso di italiano a Firenze. Il primo giorno ti presenti alla classe.",
        grammarFocus: ["Presente", "Imperfetto", "Passato Prossimo", "Condizionale", "Congiuntivo"],
        exercises: [
            { q: "_____ (chiamarsi — presente) Marco e _____ (venire — presente) dalla Spagna.", a: "Mi chiamo / vengo", hint: "Presente riflessivo + Presente di VENIRE" },
            { q: "_____ (avere — presente) trentadue anni e _____ (lavorare — presente) come architetto.", a: "Ho / lavoro", hint: "Presente di AVERE e LAVORARE" },
            { q: "Da bambino, _____ (sognare — imperfetto) di visitare l'Italia.", a: "sognavo", hint: "Imperfetto — abitudine/stato passato" },
            { q: "Quando _____ (avere — imperfetto) dieci anni, _____ (vedere — passato prossimo) un documentario su Roma.", a: "avevo / ho visto", hint: "Imperfetto (contesto) + Passato prossimo (evento)" },
            { q: "_____ (innamorarsi — passato prossimo) subito di questa lingua.", a: "mi sono innamorato", hint: "Passato prossimo riflessivo" },
            { q: "L'anno scorso _____ (venire — passato prossimo) in Italia per la prima volta.", a: "sono venuto", hint: "Passato prossimo con ESSERE" },
            { q: "Mentre _____ (camminare — imperfetto) per Roma, _____ (pensare — imperfetto) di voler tornare.", a: "camminavo / pensavo", hint: "Imperfetto — azioni parallele nel passato" },
            { q: "_____ (sperare — presente) che questo corso _____ (aiutare — congiuntivo) a migliorare il mio italiano.", a: "Spero / aiuti", hint: "Presente + Congiuntivo presente" },
            { q: "_____ (volere — condizionale) soprattutto imparare a parlare più naturalmente.", a: "Vorrei", hint: "Condizionale di VOLERE — desiderio" },
            { q: "In futuro _____ (volere — condizionale) aprire uno studio di architettura a Firenze.", a: "vorrei", hint: "Condizionale — sogno futuro" },
            { q: "Penso che l'italiano _____ (essere — congiuntivo) una delle lingue più belle del mondo.", a: "sia", hint: "Congiuntivo presente di ESSERE" },
            { q: "È importante che _____ (imparare — congiuntivo, noi) non solo la grammatica, ma anche la cultura.", a: "impariamo", hint: "Congiuntivo presente — noi" },
            { q: "_____ (studiare — presente) da sei mesi, ma _____ (capire — presente) ancora poco.", a: "Studio / capisco", hint: "Presente — situazione attuale" },
            { q: "Non _____ (preoccuparsi — imperativo, tu)! Con la pratica _____ (migliorare — futuro).", a: "ti preoccupare / migliorerà", hint: "Imperativo negativo + Futuro" },
            { q: "_____ (sapere — imperfetto) che _____ (essere — imperfetto) difficile, ma non _____ (immaginare — imperfetto) così tanto.", a: "Sapevo / era / immaginavo", hint: "Imperfetto — tre verbi" },
            { q: "Quando _____ (provare — presente) a parlare, _____ (dimenticare — presente) tutte le parole.", a: "provo / dimentico", hint: "Presente — abitudine attuale" },
            { q: "_____ (consigliare — condizionale) di guardare film italiani con i sottotitoli.", a: "Consiglierei", hint: "Condizionale di CONSIGLIARE — consiglio" },
            { q: "_____ (guardare — passato prossimo) 'La vita è bella' la settimana scorsa.", a: "Ho guardato", hint: "Passato prossimo — evento recente" },
            { q: "_____ (essere — condizionale) fantastico imparare le espressioni idiomatiche!", a: "Sarebbe", hint: "Condizionale di ESSERE" },
            { q: "È fondamentale che _____ (conoscere — congiuntivo, voi) anche il linguaggio informale.", a: "conosciate", hint: "Congiuntivo presente di CONOSCERE — voi" }
        ]
    }
};
