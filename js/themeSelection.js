var root = document.querySelector(':root');

function themeSelection() {
  var modeCouleur = prompt("Veillez sélectionner un thème.[sombre ou clair]");
  if (modeCouleur == "clair") {
    setLight();
  }

  if (modeCouleur == "sombre") {
    setDark();
  }
}

function setDark() {
  var confirm = window.confirm("Souhaitez-vous annueler cette action ?");
  if (confirm) {
    themeSelection();
  }
  else {
    root.style.setProperty('--primary-dark', '#211539');
    root.style.setProperty('--secondary-dark', '#685272');
    root.style.setProperty('--font-light', '#FFFFFF');
    root.style.setProperty('--font-gray', '#FFFFFF');
  }
}

function setLight() {
  var confirm = window.confirm("Souhaitez-vous annueler cette action ?");
  if (confirm) {
    themeSelection();
  }
  else {
    root.style.setProperty('--primary-dark', '#FFA3A3');
    root.style.setProperty('--secondary-dark', '#282626');
    root.style.setProperty('--font-light', '#282626');
    root.style.setProperty('--font-gray', '#282626');
  }
}

