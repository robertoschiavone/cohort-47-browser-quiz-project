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
      text: "How many Infinity Stones are there?",
      answers: {
        a: '6',
        b: '4',
        c: '5',
        d:"3"
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'infinity stones',
          href: 'https://www.marvel.com/comics/discover/958/infinity-stones#:~:text=The%20six%20Infinity%20Stones%20grant,learn%20about%20each%20stone%20here!',
        },
      ],
    },
    {
      text: 'Where is Captain America from ?',
      answers: {
        a: 'Amsterdam',
        b: 'Texas',
        c: 'Brooklyn',
        d: 'Dronten',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Steve Rogers',
          href: 'https://en.wikipedia.org/wiki/Steve_Rogers_(Marvel_Cinematic_Universe)#:~:text=Fictional%20character%20biography-,Origin,gas%20during%20World%20War%20I.',
        },

      ],
    },
    {
      text: "Who is Tony Stark’s father?",
      answers: {
        a: 'Howard Stark',
        b: 'Eddard Stark',
        c: 'Rob Stark',
        d: 'Brendan Stark',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Howard Stark',
          href: 'https://screenrant.com/why-mcu-recast-tony-father-howard-stark/#:~:text=After%20appearing%20in%20several%20Iron,leaving%20some%20to%20wonder%20why.',
        },
      ],
    },
    {
      text: 'What does S.H.I.E.L.D. stand for?',
      answers: {
        a: 'She Is A Lagend',
        b: 'Strategic Homeland Intervention, Enforcement and Logistics Division.',
        c: 'Sentient World Observation and Response Department',
        d: 'Special Threat Assessment for Known Extranormalities',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'S.H.I.E.L.D.',
          href: 'https://en.wikipedia.org/wiki/S.H.I.E.L.D.#:~:text=Within%20the%20various%20films%20set,Intervention%2C%20Enforcement%20and%20Logistics%20Division.',
        },
        {
          text: 'MDN',
          href:
            'https://parade.com/1192384/alexandra-hurtado/marvel-trivia-quiz/',
        },
      ],
    },
    {
      text: 'Sharon Carter is whose great-niece?',
      answers: {
        a: 'John Carter',
        b: 'Jimmy Carter',
        c: 'Peggy Carter',
        d: 'Harold Carter',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Sharon Carter',
          href: 'https://marvelcinematicuniverse.fandom.com/wiki/Sharon_Carter#:~:text=Portrayed%20by&text=Sharon%20Carter%20is%20the%20great,living%20up%20to%20any%20expectations.',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://parade.com/1192384/alexandra-hurtado/marvel-trivia-quiz/',
        },
      ],
    },
    {
      text: 'What type of doctor is Doctor Strange?',
      answers: {
        a: 'Therotical Phycisist',
        b: 'Experimental Phycisist',
        c: 'Neurosurgeon',
        d: 'Mathematician',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Doctor Strange',
          href: 'https://en.wikipedia.org/wiki/Doctor_Strange#:~:text=Strange%20was%20a%20skilled%20neurosurgeon,sentience%20of%20the%20Marvel%20Universe.',
        },
      ],
    },
    // Add more questions here
    {
      text: 'Whose power "exceeds that of the Sorcerer Supreme?"',
      answers: {
        a: 'The Scarlet Witch/Wanda.',
        b: 'Doctor Strange',
        c: 'Iron Man',
        d: 'Spider Man',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'The Scarlet Witch/Wanda',
          href: 'https://www.reddit.com/r/marvelstudios/comments/rvfgx7/your_power_exceeds_that_of_the_sorcerer_supreme/?rdt=39535#',
        },
        {
          text: 'The Scarlet Witch/Wanda.',
          href: 'https://parade.com/1192384/alexandra-hurtado/marvel-trivia-quiz/',
        },
      ],
    },
    {
      text: "Captain America’s shield and Bucky's arm are made of what?",
      answers: {
        a: 'Iron',
        b: 'Vibranium',
        c: 'Wooden',
        d: 'Adamantium',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Vibranium',
          href: 'https://www.ever-roll.com/what-exactly-is-vibranium-metal-is-it-real/#:~:text=Vibranium%20is%20Not%20Real,earth%2C%20hence%20its%20fantastical%20properties.',
        },
        {
          text: 'Marvel',
          href:
            'https://parade.com/1192384/alexandra-hurtado/marvel-trivia-quiz/',
        },
      ],
    },
    {
      text: "Who was able to pick up Thor’s hammer in Endgame?",
      answers: {
        a: 'Tony Stark',
        b: 'Spider Man',
        c: 'Captain America',
        d: 'Wanda',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Thor’s hammer',
          href: 'https://screenrant.com/captain-america-lift-thor-hammer-mjolnir-endgame/#:~:text=But%20the%20most%20famous%20wielder,against%20Thanos%20in%20Avengers%3A%20Endgame.',
        },
        {
          text: 'Captain America',
          href: 'https://parade.com/1192384/alexandra-hurtado/marvel-trivia-quiz/',
        },
      ],
    },
    {
      text: 'Wanda and her brother Pietro are from where?',
      answers: {
        a: 'USA',
        b: 'Canada',
        c: 'Netherlands',
        d: 'Sokovia',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Sokovia',
          href: 'https://marvelcinematicuniverse.fandom.com/wiki/Scarlet_Witch#:~:text=Wanda%20Maximoff%20was%20a%20native,her%20fraternal%20twin%20brother%2C%20Pietro.',
        },
        {
          text: 'MARVEL',
          href:
            'https://parade.com/1192384/alexandra-hurtado/marvel-trivia-quiz/',
        },
      ],
    },
  ],
};
