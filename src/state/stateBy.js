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

export const stateBy = {
  about: {
    photo: myPhoto,
    profession: 'frontend-developer',
    name: 'Аляксандр',
    surname: 'Шніпаў'
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
      city: 'Вроцлаў',
      country: 'Польшча',
      icon: location
    },
  summary: 'Арыентаваны на вынік і захоплены вэб-распрацоўшчык, які мае вопыт стварэння SPA з выкарыстаннем JS, React, TypeScript, HTML, CSS, BEM, REM, SCSS, Pixel Perfect, BOOTSTRAP, GULP, WordPress. Кожны дзень я імкнуся вывучаць новыя тэхналогіі і працую над паляпшэннем сваіх навыкаў у HTML, CSS, React і JavaScript.У мае планы ўваходзіць ўдасканаленне навыкаў у JS, REACT, TypeScript, Svelte.Я працую над павышэннем ўзроўню валодання англійскай і польскай мовамі.Я выкарыстоўваю GPT чат для сваіх праектаў) гэта выдатны памочнік, які паскарае распрацоўку.',
  skills: ['English: B2', 'Polish: A2', 'HTML', 'CSS/SCSS', 'JS', 'React', 'ReactHooks', 'TypeScript', 'GIT', 'Redux', 'Ajax', 'GraphQL', 'Material UI',
    'Bootstrap', 'BEM', 'PixelPerfect', 'Wordpress', 'Unit tests', 'Formik', 'Svelte', 'ChatGPT'],
  portfolio: {
    link: 'https://alexandrshnipov.github.io/portfolio_react/',
    qrCode: qrCode,
    finger: finger
  },
  experience: {
    frontend: {
      position: 'Frontend-распрацоўшчык / вёрстка сайтаў',
      places: 'Пазаштатны',
      dateTitle: 'дата',
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
      position: 'Мытнік',

      positionsArray: [
        {
          subPosition: 'Кіраўнік кафедры',
          places: 'Інстытут мытных органаў, Менск'
        },
        {
          subPosition: 'Інспектар-начальнік аддзела кіравання рызыкамі',
          places: 'Віцебская мытня, Віцебск'
        }
      ],
      dateTitle: 'дата',
      date: '2004 – 2021',
      work: ['Mытны кантроль',
        'Аналіз баз даных',
        'Кіраванне аддзелам да 30 чалавек',
        'Камандная праца',
        'Ментарства',
        'Арганізацыя адукацыйнага працэсу'
      ]
    }
  },
  education: [
    {
      places: 'Glo-Academy',
      position: 'Курс WordPress',
      site: 'https://glo.academy/',
      dateTitle: 'дата',
      date: '2021-2022',
      skills: ['Распрацоўка WordPress']
    }, {
      places: 'IT-Incubator',
      position: 'HTML-распрацоўшчык',
      site: 'https://it-incubator.io/',
      dateTitle: 'дата',
      date: '2020-2021',
      skills: ['HTML', 'CSS, SCSS/LESS', 'Java Sсript', 'Bootstrap', 'WordPress', 'Git', 'React', 'Email Letters']
    }, {
      places: 'Віцебская дзяржаўная акадэмія ветэрынарнай медыцыны',
      position: 'ветэрынар',
      dateTitle: 'дата',
      date: '1993 – 1998'
    }
  ],
  summaryTitle: 'Рэзюмэ',
  skillsTitle: 'Навыкі',
  experienceTitle: 'Вопыт',
  educationTitle: 'Адукацыя',
  linkOpenPortfolio: 'адкрыйце маё партфоліо'
};