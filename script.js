"use strict";

const div = document.querySelector("#txt");
const div_title = document.querySelector("#txt-title");
const div_txt = document.querySelector("#txt-txt");

const arrow_left = document.querySelector("#btn-prev");
const arrow_right = document.querySelector("#btn-next");

const year = document.querySelector("#year");
const today = new Date();

// Copyright year
year.innerHTML = today.getFullYear();
