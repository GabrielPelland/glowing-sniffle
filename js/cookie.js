var mouseClick = false;
var clickTime = 0.000;

//Apparition du pop-up après un certain temps
$(document).ready(function () {
  setTimeout(() => {
    $('#cookie').slideDown(20000);
  }, 10000);
});

//Fermeture du pop-up
function closeCookie(){
  $('#cookie').slideUp(20000);
}

//Verifier si le bouton est cliqué
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

//Calcul du temps et de la barre de progression
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

//Quand il appuie sur yes
function pressYes() {
  var currentWidth = $('#cookie').innerWidth();
  $( "#cookie" ).animate({height: (outerHeight + 300)}, 3000 );
  $('#cookie-off').css('font-size','30px');
};
