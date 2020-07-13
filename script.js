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

// // STICKY NAV BAR ON LARGER WINDOWS

// let windowWidth = window.innerWidth;

function stickyMenu() {
  menu.style.position = "fixed";
  menu.style.bottom = "inherit";
  menu.style.top = "0";
}

function absoluteMenu() {
  menu.style.position = "absolute";
  menu.style.bottom = "0";
  menu.style.top = "inherit";
}

window.onscroll = () => {
  let windowYOffset = window.pageYOffset;
  let windowHeight = window.innerHeight;
  let menuHeight = menu.offsetHeight;  

  if (windowYOffset >= windowHeight - menuHeight) {
    stickyMenu();
    console.log("sticky");

  } else {
    absoluteMenu();
    console.log("absolute");
  };
};

// window.addEventListener('resize' , () => {
//   let windowWidth = window.innerWidth;

//   console.log(windowWidth);
//   if (windowWidth >= 650) {
//     menu.style.position = 'absolute';
//   } else {
//     menu.style.position = 'fixed';
//   }
// });

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
  image.addEventListener("click", (event) => {
    handleLightboxImageClick(image);
  });
});

const listItems = document.querySelectorAll(".glide__slide");
listItems.forEach((li) => {
  li.addEventListener("click", (event) => {
    handleLightboxImageClick(li.firstElementChild);
  });
});

lightbox.addEventListener("click", (event) => {
  lightbox.classList.remove("active");
});
