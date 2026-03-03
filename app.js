// App State
const state = {
    mode: null, // 'conversation' or 'drills'
    currentTopic: null,
    currentCategory: null,
    currentDrill: null,
    currentDifficulty: null,
    answerType: 'both', // 'short', 'long', or 'both'
    currentQuestionIndex: 0,
    questions: [],
    exercises: [],
    timer: null,
    timeLeft: 0,
    timeLimit: 30
};

// Time limits by difficulty
const timeLimits = {
    easy: 30,
    medium: 20,
    hard: 10
};

// DOM Elements
const screens = {
    topic: document.getElementById('topicScreen'),
    difficulty: document.getElementById('difficultyScreen'),
    drills: document.getElementById('drillsScreen'),
    practice: document.getElementById('practiceScreen')
};

const elements = {
    topicCards: document.querySelectorAll('.topic-card'),
    difficultyBtns: document.querySelectorAll('.difficulty-btn[data-difficulty]'),
    answerTypeBtns: document.querySelectorAll('.difficulty-btn[data-answertype]'),
    backToTopics: document.getElementById('backToTopics'),
    backToTopicsFromDrills: document.getElementById('backToTopicsFromDrills'),
    exitPractice: document.getElementById('exitPractice'),
    timer: document.getElementById('timer'),
    question: document.getElementById('question'),
    drillInput: document.getElementById('drillInput'),
    rulesBtn: document.getElementById('rulesBtn'),
    hintBtn: document.getElementById('hintBtn'),
    answerBtn: document.getElementById('answerBtn'),
    checkBtn: document.getElementById('checkBtn'),
    nextBtn: document.getElementById('nextBtn'),
    rulesBox: document.getElementById('rulesBox'),
    hintBox: document.getElementById('hintBox'),
    answerBox: document.getElementById('answerBox'),
    feedbackBox: document.getElementById('feedbackBox'),
    rulesText: document.getElementById('rulesText'),
    hintText: document.getElementById('hintText'),
    answerText: document.getElementById('answerText'),
    feedbackText: document.getElementById('feedbackText'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    answerBoxTitle: document.getElementById('answerBoxTitle'),
    drillsList: document.getElementById('drillsList'),
    drillsCategoryTitle: document.getElementById('drillsCategoryTitle'),
    answerTypeSelection: document.getElementById('answerTypeSelection')
};

// Screen Navigation
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Topic/Category Selection
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        
        if (mode === 'conversation') {
            state.mode = 'conversation';
            state.currentTopic = card.dataset.topic;
            elements.answerTypeSelection.style.display = state.currentTopic === 'opinions' ? 'none' : 'block';
            showScreen('difficulty');
        } else if (mode === 'drills') {
            state.mode = 'drills';
            state.currentCategory = card.dataset.category;
            showDrillsSelection();
        }
    });
});

// Show drills selection
function showDrillsSelection() {
    const category = drillsMetadata.categories.find(c => c.id === state.currentCategory);
    if (!category) return;
    
    elements.drillsCategoryTitle.textContent = category.name;
    elements.drillsList.innerHTML = '';
    
    category.drills.forEach(drill => {
        const btn = document.createElement('button');
        btn.className = 'topic-card';
        btn.innerHTML = `<h3>${drill.name}</h3>`;
        btn.addEventListener('click', () => {
            state.currentDrill = drill.id;
            state.currentDifficulty = 'medium';
            state.timeLimit = 20;
            startDrills();
        });
        elements.drillsList.appendChild(btn);
    });
    
    showScreen('drills');
}

// Difficulty Selection
elements.difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        state.currentDifficulty = btn.dataset.difficulty;
        state.timeLimit = timeLimits[state.currentDifficulty];
        btn.classList.add('selected');
        setTimeout(() => btn.classList.remove('selected'), 200);
        
        // For opinions, start immediately after difficulty selection
        if (state.currentTopic === 'opinions') {
            state.answerType = 'both'; // Not used for opinions, but set it anyway
            startPractice();
        }
    });
});

// Answer Type Selection
elements.answerTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        state.answerType = btn.dataset.answertype;
        if (state.currentDifficulty) {
            startPractice();
        }
    });
});

// Back Buttons
elements.backToTopics.addEventListener('click', () => {
    showScreen('topic');
});

elements.backToTopicsFromDrills.addEventListener('click', () => {
    showScreen('topic');
});

elements.exitPractice.addEventListener('click', () => {
    stopTimer();
    showScreen('topic');
});

// Start Practice (Conversation Mode)
function startPractice() {
    const topicData = questionsData[state.currentTopic];
    if (!topicData) return;
    
    state.questions = shuffleArray([...topicData]);
    state.currentQuestionIndex = 0;
    
    // Hide drill elements, show conversation elements
    elements.drillInput.classList.add('hidden');
    elements.rulesBtn.classList.add('hidden');
    elements.checkBtn.classList.add('hidden');
    elements.rulesBox.classList.add('hidden');
    elements.hintBtn.classList.remove('hidden');
    elements.answerBtn.classList.remove('hidden');
    
    showScreen('practice');
    loadQuestion();
}

