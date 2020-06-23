// FIX FOR VH UNITS IN SAFARI
// document.querySelector('header').style.height = window.innerHeight + 'px';
// document.querySelector('.listen').style.height = window.innerHeight + 'px';

const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');
        menuOpen = false;
    }
})