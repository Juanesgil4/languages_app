// Drill exercises data - converted from italian_drills .md files
// Each drill has: rules, exercises with blanks, and answers

const drillsData = {
    "06_01": {
        title: "ESSERE (ser/estar)",
        rules: `**Conjugazione ESSERE (irregular):**
- io sono
- tu sei  
- lui/lei è
- noi siamo
- voi siete
- loro sono

**Usos principales:**
1. Identità: Sono Marco
2. Nazionalità: Sono italiano
3. Professione: Sono medico
4. Caratteristiche permanenti: Sei alto
5. Ubicazione permanente: Roma è in Italia
6. Ora e data: Sono le tre, È lunedì
7. Origine: Sono di Bogotá`,
        exercises: [
            { q: "Io _____ italiano", a: "sono" },
            { q: "Tu _____ colombiano", a: "sei" },
            { q: "Lui _____ spagnolo", a: "è" },
            { q: "Noi _____ americani", a: "siamo" },
            { q: "Voi _____ francesi", a: "siete" },
            { q: "Loro _____ tedeschi", a: "sono" },
            { q: "Io _____ studente", a: "sono" },
            { q: "Tu _____ professore", a: "sei" },
            { q: "Lei _____ dottoressa", a: "è" },
            { q: "Noi _____ ingegneri", a: "siamo" },
            { q: "Voi _____ avvocati", a: "siete" },
            { q: "Loro _____ medici", a: "sono" },
            { q: "Io _____ di Roma", a: "sono" },
            { q: "Tu _____ di Milano", a: "sei" },
            { q: "Marco _____ di Napoli", a: "è" },
            { q: "Io _____ alto", a: "sono" },
            { q: "Tu _____ basso", a: "sei" },
            { q: "Lei _____ bella", a: "è" },
            { q: "Noi _____ giovani", a: "siamo" },
            { q: "Loro _____ simpatici", a: "sono" }
        ]
    },
    "06_02": {
        title: "AVERE (tener/haber)",
        rules: `**Conjugazione AVERE (irregular):**
- io ho
- tu hai
- lui/lei ha
- noi abbiamo
- voi avete
- loro hanno

**Usos principales:**
1. Posesión: Ho una macchina
2. Edad: Ho 25 anni
3. Sensaciones: avere fame, avere sete, avere sonno, avere freddo, avere caldo, avere paura
4. Expresiones: avere ragione, avere torto, avere fretta, avere voglia di, avere bisogno di`,
        exercises: [
            { q: "Io _____ una macchina", a: "ho" },
            { q: "Tu _____ un cane", a: "hai" },
            { q: "Lui _____ un gatto", a: "ha" },
            { q: "Noi _____ una casa", a: "abbiamo" },
            { q: "Voi _____ un appartamento", a: "avete" },
            { q: "Loro _____ un giardino", a: "hanno" },
            { q: "Io _____ 25 anni", a: "ho" },
            { q: "Tu _____ 30 anni", a: "hai" },
            { q: "Maria _____ 18 anni", a: "ha" },
            { q: "Noi _____ 40 anni", a: "abbiamo" },
            { q: "Io _____ fame", a: "ho" },
            { q: "Tu _____ sete", a: "hai" },
            { q: "Lui _____ sonno", a: "ha" },
            { q: "Noi _____ freddo", a: "abbiamo" },
            { q: "Voi _____ caldo", a: "avete" },
            { q: "Loro _____ paura", a: "hanno" },
            { q: "Io _____ ragione", a: "ho" },
            { q: "Tu _____ torto", a: "hai" },
            { q: "Lei _____ fretta", a: "ha" },
            { q: "Noi _____ voglia di uscire", a: "abbiamo" }
        ]
    },
    "06_03": {
        title: "STARE (estar)",
        rules: `**Conjugazione STARE (irregular):**
- io sto
- tu stai
- lui/lei sta
- noi stiamo
- voi state
- loro stanno

**Usos principales:**
1. Salud/Estado: Come stai? Sto bene
2. Ubicación temporal: Sto a casa
3. Gerundio: Sto mangiando (estoy comiendo)
4. Expresiones: stare attento, stare zitto, stare fermo`,
        exercises: [
            { q: "Come _____ (tu)?", a: "stai" },
            { q: "Io _____ bene", a: "sto" },
            { q: "Tu _____ male", a: "stai" },
            { q: "Lui _____ così così", a: "sta" },
            { q: "Noi _____ benissimo", a: "stiamo" },
            { q: "Voi _____ meglio", a: "state" },
            { q: "Loro _____ peggio", a: "stanno" },
            { q: "Io _____ a casa", a: "sto" },
            { q: "Tu _____ in ufficio", a: "stai" },
            { q: "Maria _____ a scuola", a: "sta" },
            { q: "Noi _____ al bar", a: "stiamo" },
            { q: "Io _____ mangiando", a: "sto" },
            { q: "Tu _____ studiando", a: "stai" },
            { q: "Lui _____ dormendo", a: "sta" },
            { q: "Noi _____ lavorando", a: "stiamo" },
            { q: "Voi _____ guardando la TV", a: "state" },
            { q: "Loro _____ ascoltando musica", a: "stanno" },
            { q: "Io _____ attento", a: "sto" },
            { q: "Tu _____ zitto", a: "stai" },
            { q: "Lei _____ ferma", a: "sta" }
        ]
    },
    "05_01": {
        title: "Presente -ARE",
        rules: `**Conjugazione verbos -ARE:**
- Io: -o
- Tu: -i
- Lui/Lei: -a
- Noi: -iamo
- Voi: -ate
- Loro: -ano

**Verbos comunes:**
parlare, mangiare, lavorare, studiare, guardare, ascoltare, comprare, cercare, pensare, chiamare, abitare, arrivare, camminare, giocare, pagare

**Truco:** Los verbos en -care/-gare añaden "h" antes de -i/-iamo: cercare → cerchi, cerchiamo`,
        exercises: [
            { q: "Io _____ (parlare) italiano", a: "parlo" },
            { q: "Tu _____ (mangiare) la pizza", a: "mangi" },
            { q: "Lui _____ (lavorare) in ufficio", a: "lavora" },
            { q: "Noi _____ (studiare) insieme", a: "studiamo" },
            { q: "Voi _____ (guardare) la TV", a: "guardate" },
            { q: "Loro _____ (ascoltare) musica", a: "ascoltano" },
            { q: "Maria _____ (comprare) il pane", a: "compra" },
            { q: "Io _____ (cercare) le chiavi", a: "cerco" },
            { q: "Tu _____ (pensare) troppo", a: "pensi" },
            { q: "Marco _____ (chiamare) sua madre", a: "chiama" },
            { q: "Noi _____ (abitare) a Roma", a: "abitiamo" },
            { q: "Voi _____ (arrivare) domani", a: "arrivate" },
            { q: "I bambini _____ (giocare) nel parco", a: "giocano" },
            { q: "Io _____ (camminare) ogni giorno", a: "cammino" },
            { q: "Tu _____ (pagare) il conto", a: "paghi" },
            { q: "Lei _____ (parlare) tre lingue", a: "parla" },
            { q: "Noi _____ (mangiare) al ristorante", a: "mangiamo" },
            { q: "Loro _____ (lavorare) molto", a: "lavorano" },
            { q: "Io _____ (studiare) medicina", a: "studio" },
            { q: "Voi _____ (guardare) un film", a: "guardate" }
        ]
    },
    "07_01": {
        title: "POTERE (poder)",
        rules: `**Conjugazione POTERE (irregular):**
- io posso
- tu puoi
- lui/lei può
- noi possiamo
- voi potete
- loro possono

**Uso:** Capacidad, posibilidad o permiso
**Estructura:** POTERE + infinitivo
- Posso venire? (¿Puedo venir?)
- Puoi aiutarmi? (¿Puedes ayudarme?)

**Truco:** Todas las formas tienen doble consonante excepto "può"`,
        exercises: [
            { q: "Io _____ venire domani", a: "posso" },
            { q: "Tu _____ aiutarmi?", a: "puoi" },
            { q: "Lui _____ parlare italiano", a: "può" },
            { q: "Noi _____ uscire stasera", a: "possiamo" },
            { q: "Voi _____ aspettare un momento?", a: "potete" },
            { q: "Loro _____ arrivare in ritardo", a: "possono" },
            { q: "Io non _____ dormire", a: "posso" },
            { q: "Tu _____ chiamarmi dopo?", a: "puoi" },
            { q: "Lei _____ cucinare bene", a: "può" },
            { q: "Noi _____ partire presto", a: "possiamo" },
            { q: "Voi _____ restare qui", a: "potete" },
            { q: "Loro non _____ capire", a: "possono" },
            { q: "Io _____ fare questo", a: "posso" },
            { q: "Tu _____ vedere il problema?", a: "puoi" },
            { q: "Marco _____ guidare", a: "può" },
            { q: "Noi _____ andare al cinema", a: "possiamo" },
            { q: "Voi _____ chiudere la porta?", a: "potete" },
            { q: "Loro _____ lavorare domani", a: "possono" },
            { q: "Io non _____ credere", a: "posso" },
            { q: "Tu _____ ripetere?", a: "puoi" }
        ]
    },
    "07_02": {
        title: "VOLERE (querer)",
        rules: `**Conjugazione VOLERE (irregular):**
- io voglio
- tu vuoi
- lui/lei vuole
- noi vogliamo
- voi volete
- loro vogliono

**Uso:** Deseo o voluntad
**Estructura:** VOLERE + infinitivo / sustantivo
- Voglio un caffè
- Vuoi venire?

**Truco:** "Voglio" y "vogliono" tienen -gli-, las demás formas tienen -l- simple`,
        exercises: [
            { q: "Io _____ un caffè", a: "voglio" },
            { q: "Tu _____ venire?", a: "vuoi" },
            { q: "Lui _____ parlare con te", a: "vuole" },
            { q: "Noi _____ partire domani", a: "vogliamo" },
            { q: "Voi _____ mangiare?", a: "volete" },
            { q: "Loro _____ restare qui", a: "vogliono" },
            { q: "Io _____ dormire", a: "voglio" },
            { q: "Tu _____ aiuto?", a: "vuoi" },
            { q: "Lei _____ studiare italiano", a: "vuole" },
            { q: "Noi _____ andare al cinema", a: "vogliamo" },
            { q: "Voi _____ un gelato?", a: "volete" },
            { q: "Loro _____ comprare una casa", a: "vogliono" },
            { q: "Io non _____ uscire", a: "voglio" },
            { q: "Tu _____ ballare?", a: "vuoi" },
            { q: "Marco _____ lavorare", a: "vuole" },
            { q: "Noi _____ sapere la verità", a: "vogliamo" },
            { q: "Voi _____ aspettare?", a: "volete" },
            { q: "Loro non _____ pagare", a: "vogliono" },
            { q: "Io _____ capire", a: "voglio" },
            { q: "Tu _____ provare?", a: "vuoi" }
        ]
    },
    "07_03": {
        title: "DOVERE (deber)",
        rules: `**Conjugazione DOVERE (irregular):**
- io devo (o debbo)
- tu devi
- lui/lei deve
- noi dobbiamo
- voi dovete
- loro devono (o debbono)

**Uso:** Obligación, necesidad o deber
**Estructura:** DOVERE + infinitivo
- Devo studiare (Debo estudiar)
- Devi partire (Debes partir)

**Truco:** Todas las formas tienen "dev-" excepto "dobbiamo" que tiene "dobb-"`,
        exercises: [
            { q: "Io _____ studiare", a: "devo" },
            { q: "Tu _____ partire domani", a: "devi" },
            { q: "Lui _____ lavorare", a: "deve" },
            { q: "Noi _____ andare via", a: "dobbiamo" },
            { q: "Voi _____ aspettare", a: "dovete" },
            { q: "Loro _____ tornare presto", a: "devono" },
            { q: "Io _____ chiamare Maria", a: "devo" },
            { q: "Tu _____ finire il lavoro", a: "devi" },
            { q: "Lei _____ pagare l'affitto", a: "deve" },
            { q: "Noi _____ fare la spesa", a: "dobbiamo" },
            { q: "Voi _____ pulire la casa", a: "dovete" },
            { q: "Loro _____ studiare di più", a: "devono" },
            { q: "Io _____ alzarmi presto", a: "devo" },
            { q: "Tu _____ dormire", a: "devi" },
            { q: "Marco _____ mangiare", a: "deve" },
            { q: "Noi _____ uscire", a: "dobbiamo" },
            { q: "Voi _____ restare", a: "dovete" },
            { q: "Loro _____ decidere", a: "devono" },
            { q: "Io _____ pensare", a: "devo" },
            { q: "Tu _____ capire", a: "devi" }
        ]
    },
    "07_04": {
        title: "SAPERE (saber)",
        rules: `**Conjugazione SAPERE (irregular):**
- io so
- tu sai
- lui/lei sa
- noi sappiamo
- voi sapete
- loro sanno

**Uso:** Conocimiento de hechos, información o habilidades
**Estructura:** 
- SAPERE + sustantivo: So la risposta
- SAPERE + infinitivo: So nuotare
- SAPERE + che/se/dove/quando: So che è vero

**SAPERE vs CONOSCERE:**
- SAPERE: hechos, información, habilidades
- CONOSCERE: personas, lugares`,
        exercises: [
            { q: "Io _____ parlare italiano", a: "so" },
            { q: "Tu _____ dov'è Maria?", a: "sai" },
            { q: "Lui _____ la verità", a: "sa" },
            { q: "Noi _____ cosa fare", a: "sappiamo" },
            { q: "Voi _____ guidare?", a: "sapete" },
            { q: "Loro _____ tutto", a: "sanno" },
            { q: "Io non _____ nuotare", a: "so" },
            { q: "Tu _____ cucinare?", a: "sai" },
            { q: "Lei _____ suonare il piano", a: "sa" },
            { q: "Noi _____ la risposta", a: "sappiamo" },
            { q: "Voi _____ quando parte?", a: "sapete" },
            { q: "Loro non _____ niente", a: "sanno" },
            { q: "Io _____ che è vero", a: "so" },
            { q: "Tu _____ perché?", a: "sai" },
            { q: "Marco _____ ballare", a: "sa" },
            { q: "Noi _____ dove abita", a: "sappiamo" },
            { q: "Voi _____ chi è?", a: "sapete" },
            { q: "Loro _____ come funziona", a: "sanno" },
            { q: "Io _____ il tuo nome", a: "so" },
            { q: "Tu _____ l'indirizzo?", a: "sai" }
        ]
    },
    "02_01": {
        title: "Articoli Definiti",
        rules: `**SINGULAR:**
- IL: masc., consonante normale → il libro, il gatto
- LO: masc., s+cons, z, gn, ps, x, y → lo studente, lo zaino
- L': masc/fem, vocale → l'amico, l'amica
- LA: fem., consonante → la casa, la pizza

**PLURAL:**
- I: plural di IL → i libri
- GLI: plural di LO e L' (masc.) → gli studenti, gli amici
- LE: plural di LA e L' (fem.) → le case, le amiche`,
        exercises: [
            { q: "_____ libro", a: "il" },
            { q: "_____ casa", a: "la" },
            { q: "_____ studente", a: "lo" },
            { q: "_____ amica", a: "l'" },
            { q: "_____ zaino", a: "lo" },
            { q: "_____ libri", a: "i" },
            { q: "_____ case", a: "le" },
            { q: "_____ studenti", a: "gli" },
            { q: "_____ amiche", a: "le" },
            { q: "_____ zaini", a: "gli" },
            { q: "_____ gatto", a: "il" },
            { q: "_____ pizza", a: "la" },
            { q: "_____ amico", a: "l'" },
            { q: "_____ scuola", a: "la" },
            { q: "_____ zio", a: "lo" },
            { q: "_____ gatti", a: "i" },
            { q: "_____ pizze", a: "le" },
            { q: "_____ amici", a: "gli" },
            { q: "_____ scuole", a: "le" },
            { q: "_____ zii", a: "gli" }
        ]
    },
    "02_02": {
        title: "Articoli Indefiniti",
        rules: `**MASCULINO:**
- UN: antes de vocal y consonante normal → un amico, un libro
- UNO: antes de s+consonante, z, gn, ps, x, y → uno studente, uno zaino

**FEMENINO:**
- UNA: antes de consonante → una casa, una pizza
- UN': antes de vocal → un'amica, un'ora

**Nota:** Los artículos indefinidos NO tienen plural en italiano`,
        exercises: [
            { q: "_____ libro", a: "un" },
            { q: "_____ casa", a: "una" },
            { q: "_____ studente", a: "uno" },
            { q: "_____ amica", a: "un'" },
            { q: "_____ zaino", a: "uno" },
            { q: "_____ gatto", a: "un" },
            { q: "_____ pizza", a: "una" },
            { q: "_____ amico", a: "un" },
            { q: "_____ scuola", a: "una" },
            { q: "_____ zio", a: "uno" },
            { q: "_____ tavolo", a: "un" },
            { q: "_____ sedia", a: "una" },
            { q: "_____ specchio", a: "uno" },
            { q: "_____ acqua", a: "un'" },
            { q: "_____ sport", a: "uno" },
            { q: "_____ ragazzo", a: "un" },
            { q: "_____ ragazza", a: "una" },
            { q: "_____ ospedale", a: "un" },
            { q: "_____ università", a: "un'" },
            { q: "_____ gnomo", a: "uno" }
        ]
    },
    "02_03": {
        title: "Articoli Singolare → Plurale",
        rules: `**Conversione articoli indefiniti (singular) a partitivi (plural):**

**MASCULINO:**
- UN → DEI: un libro → dei libri
- UNO → DEGLI: uno studente → degli studenti

**FEMENINO:**
- UNA → DELLE: una casa → delle case
- UN' → DELLE: un'amica → delle amiche

**Artículos partitivos (DEI/DEGLI/DELLE):**
Son la contracción de DI + artículo definido plural:
- DEI = di + i
- DEGLI = di + gli
- DELLE = di + le`,
        exercises: [
            { q: "un libro → _____ libri", a: "dei" },
            { q: "una casa → _____ case", a: "delle" },
            { q: "uno studente → _____ studenti", a: "degli" },
            { q: "un'amica → _____ amiche", a: "delle" },
            { q: "uno zaino → _____ zaini", a: "degli" },
            { q: "un gatto → _____ gatti", a: "dei" },
            { q: "una pizza → _____ pizze", a: "delle" },
            { q: "un amico → _____ amici", a: "degli" },
            { q: "una scuola → _____ scuole", a: "delle" },
            { q: "uno zio → _____ zii", a: "degli" },
            { q: "un tavolo → _____ tavoli", a: "dei" },
            { q: "una sedia → _____ sedie", a: "delle" },
            { q: "uno specchio → _____ specchi", a: "degli" },
            { q: "un'acqua → _____ acque", a: "delle" },
            { q: "un ragazzo → _____ ragazzi", a: "dei" },
            { q: "una ragazza → _____ ragazze", a: "delle" },
            { q: "un ospedale → _____ ospedali", a: "degli" },
            { q: "un'università → _____ università", a: "delle" },
            { q: "un cane → _____ cani", a: "dei" },
            { q: "una macchina → _____ macchine", a: "delle" }
        ]
    },
    "02_04": {
        title: "Articoli Indefiniti Plurale",
        rules: `**Artículos indefinidos en PLURAL:**

**ALCUNI/ALCUNE (algunos/algunas):**
- ALCUNI: masculino plural → alcuni libri
- ALCUNE: femenino plural → alcune case

**Uso:** Se usa cuando quieres especificar "algunos" o "unas cuantas"

**QUALCHE (algún/alguna):**
- Invariable, siempre seguido de SINGULAR
- qualche libro (algunos libros)
- qualche casa (algunas casas)

**Truco:** 
- ALCUNI/ALCUNE + sustantivo plural
- QUALCHE + sustantivo singular (pero significa plural)`,
        exercises: [
            { q: "_____ libri (algunos libros)", a: "alcuni" },
            { q: "_____ case (algunas casas)", a: "alcune" },
            { q: "_____ studenti (algunos estudiantes)", a: "alcuni" },
            { q: "_____ amiche (algunas amigas)", a: "alcune" },
            { q: "_____ zaini (algunas mochilas)", a: "alcuni" },
            { q: "_____ gatti (algunos gatos)", a: "alcuni" },
            { q: "_____ pizze (algunas pizzas)", a: "alcune" },
            { q: "_____ amici (algunos amigos)", a: "alcuni" },
            { q: "_____ scuole (algunas escuelas)", a: "alcune" },
            { q: "_____ ragazzi (algunos chicos)", a: "alcuni" },
            { q: "_____ ragazze (algunas chicas)", a: "alcune" },
            { q: "_____ ospedali (algunos hospitales)", a: "alcuni" },
            { q: "_____ università (algunas universidades)", a: "alcune" },
            { q: "_____ cani (algunos perros)", a: "alcuni" },
            { q: "_____ macchine (algunos coches)", a: "alcune" },
            { q: "_____ professori (algunos profesores)", a: "alcuni" },
            { q: "_____ professoresse (algunas profesoras)", a: "alcune" },
            { q: "_____ giorni (algunos días)", a: "alcuni" },
            { q: "_____ notti (algunas noches)", a: "alcune" },
            { q: "_____ anni (algunos años)", a: "alcuni" }
        ]
    },
    "05_02": {
        title: "Presente -ERE",
        rules: `**Conjugazione verbos -ERE:**
- Io: -o
- Tu: -i
- Lui/Lei: -e
- Noi: -iamo
- Voi: -ete
- Loro: -ono

**Verbos comunes:**
prendere, scrivere, leggere, vedere, mettere, vivere, credere, vendere, perdere, rispondere, chiudere, correre, conoscere, decidere, ricevere

**Truco:** La 3ª persona singular termina en -e (no -a como en -ARE)`,
        exercises: [
            { q: "Io _____ (prendere) il caffè", a: "prendo" },
            { q: "Tu _____ (scrivere) una email", a: "scrivi" },
            { q: "Lei _____ (leggere) un libro", a: "legge" },
            { q: "Noi _____ (vedere) un film", a: "vediamo" },
            { q: "Voi _____ (mettere) la giacca", a: "mettete" },
            { q: "Loro _____ (vivere) a Milano", a: "vivono" },
            { q: "Io _____ (credere) in te", a: "credo" },
            { q: "Tu _____ (vendere) la macchina", a: "vendi" },
            { q: "Marco _____ (perdere) le chiavi", a: "perde" },
            { q: "Noi _____ (rispondere) alle domande", a: "rispondiamo" },
            { q: "Voi _____ (chiudere) la porta", a: "chiudete" },
            { q: "Loro _____ (correre) nel parco", a: "corrono" },
            { q: "Io _____ (conoscere) Maria", a: "conosco" },
            { q: "Tu _____ (decidere) tu", a: "decidi" },
            { q: "Lei _____ (ricevere) molte email", a: "riceve" },
            { q: "Noi _____ (prendere) l'autobus", a: "prendiamo" },
            { q: "Voi _____ (scrivere) bene", a: "scrivete" },
            { q: "Loro _____ (leggere) il giornale", a: "leggono" },
            { q: "Io _____ (vedere) la differenza", a: "vedo" },
            { q: "Tu _____ (mettere) zucchero", a: "metti" }
        ]
    },
    "05_03": {
        title: "Presente -IRE",
        rules: `**Conjugazione verbos -IRE (tipo 1 - sin -isc-):**
- Io: -o, Tu: -i, Lui/Lei: -e, Noi: -iamo, Voi: -ite, Loro: -ono

**Conjugazione verbos -IRE (tipo 2 - con -isc-):**
- Io: -isco, Tu: -isci, Lui/Lei: -isce, Noi: -iamo, Voi: -ite, Loro: -iscono

**Verbos SIN -isc-:** dormire, partire, sentire, aprire, offrire, seguire, coprire

**Verbos CON -isc-:** capire, finire, preferire, pulire, spedire, costruire, unire

**Truco:** La mayoría usan -isc-. Los más comunes sin -isc-: dormire, partire, sentire, aprire, offrire`,
        exercises: [
            { q: "Io _____ (dormire) otto ore", a: "dormo" },
            { q: "Tu _____ (capire) tutto", a: "capisci" },
            { q: "Lei _____ (partire) domani", a: "parte" },
            { q: "Noi _____ (finire) il lavoro", a: "finiamo" },
            { q: "Voi _____ (sentire) la musica", a: "sentite" },
            { q: "Loro _____ (preferire) il tè", a: "preferiscono" },
            { q: "Io _____ (aprire) la finestra", a: "apro" },
            { q: "Tu _____ (pulire) la casa", a: "pulisci" },
            { q: "Marco _____ (offrire) un caffè", a: "offre" },
            { q: "Noi _____ (spedire) il pacco", a: "spediamo" },
            { q: "Voi _____ (seguire) il corso", a: "seguite" },
            { q: "Loro _____ (costruire) una casa", a: "costruiscono" },
            { q: "Io _____ (coprire) il divano", a: "copro" },
            { q: "Tu _____ (unire) i pezzi", a: "unisci" },
            { q: "Lei _____ (dormire) poco", a: "dorme" },
            { q: "Noi _____ (capire) l'italiano", a: "capiamo" },
            { q: "Voi _____ (partire) presto", a: "partite" },
            { q: "Loro _____ (finire) tardi", a: "finiscono" },
            { q: "Io _____ (sentire) freddo", a: "sento" },
            { q: "Tu _____ (preferire) restare", a: "preferisci" }
        ]
    },
    "03_01": {
        title: "Preposizioni Semplici",
        rules: `**Preposizioni semplici principali:**
- DI: de, sobre (posesión, material, argumento) → il libro di Marco
- A: a, en (dirección, lugar) → vado a Roma, sono a casa
- DA: de, desde, por (origen, tiempo) → vengo da Milano, da lunedì
- IN: en (lugar cerrado, países) → in Italia, in cucina
- CON: con → con gli amici
- SU: sobre, en → sul tavolo
- PER: por, para (finalidad, duración) → per te, per due ore
- TRA/FRA: entre, dentro de → tra amici, tra un'ora

**Trucos:**
- A + ciudad: vado a Roma
- IN + país/región: vado in Italia
- DA + persona: vado da Maria (a casa de María)
- DI + posesión: la macchina di Paolo`,
        exercises: [
            { q: "Vado _____ Roma", a: "a" },
            { q: "Vengo _____ Milano", a: "da" },
            { q: "Sono _____ casa", a: "a" },
            { q: "Il libro _____ Marco", a: "di" },
            { q: "Vado _____ Italia", a: "in" },
            { q: "Studio _____ te", a: "con" },
            { q: "Il libro è _____ tavolo", a: "sul" },
            { q: "Questo è _____ te", a: "per" },
            { q: "Parto _____ un'ora", a: "tra" },
            { q: "Lavoro _____ lunedì", a: "da" },
            { q: "Abito _____ Roma", a: "a" },
            { q: "La macchina _____ Paolo", a: "di" },
            { q: "Vado _____ scuola", a: "a" },
            { q: "Vengo _____ Spagna", a: "dalla" },
            { q: "Sono _____ ufficio", a: "in" },
            { q: "Una casa _____ legno", a: "di" },
            { q: "Vivo _____ Francia", a: "in" },
            { q: "Esco _____ amici", a: "con" },
            { q: "Lavoro _____ due ore", a: "per" },
            { q: "Ci vediamo _____ due giorni", a: "tra" }
        ]
    },
    "03_02": {
        title: "Preposizioni Articolate",
        rules: `**Preposizioni Articolate = Preposizione + Articolo**

**TABLA COMPLETA:**
|     | IL   | LO    | LA    | L'    | I    | GLI   | LE    |
|-----|------|-------|-------|-------|------|-------|-------|
| DI  | del  | dello | della | dell' | dei  | degli | delle |
| A   | al   | allo  | alla  | all'  | ai   | agli  | alle  |
| DA  | dal  | dallo | dalla | dall' | dai  | dagli | dalle |
| IN  | nel  | nello | nella | nell' | nei  | negli | nelle |
| SU  | sul  | sullo | sulla | sull' | sui  | sugli | sulle |

**Ejemplos:**
- di + il = del → il colore del cielo
- a + la = alla → vado alla stazione
- da + lo = dallo → vengo dallo stadio
- in + il = nel → sono nel parco
- su + la = sulla → il libro è sulla tavola

**IMPORTANTE:** CON, PER, TRA/FRA NO se contraen`,
        exercises: [
            { q: "di + il libro = _____ libro", a: "del" },
            { q: "a + la casa = _____ casa", a: "alla" },
            { q: "da + lo studente = _____ studente", a: "dallo" },
            { q: "in + il parco = _____ parco", a: "nel" },
            { q: "su + la tavola = _____ tavola", a: "sulla" },
            { q: "di + i ragazzi = _____ ragazzi", a: "dei" },
            { q: "a + gli amici = _____ amici", a: "agli" },
            { q: "da + le amiche = _____ amiche", a: "dalle" },
            { q: "in + la cucina = _____ cucina", a: "nella" },
            { q: "su + il tavolo = _____ tavolo", a: "sul" },
            { q: "Vado _____ (a + il) cinema", a: "al" },
            { q: "Il colore _____ (di + il) cielo", a: "del" },
            { q: "Vengo _____ (da + la) stazione", a: "dalla" },
            { q: "Abito _____ (in + il) centro", a: "nel" },
            { q: "Il libro è _____ (su + la) sedia", a: "sulla" },
            { q: "Vado _____ (a + lo) zoo", a: "allo" },
            { q: "La porta _____ (di + la) casa", a: "della" },
            { q: "Vengo _____ (da + l') ospedale", a: "dall'" },
            { q: "Sono _____ (in + gli) Stati Uniti", a: "negli" },
            { q: "Metto _____ (su + i) libri", a: "sui" }
        ]
    }
};


