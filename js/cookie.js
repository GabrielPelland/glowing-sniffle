var mouseClick = false;

$(document).ready(function () {
  setTimeout(() => {
    $("#cookie").slideDown(20000);
  }, 15000);
});

$(document).ready(function () {
  $("#cookie-off").mousedown(function () {
    console.log("MouseDown");
    mouseClick = true;
    setTimeout(() => {
      if (mouseClick == true) {
        console.log("Close");
        closeCookie();
      };
    }, 5000);
  });
});

$(document).ready(function () {
  $("#cookie-off").mouseleave(function () {
      mouseClick = false;
  });
});

function closeCookie(){
    $("#cookie").slideUp(20000);
}