//TOGGLE EFFECTS
const togglebtn = document.querySelector(".toggle");
const container = document.querySelector(".container");
const light = document.querySelector(".light");
const col = document.querySelector(".col");
let isDark = true;
togglebtn.onclick = () => {
  light.classList.toggle("dark1");
  container.classList.toggle("dark2");
  col.classList.toggle("dark3");
  togglebtn.classList.toggle("active");
};
