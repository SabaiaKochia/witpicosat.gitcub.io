//Wentworth Pico-Sat

//Author: Saba Kochadze

//Mar 13, 2023

/* Interactive interface controlls */

// APPLE STYLE TO CREATE ANIMATED EARTH ROTATING WITH SATELITE IMAGES 
// 3D render split into photos/images and then use apple's style of website to create an animated webpage front background

//TEST
const frameHeight = 102;
const frames = 15;
const div = document.getElementById("animation");
let frame = 0;
setInterval(function () {
    const frameOffset = (++frame % frames) * -frameHeight;
    div.style.backgroundPosition = "0px " + frameOffset + "px";
}, 100);