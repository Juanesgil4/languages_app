# Italian Speaking Practice Platform

## Overview
A web-based platform for practicing Italian through conversation and grammar drills.

## Features

### 1. Conversation Mode
- 4 topics: Sports, Travel, Personal Identity, Opinions
- Short and long answer options (except Opinions which only has long answers)
- Timed responses with 3 difficulty levels
- Hints and example answers

### 2. Grammar Drills Mode
- Fill-in-the-blank exercises based on italian_drills folder
- Categories: Adjectives, Articles, Verbs (Regular & Irregular), Pronouns, Prepositions
- Rules display for each drill
- Instant feedback on answers

## File Structure

```
italian-speaking-practice/
├── index.html                      # Main HTML file
├── styles.css                      # All styles
├── app.js                          # Main application logic
├── data/
│   ├── questions.js                # Conversation questions (NEEDS COMPLETION)
│   ├── drills-metadata.js          # Drill categories and structure
│   └── drills-data.js              # Drill exercises (NEEDS COMPLETION)
└── README.md                       # This file
```

## What Needs to be Completed

### 1. questions.js
Currently has only 2 questions per topic. You need to add:
- **Sports**: 19 more questions (total 21)
- **Travel**: 19 more questions (total 21)
- **Identity**: 19 more questions (total 21)
- **Opinions**: 9 more questions (total 11)

Each non-opinion question needs:
- `question`: The question text
- `hint`: Hint for structure
- `shortAnswers`: Array of 4 short answers
- `longAnswers`: Array of 4 elaborated answers

Opinion questions only need:
- `question`: The question text
- `hint`: Connectors and structure hints
- `answers`: Array of 3 paragraph-length answers

### 2. drills-data.js
Currently has only 2 drills (ESSERE and Articoli Definiti). You need to add data for all drills listed in drills-metadata.js.

Each drill needs:
- `title`: Drill title
- `rules`: Grammar rules (can copy from .md files)
- `exercises`: Array of {q: "question with ___", a: "answer"}

You can extract this data from the italian_drills/*.md files.

## How to Use

1. Open `index.html` in a web browser
2. Choose between Conversation or Grammar Drills
3. For Conversation:
   - Select a topic
   - Choose difficulty (time limit)
   - Choose answer type (short/long/both)
   - Practice speaking!
4. For Drills:
   - Select a category
   - Choose a specific drill
   - Fill in the blanks
   - Get instant feedback

## Expanding the Content

### Adding More Conversation Questions

Edit `data/questions.js` and add questions following this format:

```javascript
{
    question: "Your question in Italian?",
    hint: "Usa: 'suggested structure...'",
    shortAnswers: ["Short 1", "Short 2", "Short 3", "Short 4"],
    longAnswers: [
        "Long elaborated answer 1 with context and explanation",
        "Long elaborated answer 2 with different perspective",
        "Long elaborated answer 3 with personal touch",
        "Long elaborated answer 4 with additional details"
    ]
}
```

### Adding More Drills

1. Read the corresponding .md file from italian_drills/
2. Extract the rules section
3. Extract exercises (the numbered list with answers)
4. Add to `data/drills-data.js`:

```javascript
"drill_id": {
    title: "Drill Title",
    rules: `Rules text here`,
    exercises: [
        { q: "Question with ___", a: "answer" },
        // ... more exercises
    ]
}
```

## Notes

- The app is fully in Italian as requested
- Timer can be adjusted via difficulty settings
- All data is client-side (no server needed)
- Drills are based on existing italian_drills .md files
- The original .md files are NOT modified

## Future Enhancements

- Add more drill categories
- Add progress tracking
- Add voice recording feature
- Add spaced repetition system
- Export/import custom questions
