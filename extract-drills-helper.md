# Helper Guide: Extracting Drills from .md Files

## Step-by-Step Process

### 1. Open a drill file from italian_drills/
Example: `italian_drills/06_02_avere.md`

### 2. Extract the Rules Section
Copy everything under "## REGLAS Y TRUCOS" until you reach "## EJERCICIOS"

### 3. Extract Exercises
Look for the numbered list under "## EJERCICIOS"
Format: `1. Question text (answer)`

### 4. Extract Answers
Look under "## RESPUESTAS"
Format: `1. answer 2. answer 3. answer...`

### 5. Convert to JavaScript Format

```javascript
"06_02": {  // Use the file number as ID
    title: "AVERE (tener/haber)",  // From the # title in .md
    rules: `**Conjugación AVERE:**
- io ho
- tu hai
- lui/lei ha
- noi abbiamo
- voi avete
- loro hanno

**Usos principales:**
1. Posesión
2. Edad
3. Sensaciones físicas`,  // Paste rules here
    exercises: [
        { q: "Io _____ un cane", a: "ho" },
        { q: "Tu _____ una macchina", a: "hai" },
        { q: "Lui _____ 25 anni", a: "ha" },
        // ... continue with all exercises
    ]
},
```

## Quick Reference: All Drills to Add

### Adjectives (Aggettivi)
- [ ] 01_01_adjetivos_genero
- [ ] 01_02_adjetivos_singular_plural
- [ ] 01_03_adjetivos_masculino_femenino
- [ ] 01_04_adjetivos_comunes

### Articles (Articoli)
- [x] 02_01_articulos_definidos (DONE)
- [ ] 02_02_articulos_indefinidos
- [ ] 02_03_articulos_singular_plural
- [ ] 02_04_articulos_indefinidos_plural

### Prepositions (Preposizioni)
- [ ] 03_01_preposiciones_simples

### Pronouns (Pronomi)
- [ ] 04_01_pronombres_directos
- [ ] 04_02_piacere

### Regular Verbs (Verbi Regolari)
- [ ] 05_01_verbos_presente_are
- [ ] 05_02_verbos_presente_ere
- [ ] 05_03_verbos_presente_ire

### Irregular Verbs (Verbi Irregolari)
- [x] 06_01_essere (DONE)
- [ ] 06_02_avere
- [ ] 06_03_stare
- [ ] 06_04_essere_avere_stare

### Modal Verbs (Verbi Modali)
- [ ] 07_01_potere
- [ ] 07_02_volere
- [ ] 07_03_dovere
- [ ] 07_04_sapere

## Tips

1. **For Rules**: Keep the original formatting with bullet points and line breaks
2. **For Exercises**: Take first 10-15 exercises from each drill (don't need all 100)
3. **For Answers**: Match the exercise number with the answer
4. **Test**: After adding a drill, test it in the browser to make sure it works

## Example Workflow

1. Open `italian_drills/06_02_avere.md`
2. Copy rules section
3. Copy first 15 exercises with their answers
4. Open `italian-speaking-practice/data/drills-data.js`
5. Add new entry following the format
6. Save and test in browser
7. Repeat for next drill

## Priority Order

Start with the most common/useful drills:
1. ESSERE (done)
2. AVERE
3. Articoli Definiti (done)
4. Presente -ARE
5. Presente -ERE
6. Presente -IRE
7. Modal verbs (POTERE, VOLERE, DOVERE)
8. Rest of the drills
