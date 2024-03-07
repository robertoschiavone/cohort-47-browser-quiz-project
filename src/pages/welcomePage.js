
import { START_QUIZ_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { createInputElement, createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {

  localStorage.setItem('score', `${0}`);

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  const inputElement = createInputElement();
  

  welcomeElement.appendChild(inputElement)
  userInterface.appendChild(welcomeElement);
  console.log(document.getElementById('inputname').value)
  localStorage.setItem("username",document.getElementById('inputname').value)
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};


const startQuiz = () => {
 
  localStorage.setItem("username",document.getElementById('inputname').value)
  localStorage.setItem('score', `${0}`);
  initQuestionPage();
};



