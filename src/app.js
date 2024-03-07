import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  // quizData.currentQuestionIndex = 0;

  let currentIndex = parseInt(localStorage.getItem('currentIndex'));
 
if (!currentIndex) {
  currentIndex=0
}
  if (currentIndex !== 0) {
    initQuestionPage(currentIndex);
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
