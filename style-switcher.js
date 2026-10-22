const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher o scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
//  theme selector
// swatch class name -> accent color (same colors as the swatches in style-switcher.css)
const themeColors = {
  personalPortfolio1: "#fa5b0f",
  PersonalPort2: "#ec1839",
  portfolioPort3: "#37b187",
  portfolioPort4: "#1854b4",
  portfolioPort5: "#f021b2",
};

function setActiveStyle(name) {
  const color = themeColors[name];
  if (!color) return;
  // set the CSS variable directly so every accent (buttons, bars, chips, dots) updates in all browsers
  document.documentElement.style.setProperty("--skin-color", color);
  try { localStorage.setItem("skin-color", name); } catch (e) {}
}

// restore saved theme color
try {
  const saved = localStorage.getItem("skin-color");
  if (saved) setActiveStyle(saved);
} catch (e) {}

// light theme
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
