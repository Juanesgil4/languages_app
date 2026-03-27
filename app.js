// ─── State ────────────────────────────────────────────────────────────────────

const state = {
    mode: null,
    currentTopic: null,
    currentCategory: null,
    currentDrill: null,
    currentChallenge: null,
    currentDifficulty: null,
    answerType: 'both',
    currentQuestionIndex: 0,
    questions: [],
    exercises: [],
    challengeExercises: [],
    timer: null,
    timeLeft: 0,
    timeLimit: 30
};

const timeLimits = { easy: 30, medium: 20, hard: 10 };

// ─── DOM refs ─────────────────────────────────────────────────────────────────

const screens = {
    topic:      document.getElementById('topicScreen'),
    difficulty: document.getElementById('difficultyScreen'),
    drills:     document.getElementById('drillsScreen'),
    challenge:  document.getElementById('challengeScreen'),
    practice:   document.getElementById('practiceScreen')
};

const el = {
    backToTopics:           document.getElementById('backToTopics'),
    backToTopicsFromDrills: document.getElementById('backToTopicsFromDrills'),
    exitPractice:           document.getElementById('exitPractice'),
    exitChallenge:          document.getElementById('exitChallenge'),
    answerTypeSelection:    document.getElementById('answerTypeSelection'),
    drillsCategoryTitle:    document.getElementById('drillsCategoryTitle'),
    drillsList:             document.getElementById('drillsList'),
    timer:          document.getElementById('timer'),
    question:       document.getElementById('question'),
    drillInput:     document.getElementById('drillInput'),
    rulesBtn:       document.getElementById('rulesBtn'),
    hintBtn:        document.getElementById('hintBtn'),
    answerBtn:      document.getElementById('answerBtn'),
    checkBtn:       document.getElementById('checkBtn'),
    nextBtn:        document.getElementById('nextBtn'),
    rulesBox:       document.getElementById('rulesBox'),
    rulesText:      document.getElementById('rulesText'),
    hintBox:        document.getElementById('hintBox'),
    hintText:       document.getElementById('hintText'),
    answerBox:      document.getElementById('answerBox'),
    answerBoxTitle: document.getElementById('answerBoxTitle'),
    answerText:     document.getElementById('answerText'),
    feedbackBox:    document.getElementById('feedbackBox'),
    feedbackTitle:  document.getElementById('feedbackTitle'),
    feedbackText:   document.getElementById('feedbackText'),
    challengeQuestion:      document.getElementById('challengeQuestion'),
    challengeInput:         document.getElementById('challengeInput'),
    challengeHintBtn:       document.getElementById('challengeHintBtn'),
    challengeCheckBtn:      document.getElementById('challengeCheckBtn'),
    challengeNextBtn:       document.getElementById('challengeNextBtn'),
    challengeHintBox:       document.getElementById('challengeHintBox'),
    challengeHintText:      document.getElementById('challengeHintText'),
    challengeFeedbackBox:   document.getElementById('challengeFeedbackBox'),
    challengeFeedbackTitle: document.getElementById('challengeFeedbackTitle'),
    challengeFeedbackText:  document.getElementById('challengeFeedbackText'),
    challengeProgressText:  document.getElementById('challengeProgressText'),
    challengeSituation:     document.getElementById('challengeSituation'),
    challengeTags:          document.getElementById('challengeTags')
};


// ─── Screen navigation ────────────────────────────────────────────────────────

function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
}

// ─── Topic card clicks ────────────────────────────────────────────────────────

document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        if (mode === 'conversation') {
            state.mode = 'conversation';
            state.currentTopic = card.dataset.topic;
            el.answerTypeSelection.style.display =
                state.currentTopic === 'opinions' ? 'none' : 'block';
            showScreen('difficulty');
        } else if (mode === 'drills') {
            state.mode = 'drills';
            state.currentCategory = card.dataset.category;
            showDrillsSelection();
        } else if (mode === 'challenge') {
            state.mode = 'challenge';
            state.currentChallenge = card.dataset.challenge;
            startChallenge();
        }
    });
});

// ─── Difficulty & answer type ─────────────────────────────────────────────────

document.querySelectorAll('.difficulty-btn[data-difficulty]').forEach(btn => {
    btn.addEventListener('click', () => {
        state.currentDifficulty = btn.dataset.difficulty;
        state.timeLimit = timeLimits[state.currentDifficulty];
        if (state.currentTopic === 'opinions') {
            state.answerType = 'both';
            startPractice();
        }
    });
});

document.querySelectorAll('.difficulty-btn[data-answertype]').forEach(btn => {
    btn.addEventListener('click', () => {
        state.answerType = btn.dataset.answertype;
        if (state.currentDifficulty) startPractice();
    });
});

