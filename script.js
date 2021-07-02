"use strict";

// Variables
const div = document.querySelector("#txt");
const div_title = document.querySelector("#txt-title");
const div_txt = document.querySelector("#txt-txt");

const arrow_left = document.querySelector("#btn-prev");
const arrow_right = document.querySelector("#btn-next");

const year = document.querySelector("#year");
const today = new Date();

let cur_slide = 0;

const data = [
  { img: "n1.jpg", font: "Allura" },
  { img: "n2.jpg", font: "Amatic SC" },
  { img: "n3.jpg", font: "Berkshire Swash" },
  { img: "n4.jpg", font: "Dancing Script" },
  { img: "n5.jpg", font: "Gloria Hallelujah" },
  { img: "n6.jpg", font: "Tangerine" },
];

// Copyright year
year.innerHTML = today.getFullYear();

// Change slide
function change_slide() {
  document.body.style.backgroundImage = `url("img/${data[cur_slide].img}")`;
  div.style.fontFamily = data[cur_slide].font;
}

// Next slide function
function next_slide() {
  cur_slide < data.length - 1 ? cur_slide++ : (cur_slide = 0);
  change_slide();
}

// Prev slide function
function prev_slide() {
  cur_slide > 0 ? cur_slide-- : (cur_slide = data.length - 1);
  change_slide();
}

// Timer that changes slide
let timer = setInterval(next_slide, 6000);

// Reset timer function
function reset_timer() {
  clearInterval(timer);
  timer = setInterval(next_slide, 6000);
}

// Next slide btn
arrow_right.addEventListener("click", function () {
  next_slide();
  reset_timer();
});

// Prev slide btn
arrow_left.addEventListener("click", function () {
  prev_slide();
  reset_timer();
});

// Animations
// Next animation
// Prev animation
