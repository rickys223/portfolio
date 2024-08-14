let myNav = document.getElementById("myNav");

function checkWindowSize() {
    if (window.innerWidth >= 600) {
        myNav.style.maxHeight = "400px";
    } else {
        myNav.style.maxHeight = "0px";
    }
}

function toggleNav() {
    if (myNav.style.maxHeight === "0px") {
        myNav.style.maxHeight = "400px";
    } else {
        myNav.style.maxHeight = "0px";
    }
}

window.addEventListener("resize", checkWindowSize);
window.addEventListener("load", checkWindowSize);

checkWindowSize();


var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}
