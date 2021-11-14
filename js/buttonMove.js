var e = e || window.event;
var isFollowing = false;

$(document).ready(function(){
    $( "a.mouseOver" ).mouseover(function() {
        $("#button-move").addClass("absolute");
        isFollowing = true;
    });
});

jQuery(function($) {
    mousePos = { x : 0, y : 0 }; 
    $(document).mousemove(function(event) {
        mousePos.x = event.pageX - 70;
        mousePos.y = event.pageY;
    });
});

$(document).on('mousemove', function(e){
    if(isFollowing == true) {
        $('#button-move').css({
            left:  mousePos.x,
            top:   mousePos.y
        });
    }
});