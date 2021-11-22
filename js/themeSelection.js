var root = document.querySelector(":root");

//Verification choix theme
function themeSelection() {
  var modeCouleur = prompt(
    "Veillez sélectionner un thème.[sombre, clair, gillesPhilippe]"
  );
  if (modeCouleur == "clair") {
    setLight();
  } else if (modeCouleur == "sombre") {
    setDark();
  } else if (modeCouleur == "gillesPhilippe") {
    setGillesPhilippe();
  }
}

//Mettre le thème en dark
function setDark() {
  var confirm = window.confirm("Souhaitez-vous annuler cette action ?");
  if (confirm) {
    themeSelection();
  } else {
    root.style.setProperty("--primary-dark", "#211539");
    root.style.setProperty("--secondary-dark", "#685272");
    root.style.setProperty("--font-color", "#FFFFFF");
    root.style.setProperty("--input-color", "#FFFFFF");
    root.style.setProperty("--table-color", "#211539");
    root.style.setProperty("--font-family","Poppins', sans-serif");
    $("body").css("background-image", "");
  }
}

//Mettre le thème en clair
function setLight() {
  var confirm = window.confirm("Souhaitez-vous annuler cette action ?");
  if (confirm) {
    themeSelection();
  } else {
    root.style.setProperty("--primary-dark", "#4f7cac");
    root.style.setProperty("--secondary-dark", "#c0e0de");
    root.style.setProperty("--font-color", "#162521");
    root.style.setProperty("--input-color", "#9eefe5");
    root.style.setProperty("--table-color", "#4f7cac");
    root.style.setProperty("--font-family","Poppins', sans-serif");
    $("body").css("background-image", "");
  }
}

//Mettre le thème en gillesPhilippe (debug)
function setGillesPhilippe() {
  var confirm = window.confirm("Souhaitez-vous annuler cette action ?");
  if (confirm) {
    themeSelection();
  } else {
    $("body").css("background-image", "url(../images/brunoLeBeau.jpeg)");
    root.style.setProperty("--table-color","2E0F15");
    root.style.setProperty("--font-family","Nanum Pen Script, cursive");
  }
}
