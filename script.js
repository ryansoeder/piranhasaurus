// NAV MENU BUTTON

const body = document.querySelector("body");
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll("#menu li");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("open");

    menuItems.forEach((item) => {
      item.classList.add("open");
    });

    menuOpen = true;

    event.stopPropagation();
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");

    menuItems.forEach((item) => {
      item.classList.remove("open");
    });

    menuOpen = false;

    event.stopPropagation();
  }
});

// close once clicked anywhere

body.addEventListener("click", (event) => {
  if (menuOpen) {
    menu.classList.remove("open");
    menuBtn.classList.remove("open");

    menuOpen = false;
  }
});

// sticky nav bar on larger windows

window.addEventListener('resize' , event => {
  let windowWidth = event.target.innerWidth;
  if (windowWidth >= 650) {
    menu.classList.add("absolute");
    menu.classList.remove("sticky");
  } 
  
})

// const sticky = menu.offsetTop;

// if (window.pageYOffset >= sticky) {
//   menu.classList.remove('absolute');
//   menu.classList.add('sticky');
// } else { 
//   menu.classList.add('absolute');
//   menu.classList.remove('sticky');
// }

// LIGHTBOX

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

function handleLightboxImageClick(image) {
  lightbox.classList.add("active");

  const img = document.createElement("img");

  img.src = image.src;

  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }

  lightbox.appendChild(img);
}

const pics = document.querySelectorAll(".pic");
pics.forEach((image) => {
  image.addEventListener("click", (e) => {
    handleLightboxImageClick(image);
  });
});

const listItems = document.querySelectorAll(".glide__slide");
listItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    handleLightboxImageClick(li.firstElementChild);
  });
});

lightbox.addEventListener("click", (e) => {
  lightbox.classList.remove("active");
});

// Sticky nave bar on larger windows

const sticky = menu.offsetTop;
if (window.innerWidth >= 650 && window.pageYOffset >= sticky) {
  menu.classList.toggle('sticky');
} 