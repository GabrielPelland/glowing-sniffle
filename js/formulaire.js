var root = document.querySelector(":root");

//Conditions pour submit
var phoneV = false;
var adressV = false;
var emailV = false;
var streetV = false;
var numberV = false;
var cellV = false;
var ageV = false;
var dateV = false;
var agePlusV = false;
var mdp1V = false;
var mdp2V = false;
var mdp3V = false;
var mdp4V = false;
var validationV = false;

//Attend que tout mon site web soit chargé avant de démarré ma fonction
$(document).ready(function () {
  //Met à jour les vérifications du mot de passe
  UpdatePasswordRequirement();
});

//Retourne un entier aléatoirement
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Met 3 chiffre aléatoire (peut commencer par 00) pour mon premier téléphone
function random3DigitsEntry() {
  var value = Math.random().toString().slice(2, 5);
  document.getElementById("phoneEntry1").innerHTML = value;
}

//Met 3 chiffre aléatoire (peut commencer par 00) pour mon deuxième téléphone
function random3Digits() {
  var value = Math.random().toString().slice(2, 5);
  document.getElementById("phoneEntry2").innerHTML = value;
}

//Met 4 chiffre aléatoire (peut commencer par 00) pour mon troisième téléphone
function random4Digits() {
  var value = Math.random().toString().slice(2, 6);
  document.getElementById("phoneEntry3").innerHTML = value;
}

var codePostal;
var adresse = 0;

//Génère un code postal aléatoire composé de lettre et de nombre
function generateRandomCodePostal() {
  codePostal = generateRandomLetter();
  codePostal = codePostal + generateRandomStringNumber();
  codePostal = codePostal + generateRandomLetter();
  codePostal = codePostal + " ";
  codePostal = codePostal + generateRandomStringNumber();
  codePostal = codePostal + generateRandomLetter();
  codePostal = codePostal + generateRandomStringNumber();
  document.getElementById("CodePostal").innerHTML = codePostal;

  numberV = false;
}

//Met à jour le code Postal choisie
function codePostalChoisie() {
  document.getElementById("codePostalChoisie").innerHTML = codePostal;

  numberV = true;
}

//Retourne une lettre majuscule de l'alphabet aléatoirement
function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

