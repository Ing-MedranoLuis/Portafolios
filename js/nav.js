const btn__toggle = document.querySelector(".btn__toggle");
const nav__container = document.querySelector(".nav__container");
const nav_a = document.querySelectorAll(".active__a");


/*MAKING A NAV BAR SELECTED */





btn__toggle.addEventListener("click", (e) => {
  nav__container.classList.toggle("nav__container__remover");
});






const getSectionClicked = (sections) => {

  sections.forEach(e => {

    observer.observe(e);

  })



};



/*SCROLL TO THE SECIONS */
const scrollSections = document.querySelectorAll('section');
const sectionCourses = document.querySelector('.course');
const all_li = document.querySelectorAll('.active__a')
const nav_container_a = document.querySelector('.nav_container_a');




nav_container_a.addEventListener('click', (e) => {


  const click = e.target.closest('.active__a');


  all_li.forEach(e => e.classList.remove('active'))
  const sect = document.querySelector(`.section-${click.dataset.sec}`)
  sect.scrollIntoView({ behavior: 'smooth' })

  click.classList.add('active');



})





