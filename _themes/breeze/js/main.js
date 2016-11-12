(function() {
    "use strict";

    var topNav = document.getElementById("topnav-js");
    var hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", toggleMenu);

    function toggleMenu() {
        var menuState = topNav.style.display;
        if(menuState === "flex") {
            topNav.style.display = "none";
        } else {
            topNav.style.display = "flex";
        }
    }
}());
