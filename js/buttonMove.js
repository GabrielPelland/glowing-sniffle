var e = e || window.event;
var isFollowing = false;

//Déclanché quand la sourie est sur le bouton
$(document).ready(function(){
    $( "a.mouseOver" ).mouseover(function() {
        $("#button-move").addClass("absolute");
        isFollowing = true;
    });
});

//Tracker continuellement la position de la sourie
jQuery(function($) {
    mousePos = { x : 0, y : 0 }; 
    $(document).mousemove(function(event) {
        mousePos.x = event.pageX - 70;
        mousePos.y = event.pageY;
    });
});

//Affecter la position de la sourie au bouton
$(document).on('mousemove', function(e){
    if(isFollowing == true) {
        $('#button-move').css({
            left:  mousePos.x,
            top:   mousePos.y
        });
    }
});