// ─── Navigation buttons ───────────────────────────────────────────────────────

el.backToTopics.addEventListener('click', () => showScreen('topic'));
el.backToTopicsFromDrills.addEventListener('click', () => showScreen('topic'));
el.exitPractice.addEventListener('click', () => { stopTimer(); showScreen('topic'); });
el.exitChallenge.addEventListener('click', () => showScreen('topic'));

// ─── Drills category screen ───────────────────────────────────────────────────

function showDrillsSelection() {
    const category = drillsMetadata.categories.find(c => c.id === state.currentCategory);
    if (!category) return;
    el.drillsCategoryTitle.textContent = category.name;
    el.drillsList.innerHTML = '';
    category.drills.forEach(drill => {
        const btn = document.createElement('button');
        btn.className = 'topic-card';
        btn.innerHTML = '<h3>' + drill.name + '</h3>';
        btn.addEventListener('click', () => {
            state.currentDrill = drill.id;
            state.currentDifficulty = 'medium';
            state.timeLimit = 20;
            startDrills();
        });
        el.drillsList.appendChild(btn);
    });
    showScreen('drills');
}


// ─── Conversation mode ────────────────────────────────────────────────────────

function startPractice() {
    const topicData = questionsData[state.currentTopic];
    if (!topicData) return;
    state.questions = shuffleArray([...topicData]);
    state.currentQuestionIndex = 0;
    el.drillInput.classList.add('hidden');
    el.rulesBtn.classList.add('hidden');
    el.checkBtn.classList.add('hidden');
    el.rulesBox.classList.add('hidden');
    el.hintBtn.classList.remove('hidden');
    el.answerBtn.classList.remove('hidden');
    showScreen('practice');
    loadQuestion();
}

function loadQuestion() {
    if (state.currentQuestionIndex >= state.questions.length) {
        state.currentQuestionIndex = 0;
        state.questions = shuffleArray(state.questions);
    }
    const q = state.questions[state.currentQuestionIndex];
    el.question.textContent = q.question;
    el.hintText.textContent = q.hint;

    let answersToShow = [];
    if (state.currentTopic === 'opinions') {
        answersToShow = q.answers;
        el.answerBoxTitle.textContent = 'Risposte possibili:';
    } else if (state.answerType === 'short') {
        answersToShow = q.shortAnswers;
        el.answerBoxTitle.textContent = 'Risposte brevi:';
    } else if (state.answerType === 'long') {
        answersToShow = q.longAnswers;
        el.answerBoxTitle.textContent = 'Risposte elaborate:';
    } else {
        answersToShow = [...q.shortAnswers, ...q.longAnswers];
        el.answerBoxTitle.textContent = 'Risposte possibili:';
    }

    el.answerText.innerHTML = '<ul>' + answersToShow.map(a => '<li>' + a + '</li>').join('') + '</ul>';
    el.hintBox.classList.add('hidden');
    el.answerBox.classList.add('hidden');
    el.feedbackBox.classList.add('hidden');
    startTimer();
}

// ─── Drills mode ──────────────────────────────────────────────────────────────

function startDrills() {
    const drillData = drillsData[state.currentDrill];
    if (!drillData) { alert('Esercizio non ancora disponibile'); return; }
    state.exercises = shuffleArray([...drillData.exercises]);
    state.currentQuestionIndex = 0;
    el.drillInput.classList.remove('hidden');
    el.rulesBtn.classList.remove('hidden');
    el.checkBtn.classList.remove('hidden');
    el.hintBtn.classList.add('hidden');
    el.answerBtn.classList.add('hidden');
    el.rulesText.innerHTML = drillData.rules.replace(/\n/g, '<br>');
    showScreen('practice');
    loadExercise();
}

function loadExercise() {
    if (state.currentQuestionIndex >= state.exercises.length) {
        state.currentQuestionIndex = 0;
        state.exercises = shuffleArray(state.exercises);
    }
    const ex = state.exercises[state.currentQuestionIndex];
    el.question.textContent = ex.q;
    el.drillInput.value = '';
    el.drillInput.className = 'drill-input';
    el.rulesBox.classList.add('hidden');
    el.answerBox.classList.add('hidden');
    el.feedbackBox.classList.add('hidden');
    startTimer();
    setTimeout(() => el.drillInput.focus(), 100);
}

function checkDrillAnswer() {
    const ex = state.exercises[state.currentQuestionIndex];
    const user = el.drillInput.value.trim().toLowerCase();
    const isOk = user === ex.a.toLowerCase();
    el.feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    el.drillInput.classList.add(isOk ? 'correct' : 'incorrect');
    el.feedbackBox.classList.add(isOk ? 'correct' : 'incorrect');
    el.feedbackTitle.textContent = isOk ? 'Corretto!' : 'Non corretto';
    el.feedbackText.textContent = 'La risposta corretta e\': ' + ex.a;
    if (isOk) stopTimer();
}

