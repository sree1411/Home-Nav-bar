// console.log('hi')
const slider = document.querySelector(".slider");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;

let length = img.length;

const updateActiveButton = () => {
    resetBg(); // Reset background color for all buttons
    btns[slideNumber - 1].style.backgroundColor = 'white'; // Highlight the active button
  };


const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
  updateActiveButton();
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
  updateActiveButton();
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber--;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : firstSlide();
  updateActiveButton()
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : lastSlide();
  updateActiveButton()
});



for(i=0 ; i<length; i++){
    const div = document.createElement('div')
    div.classList='btn'
    bottom.appendChild(div)
}

const btns = document.querySelectorAll('.btn')
btns[0].style.backgroundColor ="white"


const resetBg = () => {
    btns.forEach((button) => {
      button.style.backgroundColor = "transparent";
    });
  };



btns.forEach((button, i)=>{
 button.addEventListener('click', ()=>{
    resetBg()
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = 'white'
 })
 button.setAttribute('data-index', i);
})

