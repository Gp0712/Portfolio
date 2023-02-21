const div = document.querySelector(".portfolio1");
const h3a = div.querySelector("h3");
div.addEventListener("mouseover", function() {
  h3a.style.transition = "opacity 0.7s";
  h3a.style.opacity = 0;
});
div.addEventListener("mouseout", function() {
  h3a.style.transition = "opacity 3s";
  h3a.style.opacity = 1;
});
const div2 = document.querySelector(".portfolio2");
const h3b = div2.querySelector("h3");
div2.addEventListener("mouseover", function() {
  h3b.style.transition = "opacity 0.7s";
  h3b.style.opacity = 0;
});
div2.addEventListener("mouseout", function() {
  h3b.style.transition = "opacity 3s";
  h3b.style.opacity = 1;
});
const div3 = document.querySelector(".portfolio3");
const h3c = div3.querySelector("h3");
div3.addEventListener("mouseover", function() {
  h3c.style.transition = "opacity 0.7s";
  h3c.style.opacity = 0;
});
div3.addEventListener("mouseout", function() {
  h3c.style.transition = "opacity 3s";
  h3c.style.opacity = 1;
});
