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