// ─── NEW DRILLS ───────────────────────────────────────────────────────────────

drillsData["09_01"] = {
    title: "Verbi Riflessivi al Presente",
    rules: `**Pronomi riflessivi:**
- io → mi
- tu → ti
- lui/lei → si
- noi → ci
- voi → vi
- loro → si

**Struttura:** pronome riflessivo + verbo coniugato
- Mi sveglio alle 7
- Ti chiami Marco?

**Verbi comuni:** svegliarsi, alzarsi, lavarsi, vestirsi, pettinarsi, chiamarsi, sentirsi, divertirsi, riposarsi, addormentarsi, sedersi, arrabbiarsi, annoiarsi, preoccuparsi, ricordarsi`,
    exercises: [
        { q: "Io _____ alle 7 (svegliarsi)", a: "mi sveglio" },
        { q: "Tu _____ tardi (alzarsi)", a: "ti alzi" },
        { q: "Lei _____ Maria (chiamarsi)", a: "si chiama" },
        { q: "Noi _____ le mani (lavarsi)", a: "ci laviamo" },
        { q: "Voi _____ in fretta (vestirsi)", a: "vi vestite" },
        { q: "Loro _____ i capelli (pettinarsi)", a: "si pettinano" },
        { q: "Io _____ bene oggi (sentirsi)", a: "mi sento" },
        { q: "Tu _____ molto (divertirsi)", a: "ti diverti" },
        { q: "Marco _____ sul divano (riposarsi)", a: "si riposa" },
        { q: "Noi _____ tardi (addormentarsi)", a: "ci addormentiamo" },
        { q: "Voi _____ qui (sedersi)", a: "vi sedete" },
        { q: "Loro _____ presto (alzarsi)", a: "si alzano" },
        { q: "Io _____ Marco (chiamarsi)", a: "mi chiamo" },
        { q: "Tu _____ male? (sentirsi)", a: "ti senti" },
        { q: "Lei _____ ogni mattina (truccarsi)", a: "si trucca" },
        { q: "Noi _____ molto (divertirsi)", a: "ci divertiamo" },
        { q: "Voi _____ spesso (arrabbiarsi)", a: "vi arrabbiate" },
        { q: "Loro _____ facilmente (annoiarsi)", a: "si annoiano" },
        { q: "Io _____ di te (preoccuparsi)", a: "mi preoccupo" },
        { q: "Tu _____ il suo nome? (ricordarsi)", a: "ti ricordi" }
    ]
};

