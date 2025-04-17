
/*SLIDER CODE----------------------------------------------------- */

let sliderDiv = document.querySelectorAll(".sliderDiv");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let dotsContainer = document.querySelector(".dotsContainer");

let maxSlide = sliderDiv.length;
let currSlide = 0;

const activeDots=(slide)=>{
  document.querySelectorAll('.dots_active').forEach(e=>{
    e.classList.remove('dots_active');
  })
  document.querySelector(`.dots[data-slide="${slide}"]`).classList.add('dots_active');
}

const createDots=()=>{
  sliderDiv.forEach((e,i)=>{
    const html = `<button class="dots dots_active" data-slide="${i}"></button>
    `;
  
    dotsContainer.insertAdjacentHTML('afterbegin',html);
  
  })
}

createDots();
activeDots(currSlide);
const goToSlide = (slide) => {
  sliderDiv.forEach((e, i) => {
    e.style.transform = `translateX(${100 * (i - slide)}%)`;

   
  });
 
};
goToSlide(currSlide);
activeDots(currSlide);
const nextSlide = () => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activeDots(currSlide);
};
const previousSlide = () => {
  if (currSlide == 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }

  goToSlide(currSlide);
  activeDots(currSlide);
};
btnLeft.addEventListener("click", previousSlide);
btnRight.addEventListener("click", nextSlide);

dotsContainer.addEventListener('click',(e)=>{
if(e.target.classList.contains('dots')){
  let slider=Number(e.target.dataset.slide);
goToSlide(slider)
activeDots(slider);
}

});
document.addEventListener('keydown',(e)=>{
  if(e.key=='ArrowLeft')previousSlide() 
    e.key=='ArrowRight' && nextSlide()
})


