import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { createAnswerElement } from '../views/answerView.js';
import { createQuestionElement } from '../views/questionView.js';

export const initQuestionPage = (currentIndex) => {
  if (currentIndex === undefined) {
    currentIndex = 0;
  }
  const currentQuestion = quizData.questions[currentIndex];

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  localStorage.setItem('currentIndex', currentIndex.toString());

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    if (quizData.questions[currentIndex].correct === key) {
      answerElement.setAttribute('data-answer', true);
    } else {
      answerElement.setAttribute('data-answer', false);
    }

    answerElement.addEventListener('click', showAnswer);
    answersListElement.appendChild(answerElement);
  }

  questionElement.appendChild(showScore());

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
    let savedScore = parseInt(localStorage.getItem('score'));
    let score = 0;
    if (savedScore) {
      console.log('--59--' + savedScore);
      savedScore++;

      localStorage.setItem('score', `${savedScore}`);
    } else {
      console.log('--63--' + score);
      score++;
      localStorage.setItem('score', `${score}`);
    }
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

  // saveAnswer();
};

const showScore = () => {
  let score = localStorage.getItem('score');

  const scoreNode = document.createTextNode(score);
  const scorElement = document.createElement('div');
  scorElement.className = 'score-element';
  scorElement.appendChild(scoreNode);
  return scorElement;
};

const nextQuestion = () => {
  var currentIndex = parseInt(localStorage.getItem('currentIndex'));
  currentIndex++;

  if (currentIndex < quizData.questions.length) {
    initQuestionPage(currentIndex);
  } else {
    currentIndex = 0;

    getScorePage();
  }
};

const getScorePage = () => {
  const userName = localStorage.getItem('username');
  const score = localStorage.getItem('score');
  const scoreInfo = `Hello ${userName} you have earned ${score} points out of ${quizData.questions.length} points`;
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
  localStorage.setItem('score', `${0}`);
  localStorage.setItem('currentIndex', `${0}`);
  const divScore = document.getElementById(USER_INTERFACE_ID);

  divScore.firstElementChild.style.display = 'block';

  initQuestionPage();
};
