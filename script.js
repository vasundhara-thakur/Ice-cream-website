const navLinks = document.querySelector(".nav-links");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  navLinks.classList.toggle("active");
});


const iceCreams = [
  {
    name: "Caramel icecream",
    img: "./icecream-images/caramel.png",
    bg: "#f3c27a",
    desc: "Rich, buttery caramel swirled into a smooth creamy base.<br>Every bite melts slowly, leaving behind a warm, golden sweetness."
  },
  {
    name: "Strawberry icecream",
    img: "./icecream-images/strawberry.png",
    bg: "#f7a1b4",
    desc: "Fresh strawberries blended into a soft, velvety cream.<br>Sweet, fruity, and refreshing a taste of summer in every scoop."
  },
  {
    name: "Chocolate icecream",
    img: "./icecream-images/chocolate.png",
    bg: "#97633bff",
    desc: "Deep, indulgent chocolate crafted for true cocoa lovers.<br>Bold, smooth, and irresistibly rich from first bite to last."
  },
  {
    name: "Pistachio/Mint icecream",
    img: "./icecream-images/mint.png",
    bg: "#81bb9eff",
    desc: "Cool mint and nutty pistachio come together in perfect harmony.<br>Light, refreshing, and delightfully smooth with every swirl."
  }
];

const container = document.querySelector(".container");
const heroImg = document.querySelector(".hero-img");
const dots = document.querySelectorAll(".dot");
const h3 = document.querySelector("h3");
const p = document.querySelector("p");

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.index);

    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");

    heroImg.classList.remove("pop");

    void heroImg.offsetWidth;

    heroImg.src = iceCreams[index].img;
    container.style.backgroundColor = iceCreams[index].bg;
    h3.innerHTML = iceCreams[index].name;
    p.innerHTML = iceCreams[index].desc;

    heroImg.classList.add("pop");
  });
});

const homeBtn = document.querySelector('a[href="#home"]');

const initialState = {
  img: "./icecream-images/ice-ceam.png",
  bg: "#a8cbd6",
  heading: "More than ice cream <br> it's a moment of happiness.",
  desc: "Swirled with love, served with joy.<br>Every cone is a perfect blend of flavor and fun."
};

homeBtn.addEventListener("click", () => {

  heroImg.src = initialState.img;
  container.style.backgroundColor = initialState.bg;

  h3.innerHTML = initialState.heading;
  p.innerHTML = initialState.desc;

  dots.forEach(d => d.classList.remove("active"));
});

