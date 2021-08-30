"use strict";

// Elements
const yearEl = document.querySelector(".year");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Dynamically update copyright year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
})