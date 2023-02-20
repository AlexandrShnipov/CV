import linkedin from '../images/linkedin.png';
import telegram from '../images/telegram.png';
import skype from '../images/skype.png';
import email from '../images/mail.png';
import github from '../images/github.png';
import tel from '../images/tel.png';
import myPhoto from '../images/myPhoto.jpg';
import location from '../images/location.png';
import qrCode from '../images/qrCode.png';
import finger from '../images/finger.png';

export const statePl = {
  about: {
    photo: myPhoto,
    profession: 'frontend-developer',
    name: 'Aliaksandr',
    surname: 'Shnipau'
  },
  contacts: {
    tel: {name: 'tel', img: tel, text: '+48 516 364 062', link: 'tel:+48516364062'},
    socials: [
      {name: 'linkedin', img: linkedin, link: 'https://www.linkedin.com/in/alexander-shnipov-717101204/'},
      {name: 'telegram', img: telegram, link: 'https://t.me/S_Shnipov'},
      {name: 'skype', img: skype, link: 'https://join.skype.com/invite/Ohvpl9s9beq2'},
      {name: 'email', img: email, link: 'sshnipov@gmail.com'},
      {name: 'github', img: github, link: 'https://github.com/settings/profile'}
    ]
  },
  location:
    {
      city: 'Wrocław',
      country: 'Polska',
      icon: location
    },
  summary: 'Zorientowany na wyniki i entuzjastyczny programista stron internetowych, doświadczony w tworzeniu SPA z użyciem JS, React, TypeScript, HTML, CSS, BEM, REM, SCSS, Pixel Perfect, BOOTSTRAP, GULP, WordPress. Każdego dnia staram się uczyć nowych technologii i pracować nad doskonaleniem swoich umiejętności w zakresie HTML, CSS, React i JavaScript.My plany obejmują poprawę umiejętności w JS, REACT, TypeScript, Svelte.Pracuję nad poprawą poziomu języka angielskiego i polskiego.Używam czatu GPT do moich projektów) jest świetnym pomocnikiem przyspieszającym rozwój. Lubię go używać zamiast zwykłych żądań w przeglądarce.',
  skills: ['Angielski: B2', 'Polski: A2', 'HTML', 'CSS/SCSS', 'JS', 'React', 'ReactHooks', 'TypeScript', 'GIT', 'Redux', 'Ajax', 'GraphQL', 'Material UI',
    'Bootstrap', 'BEM', 'PixelPerfect', 'Wordpress', 'Unit tests', 'Formik', 'Svelte'],
  portfolio: {
    link: 'https://alexandrshnipov.github.io/portfolio_react/',
    qrCode: qrCode,
    finger: finger
  },
  experience: {
    frontend: {
      position: 'Frontend-programista / układ strony',
      places: 'Freelance',
      dateTitle: 'date',
      date: '09/2021-present',
      work: [
        'HTML5, CSS,  BEM, SCSS/LESS, Greed',
        'JS, REACT, TypeScript, Svelte, GraphQL', 'pixel perfect',
        'Bootstrap',
        'Email letters',
        'WordPress'
      ]
    },
    customs: {
      position: 'Celnik',
      positionsArray: [
        {
          subPosition: 'Szef działu',
          places: 'Instytut organów celnych, Mińsk'
        },
        {
          subPosition: 'Inspektor-Kierownik Działu Zarządzania Ryzykiem',
          places: 'Celnica w Witebsku, Witebsk'
        }
      ],
      dateTitle: 'date',
      date: '2004 – 2021',
      work: ['Kontrola celna',
        'Analiza baz danych',
        'Zarządzanie działem do 30 osób',
        'Praca zespołowa',
        'Mentorowanie',
        'Organizacja procesu edukacji'
      ]
    }
  },
  education: [
    {
      places: 'Glo-Academy',
      position: 'Kurs dla deweloperów WordPress',
      site: 'https://glo-academy.org/',
      dateTitle: 'date',
      date: '2021-2022',
      skills: ['WordPress development']
    }, {
      places: 'IT-Incubator',
      position: 'HTML-Developer',
      site: 'https://it-incubator.io/',
      dateTitle: 'date',
      date: '2020-2021',
      skills: ['HTML', 'CSS, SCSS/LESS', 'Java Sсript', 'Bootstrap', 'WordPress', 'Git', 'React', 'Email Letters']
    }, {
      places: 'Witebska Państwowa Akademia Medycyny Weterynaryjnej',
      position: 'weterynarz',
      dateTitle: 'date',
      date: '1993 – 1998'
    }
  ],
  summaryTitle: 'Podsumowanie',
  skillsTitle: 'Umiejętności',
  experienceTitle: 'Doświadczenie',
  educationTitle: 'Edukacja',
  linkOpenPortfolio: 'otwórz moje portfolio'
};