drillsData["10_01"] = {
    title: "Passato Prossimo con AVERE",
    rules: `**Formazione:** AVERE (presente) + participio passato

**Participio passato:**
- Verbi -ARE → -ATO: parlare → parlato
- Verbi -ERE → -UTO: vendere → venduto
- Verbi -IRE → -ITO: dormire → dormito

**Irregolari comuni:**
fare → fatto, dire → detto, scrivere → scritto, leggere → letto, vedere → visto, prendere → preso, mettere → messo, aprire → aperto, chiudere → chiuso, rispondere → risposto, chiedere → chiesto, perdere → perso, rompere → rotto, bere → bevuto

**Truco:** Con AVERE il participio NON concorda con il soggetto`,
    exercises: [
        { q: "Io _____ la pizza (mangiare)", a: "ho mangiato" },
        { q: "Tu _____ una lettera (scrivere)", a: "hai scritto" },
        { q: "Lei _____ il libro (leggere)", a: "ha letto" },
        { q: "Noi _____ un film (vedere)", a: "abbiamo visto" },
        { q: "Voi _____ i compiti (fare)", a: "avete fatto" },
        { q: "Loro _____ la verità (dire)", a: "hanno detto" },
        { q: "Io _____ il caffè (prendere)", a: "ho preso" },
        { q: "Tu _____ la porta (aprire)", a: "hai aperto" },
        { q: "Marco _____ le chiavi (perdere)", a: "ha perso" },
        { q: "Noi _____ la finestra (chiudere)", a: "abbiamo chiuso" },
        { q: "Voi _____ alla domanda (rispondere)", a: "avete risposto" },
        { q: "Loro _____ il vino (bere)", a: "hanno bevuto" },
        { q: "Io _____ molto (lavorare)", a: "ho lavorato" },
        { q: "Tu _____ il numero (chiedere)", a: "hai chiesto" },
        { q: "Lei _____ il piatto (rompere)", a: "ha rotto" },
        { q: "Noi _____ i biglietti (comprare)", a: "abbiamo comprato" },
        { q: "Voi _____ la giacca (mettere)", a: "avete messo" },
        { q: "Loro _____ una passeggiata (fare)", a: "hanno fatto" },
        { q: "Io _____ italiano (studiare)", a: "ho studiato" },
        { q: "Tu _____ la radio (ascoltare)", a: "hai ascoltato" }
    ]
};

