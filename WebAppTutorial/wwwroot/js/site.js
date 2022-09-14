﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//Functions to be called onmouseover and onmouseout to change the color of "Hello World!"
function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

function movingParts() {
    let id = null;
    const elem = document.getElementById("myAnimation");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
            elem.style.right = pos + "px";
        }
    }
}