let topButton = document.getElementById("top-button");
let introFlag = document.getElementById("intro-flag");
let initFlagMargin = introFlag.style.marginLeft;
let introFlagArrow = document.getElementById("arrow");

let flagOpen = false;

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-FW4EJP35HG');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    let scrolled =  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
    topButton.style.display = (scrolled) ? "block" : "none";
}

function expandFlag() {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return;
    }
    
    if(flagOpen){
        introFlag.style.marginLeft = initFlagMargin;
        introFlagArrow.style.transform = "rotate(0deg)";
    }
    else{
        introFlag.style.marginLeft = 0;
        introFlagArrow.style.transform = "rotate(180deg)";
    }
    
    flagOpen = !flagOpen;
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}