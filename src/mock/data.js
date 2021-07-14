import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Harry Edge', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Harry Edge',
  subtitle: 'Full-Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'Hi my name is Harry and I am a passionate Full-Stack Developer from Manchester.',
  paragraphTwo: 'I currently specialise in Django and React, but I love learning new technologies and frameworks.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ratemypint.jpeg',
    title: 'Rate My Pint',
    info: 'RateMyPint gives users the ability to rate the quality of pints in pubs and bars across the UK, allowing people to find great pints in different cities they visit. ' +
        'The app uses Google Maps API that will show a map of all the best pints in their current location, the api is also used to auto-complete a location' +
        'searching for a venue when adding a new pint entry. Deployed using Heroku and AWS. ' +
        'Ratemypint.co.uk',
    info2: 'Technologies: Python, Javascript, Django-REST Framework, React, Material-UI, Google Maps API, Google Places API, ' +
          'Heroku, AWS, PostgreSQL',
    url: 'https://www.ratemypint.com',
    repo: 'https://github.com/Harry-Edge/Rate-My-Pint-Pre-Deployment-Build',
  },
  {
    id: nanoid(),
    img: 'mnocrm.jpeg',
    title: 'MNO CRM/POS System',
    info: 'A mock CRM system that would be used by a Mobile network to upgrade and maintain its relationship with existing customers.' +
        ' Uses React for the frontend and the Django-REST framework for all the backend processing. The system will dynamically give ' +
        'Sim-Only and Handset Recommendations using an algorithm based on customers data usage and current device. Full user authentication using JWT. ',
    info2: 'Technologies: Python, Javascript, Django-REST Framework, React, Material-UI',
    repo: 'https://github.com/Harry-Edge/MNO-CRM-Sales-System', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trackit.jpeg',
    title: 'TrackIt',
    info: 'Trackit is an all in one web app that allows the user to track and record all relevant data points when it' +
        ' comes to building strength and controlling weight/cutting. Built in Django and uses Chart.js to display data points to the users',
    info2: 'Technologies: Python, Django, HTML, CSS, Javascript, Chart.JS, Bootstrap.',
    repo: 'https://github.com/Harry-Edge/Trackit-Strength-Weight-Calorie-Tracking', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'edge.harry@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/harry-edge-b80a99151/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Harry-Edge',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