drillsData["10_02"] = {
    title: "Passato Prossimo con ESSERE",
    rules: `**Formazione:** ESSERE (presente) + participio passato

**⚠️ Con ESSERE il participio CONCORDA con il soggetto:**
- Masc. sing.: -o → sono andato
- Fem. sing.: -a → sono andata
- Masc. pl.: -i → siamo andati
- Fem. pl.: -e → siamo andate

**Verbi con ESSERE (movimento, cambio di stato):**
andare, venire, arrivare, partire, uscire, entrare, tornare, restare, rimanere, nascere, morire, diventare, essere, stare, salire, scendere, cadere, crescere, piacere, sembrare`,
    exercises: [
        { q: "Io (m) _____ a Roma (andare)", a: "sono andato" },
        { q: "Tu (f) _____ tardi (arrivare)", a: "sei arrivata" },
        { q: "Lui _____ da Parigi (venire)", a: "è venuto" },
        { q: "Noi (m) _____ alle 8 (partire)", a: "siamo partiti" },
        { q: "Voi (f) _____ ieri sera (uscire)", a: "siete uscite" },
        { q: "Loro (m) _____ in casa (entrare)", a: "sono entrati" },
        { q: "Io (f) _____ a casa (tornare)", a: "sono tornata" },
        { q: "Tu (m) _____ tutto il giorno (restare)", a: "sei restato" },
        { q: "Lei _____ in Italia (rimanere)", a: "è rimasta" },
        { q: "Noi (f) _____ in Italia (nascere)", a: "siamo nate" },
        { q: "Voi (m) _____ medici (diventare)", a: "siete diventati" },
        { q: "Loro (f) _____ stanche (essere)", a: "sono state" },
        { q: "Io (m) _____ al terzo piano (salire)", a: "sono salito" },
        { q: "Tu (f) _____ dal treno (scendere)", a: "sei scesa" },
        { q: "Marco _____ dalla bici (cadere)", a: "è caduto" },
        { q: "Noi (m) _____ molto (crescere)", a: "siamo cresciuti" },
        { q: "Io (f) _____ in centro (andare)", a: "sono andata" },
        { q: "Tu (m) _____ presto (arrivare)", a: "sei arrivato" },
        { q: "Lei _____ dall'America (venire)", a: "è venuta" },
        { q: "Noi (f) _____ stamattina (partire)", a: "siamo partite" }
    ]
};

