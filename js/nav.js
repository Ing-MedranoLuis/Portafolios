const btn__toggle = document.querySelector(".btn__toggle");
const nav__container = document.querySelector(".nav__container");
const nav_a = document.querySelectorAll(".active__a");


/*MAKING A NAV BAR SELECTED */
nav_a.forEach(el => {
    el.addEventListener('click', (event) => {
        nav_a.forEach(a => a.classList.remove('active')); // remove from all
        event.currentTarget.classList.add('active'); // add to clicked
    });
});




btn__toggle.addEventListener("click", (e) => {
  nav__container.classList.toggle("nav__container__remover");
});



const observeSections=(entry)=>{

  const [entries]=entry;
console.log(entry)

}
const observer=new IntersectionObserver(observeSections,{
  root:null,
  threshold:0
})


const getSectionClicked = (sections) => {
 
   sections.forEach(e=>{

    observer.observe(e);

   })
     
    
 
};

const sectionCourses = document.querySelector('.course');
const li=document.getElementById('courses');


li.addEventListener('click',()=>{

sectionCourses.scrollIntoView({behavior:"smooth"})

})


  


