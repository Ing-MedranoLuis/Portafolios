'use strict'




//SECTIONS SREVEALING
const sections = document.querySelectorAll('section')

const observeSections = (entry) => {
  const [entries] = entry;

  if (entries.isIntersecting) {
    entries.target.classList.remove('section__hiden')
    console.log(entry)
  }




}



const observerSection = new IntersectionObserver(observeSections, {
  root: null,
  threshold: 0.2
})

sections.forEach(e => {


  observerSection.observe(e);
})
































/*MODALES---------------- */
const tabs_container = document.querySelector('.operations');
const btn_tabs = document.querySelectorAll('.operations__btn');
const operations__contents_modal = document.querySelectorAll('.modal');


tabs_container.addEventListener('click', (e) => {

  const click = e.target.closest('.operations__btn');

  if (!click) return;




  btn_tabs.forEach(e => e.classList.remove('selected__tab'))
  click.classList.add('selected__tab');


  operations__contents_modal.forEach(e => e.classList.remove('modal_active'))
  document.querySelector(`.operations__contents_modal-${click.dataset.tab}`).classList.add('modal_active');
})






/*SLIDER CODE----------------------------------------------------- */

const sliderCon = document.querySelector('.slider')
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let dotsContainer = document.querySelector(".dotsContainer");

const form = document.getElementById('form');


let currSlide = 0;


const dataText = [
  { userName: 'Luis', phoneNumber: '8294890965', email: 'luis@gmail.com', comment: 'este es my comentario' },
  { userName: 'Alex', phoneNumber: '8294890965', email: 'luis@gmail.com', comment: 'tu comentario' }


];
localStorage.setItem('data', JSON.stringify(dataText))



const renderData = () => {
  let dataFromLocal = JSON.parse(localStorage.getItem('data'))
  console.log(dataFromLocal)
  dataFromLocal.forEach((e, i) => {

    const html = `  <div class="sliderDiv">
        <p>${e.comment}</p>
              <div class="d-md-flex d-sm-flex ">
<img class="img_user_slider" src="${e.img}" alt="">
<h6>@${e.userName}</h6>
   <div  class="social_slider"><a><i class="fa-brands fa-facebook"></i></a> 
                    <a><i class="fa-brands fa-instagram"></i></a> 
                    <a> <i class="fa-brands fa-whatsapp"></i></i></a>               
                </li>  
    </div >
        </div>`;
    sliderCon.insertAdjacentHTML('afterbegin', html)
  })

}


form.addEventListener('submit', (e) => {

  e.preventDefault();
  const data = new FormData(e.target)
  const dataObject = Object.fromEntries(data)

  const existingData = JSON.parse(localStorage.getItem('data'));
  existingData.push(dataObject);
  localStorage.setItem('data', JSON.stringify(existingData));
  e.target.userName.value = '';
  e.target.email.value = '';
  e.target.phoneNumber.value = '';
  e.target.comment.value = '';
  location.reload();
  renderData()
})
renderData()



let sliderDiv = document.querySelectorAll(".sliderDiv");

let maxSlide = sliderDiv.length;
















const activeDots = (slide) => {
  document.querySelectorAll('.dots_active').forEach(e => {
    e.classList.remove('dots_active');
  })
  document.querySelector(`.dots[data-slide="${slide}"]`).classList.add('dots_active');
}

const createDots = () => {
  sliderDiv.forEach((e, i) => {
    const html = `<button class="dots dots_active" data-slide="${i}"></button>
    `;

    dotsContainer.insertAdjacentHTML('afterbegin', html);

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

dotsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots')) {
    let slider = Number(e.target.dataset.slide);
    goToSlide(slider)
    activeDots(slider);
  }

});
document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowLeft') previousSlide()
  e.key == 'ArrowRight' && nextSlide()
})