drillsData["11_01"] = {
    title: "Imperfetto",
    rules: `**Formazione:**
- Verbi -ARE: parl-avo, -avi, -ava, -avamo, -avate, -avano
- Verbi -ERE: legg-evo, -evi, -eva, -evamo, -evate, -evano
- Verbi -IRE: dorm-ivo, -ivi, -iva, -ivamo, -ivate, -ivano

**Irregolari:** essere → ero/eri/era/eravamo/eravate/erano, fare → facevo, dire → dicevo, bere → bevevo

**Usi:**
1. Azioni abituali nel passato: Da bambino giocavo sempre
2. Descrizioni nel passato: La casa era grande
3. Azioni in corso interrotte: Dormivo quando è arrivato
4. Stati mentali/fisici passati: Avevo fame`,
    exercises: [
        { q: "Da bambino io _____ molto (giocare)", a: "giocavo" },
        { q: "Tu _____ sempre in ritardo (arrivare)", a: "arrivavi" },
        { q: "Lei _____ a Milano (abitare)", a: "abitava" },
        { q: "Noi _____ ogni domenica (mangiare)", a: "mangiavamo" },
        { q: "Voi _____ la TV la sera (guardare)", a: "guardavate" },
        { q: "Loro _____ italiano a scuola (studiare)", a: "studiavano" },
        { q: "Io _____ il giornale ogni mattina (leggere)", a: "leggevo" },
        { q: "Tu _____ molto bene (scrivere)", a: "scrivevi" },
        { q: "Marco _____ in centro (vivere)", a: "viveva" },
        { q: "Noi _____ felici (essere)", a: "eravamo" },
        { q: "Voi _____ sport ogni giorno (fare)", a: "facevate" },
        { q: "Loro _____ in campagna (abitare)", a: "abitavano" },
        { q: "Io _____ molto da giovane (dormire)", a: "dormivo" },
        { q: "Tu _____ sempre la verità (dire)", a: "dicevi" },
        { q: "Lei _____ il caffè ogni mattina (bere)", a: "beveva" },
        { q: "Io _____ spesso al mare (andare)", a: "andavo" },
        { q: "Tu _____ con gli amici (uscire)", a: "uscivi" },
        { q: "Noi _____ la pizza il venerdì (mangiare)", a: "mangiavamo" },
        { q: "Loro _____ bambini (essere)", a: "erano" },
        { q: "Io _____ 10 anni (avere)", a: "avevo" }
    ]
};

