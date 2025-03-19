let CLoseNavbar = document.getElementById("CLoseNavbar");
let MedioNavbar = document.getElementById("MedioNavbar");
let OpenNavbar = document.getElementById("OpenNavbar");
let BanerSkroll = document.getElementById("BanerSkroll");
let onScrool = document.getElementById("onScrool");
let navbar = document.getElementById("navbar");
let BanImg = document.getElementById("BanImg");
let experienceBlog  = document.getElementById("experienceBlog");
let experienceBlog2  = document.getElementById("experienceBlog2");
let experienceBlog3 = document.getElementById("experienceBlog3");
let experienceBlogIcon = document.getElementById("experienceBlogIcon");
let experienceBlogIcon2 = document.getElementById("experienceBlogIcon2");
let experienceBlogIcon3 = document.getElementById("experienceBlogIcon3");
OpenNavbar.addEventListener('click' , function(){
    MedioNavbar.style.top="0";
    OpenNavbar.style.transform="rotate(90deg)";
})
CLoseNavbar.addEventListener('click' , function(){
    MedioNavbar.style.top="-150%";
    OpenNavbar.style.transform="rotate(0deg)";
})
window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    BanerSkroll.style.transform = `rotate(${scrollY * 1}deg)`; 
    onScrool.style.transform = `rotate(${scrollY * -1}deg)`; 
    BanImg.style.marginTop= scrollY - 3 + "px";
        if(scrollY > 300 ){
            navbar.style.background="#778DA9";
            navbar.style.position="fixed";
            navbar.style.zIndex="100";
            BanImg.style.marginTop=  "10px";
    }else{
        navbar.style.background="transparent";
        navbar.style.position="static";
     }
});
let off = false ;
experienceBlog.addEventListener('click' , function(){
    if(off == false){
        experienceBlog.classList.add("experienceBlogHIg")
        experienceBlogIcon.style.transform="rotate(45deg)";
        off = true;
    }else{
        experienceBlog.classList.remove("experienceBlogHIg");
        experienceBlogIcon.style.transform="rotate(0deg)";
        off = false;
    }
})
experienceBlog2.addEventListener('click' , function(){
    if(off == false){
        experienceBlog2.classList.add("experienceBlogHIg");
        experienceBlogIcon2.style.transform="rotate(45deg)";
        off = true;
    }else{
        experienceBlog2.classList.remove("experienceBlogHIg");
        experienceBlogIcon2.style.transform="rotate(0deg)";
        off = false;
    }
})
experienceBlog3.addEventListener('click' , function(){
    if(off == false){
        experienceBlog3.classList.add("experienceBlogHIg");
        experienceBlogIcon3.style.transform="rotate(45deg)";
        off = true;
    }else{
        experienceBlog3.classList.remove("experienceBlogHIg");
        experienceBlogIcon3.style.transform="rotate(0deg)";
        off = false;
    }
})
//https://www.programiz.com/online-compiler/4xPUT9GvmraRN