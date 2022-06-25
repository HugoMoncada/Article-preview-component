let footer = document.querySelector(".content__footer");
let visible = document.querySelector("#initial");
let clicked = document.querySelector("#clicked");
let desktopSocial = document.querySelector(".desktop-social");
let windowWidth; 



window.addEventListener("resize", function(){
    windowWidth = window.innerWidth;
    
    //RESET TO ORIGINAL STATE
    activeShareButtonMobile();
    desktopSocial.classList.add("inactive");

    if( windowWidth < 1400 || window.innerWidth < 1400){
        document.querySelector(".footer__share").removeEventListener("click", inactiveShareButtonDesktop);

        document.querySelector(".footer__share").addEventListener("click", inactiveShareButtonMobile);
        document.getElementById("share-active").addEventListener("click", activeShareButtonMobile);
    }

    if( windowWidth >= 1400 || window.innerWidth >= 1400){
        document.querySelector(".footer__share").removeEventListener("click", inactiveShareButtonMobile);
        document.querySelector(".footer__share").addEventListener("click", inactiveShareButtonDesktop);
    }

});

// INITIAL STATE
if( windowWidth < 1400 || window.innerWidth < 1400){
    document.querySelector(".footer__share").addEventListener("click", inactiveShareButtonMobile);
    document.getElementById("share-active").addEventListener("click", activeShareButtonMobile);
}

if( windowWidth >= 1400 || window.innerWidth >= 1400){
    document.querySelector(".footer__share").addEventListener("click", inactiveShareButtonDesktop);
}


function inactiveShareButtonMobile(){
    // add colors
    footer.classList.add("content__footer-active");
    visible.classList.add("inactive");
    clicked.classList.remove("inactive");
}

function activeShareButtonMobile(){
    footer.classList.remove("content__footer-active");
    visible.classList.remove("inactive")
    clicked.classList.add("inactive");
}


function inactiveShareButtonDesktop(){
    desktopSocial.classList.toggle("inactive");
    document.querySelector(".footer__inactive_arrow").classList.toggle("arrow__active");
    document.querySelector(".footer__share").classList.toggle("footer__arrow_active");
}

