// FIX FOR VH UNITS IN SAFARI
// document.querySelector('header').style.height = window.innerHeight + 'px';
// document.querySelector('.listen').style.height = window.innerHeight + 'px';

const menuToggle = document.querySelector('#menuToggle');
const menu = document.querySelector('#menu');
let menuOpen = false;
menuToggle.addEventListener('click', () => {
    if (!menuOpen) {
        menuToggle.classList.add('open');
        menu.classList.add('open');
        menuOpen = true;
    } else {
        menuToggle.classList.remove('open');
        menu.classList.remove('open');
        menuOpen = false;
    }
})