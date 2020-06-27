// NAV MENU BUTTON

const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('#menu li');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('open');

        menuItems.forEach(item => {item.classList.add('open');});


        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');

        menuItems.forEach(item => {item.classList.remove('open');});

        menuOpen = false;
    }
})