var root = document.querySelector(':root');

function modeCouleur() {
  var modeCouleur = prompt("Veillez sélectionner un mode de luminosité entre sombre et clair.");
  if (modeCouleur == "clair") {
    setLight();
  }

  if (modeCouleur == "sombre") {
    setDark();
  }
}

function setDark() {
  root.style.setProperty('--primary-dark', '#211539');
  root.style.setProperty('--secondary-dark', '#685272');
  root.style.setProperty('--font-light', '#FFFFFF');
  root.style.setProperty('--font-gray', '#FFFFFF');
}
function setLight() {
  root.style.setProperty('--primary-dark', '#FFA3A3');
  root.style.setProperty('--secondary-dark', '#282626');
  root.style.setProperty('--font-light', '#282626');
  root.style.setProperty('--font-gray', '#282626');
}

