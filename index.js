'use strict';

/* Menu //////////// */
let colour = document.getElementById("body");
function changeBackground() {
  colour.innerHTML = `

    <div class="card">
        <div class="back">
        <div class="logo-black"></div>
        <div class="name-black"></div>
        <a href="index.html"><div class="close-m ">X</div></a>
        </div>
        <ul class="menu">
            <li><p onclick="contact()" >Home</p></a></li>
            <li><p onclick="aboutMe()" href="index.html#aboutMe">About Me</p></li>
            <li><p onclick="myWorks()" class="menuText">My works</p>
                <ul class="inside-list">
                    <li><a class="color" href="survey.html"><p class="menuText">Survey form</p></a></li>
                    <li><a class="color" href="arc.html"><p class="menuText">Roman number calculator</a></li>
                    <li><a class="color" href="calory.html"><p class="menuText">Calory calculator</a></li>
                </ul>
            </li>
            <li><p onclick="contact()" class="menuText">Contact</p></li>
            <div>
                <a href="https://www.linkedin.com/in/george-panker-3b802984/"><i class="fa-brands fa-linkedin iconMenu"></i></a>
                <a href="https://github.com/Gp0712?tab=repositories"><i class="fa-brands fa-square-github iconMenu"></i></a>
            </div>
        </ul>
    </div>
    <script src="index.js" ></script>`;

  colour.style.backgroundColor = "var(--green)";
  colour.style.position = "absolute";
  colour.style.right = "-100vw";
  colour.style.overflowY = "hidden";
  colour.style.overflowX = "hidden";
  colour.style.transition = "all 2s";

  function myWorks() {
    window.open("http://georgepanker.portfoliok.nhely.hu/index.html#myWorks");
  }
  function aboutMe() {
    window.open("http://georgepanker.portfoliok.nhely.hu/index.html#aboutMe");
  }
  function contact() {
    window.open("http://georgepanker.portfoliok.nhely.hu/index.html#contact");
  }

  float();

  /* Menu floating //////////// */
  function float() {
    let pos = -22;
    let id = null;
    id = setInterval(move, 1);
    function move() {
      if (pos == 6) {
        clearInterval(id);
      } else {
        pos += 4;
        colour.style.right = pos + "px";
      }
    }
  }
}

/* Topbar //////// */
let lastPosition = window.pageYOffset;
window.addEventListener("scroll", function () {
  let currentPosition = window.pageYOffset;
  let navbar = document.querySelector(".navbar").classList;
  if (lastPosition > currentPosition || currentPosition <= 10) {
    navbar.add("appear");
    navbar.remove("disappear");
  } else {
    navbar.add("disappear");
    navbar.remove("appear");
  }
  lastPosition = currentPosition;
});

/* Change photo on my Works page mobile */

let dot1 = document.getElementById("dot1");
let textMyWorks = document.querySelector(".textMyWorks");
let href = document.querySelector(".href");
dot1.addEventListener("click", function () {
  let photoMyWork = document.getElementById("photoMyWork").classList;
  photoMyWork.add("photoMyWork1");
  photoMyWork.remove("photoMyWork2", "photoMyWork3");
  textMyWorks.innerHTML = "Survey form";
  href.href = "survey.html";
  dot1.style.backgroundColor = "var(--aliceblue)";
  dot2.style.backgroundColor = "var(--gray)";
  dot3.style.backgroundColor = "var(--gray)";
});
let dot2 = document.getElementById("dot2");
dot2.addEventListener("click", function () {
  let photoMyWork = document.getElementById("photoMyWork").classList;
  photoMyWork.add("photoMyWork2");
  photoMyWork.remove("photoMyWork1", "photoMyWork3");
  textMyWorks.innerHTML = "Roman number calculator";
  href.href = "arc.html";
  dot1.style.backgroundColor = "var(--gray)";
  dot2.style.backgroundColor = "var(--aliceblue)";
  dot3.style.backgroundColor = "var(--gray)";
});
let dot3 = document.getElementById("dot3");
dot3.addEventListener("click", function () {
  let photoMyWork = document.getElementById("photoMyWork").classList;
  photoMyWork.add("photoMyWork3");
  photoMyWork.remove("photoMyWork1", "photoMyWork2");
  textMyWorks.innerHTML = "Calory calculator";
  href.href = "calory.html";
  dot1.style.backgroundColor = "var(--gray)";
  dot2.style.backgroundColor = "var(--gray)";
  dot3.style.backgroundColor = "var(--aliceblue)";
});

/* Animation during scrolling ////////// */
const photoContact = document.querySelector(".photoContact");
window.addEventListener("scroll", function () {
  let photoPosition = photoContact.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;
  if (photoPosition - windowHeight <= -100) {
    photoContact.classList.add("animate-photoContact");
  }
});
const text = document.querySelector(".textContact");
window.addEventListener("scroll", function () {
  let textPosition = text.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;
  if (textPosition - windowHeight <= -100) {
    text.classList.add("animate-textContact");
  }
});

