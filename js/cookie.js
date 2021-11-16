var mouseClick = false;
var clickTime = 0.000;

$(document).ready(function () {
  setTimeout(() => {
    $('#cookie').slideDown(20000);
  }, 15000);
});
function closeCookie(){
  $('#cookie').slideUp(20000);
}


$(document).ready(function () {
  $('#cookie-off').mouseleave(function () {
    mouseClick = false;
  });
});

$(document).ready(function () {
  $('#cookie-off').mousedown(function () {
    mouseClick = true;
  });
});

setInterval(function(){ 
  if (mouseClick == true) {
    clickTime = clickTime + 1;
    console.log(clickTime);
    if (clickTime >= 5000) {
      console.log('Close')
      closeCookie();
    };
  }
  else if (mouseClick == false && clickTime > 0) {
    clickTime = clickTime - 1;
  };
  $('#cookie-chargebar').width(((clickTime/5)/10)+'%');
}, 1);

function pressYes() {
  var currentWidth = $('#cookie').innerWidth();
  $( "#cookie" ).animate({height: (outerHeight + 300)}, 3000 );
};
