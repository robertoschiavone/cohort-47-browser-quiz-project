/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'Who is the leader of the Avengers?',
      answers: {
        a: 'Iron Man',
        b: 'Captain America',
        c: 'Thor',
        d: 'Black Widow',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Marvel Cinematic Universe Wiki',
          href: 'https://marvelcinematicuniverse.fandom.com/wiki/Avengers',
        },
      ],
    },
    {
      text: 'Which Infinity Stone does Vision possess?',
      answers: {
        a: 'Mind Stone',
        b: 'Reality Stone',
        c: 'Power Stone',
        d: 'Space Stone',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Marvel Database',
          href: 'https://marvel.fandom.com/wiki/Vision',
        },
      ],
    },
    {
      text: 'What is the real name of Black Widow?',
      answers: {
        a: 'Natasha Romanoff',
        b: 'Wanda Maximoff',
        c: 'Carol Danvers',
        d: 'Maria Hill',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Marvel Cinematic Universe Wiki',
          href:
            'https://marvelcinematicuniverse.fandom.com/wiki/Natasha_Romanoff',
        },
      ],
    },
    {
      text: 'Which villain is known for wielding the Infinity Gauntlet?',
      answers: {
        a: 'Loki',
        b: 'Red Skull',
        c: 'Thanos',
        d: 'Ultron',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Marvel Database',
          href: 'https://marvel.fandom.com/wiki/Thanos',
        },
      ],
    },
    {
      text: "What metal is Captain America's shield made of?",
      answers: {
        a: 'Adamantium',
        b: 'Vibranium',
        c: 'Uru',
        d: 'Promethium',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Marvel Database',
          href: 'https://marvel.fandom.com/wiki/Vibranium',
        },
      ],
    },
    {
      text: 'Who is the Norse god of thunder in the Avengers?',
      answers: {
        a: 'Loki',
        b: 'Odin',
        c: 'Thor',
        d: 'Hela',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Marvel Cinematic Universe Wiki',
          href: 'https://marvelcinematicuniverse.fandom.com/wiki/Thor',
        },
      ],
    },
    {
      text: 'Which Avenger can shrink and grow in size?',
      answers: {
        a: 'Ant-Man',
        b: 'Hawkeye',
        c: 'Falcon',
        d: 'Doctor Strange',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Marvel Database',
          href: 'https://marvel.fandom.com/wiki/Ant-Man',
        },
      ],
    },
    {
      text: 'Who is known as the "Strongest Avenger"?',
      answers: {
        a: 'Hulk',
        b: 'Thor',
        c: 'Iron Man',
        d: 'Captain America',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Marvel Cinematic Universe Wiki',
          href: 'https://marvelcinematicuniverse.fandom.com/wiki/Hulk',
        },
      ],
    },
    {
      text: 'Which Avenger is a master archer?',
      answers: {
        a: 'Hawkeye',
        b: 'Black Panther',
        c: 'Spider-Man',
        d: 'Doctor Strange',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Marvel Cinematic Universe Wiki',
          href: 'https://marvelcinematicuniverse.fandom.com/wiki/Hawkeye',
        },
      ],
    },
    {
      text: "What is the name of Tony Stark's AI assistant?",
      answers: {
        a: 'J.A.R.V.I.S.',
        b: 'Ultron',
        c: 'F.R.I.D.A.Y.',
        d: 'Siri',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Marvel Cinematic Universe Wiki',
          href: 'https://marvelcinematicuniverse.fandom.com/wiki/F.R.I.D.A.Y.',
        },
      ],
    },
  ],
};
