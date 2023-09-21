const mobileHam = document.querySelector('.menu-m');
const mobileMenu = document.querySelector('.mobile-menu');

function openMenu() {
  mobileHam.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
}
document.querySelector('.btn-hover').addEventListener('click', openMenu);

function closeMenu() {
  mobileHam.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
}
mobileMenu.addEventListener('click', closeMenu);

// Create content
const projects = [
  {
    id: 1,
    name: 'Tonic',
    title1: 'Tonic',
    title2: 'Tonic',
    company1: 'KADARE',
    company2: 'KADARE',
    specialization1: 'Front End Dev ',
    specialization2: 'Front End Dev ',
    year: '2016',
    alignClass: 'one',
    descrip1:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    descrip2:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus neque impedit molestias quisquam officiis ipsum illo maiores deserunt, quidem architecto ratione excepturi nisi ipsam praesentium veniam minima unde ullam, eos, eveniet delectus iure repellendus? Quidem omnis quod pariatur dolor.',
    mobilImg: './img/mob-shot-1.png',
    deskImg: './img/desk-shot-1.png',
    live: '#',
    source: '#',
    techs: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javascript',
      tech4: 'Ruby',
    },
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    title1: 'Tonic',
    title2: 'Tonic',
    company1: 'CANOPY',
    company2: 'CANOPY',
    specialization1: 'Front End Dev ',
    specialization2: 'Front End Dev ',
    year: '2023',
    descrip1:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    descrip2:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus neque impedit molestias quisquam officiis ipsum illo maiores deserunt, quidem architecto ratione excepturi nisi ipsam praesentium veniam minima unde ullam, eos, eveniet delectus iure repellendus? Quidem omnis quod pariatur dolor.',

    mobilImg: './img/mob-shot-2.png',
    deskImg: './img/desk-shot-2.png',
    live: '#',
    source: '#',
    techs: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javascript',
      tech4: 'Ruby',
    },
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    title1: 'Tonic',
    title2: 'Tonic',
    company1: 'CANOPY',
    company2: 'CANOPY',
    specialization1: 'Front End Dev ',
    specialization2: 'Front End Dev ',
    year: '2023',
    descrip1:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    descrip2:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus neque impedit molestias quisquam officiis ipsum illo maiores deserunt, quidem architecto ratione excepturi nisi ipsam praesentium veniam minima unde ullam, eos, eveniet delectus iure repellendus? Quidem omnis quod pariatur dolor.',

    mobilImg: '/img/capstone-mob-1.png',
    deskImg: '/img/caps-desk-1.png',
    live: 'https://husush23.github.io/capstone--1/',
    source: 'https://github.com/husush23/capstone--1',
    techs: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'Javascript',
      tech4: 'Ruby',
    },
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    title1: 'Tonic',
    title2: 'Tonic',
    company1: 'CANOPY',
    company2: 'CANOPY',
    specialization1: 'Fullstack Dev ',
    specialization2: 'Fullstack Dev ',
    year: '2018',
    descrip1:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    descrip2:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus neque impedit molestias quisquam officiis ipsum illo maiores deserunt, quidem architecto ratione excepturi nisi ipsam praesentium veniam minima unde ullam, eos, eveniet delectus iure repellendus? Quidem omnis quod pariatur dolor.',

    mobilImg: '/img/mob-shot-4.png',
    deskImg: '/img/desk-shot-4.png',
    live: '#',
    source: '#',
    techs: {
      tech1: 'HTML & CSS',
      tech2: 'Ruby',
      tech3: 'Javascript',
      tech4: 'Ruby',
    },
  },
  {
    id: 5,
    name: 'Expenses app',
    title1: 'Expenses',
    title2: 'Expense',
    company1: 'Hussein',
    company2: 'Hussein',
    specialization1: 'Fulls-tack Dev ',
    specialization2: 'Fulls-tack Dev ',
    year: '2023',
    descrip1:
      'A daily expense tracker  <br class="must-ignor">personalized reads;it secures your accounts and can save any task you need.',
    descrip2:
      'An expensees is an expenditure tracker that can help to know how much you spent. <br> This is for everyone and is free, it is hosted on live, you can check it below link',

    mobilImg: '/img/expense-mob.png',
    deskImg: '/img/expense-desk.png',
    live: 'https://expensees-8a12127a5d1f.herokuapp.com/',
    source: 'https://github.com/husush23/Capstone--5',
    techs: {
      tech1: 'Rails',
      tech2: 'Ruby',
      tech3: 'Javascript',
      tech4: 'Ruby',
    },
  },
];

