var topButton = document.getElementById("top-button");

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-FW4EJP35HG');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    let scrolled =  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
    topButton.style.display = (scrolled) ? "block" : "none";
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}