// Start Drills (Grammar Mode)
function startDrills() {
    const drillData = drillsData[state.currentDrill];
    if (!drillData) {
        alert('Esercizio non ancora disponibile');
        return;
    }
    
    state.exercises = shuffleArray([...drillData.exercises]);
    state.currentQuestionIndex = 0;
    
    // Show drill elements, hide conversation elements
    elements.drillInput.classList.remove('hidden');
    elements.rulesBtn.classList.remove('hidden');
    elements.checkBtn.classList.remove('hidden');
    elements.hintBtn.classList.add('hidden');
    elements.answerBtn.classList.add('hidden');
    
    // Set rules
    elements.rulesText.innerHTML = drillData.rules.replace(/\n/g, '<br>');
    
    showScreen('practice');
    loadExercise();
}

// Load Question (Conversation)
function loadQuestion() {
    if (state.currentQuestionIndex >= state.questions.length) {
        state.currentQuestionIndex = 0;
        state.questions = shuffleArray(state.questions);
    }
    
    const currentQ = state.questions[state.currentQuestionIndex];
    
    elements.question.textContent = currentQ.question;
    elements.hintText.textContent = currentQ.hint;
    
    // Build answers based on type
    let answersToShow = [];
    if (state.currentTopic === 'opinions') {
        answersToShow = currentQ.answers;
        elements.answerBoxTitle.textContent = 'Risposte possibili:';
    } else {
        if (state.answerType === 'short') {
            answersToShow = currentQ.shortAnswers;
            elements.answerBoxTitle.textContent = 'Risposte brevi:';
        } else if (state.answerType === 'long') {
            answersToShow = currentQ.longAnswers;
            elements.answerBoxTitle.textContent = 'Risposte elaborate:';
        } else {
            answersToShow = [...currentQ.shortAnswers, ...currentQ.longAnswers];
            elements.answerBoxTitle.textContent = 'Risposte possibili:';
        }
    }
    
    let answersHTML = '<ul>';
    answersToShow.forEach(answer => {
        answersHTML += `<li>${answer}</li>`;
    });
    answersHTML += '</ul>';
    elements.answerText.innerHTML = answersHTML;
    
    // Hide boxes
    elements.hintBox.classList.add('hidden');
    elements.answerBox.classList.add('hidden');
    elements.feedbackBox.classList.add('hidden');
    
    // Start timer
    startTimer();
}

// Load Exercise (Drills)
function loadExercise() {
    if (state.currentQuestionIndex >= state.exercises.length) {
        state.currentQuestionIndex = 0;
        state.exercises = shuffleArray(state.exercises);
    }
    
    const currentEx = state.exercises[state.currentQuestionIndex];
    
    elements.question.textContent = currentEx.q;
    elements.drillInput.value = '';
    elements.drillInput.className = 'drill-input';
    
    // Hide boxes
    elements.rulesBox.classList.add('hidden');
    elements.answerBox.classList.add('hidden');
    elements.feedbackBox.classList.add('hidden');
    
    // Start timer
    startTimer();
    
    // Focus input
    setTimeout(() => elements.drillInput.focus(), 100);
}

// Timer Functions
function startTimer() {
    stopTimer();
    state.timeLeft = state.timeLimit;
    elements.timer.textContent = state.timeLeft;
    elements.timer.classList.remove('warning');
    
    state.timer = setInterval(() => {
        state.timeLeft--;
        elements.timer.textContent = state.timeLeft;
        
        if (state.timeLeft <= 5) {
            elements.timer.classList.add('warning');
        }
        
        if (state.timeLeft <= 0) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
    elements.timer.classList.remove('warning');
}

// Control Buttons
elements.rulesBtn.addEventListener('click', () => {
    elements.rulesBox.classList.toggle('hidden');
});

elements.hintBtn.addEventListener('click', () => {
    elements.hintBox.classList.toggle('hidden');
});

elements.answerBtn.addEventListener('click', () => {
    elements.answerBox.classList.toggle('hidden');
    stopTimer();
});

elements.checkBtn.addEventListener('click', () => {
    checkDrillAnswer();
});

elements.drillInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkDrillAnswer();
    }
});

function checkDrillAnswer() {
    const currentEx = state.exercises[state.currentQuestionIndex];
    const userAnswer = elements.drillInput.value.trim().toLowerCase();
    const correctAnswer = currentEx.a.toLowerCase();
    
    elements.feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    
    if (userAnswer === correctAnswer) {
        elements.drillInput.classList.add('correct');
        elements.feedbackBox.classList.add('correct');
        elements.feedbackTitle.textContent = '✓ Corretto!';
        elements.feedbackText.textContent = `La risposta corretta è: ${currentEx.a}`;
        stopTimer();
    } else {
        elements.drillInput.classList.add('incorrect');
        elements.feedbackBox.classList.add('incorrect');
        elements.feedbackTitle.textContent = '✗ Non corretto';
        elements.feedbackText.textContent = `La risposta corretta è: ${currentEx.a}`;
    }
}

elements.nextBtn.addEventListener('click', () => {
    state.currentQuestionIndex++;
    if (state.mode === 'conversation') {
        loadQuestion();
    } else {
        loadExercise();
    }
});

// Utility Functions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize
showScreen('topic');
