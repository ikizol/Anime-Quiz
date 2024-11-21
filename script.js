const quizData = [
  {
      question: "In Noragami, what is Yato’s dream?",
      a: "To become a famous god",
      b: "To destroy all phantoms",
      c: "To open a shrine",
      d: "To reclaim his sword",
      correct: "c"
  },
  {
      question: "Who is the captain of Squad 11 in Bleach?",
      a: "Toshiro Hitsugaya",
      b: "Kenpachi Zaraki",
      c: "Byakuya Kuchiki",
      d: "Ichigo Kurosaki",
      correct: "b",
  },
  {
      question: "What anime features characters fighting to the death on a floating arena known as Neo Genesis Island?",
      a: "Sword Art Online",
      b: "Darwin’s Game",
      c: "No Game No Life",
      d: "Future Diary",
      correct: "d",
  }
];

const startPage = document.getElementById('start-page');
const quizHeader = document.getElementById('quiz-header');
const questionEl = document.getElementById('question');
const a_button = document.getElementById('a_button');
const b_button = document.getElementById('b_button');
const c_button = document.getElementById('c_button');
const d_button = document.getElementById('d_button');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');

let currentQuiz = 0;
let score = 0;

// Start button functionality
startBtn.addEventListener('click', () => {
  startPage.style.display = 'none';  // Hide the start page
  quizHeader.style.display = 'block'; // Show the quiz content
  submitBtn.style.display = 'block'; // Show the submit button
  loadQuiz(); // Load the first question
});

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_button.innerText = currentQuizData.a;
  b_button.innerText = currentQuizData.b;
  c_button.innerText = currentQuizData.c;
  d_button.innerText = currentQuizData.d;
}

function deselectAnswers() {
  a_button.classList.remove('selected');
  b_button.classList.remove('selected');
  c_button.classList.remove('selected');
  d_button.classList.remove('selected');
}

function getSelected() {
  if (a_button.classList.contains('selected')) return 'a';
  if (b_button.classList.contains('selected')) return 'b';
  if (c_button.classList.contains('selected')) return 'c';
  if (d_button.classList.contains('selected')) return 'd';
  return null;
}

// Event listeners for selecting answers
a_button.addEventListener('click', () => selectAnswer('a'));
b_button.addEventListener('click', () => selectAnswer('b'));
c_button.addEventListener('click', () => selectAnswer('c'));
d_button.addEventListener('click', () => selectAnswer('d'));

function selectAnswer(answerId) {
  deselectAnswers();
  document.getElementById(`${answerId}_button`).classList.add('selected');
}

// Submit button functionality
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz(); // Load next question
    } else {
      quizHeader.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
      submitBtn.style.display = 'none';  // Hide the submit button after quiz ends
    }
  }
});

