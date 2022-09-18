console.dir(document);
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
}
function close(){
    mainMenu.style.top='-100%';
}

var samples = document.getElementById("scrolling-images");
var imageArray = ["pickup1.JPG", "pickup2.jpg", "pickup3.jpg"];
var imageIndex = 1;

function changeImage(){
    samples.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>3) {imageIndex=0;}
}

console.log(document.domain);