/* onload function ////////// */
const text2 = document.querySelector(".introduction");
const photoHome2 = document.querySelector(".photoHome2");
function slideMobile() {
  text2.classList.add("animate-textHome");
  setTimeout(function () {
    photoHome2.classList.add("animate-photoHome2");
  }, 4000);
}

/* Slide on big screen ///////////////// */
const container = document.querySelector(".container");
const slide = document.querySelector(".slides");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const nameContent = document.querySelectorAll(".nameSlide");
const nameContainer = document.querySelector(".nameContainer");
const barColor = document.querySelectorAll(".barSlide");
const interval = 4000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let slideId;

/* clone the first and last element */
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "firstClone";
lastClone.id = "lastClone";

slide.append(firstClone); // this became the starter picture in the container
slide.prepend(lastClone);

function getSlides() {
  return (slides = document.querySelectorAll(".slide"));
}
/* set back the origin picture for start */
let slideWidth = slides[index].clientWidth; // give the size of a slide
slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    moveNextSlide();
  }, interval);
};

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

function movePrevSlide() {
  if (index <= 0) return;
  index--;
  nameContainer.textContent = nameContent[index].textContent;
  barSlideColor();
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".9s";
}

function moveNextSlide() {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  nameContainer.textContent = nameContent[index].textContent;
  barSlideColor();
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".9s";
}

container.addEventListener("mouseenter", function () {
  clearInterval(slideId);
  slide.style.cursor = "pointer";
});

container.addEventListener("mouseleave", startSlide);

prevBtn.addEventListener("click", movePrevSlide);
nextBtn.addEventListener("click", moveNextSlide);

startSlide();

/* Change the color of barSlides /////// */
function barSlideColor() {
  if (index == 1 || index == 4) {
    barColor[0].style.backgroundColor = "var(--gray)";
    barColor[1].style.backgroundColor = "var(--aliceblue)";
    barColor[2].style.backgroundColor = "var(--aliceblue)";
    barColor[0].style.width = "17vw";
    barColor[1].style.width = "10vw";
    barColor[2].style.width = "10vw";
  } else if (index == 2) {
    barColor[0].style.backgroundColor = "var(--aliceblue)";
    barColor[1].style.backgroundColor = "var(--gray)";
    barColor[2].style.backgroundColor = "var(--aliceblue)";
    barColor[0].style.width = "10vw";
    barColor[1].style.width = "17vw";
    barColor[2].style.width = "10vw";
  } else if (index == 3 || index == 0) {
    barColor[0].style.backgroundColor = "var(--aliceblue)";
    barColor[1].style.backgroundColor = "var(--aliceblue)";
    barColor[2].style.backgroundColor = "var(--gray)";
    barColor[0].style.width = "10vw";
    barColor[1].style.width = "10vw";
    barColor[2].style.width = "17vw";
  }
}

/* Change line's colour in contact//////
mobile */
let colour1 = document.querySelector(".hr1");
let colour2 = document.querySelector(".hr2");
let colour3 = document.querySelector(".hr3");
function changeColor1() {
  colour1.style.border = "1px solid var(--darkGreen)";
  colour2.style.border = "1px solid var(--lightGray)";
  colour3.style.border = "1px solid var(--lightGray)";
}
function changeColor2() {
  colour1.style.border = "1px solid var(--lightGray)";
  colour2.style.border = "1px solid var(--darkGreen)";
  colour3.style.border = "1px solid var(--lightGray)";
}
function changeColor3() {
  colour1.style.border = "1px solid var(--lightGray)";
  colour2.style.border = "1px solid var(--lightGray)";
  colour3.style.border = "1px solid var(--darkGreen)";
}

/* Change line's colour in contact//////
popup */
let colour4 = document.querySelector(".hr4");
let colour5 = document.querySelector(".hr5");
let colour6 = document.querySelector(".hr6");
function changeColor4() {
  colour4.style.border = "1px solid var(--darkGreen)";
  colour5.style.border = "1px solid var(--lightGray)";
  colour6.style.border = "1px solid var(--lightGray)";
}
function changeColor5() {
  colour4.style.border = "1px solid var(--lightGray)";
  colour5.style.border = "1px solid var(--darkGreen)";
  colour6.style.border = "1px solid var(--lightGray)";
}
function changeColor6() {
  colour4.style.border = "1px solid var(--lightGray)";
  colour5.style.border = "1px solid var(--lightGray)";
  colour6.style.border = "1px solid var(--darkGreen)";
}

/* popup contact form /////////// */
const closeContact = document.getElementById("closeContact");
const contactMe = document.getElementById("contactMe");
const popup = document.getElementById("popup");

contactMe.addEventListener("click", () => {
  popup.classList.add("popupVisible");
});

closeContact.addEventListener("click", () => {
  popup.classList.remove("popupVisible");
});
