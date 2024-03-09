# About Project

This project is a 10-question quiz for fans of the Marvel Universe.Each question consists of 4 options and only one option is the correct answer. While you are taking the quiz, if you answer question wrongly the correct answer is shown to you at the same time.You can skip the next question without answering it, in which case the correct answer will be shown to you.When you finish the quiz, you can take the quiz again starting from the first question.

## Development

This project developed by HYF-Avengers by using HTML, CSS and Javascript.

## Installing Dependencies

There are no dependencies needed to run this application.

# Structure

The structure of the project is like;
public
src
└── pages
└── views
└── app.js
└── constants.js
└── data.js
index.html

```

- `public` this contains the static files such as assets,CSS etc.
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. All logic lies in here.

  - `views` this contains code to define what the DOM will look like.
  - `app.js` this file our initialisation code. We use this file when uploading the project or while refreshing it.
  - `data.js` this is our data model. Anything we need to store in the browser we place inside the data file

# Goal and Backlog

We completed the backlocks as seen below.

- [x] (must have) A user can see one question at a time, stepping through the quiz
- [x] (must have) A user can select an answer for each question
- [x] (must have) Change the <title>
- [x] (must have) add a favicon
- [x] (should have) A user can see what the correct answer is after they selected their answer.
- [x] (should have) A user can see their score update in real-time as they select answers
- [x] (should have) A user can refresh the page and still have his/her given answers available
- [x] (could have) A user can "skip" the question and learn the correct answer, this forfeits the question
- [ ] (could have) Transition between pages or question look fancy like TypeForm for example

```
