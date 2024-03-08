import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { createAnswerElement } from '../views/answerView.js';
import { createQuestionElement } from '../views/questionView.js';

let counter = 0;
let questionAnswered = false;
let answeredQuestions = [];

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    if (quizData.questions[quizData.currentQuestionIndex].correct === key) {
      answerElement.setAttribute('data-answer', true);
    } else {
      answerElement.setAttribute('data-answer', false);
    }

    answerElement.addEventListener('click', showAnswer);
    answersListElement.appendChild(answerElement);
  }

  questionElement.appendChild(showScore(counter));

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      const answerList = Array.from(document.querySelectorAll('li'));

      // Check if any answer is selected
      const isAnswerSelected = answerList.some(
        (li) => li.style.backgroundColor === 'green'
      );

      if (isAnswerSelected) {
        nextQuestion();
      } else {
        const correctAnswers = answerList.filter(
          (li) => li.innerText.charAt(0) === currentQuestion.correct
        )[0];
        console.log(correctAnswers);
        correctAnswers.style.backgroundColor = 'green';
        setTimeout(nextQuestion, 2000);
      }
    });
};

const showAnswer = (e) => {
  const getAnswerElement = e.target;
  quizData.questions[quizData.currentQuestionIndex].selected = true;
  const isCorrect = getAnswerElement.getAttribute('data-answer') === 'true';
  if (isCorrect) {
    getAnswerElement.style.backgroundColor = 'green';

    counter++;
  } else {
    getAnswerElement.style.backgroundColor = 'red';

    document.querySelector('[data-answer="true"]').style.backgroundColor =
      'green';
  }

  // Disable further clicks after an answer is selected
  const answers = document
    .getElementById('answers-list')
    .getElementsByTagName('li');

  for (const answer of answers) {
    answer.style.pointerEvents = 'none';
  }

  //saveAnswer();
};

const showScore = (counter) => {
  const scoreText = `${counter * 10}`;
  const scoreNode = document.createTextNode(scoreText);
  const scorElement = document.createElement('div');
  scorElement.className = 'score-element';
  scorElement.appendChild(scoreNode);
  return scorElement;
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex < quizData.questions.length) {
    initQuestionPage();
  } else {
    quizData.currentQuestionIndex = 0;

    getScorePage();
  }
};

const getScorePage = () => {
  const userName = localStorage.getItem('username');

  const scoreInfo = `Hello ${userName} you have earned ${
    counter * 10
  } points out of ${quizData.questions.length * 10} points`;
  const textCont = document.createTextNode(scoreInfo);
  const textEl = document.createElement('p');
  const userInterf = document.getElementById(USER_INTERFACE_ID);

  userInterf.firstElementChild.style.display = 'none';

  textEl.appendChild(textCont);

  const restartButton = document.createElement('button');
  restartButton.className = 'restart-button';

  restartButton.addEventListener('click', retakeTest);

  restartButton.textContent = 'Retake Quiz';

  const resultDiv = document.createElement('div');

  resultDiv.className = 'result-content';

  resultDiv.appendChild(textEl);
  resultDiv.appendChild(restartButton);

  userInterf.appendChild(resultDiv);

  return userInterf;
};

const retakeTest = () => {
  counter = 0;

  const divScore = document.getElementById(USER_INTERFACE_ID);

  divScore.firstElementChild.style.display = 'block';

  initQuestionPage();
};

// function saveAnswer() {
//   if (quizData.questions[quizData.currentQuestionIndex].selected) {
//     answeredQuestions.push(quizData.questions[quizData.currentQuestionIndex]);
//     sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
// }
// }

// function loadAnswers() {

//           const savedAnswers = sessionStorage.getItem("answeredQuestions");
//           if (savedAnswers!== null) {
//             quizData.questions=JSON.parse(savedAnswers)
//           }

// }

// function refreshPage() {
//   sessionStorage.clear();
//   location.reload();
// }

// window.onload = loadAnswers;
