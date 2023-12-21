let land = document.querySelector(".landing");
let arrBackground = ["p5.jpg","p2.jpg","p3.jpg","p4.jpg","p1.jpg"];
let yes = document.querySelector(".rand .yes");
let no = document.querySelector(".rand .no");
let settings = document.querySelector(".settings")
let settingsi = document.querySelector(".settings .conti")
let icont = document.querySelector(".settings .conti i")
let colors = document.querySelectorAll(".colors li");
let progress = document.querySelectorAll(".progress-skill span");
let ourSkills = document.querySelector(".ourSkills");
let gallery = document.querySelectorAll(".gallery img")
let clorsarr = Array.from(colors);
let state = false
let i = 0;
let change;
document.documentElement.style.setProperty('--main-color', localStorage.getItem("color"));
window.onload = function (){
    window.scrollY = 0;
    window.scrollTo({
        top : 0
    })
}

start()
yes.onclick = function () {
    localStorage.setItem("randomBackground","yes");
    this.classList.add("active");
    no.classList.remove("active");
    start();
};

no.onclick = function (){
    localStorage.setItem("randomBackground","no"); 
    this.classList.add("active");
    yes.classList.remove("active");
    start();

}

settingsi.onclick = function(){

    settings.classList.toggle("show");

    icont.classList.toggle("rotate")
}
if(localStorage.getItem("color") !== null){

document.documentElement.style.setProperty('--main-color', localStorage.getItem("color"));

clorsarr.forEach(ele =>{

    if(ele.dataset.color == localStorage.getItem("color")) {

        ele.classList.add("active")
    }
})

}


clorsarr.forEach((ele)=>{
    let mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    ele.addEventListener("click",(e)=>{
        clorsarr.forEach((el)=>{
            el.classList.remove("active");
        })
        e.target.classList.add("active");
        let color = e.target.dataset.color;
        document.documentElement.style.setProperty('--main-color', color);
        localStorage.setItem("color",color);
    })
})

// *********************************************************************************************************************
function start (){
if(localStorage.getItem("randomBackground") === null || localStorage.getItem("randomBackground") === "yes"){
   localStorage.setItem("randomBackground","yes");
    change = setInterval(()=>{
    land.style.backgroundImage = `url(images/${arrBackground[i]})`;
    i++;
    if(i==5){
        i=0;
    }
},7000);
yes.classList.add("active");
}else{
    land.style.backgroundImage = `url(images/${arrBackground[4]})`;
    no.classList.add("active");
    clearInterval(change);
}
}

// *******************************************************************************************************
window.onscroll = function () {
    if(window.pageYOffset >= 600) {
        if(!state) {
            progress.forEach((ele)=>{
                statistic(ele);
            });
            
            state =true
        }
        
    }
}
function statistic (ele) {
    let goal = ele.dataset.goal;
    ele.style.width = goal;
        }

// *******************************************************************************************************


gallery.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        let overlay = document.createElement("div");
        overlay.className = "overlay-pop";
        document.body.appendChild(overlay);
        let pop = document.createElement("div");
        pop.className = "pop";
        let img = document.createElement("img");
        img.src = ele.src;
        document.body.appendChild(pop);
        if(ele.alt !== ""){
            let h3 = document.createElement("h3");
            let text = document.createTextNode(ele.alt);
            h3.appendChild(text);
            pop.appendChild(h3);
        }
        let span = document.createElement("span");
        let close = document.createTextNode("x");
        span.appendChild(close);
        span.className = "close";
        pop.appendChild(span);
        pop.appendChild(img);
       
    })
})
document.addEventListener("click",(e)=>{
    if(e.target.className === "close") {
        e.target.parentNode.remove();
        document.querySelector(".overlay-pop").remove();
    }
})
// **************************************************************************************************
let bullets = document.querySelectorAll(".bullets");
bullets.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
            document.querySelector(`.${e.target.dataset.class}`).scrollIntoView({

            behavior: "smooth"
        });
    })
})
// ******************************************************************************************************
let landcont = document.querySelectorAll(".landcont li");
landcont.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        landcont.forEach((el)=>{
            el.classList.remove("active")
        });
        e.target.classList.add("active")
    })
})
// ******************************************************************************************************
let showno = document.querySelector(".show .no");
let showyes = document.querySelector(".show .yes");
let nav = document.querySelector(".nav");

if(localStorage.getItem("show") == null){
    nav.style.display = "block";
    showyes.classList.add("active");
    showno.classList.remove("active");
    localStorage.setItem("show","yes");
}
if(localStorage.getItem("show") == "yes"){
    showyes.classList.add("active");
    showno.classList.remove("active");
}else {
    showno.classList.add("active");
    showyes.classList.remove("active");
}
showno.onclick = function () {
    nav.style.display = "none"
    localStorage.setItem("show","no");
    showno.classList.add("active");
    showyes.classList.remove("active");

}
showyes.onclick = function () {
    nav.style.display = "block";
    localStorage.setItem("show","yes");
    showyes.classList.add("active");
    showno.classList.remove("active");
}
// *******************************************************************************************
let resetbox = document.querySelector(".resetbox");
resetbox.onclick = function (){
    localStorage.clear();
    window.location.reload(true);
}







let landI = document.querySelector(".landing i");
let landul = document.querySelector(".landing ul")
landI.onclick = function (){
    landul.classList.toggle("shownav")
}


