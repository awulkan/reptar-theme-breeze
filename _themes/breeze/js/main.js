(function() {
    "use strict";

    var topNav = document.getElementById("topnav-js");
    var hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", myFunc);

    function myFunc(e) {
        topNav.classList.toggle("responsive");
    }
}());
