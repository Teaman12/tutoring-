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

/* add skill */
function addItem(){

    var ul = document.getElementById("dynamic-list");
    var listskill = document.getElementById("listskill");
    var li = document.createElement("li");
    li.setAttribute("id",listskill.value);
    li.appendChild(document.createTextNode(listskill.value));
    ul.appendChild(li);  
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var listskill = document.getElementById("listskill");
    var item = document.getElementById(listskill.value);
    ul.removeChild(item);

}

/* add links */
function addItem(){

    var ul = document.getElementById("dynamic-links");
    var listlink = document.getElementById("listlink");
    var li = document.createElement("li");
    li.setAttribute("id",listlink.value);
    li.appendChild(document.createTextNode(listlink.value));
    ul.appendChild(li);  
}

function removeItem(){
    var ul = document.getElementById("dynamic-links");
    var listlink = document.getElementById("listlink");
    var item = document.getElementById(listlink.value);
    ul.removeChild(item);

}

var samples = document.getElementById("scrolling-images");
var imageArray = ["pickup1.JPG", "pickup2.jpg", "pickup3.jpg"];
var imageIndex = 1;

function changeImage(){
    samples.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex>3) {imageIndex=0;}
}