//Retourne un entier aléatoire entre 0 et 9
function generateRandomStringNumber() {
  const alphabet = "0123456789";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

//Augmente l'adresse
function IncrementerAdresse() {
  adresse++;
  document.getElementById("Adresse").innerHTML = adresse;
}

//Augmente l'adresse
function test() {
  document.getElementById("demo").innerHTML = Date();
}

//Variables
var lowerCaseLetters = /[a-z]/g;
var numbers = /[0-9]/g;
var numberValidation = /^[0-9]+$/;
var lettreValidation = /^[a-zA-z]+$/;
var grecMiniscule = /[αβγ]/g;
var html = "ma passion est le html";
var upperCaseLetters = /[A-Z]/g;
var grecMajuscule = /[ΧΨΩ]/g;
var letters = /[a-z]/g;

var addresseValue;

//Retourne un message d'erreur si le paramètre ne contient pas un nombre
function CheckContainNumber(valueToCheck, errorMessage) {
  if (!valueToCheck.match(numbers)) {
    errorMessage += "\r\n";
    errorMessage += "• ne contient pas un nombre";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre peut uniquement contenir des nombres
function CheckOnlyContainNumber(valueToCheck, errorMessage) {
  if (!valueToCheck.match(numberValidation)) {
    errorMessage += "\r\n";
    errorMessage += "• Peut uniquement contenir des nombres";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre peut uniquement contenir des lettres
function CheckOnlyContainLetter(valueToCheck, errorMessage) {
  if (!valueToCheck.match(lettreValidation)) {
    errorMessage += "\r\n";
    errorMessage += "• Peut uniquement contenir des lettres";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre ne contient pas un caractère en minuscule
function CheckLowerCaseLetters(valueToCheck, errorMessage) {
  if (!valueToCheck.match(letters)) {
    errorMessage += "\r\n";
    errorMessage += "• ne contient pas un caractère en minuscule";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre ne contient pas un caractère en majuscule
function CheckUpperCaseLetters(valueToCheck, errorMessage) {
  if (!valueToCheck.match(upperCaseLetters)) {
    errorMessage += "\r\n";
    errorMessage += "• ne contient pas un caractère en majuscule";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre est plus petit que number
function CheckSmallerThan(valueToCheck, errorMessage, number) {
  if (valueToCheck.length < number) {
    errorMessage += "\r\n";
    errorMessage += "• est plus petit que " + number + " caractères";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre a un champ vide
function CheckNull(valueToCheck, errorMessage) {
  if (valueToCheck == "") {
    errorMessage += "\r\n";
    errorMessage += "• a un champ vide";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre ne peut pas être 0
function CheckZero(valueToCheck, errorMessage) {
  if (valueToCheck == "0") {
    errorMessage += "\r\n";
    errorMessage += "• ne peut pas être 0";
  }
  return errorMessage;
}

//Retourne un message d'erreur si le paramètre ne peut pas être un chiffre négatif
function CheckNegative(valueToCheck, errorMessage) {
  if (valueToCheck < 0) {
    errorMessage += "\r\n";
    errorMessage += "• ne peut pas être un chiffre négatif";
  }
  return errorMessage;
}

//Met à jour l'adresse multiplié par deux
function UpdateAdresseValue() {
  addresseValue = document.getElementById("Adresse").value;
  var temp = parseInt(addresseValue) * 2;
  addresseValue = temp;
}

//Vérifie si l'adresse est valide
function ValidateAdresse() {
  var messageError = "Erreur de validation dans l'adresse. L'adresse : ";
  var address = document.getElementById("Adresse").value;

  messageError = CheckNull(address, messageError);
  messageError = CheckOnlyContainNumber(address, messageError);
  messageError = CheckNegative(address, messageError);
  messageError = CheckZero(address, messageError);

  if (messageError == "Erreur de validation dans l'adresse. L'adresse : ") {
    alert("Votre adresse est validée.");
    $("#Adresse").css("color", "var(--poggers)");

    adressV = true;
  } else {
    alert(messageError);
    $("#Adresse").css("color", "var(--not-poggers)");

    adressV = false;
  }
}

//Vérifie si le telephone est valide
function ValidePhoneNumber() {
  var phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //https://www.w3resource.com/javascript/form/phone-no-validation.php
  var phone = document.getElementById("Telephone").value;

  if (phone.match(phoneCheck)) {
    alert("Votre téléphone est validée.");
    $("#Telephone").css("color", "var(--poggers)");

    phoneV = true;
  } else {
    alert("Ce téléphone nest pas valide");
    $("#Telephone").css("color", "var(--not-poggers)");

    phoneV = false;
  }
}

//Vérifie si la rue est valide
function ValidateRue() {
  var messageError = "Erreur de validation dans la rue. La rue : ";
  var address = document.getElementById("Rue").value;

  messageError = CheckNull(address, messageError);
  messageError = CheckOnlyContainLetter(address, messageError);

  if (messageError == "Erreur de validation dans la rue. La rue : ") {
    alert("Votre rue est validée.");
    $("#Rue").css("color", "var(poggers)");

    streetV = true;
  } else {
    alert(messageError);
    $("#Rue").css("color", "var(--not-poggers)");

    streetV = false;
  }
}

//Vérifie si l'adresse courriel est valide
function ValidateEmail() {
  var emailCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&ss=chromium
  var email = document.getElementById("Email").value;

  if (email.match(emailCheck)) {
    alert("Votre E-mail est validée.");
    $("#Email").css("color", "var(--poggers)");

    emailV = true;
  } else {
    alert("Cette E-mail nest pas valide");
    $("#Email").css("color", "var(--not-poggers)");

    emailV = false;
  }
}

//Vérifie si le mot de passe est valide
function DeepFormValidation() {
  var passwordValue = document.getElementById("password").value;
  var errorMessage =
    "Nous avons trouvé les erreurs suivantes dans le formulaire. Votre mot de passe :";

  errorMessage = CheckSmallerThan(passwordValue, errorMessage, 23);
  errorMessage = CheckLowerCaseLetters(passwordValue, errorMessage);
  errorMessage = CheckUpperCaseLetters(passwordValue, errorMessage);
  errorMessage = CheckContainNumber(passwordValue, errorMessage);

  if (!passwordValue.match(html)) {
    errorMessage += "\r\n";
    errorMessage += "• ne contient pas : ma passion est le html";
  }

  if (!passwordValue.match(grecMiniscule)) {
    errorMessage += "\r\n";
    errorMessage +=
      "• ne contient pas au moins une des trois première lettre miniscule de lalphabet grec";
  }

  if (!passwordValue.match(grecMajuscule)) {
    errorMessage += "\r\n";
    errorMessage +=
      "• ne contient pas au moins une des trois dernière lettre majuscule de lalphabet grec";
  }

  if (
    errorMessage ==
    "Nous avons trouvé les erreurs suivantes dans le formulaire. Votre mot de passe :"
  ) {
    alert("Félicitation! Votre mot de passe est correct");

    mdp1V = true;
  } else {
    alert(errorMessage);

    mdp1V = false;
  }
}

//Vérifie si l'age est valide
function ValidateAge() {
  var age = document.getElementById("Age").value;
  var errorMessage = "Erreur de validation dans l'age. L'age : ";

  errorMessage = CheckNull(age, errorMessage);
  errorMessage = CheckNegative(age, errorMessage);
  errorMessage = CheckZero(age, errorMessage);
  errorMessage = CheckOnlyContainNumber(age, errorMessage);

  if (errorMessage == "Erreur de validation dans l'age. L'age : ") {
    alert("Votre age est validée.");
    $("#Age").css("color", "var(--poggers)");

    dateV = true;
  } else {
    alert(errorMessage);
    $("#Age").css("color", "var(--not-poggers)");

    dateV = false;
  }
}

var age = 0;

//Vérifie si la date est valide
function ValidateDate() {
  var dateCheck = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/; //https://stackoverflow.com/questions/22061723/regex-date-validation-for-yyyy-mm-dd
  var date = document.getElementById("Date").value;
  var annee = date.substring(0, 4);
  var mois = date.substring(6, 7);
  var jour = date.substring(9, 10);

  var currentDate = new Date();
  age = currentDate.getFullYear() - annee;

  if (date.match(dateCheck)) {
    if (
      currentDate.getMonth() < mois ||
      (currentDate.getMonth() == mois && currentDate.getDate() < jour)
    ) {
      age--;
    }
    ValidateDateMessage();
  } else {
    alert("Le format de la date nest pas valide");
    $("#Date").css("color", "var(--not-poggers)");
    age = false;
  }
} //Extract age: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd

//Envoie le message de validation de la date
function ValidateDateMessage() {
  if (age == document.getElementById("Age").value) {
    $("#Date").css("color", "var(--poggers)");
    alert("Le date est valide");

    dateV = true;
  } else {
    alert(
      "Faites-vous de l'Alzheimer? Votre age et date de naissance ne correspondent pas..."
    );

    dateV = false;
  }
}

//Vérifie si l'age + 13 est valide
function ValidateAge13() {
  var age = document.getElementById("Age").value;
  var age13 = document.getElementById("Age13").value;
  var errorMessage = "Erreur de validation dans l'age. L'age : ";

  errorMessage = CheckNull(age, errorMessage);
  errorMessage = CheckNegative(age, errorMessage);
  errorMessage = CheckZero(age, errorMessage);
  errorMessage = CheckOnlyContainNumber(age, errorMessage);

  if (parseInt(age13) == parseInt(age) + 13) {
  } else {
    errorMessage = "Vous êtes pas très bon en mathématique";

    agePlusVc = false;
  }

  if (errorMessage == "Erreur de validation dans l'age. L'age : ") {
    alert("Votre age est validée.");
    $("#Age13").css("color", "var(--poggers)");

    agePlusV = true;
  } else {
    alert(errorMessage);
    $("#Age13").css("color", "var(--not-poggers)");

    agePlusV = false;
  }
}

//Envoie les messages de validation pour le mot de passe
function validation() {
  var validationContent = document.getElementById("validation").value;

  if (
    validationContent ==
    "Gilles-Philippe Grégoire est le meilleur professeur de site web"
  ) {
    $("#messagePasswordComparaison2")
      .html("Ce mot de passe ne sont pas différents")
      .css("color", "var(--poggers)");
    alert("Notre système avancé de AI va maintenant procédé à la vérification");
    alert("Beep Boop");
    alert("Boop Boop Beep Boop");
    alert("Nous avons validé vos entrées, voici les résulats : ");
    DeepFormValidation();

    validationV = true;
  } else {
    $("#messagePasswordComparaison2")
      .html("Ce mot de passe ne sont pas identiques")
      .css("color", "var(--not-poggers)");
    alert(
      "Vous navez pas correctement écrit : Gilles-Philippe Grégoire est le meilleur professeur de site web"
    );
    alert(
      "Il faut donc recommencer et écrire correctement le message pour savoir si les entrées que vous avez mis sont valide"
    );
    alert("Merci de votre compréhension");
    alert(
      "Vous pouvez maintenant fermer ce message et procéder à écrire le bon message de validation"
    );
    alert("Merci à notre sponsor RAID: Shadow Legend et NORD VPN.");

    validationV = false;
  }
}

//Valide tous les champs d'entrée présent dans le formulaire
function ValiderEverything() {
  ValidePhoneNumber();
  ValidateAdresse();
  ValidateAge();
  ValidateDate();
  ValidateAge13();
  ValidateEmail();
  ValidateRue();
  DeepFormValidation();
}

//Vérifie les critère du mot de passe
function UpdatePasswordRequirement() {
  var passwordValue = document.getElementById("password").value;
  if (passwordValue.length < 23) {
    $("#messagePasswordLength")
      .html("✘ Le mot de passe doit être plus grand que 23 caractères")
      .css("color", "var(--not-poggers)");
    mdp1V = false;
  } else {
    $("#messagePasswordLength")
      .html("✔ Le mot de passe est plus grand que 23 caractères")
      .css("color", "var(--poggers)");
      mdp1V = true;
  }

  if (passwordValue.match(upperCaseLetters)) {
    $("#messagePasswordUpperCase")
      .html("✔ Le mot de passe contient un caractère en majuscule")
      .css("color", "var(--poggers)");
      mdp1V = true;
  } else {
    $("#messagePasswordUpperCase")
      .html("✘ Le mot de passe doit contenir un caractère en majuscule")
      .css("color", "var(--not-poggers)");
      mdp1V = false;
  }

  if (passwordValue.match(lowerCaseLetters)) {
    $("#messagePasswordLowerCase")
      .html("✔ Le mot de passe contient un caractère en minuscule")
      .css("color", "var(--poggers)");
      mdp1V = true;
  } else {
    $("#messagePasswordLowerCase")
      .html("✘ Le mot de passe doit contenir un caractère en miniscule")
      .css("color", "var(--not-poggers)");
      mdp1V = true;
  }

  if (passwordValue.match(numbers)) {
    $("#messageNombre")
      .html("✔ Le mot de passe contient un nombre")
      .css("color", "var(--poggers)");
      mdp1V = true;
  } else {
    $("#messageNombre")
      .html("✘ Le mot de passe doit contenir de nombre")
      .css("color", "var(--not-poggers)");
      mdp1V = true;
  }

  if (passwordValue.match(html)) {
    $("#messageHTML")
      .html("✔ Le mot de passe contient : Ma passion est le html")
      .css("color", "var(--poggers)");
      mdp1V = true;
    $("#messageHTML")
      .html("✘ Le mot de passe doit contenir : ma passion est le html")
      .css("color", "var(--not-poggers)");
      mdp1V = false;
  }

  if (passwordValue.match(grecMiniscule)) {
    $("#messageGrecMinuscule")
      .html(
        "✔ Le mot de passe contient au moins une des trois première lettre miniscule de lalphabet grec"
      )
      .css("color", "var(--poggers)");
      mdp1V = true;
  } else {
    $("#messageGrecMinuscule")
      .html(
        "✘ Le mot de passe doit contenir une des trois première lettre miniscule de lalphabet grec"
      )
      .css("color", "var(--not-poggers)");
      mdp1V = false;
  }

  if (passwordValue.match(grecMajuscule)) {
    $("#messageGrecMajuscule")
      .html(
        "✔ Le mot de passe contient au moins une des trois dernière lettre majuscule de lalphabet grec"
      )
      .css("color", "var(--poggers)");
      mdp1V = true;
  } else {
    $("#messageGrecMajuscule")
      .html(
        "✘ Le mot de passe doit contenir une des trois dernière lettre majuscule de lalphabet grec"
      )
      .css("color", "var(--not-poggers)");
      mdp1V = false;
  }

  UpdateAdresseValue();
  if (passwordValue.match(addresseValue)) {
    $("#messageAdresse")
      .html("✔ Le mot de passe contient votre adresse multiplié par 2")
      .css("color", "var(--poggers)");
      mdp1V = true;
  } else {
    $("#messageAdresse")
      .html("✘ Le mot de passe doit contenir votre adresse multiplié par deux")
      .css("color", "var(--not-poggers)");
      mdp1V = false;
  }
}

//Attend que tout mon site web soit chargé avant de démarré la première fonction
$(document).ready(function () {
  //Met à jour les validités du mot de passe lorsqu'on tape dans le champs d'entrée
  $("#password, #confirm_password, #Adresse").on("keyup", function () {
    UpdatePasswordRequirement();
  });


  //Vérifie si le mot de passe principal correspond avec le 2e entrée de mot de passe, lorsqu'une entrée est écrite dans le champ d'entrée
  $("#password, #confirm_password").on("keyup", function () {
    if ($("#password").val() == $("#confirm_password").val()) {
      $("#messagePasswordComparaison1")
        .html("Ce mot de passe ne sont pas différents")
        .css("color", "var(--poggers)");
      mdp2V = true;
    } else {
      $("#messagePasswordComparaison1").html("Ce mot de passe ne sont pas identiques").css("color", "var(--not-poggers)");

      mdp2V = false;
    }
  });

  //Vérifie si le mot de passe principal correspond avec le 2e entrée de mot de passe, lorsqu'une entrée est écrite dans le champ d'entrée
  $("#password, #confirm_password2").on("keyup", function () {
    if ($("#password").val() == $("#confirm_password2").val()) {
      $("#messagePasswordComparaison2")
        .html("Ce mot de passe ne sont pas différents")
        .css("color", "var(--poggers)");
      mdp3V = true;
    } else {
      $("#messagePasswordComparaison2").html("Ce mot de passe ne sont pas identiques").css("color", "var(--not-poggers)");

      mdp3V = false;
    }
  });

  //Vérifie si le mot de passe principal correspond avec le 3e entrée de mot de passe, lorsqu'une entrée est écrite dans le champ d'entrée
  $("#password, #confirm_password3").on("keyup", function () {
    if ($("#password").val() == $("#confirm_password3").val()) {
      $("#messagePasswordComparaison3")
        .html("Ce mot de passe ne sont pas différents")
        .css("color", "var(--poggers)");
      mdp4V = true;
    } else {
      $("#messagePasswordComparaison3")
        .html("Ce mot de passe ne sont pas identiques")
        .css("color", "var(--not-poggers)");
      mdp4V = false;
    }
  });
});

//Validation avant submit
function send() {
  if (phoneV == true && adressV == true && emailV == true && streetV == true && numberV == true && cellV == true && ageV == true && dateV == true && agePlusV == true && mdp1V == true && mdp2V == true && mdp3V == true && mdp4V == true && validationV == true) {
    $('#envoyer').submit();
  }
  else {
    alert("Veillez valider avant d'envoyer le formulaire");
    ValiderEverything();
  }
}