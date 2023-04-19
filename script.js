const mobileHam = document.querySelector('.menu-m');
const mobileMenu = document.querySelector('.mobile-menu');
const elSize = document.querySelector('.introduction');

// Open
function openMenu() {
  mobileHam.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
}
// close menu
function closeMenu() {
  mobileHam.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
}

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
  <button id="${project.id}" class="project-btn btn see-btn" type="submit"> See my projects </button>
  </div>
</div>
</section>

`;
  const sections = document.querySelector('.sections');
  sections.append(section);

  const seeBtn = document.querySelectorAll('.see-btn');
  const pop = document.querySelector('.pop');
  const closeBtn = document.querySelector('.close-btns');

  seeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      const {id} = e.target;

      if (id == project.id) {
        console.log(project.id);
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
        <img src="${project.deskImg}" class="pop-img mobile-img" alt="">
        <div class="wrap">
          <div class="description">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

              .</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s</p>
          </div>
          <div class="btn-links">
            <div class="langs">
              <ul><li>${project.techs.tech1}</li></ul>
              <ul><li>${project.techs.tech2}</li></ul>
              <ul><li>${project.techs.tech3}</li></ul>
              <ul><li>${project.techs.tech4}</li></ul>
            </div>
            <div class="btns">
              <button class="project-btn">See source &nbsp;<img src="./img/gitsource.png" alt=""> </button>
              <button class="project-btn">See live&nbsp; <img src="./img/source.svg" alt=""></button>
            </div>
          </div>
        </div>
            </div>
        `;
        document.querySelector('.header-mobile').classList.add('overlay');
        sections.classList.add('overlay');
        const closeBtns = document.querySelector('.close-btns');
        closeBtns.addEventListener('click', e => {
          pop.innerHTML = ``;
          document.querySelector('.header-mobile').classList.remove('overlay');
          sections.classList.remove('overlay');
        });
      }
    });
  });
});
