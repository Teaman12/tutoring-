console.dir(document);
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
var social = document.querySelector('.icons');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show() {
    mainMenu.style.display='flex';
    mainMenu.style.top = '0';
    social.style.display = 'flex';
    closeMenu.style.display = 'inline';
}

function close() {
    mainMenu.style.display='flex';
    mainMenu.style.top='-100%';
}

