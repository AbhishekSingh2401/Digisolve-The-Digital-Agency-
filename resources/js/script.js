$(document).ready(function() {

    $(".about-section").waypoint(function(direction) {
        if(direction=="down") {
            $("nav").addclass('.sticky-nav');
        }
        else {
            $("nav").removeclass('.sticky-nav');
        }
    });
});