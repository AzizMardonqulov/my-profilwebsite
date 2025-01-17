let CLoseNavbar = document.getElementById("CLoseNavbar");
let MedioNavbar = document.getElementById("MedioNavbar");
let OpenNavbar = document.getElementById("OpenNavbar");
let BanerSkroll = document.getElementById("BanerSkroll");
let onScrool = document.getElementById("onScrool");
OpenNavbar.addEventListener('click' , function(){
    MedioNavbar.style.top="0";
})
CLoseNavbar.addEventListener('click' , function(){
    MedioNavbar.style.top="-150%";
})
window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    BanerSkroll.style.transform = `rotate(${scrollY * 2}deg)`; 
    onScrool.style.transform = `rotate(${scrollY * -2}deg)`; 
});