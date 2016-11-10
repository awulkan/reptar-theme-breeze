// (function() {
//     "use strict";
//
//     var topNav = document.getElementById("topnav-js");
//     var hamburger = document.getElementById("hamburger");
//     hamburger.addEventListener("click", myFunc);
//
//     function myFunc(e) {
//         topNav.classList.toggle("responsive");
//     }
// }());


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


// (function() {
//   var $body = document.body,
//     $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];
//
//   if (typeof $menu_trigger !== 'undefined') {
//     $menu_trigger.addEventListener('click', function() {
//       $body.className = ($body.className == 'menu-active') ? '' : 'menu-active';
//     });
//   }
//
// }).call(this);
