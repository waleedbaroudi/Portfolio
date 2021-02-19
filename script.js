var topButton = document.getElementById("top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    let scrolled =  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
    topButton.style.display = (scrolled) ? "block" : "none";
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}