// ─── Timer ────────────────────────────────────────────────────────────────────

function startTimer() {
    stopTimer();
    state.timeLeft = state.timeLimit;
    el.timer.textContent = state.timeLeft;
    el.timer.classList.remove('warning');
    state.timer = setInterval(() => {
        state.timeLeft--;
        el.timer.textContent = state.timeLeft;
        if (state.timeLeft <= 5) el.timer.classList.add('warning');
        if (state.timeLeft <= 0) stopTimer();
    }, 1000);
}

function stopTimer() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
    el.timer.classList.remove('warning');
}

// ─── Practice screen buttons ──────────────────────────────────────────────────

el.rulesBtn.addEventListener('click', () => el.rulesBox.classList.toggle('hidden'));
el.hintBtn.addEventListener('click',  () => el.hintBox.classList.toggle('hidden'));
el.answerBtn.addEventListener('click', () => { el.answerBox.classList.toggle('hidden'); stopTimer(); });
el.checkBtn.addEventListener('click', checkDrillAnswer);
el.drillInput.addEventListener('keypress', e => { if (e.key === 'Enter') checkDrillAnswer(); });
el.nextBtn.addEventListener('click', () => {
    state.currentQuestionIndex++;
    if (state.mode === 'conversation') loadQuestion();
    else loadExercise();
});


// ─── Challenge mode ───────────────────────────────────────────────────────────

function startChallenge() {
    const data = challengesData[state.currentChallenge];
    if (!data) return;
    state.challengeExercises = [...data.exercises];
    state.currentQuestionIndex = 0;
    el.challengeSituation.textContent = data.situation;
    el.challengeTags.innerHTML = data.grammarFocus
        .map(tag => '<span class="challenge-tag">' + tag + '</span>').join('');
    el.challengeInput.style.display = '';
    el.challengeHintBtn.style.display = '';
    el.challengeCheckBtn.style.display = '';
    el.challengeNextBtn.textContent = 'Prossima';
    showScreen('challenge');
    loadChallengeExercise();
}

function loadChallengeExercise() {
    const total = state.challengeExercises.length;
    if (state.currentQuestionIndex >= total) {
        el.challengeQuestion.textContent = 'Sfida completata!';
        el.challengeInput.style.display = 'none';
        el.challengeHintBtn.style.display = 'none';
        el.challengeCheckBtn.style.display = 'none';
        el.challengeNextBtn.textContent = 'Torna alle sfide';
        el.challengeProgressText.textContent = total + ' / ' + total;
        el.challengeFeedbackBox.classList.add('hidden');
        el.challengeHintBox.classList.add('hidden');
        return;
    }
    const ex = state.challengeExercises[state.currentQuestionIndex];
    el.challengeQuestion.textContent = ex.q;
    el.challengeInput.value = '';
    el.challengeInput.className = 'drill-input';
    el.challengeHintText.textContent = ex.hint;
    el.challengeHintBox.classList.add('hidden');
    el.challengeFeedbackBox.classList.add('hidden');
    el.challengeProgressText.textContent = (state.currentQuestionIndex + 1) + ' / ' + total;
    setTimeout(() => el.challengeInput.focus(), 80);
}

function checkChallengeAnswer() {
    const ex = state.challengeExercises[state.currentQuestionIndex];
    const user = el.challengeInput.value.trim().toLowerCase();
    const options = ex.a.toLowerCase().split('/').map(s => s.trim());
    const isOk = options.some(opt => user === opt);
    el.challengeFeedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    el.challengeInput.classList.add(isOk ? 'correct' : 'incorrect');
    el.challengeFeedbackBox.classList.add(isOk ? 'correct' : 'incorrect');
    el.challengeFeedbackTitle.textContent = isOk ? 'Corretto!' : 'Non corretto';
    el.challengeFeedbackText.textContent = 'La risposta corretta e\': ' + ex.a;
}

el.challengeHintBtn.addEventListener('click', () => el.challengeHintBox.classList.toggle('hidden'));
el.challengeCheckBtn.addEventListener('click', checkChallengeAnswer);
el.challengeInput.addEventListener('keypress', e => { if (e.key === 'Enter') checkChallengeAnswer(); });
el.challengeNextBtn.addEventListener('click', () => {
    if (state.currentQuestionIndex >= state.challengeExercises.length) {
        showScreen('topic');
    } else {
        state.currentQuestionIndex++;
        loadChallengeExercise();
    }
});

// ─── Utilities ────────────────────────────────────────────────────────────────

function shuffleArray(array) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ─── Init ─────────────────────────────────────────────────────────────────────

showScreen('topic');
