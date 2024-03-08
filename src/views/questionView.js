import { ANSWERS_LIST_ID, NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  const userName=localStorage.getItem('username')

  element.className="question-holder"


  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <p>Hello ${userName ? userName : ""} Good Luck!</p>
    <p>${quizData.currentQuestionIndex+1}/${quizData.questions.length}</p>
    <h3>${question}</h3>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next Question
    </button>
  `;

  return element;
};
