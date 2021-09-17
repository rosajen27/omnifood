"use strict";

// Elements
const yearEl = document.querySelector(".year");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl = document.querySelector(".section-hero");
const allLinks = document.querySelectorAll("a:link");

// Dynamically update copyright year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
})

// Sticky Navigation
const obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];

  if(ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if(ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }

}, {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px"
});
obs.observe(sectionHeroEl)

// Smooth Scroll
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile navigation
        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    });
});