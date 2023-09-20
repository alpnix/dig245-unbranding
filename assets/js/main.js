let imgs = document.querySelectorAll("img");
let leftbull = document.getElementById("leftbull"); 
let sun = document.getElementById("sun");
let rightbull = document.getElementById("rightbull"); 

sun.addEventListener("mouseover", e => {
    leftbull.style.transform = `rotate(-45deg)`;
    rightbull.style.transform = `rotate(45deg)`;

    // leftbull.style.webkitTransform = `translateX(100px)`;
    // rightbull.style.webkitTransform = `translateX(-100px)`;
})

sun.addEventListener("mouseleave", e => {
    leftbull.style.transform = `rotate(0deg)`;
    rightbull.style.transform = `rotate(0deg)`;

    leftbull.style.transform = `translateX(100px)`;
    rightbull.style.transform = `translateX(-100px)`;
})