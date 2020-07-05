// NAV MENU BUTTON

const body = document.querySelector('body');
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

        event.stopPropagation();

    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');

        menuItems.forEach(item => {item.classList.remove('open');});

        menuOpen = false;

        event.stopPropagation();

    }
})

// close once clicked anywhere

body.addEventListener('click', event => { 
    
    if (menuOpen) {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
        
        menuOpen = false;
    }
});


// LIGHTBOX

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox); 

const images = document.querySelectorAll('.pic')
images.forEach(image => {
    image.addEventListener('click', e => { 
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
});

lightbox.addEventListener('click', e => { 
    lightbox.classList.remove('active');
});
