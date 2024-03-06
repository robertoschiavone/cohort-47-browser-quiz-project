import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {

  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <h2>Enter your user name here and start!</h2>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};

export const createInputElement = () => {

  const element = document.createElement('input');

        element.type="text"
        element.name="name"
        element.id="inputname"

  return element;
};
