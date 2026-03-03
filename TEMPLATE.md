# Template for Adding Questions

## Conversation Question Template (Sports, Travel, Identity)

```javascript
{
    question: "Question in Italian?",
    hint: "Usa: 'suggested structure...'",
    shortAnswers: [
        "Short answer 1",
        "Short answer 2",
        "Short answer 3",
        "Short answer 4"
    ],
    longAnswers: [
        "Elaborated answer 1 with full sentence and context explaining the choice",
        "Elaborated answer 2 with different perspective and reasoning",
        "Elaborated answer 3 with personal experience or preference",
        "Elaborated answer 4 with additional details or alternative view"
    ]
},
```

## Opinion Question Template

```javascript
{
    question: "Complex question requiring opinion?",
    hint: "Usa: 'Secondo me...', 'Da un lato...', 'Tuttavia...', 'In conclusione...'",
    answers: [
        "Paragraph 1: Start with opinion, provide 2-3 arguments with connectors (Secondo me, Prima di tutto, Inoltre, Tuttavia, Per questo motivo, In conclusione). Should be 4-6 sentences.",
        "Paragraph 2: Different perspective with similar structure and connectors. Balance pros and cons.",
        "Paragraph 3: Alternative viewpoint or nuanced position with proper argumentation."
    ]
},
```

## Drill Exercise Template

```javascript
"drill_id": {
    title: "Drill Title from .md file",
    rules: `Copy the REGLAS Y TRUCOS section from the .md file.
    
Keep the formatting with line breaks.
Include all the important rules and tricks.`,
    exercises: [
        { q: "Io _____ italiano", a: "sono" },
        { q: "Tu _____ colombiano", a: "sei" },
        { q: "_____ libro", a: "il" },
        // Add 10-20 exercises per drill
    ]
},
```

## Quick Tips

### For Short Answers:
- 1-3 words
- Direct and simple
- Just the core information

### For Long Answers:
- Full sentences
- Include reasoning or context
- Use connectors (perché, ma, quindi, inoltre)
- 15-30 words typically

### For Opinion Answers:
- 4-6 sentences minimum
- Use Italian connectors: Secondo me, Penso che, Da un lato, Dall'altro, Inoltre, Tuttavia, Per questo motivo, In conclusione, Pertanto
- Present argument, counterargument, and conclusion
- Show different perspectives across the 3 answers

### For Drills:
- Keep questions clear with ___ for the blank
- Answers should be single words or short phrases
- Extract directly from the .md files in italian_drills/
- Include 10-20 exercises per drill for variety
