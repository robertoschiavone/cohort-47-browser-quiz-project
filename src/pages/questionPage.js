import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createScoreElement } from '../views/scoreView.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
let score = 0;
export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const scoreElement = createScoreElement(score);

  userInterface.appendChild(scoreElement);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  const options = document.querySelectorAll('li');

  for (const option of options) {
    option.addEventListener(
      'click',
      () => {
        currentQuestion.selected = option.innerText.charAt(0);
        if (currentQuestion.selected === currentQuestion.correct) {
          option.style.backgroundColor = 'green';
          score++;
        } else {
          option.style.backgroundColor = 'red';
          options.forEach((option) => {
            option.innerText.charAt(0) === currentQuestion.correct &&
              (option.style.backgroundColor = 'green');
            option.style.pointerEvents = 'none';
          });
        }
      },
      { once: true }
    );
  }
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};
