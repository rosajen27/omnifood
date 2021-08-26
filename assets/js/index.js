'use strict';

// Elements
const yearEl = document.querySelector('.year');


// Dynamically update copyright year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;