drillsData["12_01"] = {
    title: "Futuro Semplice",
    rules: `**Formazione:**
- Verbi -ARE: parler-ò, -ai, -à, -emo, -ete, -anno
- Verbi -ERE: legger-ò, -ai, -à, -emo, -ete, -anno
- Verbi -IRE: dormir-ò, -ai, -à, -emo, -ete, -anno

**Irregolari:** essere → sarò, avere → avrò, fare → farò, andare → andrò, venire → verrò, dovere → dovrò, potere → potrò, volere → vorrò, sapere → saprò, vedere → vedrò, vivere → vivrò

**Usi:**
1. Azioni future: Domani andrò al mare
2. Promesse: Ti chiamerò
3. Previsioni: Farà bello domani
4. Supposizioni: Avrà 30 anni`,
    exercises: [
        { q: "Domani io _____ a Roma (andare)", a: "andrò" },
        { q: "Tu _____ alle 8 (arrivare)", a: "arriverai" },
        { q: "Lei _____ il libro (leggere)", a: "leggerà" },
        { q: "Noi _____ insieme (mangiare)", a: "mangeremo" },
        { q: "Voi _____ la TV (guardare)", a: "guarderete" },
        { q: "Loro _____ italiano (studiare)", a: "studieranno" },
        { q: "Io _____ una email (scrivere)", a: "scriverò" },
        { q: "Tu _____ il film (vedere)", a: "vedrai" },
        { q: "Marco _____ molto (lavorare)", a: "lavorerà" },
        { q: "Noi _____ felici (essere)", a: "saremo" },
        { q: "Voi _____ tempo (avere)", a: "avrete" },
        { q: "Loro _____ sport (fare)", a: "faranno" },
        { q: "Io _____ da te (venire)", a: "verrò" },
        { q: "Tu _____ studiare (dovere)", a: "dovrai" },
        { q: "Lei _____ venire (potere)", a: "potrà" },
        { q: "Noi _____ partire (volere)", a: "vorremo" },
        { q: "Voi _____ la risposta (sapere)", a: "saprete" },
        { q: "Io _____ il caffè (bere)", a: "berrò" },
        { q: "Tu _____ a casa (restare)", a: "resterai" },
        { q: "Marco _____ medico (diventare)", a: "diventerà" }
    ]
};

