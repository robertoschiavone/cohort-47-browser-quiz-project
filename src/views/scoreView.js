/**
 * Create a score element
 * @returns {Element}
 */
export const createScoreElement = (score) => {
  const element = document.createElement('span');
  element.innerHTML = String.raw`
    Score: ${score}/10
  `;
  return element;
};