projects.forEach(project => {
  const section = document.createElement('div');
  section.innerHTML = `
<section class="work-card">
<div class=" template">
<div class="images${project.id}">
<img src="${project.deskImg}" class="snapshot-${project.id} shot-img desk-img "></img>
<img src="${project.mobilImg}" class="snapshot-${project.id} shot-img  mobile-img"></img>
</div>
  <div class="texts">
    <h2 class="text-header">${project.name}</h2>
    <div class="flex">
    <p class="kadare">${project.title1} &nbsp; &nbsp;</p>
    <p><i class="fa-sharp fa-solid fa-circle fa-2xs"></i>&nbsp; ${project.specialization1} &nbsp; &nbsp;</p>
    <p><i class="fa-sharp fa-solid fa-circle fa-2xs"></i>&nbsp; ${project.year} &nbsp; &nbsp;</p>
  </div>
  <p class="paragraph">${project.descrip1}</p>
  <div class="langs">
    <ul><li>${project.techs.tech1}</li></ul>
    <ul><li>${project.techs.tech2}</li></ul>
    <ul><li>${project.techs.tech3}</li></ul>
  </div>
  <button id="${project.id}" class="project-btn btn see-btn" type="submit"> See my project </button>
  </div>
</div>
</section>

`;
  const sections = document.querySelector('.sections');
  sections.append(section);

  const seeBtn = document.querySelectorAll('.see-btn');
  const pop = document.querySelector('.pop');

  seeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      let {id} = e.target;
      id = Number(id);

      if (id === project.id) {
        pop.innerHTML = `
        <div class="pop-up ">
        <div class="upper">
          <div class="upper-1">
            <h2>${project.title1}</h2>
            <div class="line">
              <p class="tonic">${project.company1}</p> &nbsp; &nbsp;
              <ul><li><img src="./img/dot.png" alt="">&nbsp; ${project.specialization1} &nbsp;&nbsp;</li></ul>
              <ul><li><img src="./img/dot.png" alt="">&nbsp;${project.year}&nbsp;&nbsp;</li></ul>
            </div>
          </div>
          <div class="">
            <h2></h2>
          </div>
          <div class="">
            <h2></h2>
          </div>
          <div class="upper-2">
            <i class="fa-solid fa-xmark close-btns"></i>
          </div>
        </div>
        <img src="${project.deskImg}" class="pop-img desk-img " alt="">
        <img src="${project.mobilImg}" class="pop-img mobile-img" alt="">
        <div class="wrap">
          <div class="description">
            <p> ${project.descrip2}</p>
          </div>
          <div class="btn-links">
            <div class="langs">
              <ul><li>${project.techs.tech1}</li></ul>
              <ul><li>${project.techs.tech2}</li></ul>
              <ul><li>${project.techs.tech3}</li></ul>
              <ul><li>${project.techs.tech4}</li></ul>
            </div>
            <div class="btns">
              <button class="project-btn"><a href="${project.source}">See source</a> &nbsp;<img src="./img/gitsource.png" alt=""></button>
              <button class="project-btn"> <a href="${project.live}">See live</a>  &nbsp; <img src="./img/source.svg" alt=""></button>
            </div>
          </div>
        </div>
            </div>
        `;
        document.querySelector('.header-mobile').classList.add('overlay');
        sections.classList.add('overlay');
        const closeBtns = document.querySelector('.close-btns');
        closeBtns.addEventListener('click', e => {
          e.preventDefault();
          pop.innerHTML = '';
          document.querySelector('.header-mobile').classList.remove('overlay');
          sections.classList.remove('overlay');
        });
      }
    });
  });
});

const form = document.forms[0];
form.addEventListener('submit', e => {
  const email = form.elements.email.value;
  const errorMsg = document.querySelector('.error');
  if (email === email.toLowerCase()) {
    form.onsubmit();
  } else {
    errorMsg.innerHTML = 'Email should be lowercase';
    errorMsg.classList.remove('hidden');
  }
  e.preventDefault();
});
const changeEvent = function () {
  const userName = document.querySelector('.name-input').value;
  const userEmail = document.querySelector('.email-input').value;
  const message = document.querySelector('textarea').value;
  const data = {
    name: userName,
    email: userEmail,
    message,
  };
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
};
const localData = JSON.parse(localStorage.getItem('data'));
document.querySelector('.name-input').value = localData.name;
document.querySelector('.email-input').value = localData.email;
document.querySelector('textarea').value = localData.message;

const sendBtn = document.querySelector('.send-btn');
sendBtn.addEventListener('change', changeEvent);