drillsData["03_02"] = {
    title: "Preposizioni Articolate",
    rules: `**Preposizione + Articolo = Preposizione Articolata**

|    | il  | lo    | la    | l'    | i   | gli   | le    |
|----|-----|-------|-------|-------|-----|-------|-------|
| di | del | dello | della | dell' | dei | degli | delle |
| a  | al  | allo  | alla  | all'  | ai  | agli  | alle  |
| da | dal | dallo | dalla | dall' | dai | dagli | dalle |
| in | nel | nello | nella | nell' | nei | negli | nelle |
| su | sul | sullo | sulla | sull' | sui | sugli | sulle |

**CON e PER NON si contraggono:** con il, per la, tra i
**Truco:** Segui il pattern dell'articolo: il→del/al/dal/nel/sul, lo→dello/allo..., la→della/alla...`,
    exercises: [
        { q: "di + il libro = _____ libro", a: "del" },
        { q: "di + la casa = _____ casa", a: "della" },
        { q: "di + lo studente = _____ studente", a: "dello" },
        { q: "di + l'amico = _____ amico", a: "dell'" },
        { q: "di + i ragazzi = _____ ragazzi", a: "dei" },
        { q: "di + gli studenti = _____ studenti", a: "degli" },
        { q: "di + le ragazze = _____ ragazze", a: "delle" },
        { q: "a + il cinema = _____ cinema", a: "al" },
        { q: "a + la stazione = _____ stazione", a: "alla" },
        { q: "a + lo stadio = _____ stadio", a: "allo" },
        { q: "a + l'università = _____ università", a: "all'" },
        { q: "a + i bambini = _____ bambini", a: "ai" },
        { q: "a + gli amici = _____ amici", a: "agli" },
        { q: "a + le persone = _____ persone", a: "alle" },
        { q: "da + il medico = _____ medico", a: "dal" },
        { q: "da + la nonna = _____ nonna", a: "dalla" },
        { q: "in + il parco = _____ parco", a: "nel" },
        { q: "in + la cucina = _____ cucina", a: "nella" },
        { q: "su + il tavolo = _____ tavolo", a: "sul" },
        { q: "su + la sedia = _____ sedia", a: "sulla" }
    ]
};

drillsData["11_02"] = {
    title: "Passato Prossimo vs Imperfetto",
    rules: `**IMPERFETTO** → azione abituale, descrizione, sfondo
- Da bambino giocavo sempre (solevo giocare)
- Mentre dormivo... (azione in corso)
- Segnali: sempre, spesso, di solito, ogni giorno, da bambino, mentre

**PASSATO PROSSIMO** → azione completata, evento puntuale
- Ieri ho mangiato la pizza (evento unico)
- All'improvviso è arrivato (interruzione)
- Segnali: ieri, stamattina, una volta, l'anno scorso, poi, finalmente

**Schema classico:** Imperfetto (sfondo) + Passato Prossimo (evento)
→ Dormivo quando è arrivato`,
    exercises: [
        { q: "Ieri io _____ la pizza (mangiare)", a: "ho mangiato" },
        { q: "Da bambino io _____ sempre la pizza (mangiare)", a: "mangiavo" },
        { q: "Stamattina lei _____ tardi (arrivare)", a: "è arrivata" },
        { q: "Di solito lei _____ in orario (arrivare)", a: "arrivava" },
        { q: "L'anno scorso noi _____ in Italia (andare)", a: "siamo andati" },
        { q: "Ogni estate noi _____ in Italia (andare)", a: "andavamo" },
        { q: "Ieri tu _____ con Marco (parlare)", a: "hai parlato" },
        { q: "Quando ero giovane, tu _____ sempre con Marco (parlare)", a: "parlavi" },
        { q: "Mentre lei _____ (leggere), lui è entrato", a: "leggeva" },
        { q: "Stamattina io _____ il caffè (bere)", a: "ho bevuto" },
        { q: "Di solito io _____ il tè (bere)", a: "bevevo" },
        { q: "Ieri Marco _____ un film (vedere)", a: "ha visto" },
        { q: "Da piccolo Marco _____ molti film (vedere)", a: "vedeva" },
        { q: "Ieri sera loro _____ al ristorante (cenare)", a: "hanno cenato" },
        { q: "Ogni venerdì loro _____ al ristorante (cenare)", a: "cenavano" },
        { q: "Mentre io _____ (camminare), ha iniziato a piovere", a: "camminavo" },
        { q: "Ieri Marco _____ tardi (tornare)", a: "è tornato" },
        { q: "Di solito Marco _____ presto (tornare)", a: "tornava" },
        { q: "Stamattina tu _____ presto (svegliarsi)", a: "ti sei svegliato" },
        { q: "Da bambino tu _____ sempre presto (svegliarsi)", a: "ti svegliavi" }
    ]
};

