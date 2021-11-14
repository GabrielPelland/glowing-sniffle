$(document).ready(function(){
    $( "a.mouseOver" ).mouseover(function() {
        console.log("Mouse over");
        $("a.mouseOver").addClass("absolute");
    });
});