drillsData["13_01"] = {
    title: "Imperativo",
    rules: `**Imperativo informale (tu/noi/voi):**
- -ARE: parla! / parliamo! / parlate!
- -ERE: prendi! / prendiamo! / prendete!
- -IRE: dormi! / dormiamo! / dormite!
- -IRE (isc): finisci! / finiamo! / finite!

**Imperativo formale (Lei):**
- -ARE → -i: parli!
- -ERE/-IRE → -a: prenda!, dorma!

**Irregolari:** andare→va'!, fare→fa'!, dire→di'!, stare→sta'!, dare→da'!, venire→vieni!, uscire→esci!

**Negativo TU:** NON + infinito → Non parlare!
**Negativo VOI/LEI:** NON + imperativo → Non parlate! / Non parli!`,
    exercises: [
        { q: "_____ (parlare, tu) più piano!", a: "Parla" },
        { q: "_____ (mangiare, voi) la verdura!", a: "Mangiate" },
        { q: "_____ (ascoltare, tu) bene!", a: "Ascolta" },
        { q: "_____ (aspettare, Lei) un momento!", a: "Aspetti" },
        { q: "_____ (venire, tu) qui!", a: "Vieni" },
        { q: "_____ (andare, voi) a casa!", a: "Andate" },
        { q: "_____ (fare, tu) i compiti!", a: "Fai" },
        { q: "_____ (dire, Lei) la verità!", a: "Dica" },
        { q: "_____ (essere, tu) gentile!", a: "Sii" },
        { q: "_____ (avere, voi) pazienza!", a: "Abbiate" },
        { q: "_____ (prendere, tu) l'ombrello!", a: "Prendi" },
        { q: "_____ (scrivere, Lei) il suo nome!", a: "Scriva" },
        { q: "_____ (aprire, tu) la finestra!", a: "Apri" },
        { q: "_____ (finire, tu) il lavoro!", a: "Finisci" },
        { q: "_____ (uscire, Lei) subito!", a: "Esca" },
        { q: "Non _____ (parlare, tu) così!", a: "parlare" },
        { q: "Non _____ (andare, tu) via!", a: "andare" },
        { q: "_____ (alzarsi, tu) subito!", a: "Alzati" },
        { q: "_____ (sedersi, Lei) pure!", a: "Si sieda" },
        { q: "_____ (sbrigarsi, tu) che è tardi!", a: "Sbrigati" }
    ]
};

drillsData["14_01"] = {
    title: "Condizionale Presente",
    rules: `**Formazione:** stessa radice del futuro + -rei, -resti, -rebbe, -remmo, -reste, -rebbero

**Irregolari:** essere→sarei, avere→avrei, fare→farei, andare→andrei, venire→verrei, dovere→dovrei, potere→potrei, volere→vorrei, sapere→saprei, vedere→vedrei

**Usi principali:**
1. Desideri cortesi: Vorrei un caffè
2. Ipotesi: Con più soldi, viaggerei
3. Consiglio: Dovresti studiare
4. Possibilità: Potrebbe essere vero

**Le 3 forme più utili:** VORREI · POTREI · DOVREI`,
    exercises: [
        { q: "Io _____ un caffè (volere)", a: "vorrei" },
        { q: "Tu _____ venire? (potere)", a: "potresti" },
        { q: "Lei _____ studiare di più (dovere)", a: "dovrebbe" },
        { q: "Noi _____ andare al mare (volere)", a: "vorremmo" },
        { q: "Voi _____ aspettare (potere)", a: "potreste" },
        { q: "Loro _____ partire domani (dovere)", a: "dovrebbero" },
        { q: "Io _____ felice (essere)", a: "sarei" },
        { q: "Tu _____ ragione (avere)", a: "avresti" },
        { q: "Marco _____ una torta (fare)", a: "farebbe" },
        { q: "Noi _____ in Italia (vivere)", a: "vivremmo" },
        { q: "Io _____ un'acqua, per favore (volere)", a: "vorrei" },
        { q: "Tu _____ aiutarmi? (potere)", a: "potresti" },
        { q: "Marco _____ lavorare meno (dovere)", a: "dovrebbe" },
        { q: "Noi _____ a Parigi (andare)", a: "andremmo" },
        { q: "Io _____ un'informazione (volere)", a: "vorrei" },
        { q: "Tu _____ ripetere? (potere)", a: "potresti" },
        { q: "Io _____ in campagna (vivere)", a: "vivrei" },
        { q: "Noi _____ una pausa (fare)", a: "faremmo" },
        { q: "Io _____ tanto viaggiare (volere)", a: "vorrei" },
        { q: "Tu _____ venire stasera? (potere)", a: "potresti" }
    ]
};

drillsData["15_01"] = {
    title: "Congiuntivo Presente",
    rules: `**Formazione:**
- -ARE: parli, parli, parli, parliamo, parliate, parlino
- -ERE: prenda, prenda, prenda, prendiamo, prendiate, prendano
- -IRE: dorma, dorma, dorma, dormiamo, dormiate, dormano

**Irregolari:** essere→sia, avere→abbia, andare→vada, fare→faccia, venire→venga, dire→dica, potere→possa, volere→voglia, dovere→debba, sapere→sappia

**Usi — sempre dopo "che" con cambio di soggetto:**
- Penso che sia vero
- Voglio che tu venga
- È importante che tu sappia
- Spero che stia bene

**Espressioni chiave:** penso/credo/spero che, voglio che, è importante/necessario/possibile che, bisogna che, sono contento che`,
    exercises: [
        { q: "Penso che lui _____ italiano (essere)", a: "sia" },
        { q: "Voglio che tu _____ (venire)", a: "venga" },
        { q: "Spero che lei _____ bene (stare)", a: "stia" },
        { q: "È importante che noi _____ (studiare)", a: "studiamo" },
        { q: "Bisogna che voi _____ (ascoltare)", a: "ascoltiate" },
        { q: "Credo che loro _____ ragione (avere)", a: "abbiano" },
        { q: "Voglio che tu _____ la verità (dire)", a: "dica" },
        { q: "È necessario che lui _____ (partire)", a: "parta" },
        { q: "Penso che lei _____ (lavorare)", a: "lavori" },
        { q: "È possibile che lui _____ (venire)", a: "venga" },
        { q: "Credo che tu _____ sbagliato (essere)", a: "sia" },
        { q: "Bisogna che loro _____ (capire)", a: "capiscano" },
        { q: "Penso che noi _____ bene (fare)", a: "facciamo" },
        { q: "Voglio che lui _____ (smettere)", a: "smetta" },
        { q: "È necessario che tu _____ (dormire) di più", a: "dorma" },
        { q: "Spero che loro _____ felici (essere)", a: "siano" },
        { q: "Bisogna che lui _____ dal medico (andare)", a: "vada" },
        { q: "Voglio che lei _____ (riposarsi)", a: "si riposi" },
        { q: "Sebbene lui _____ stanco, lavora (essere)", a: "sia" },
        { q: "Prima che tu _____, dimmi tutto (andare)", a: "vada" }
    ]
};
