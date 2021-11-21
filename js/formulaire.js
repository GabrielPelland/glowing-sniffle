var root = document.querySelector(":root");


$(document).ready(function () {
  UpdatePasswordRequirement();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function random3DigitsEntry() {
  var value = Math.random().toString().slice(2, 5);
  document.getElementById("phoneEntry1").innerHTML = value;
}

function random3Digits() {
  var value = Math.random().toString().slice(2, 5);
  document.getElementById("phoneEntry2").innerHTML = value;
}

function random4Digits() {
  var value = Math.random().toString().slice(2, 6);
  document.getElementById("phoneEntry3").innerHTML = value;
}

var codePostal;
var adresse = 0;

function generateRandomCodePostal() {
  codePostal = generateRandomLetter();
  codePostal = codePostal + generateRandomStringNumber();
  codePostal = codePostal + generateRandomLetter();
  codePostal = codePostal + " ";
  codePostal = codePostal + generateRandomStringNumber();
  codePostal = codePostal + generateRandomLetter();
  codePostal = codePostal + generateRandomStringNumber();
  document.getElementById("CodePostal").innerHTML = codePostal;
}

function codePostalChoisie() {
  document.getElementById("codePostalChoisie").innerHTML = codePostal;
}

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateRandomStringNumber() {
  const alphabet = "0123456789";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function IncrementerAdresse() {
  adresse++;
  document.getElementById("Adresse").innerHTML = adresse;
}

function test() {
  document.getElementById("demo").innerHTML = Date();
}

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

function CheckContainNumber(valueToCheck, errorMessage) {
  if (!valueToCheck.match(numbers)) {
    errorMessage += "\r\n";
    errorMessage += "• ne contient pas un nombre";
  }
  return errorMessage;
}

function CheckOnlyContainNumber(valueToCheck, errorMessage) {
  if (!valueToCheck.match(numberValidation)) {
    errorMessage += "\r\n";
    errorMessage += "• Peut uniquement contenir des nombres";
  }
  return errorMessage;
}

function CheckOnlyContainLetter(valueToCheck, errorMessage) {
  if (!valueToCheck.match(lettreValidation)) {
    errorMessage += "\r\n";
    errorMessage += "• Peut uniquement contenir des lettres";
  }
  return errorMessage;
}

function CheckLowerCaseLetters(valueToCheck, errorMessage) {
  if (!valueToCheck.match(letters)) {
    errorMessage += "\r\n";
    errorMessage += "• ne contient pas un caractère en minuscule";
  }
  return errorMessage;
}

function CheckUpperCaseLetters(valueToCheck, errorMessage) {
  if (!valueToCheck.match(upperCaseLetters)) {
    errorMessage += "\r\n";
    errorMessage += "• ne contient pas un caractère en majuscule";
  }
  return errorMessage;
}

function CheckSmallerThan(valueToCheck, errorMessage, number) {
  if (valueToCheck.length < number) {
    errorMessage += "\r\n";
    errorMessage += "• est plus petit que " + number + " caractères";
  }
  return errorMessage;
}

function CheckNull(valueToCheck, errorMessage) {
  if (valueToCheck == "") {
    errorMessage += "\r\n";
    errorMessage += "• a un champ vide";
  }
  return errorMessage;
}

function CheckZero(valueToCheck, errorMessage) {
  if (valueToCheck == "0") {
    errorMessage += "\r\n";
    errorMessage += "• ne peut pas être 0";
  }
  return errorMessage;
}

function CheckNegative(valueToCheck, errorMessage) {
  if (valueToCheck < 0) {
    errorMessage += "\r\n";
    errorMessage += "• ne peut pas être un chiffre négatif";
  }
  return errorMessage;
}

function UpdateAdresseValue() {
  addresseValue = document.getElementById("Adresse").value;
  var temp = parseInt(addresseValue) * 2;
  addresseValue = temp;
}

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
  } else {
    alert(messageError);
    $("#Adresse").css("color", "var(--not-poggers)");
  }
}

function ValidePhoneNumber() {
  var phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //https://www.w3resource.com/javascript/form/phone-no-validation.php
  var phone = document.getElementById("Telephone").value;

  if (phone.match(phoneCheck)) {
    alert("Votre téléphone est validée.");
    $("#Telephone").css("color", "var(--poggers)");
  } else {
    alert("Ce téléphone nest pas valide");
    $("#Telephone").css("color", "var(--not-poggers)");
  }
}

function ValidateRue() {
  var messageError = "Erreur de validation dans la rue. La rue : ";
  var address = document.getElementById("Rue").value;

  messageError = CheckNull(address, messageError);
  messageError = CheckOnlyContainLetter(address, messageError);

  if (messageError == "Erreur de validation dans la rue. La rue : ") {
    alert("Votre rue est validée.");
    $("#Rue").css("color", "var(poggers)");
  } else {
    alert(messageError);
    $("#Rue").css("color", "var(--not-poggers)");
  }
}

function ValidateEmail() {
  var emailCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&ss=chromium
  var email = document.getElementById("Email").value;

  if (email.match(emailCheck)) {
    alert("Votre E-mail est validée.");
    $("#Email").css("color", "var(--poggers)");
  } else {
    alert("Cette E-mail nest pas valide");
    $("#Email").css("color", "var(--not-poggers)");
  }
}

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
    alert("Félicitation! Votre mot de passe est correcte");
  } else {
    alert(errorMessage);
  }
}

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
  } else {
    alert(errorMessage);
    $("#Age").css("color", "var(--not-poggers)");
  }
}

var age = 0;

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
  }
} //Extract age: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd

function ValidateDateMessage() {
  if (age == document.getElementById("Age").value) {
    $("#Date").css("color", "var(--poggers)");
    alert("Le date est valide");
  }
  else {
    alert("Faites-vous de l'Alzheimer? Votre age et date de naissance ne correspondent pas...");
  }
}

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
  }

  if (errorMessage == "Erreur de validation dans l'age. L'age : ") {
    alert("Votre age est validée.");
    $("#Age13").css("color", "var(--poggers)");
  } else {
    alert(errorMessage);
    $("#Age13").css("color", "var(--not-poggers)");
  }
}

function validation() {
  var validation = document.getElementById("validation").value;

  if (
    validation ==
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
  }
}

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

function UpdatePasswordRequirement() {
  var passwordValue = document.getElementById("password").value;

  if (passwordValue == $("#confirm_password").val()) {
    $("#messagePasswordComparaison1")
      .html("Ce mot de passe ne sont pas différents")
      .css("color", "var(--password-poggers)");
  } else {
    $("#messagePasswordComparaison1")
      .html("Ce mot de passe ne sont pas identiques")
      .css("color", "var(--password-not-poggers)");
  }

  if (passwordValue.length < 23) {
    $("#messagePasswordLength")
      .html("✘ Le mot de passe doit être plus grand que 23 caractères")
      .css("color", "var(--password-not-poggers)");
  } else {
    $("#messagePasswordLength")
      .html("✔ Le mot de passe est plus grand que 23 caractères")
      .css("color", "var(--password-poggers)");
  }

  if (passwordValue.match(upperCaseLetters)) {
    $("#messagePasswordUpperCase")
      .html("✔ Le mot de passe contient un caractère en majuscule")
      .css("color", "var(--password-poggers)");
  } else {
    $("#messagePasswordUpperCase")
      .html("✘ Le mot de passe doit contenir un caractère en majuscule")
      .css("color", "var(--password-not-poggers)");
  }

  if (passwordValue.match(lowerCaseLetters)) {
    $("#messagePasswordLowerCase")
      .html("✔ Le mot de passe contient un caractère en minuscule")
      .css("color", "var(--password-poggers)");
  } else {
    $("#messagePasswordLowerCase")
      .html("✘ Le mot de passe doit contenir un caractère en miniscule")
      .css("color", "var(--password-not-poggers)");
  }

  if (passwordValue.match(numbers)) {
    $("#messageNombre")
      .html("✔ Le mot de passe contient un nombre")
      .css("color", "var(--password-poggers)");
  } else {
    $("#messageNombre")
      .html("✘ Le mot de passe doit contenir de nombre")
      .css("color", "var(--password-not-poggers)");
  }

  if (passwordValue.match(html)) {
    $("#messageHTML")
      .html("✔ Le mot de passe contient : Ma passion est le html")
      .css("color", "var(--password-poggers)");
  } else {
    $("#messageHTML")
      .html("✘ Le mot de passe doit contenir : ma passion est le html")
      .css("color", "var(--password-not-poggers)");
  }

  if (passwordValue.match(grecMiniscule)) {
    $("#messageGrecMinuscule")
      .html(
        "✔ Le mot de passe contient au moins une des trois première lettre miniscule de lalphabet grec"
      )
      .css("color", "var(--password-poggers)");
  } else {
    $("#messageGrecMinuscule")
      .html(
        "✘ Le mot de passe doit contenir une des trois première lettre miniscule de lalphabet grec"
      )
      .css("color", "var(--password-not-poggers)");
  }

  if (passwordValue.match(grecMajuscule)) {
    $("#messageGrecMajuscule")
      .html(
        "✔ Le mot de passe contient au moins une des trois dernière lettre majuscule de lalphabet grec"
      )
      .css("color", "var(--password-poggers)");
  } else {
    $("#messageGrecMajuscule")
      .html(
        "✘ Le mot de passe doit contenir une des trois dernière lettre majuscule de lalphabet grec"
      )
      .css("color", "var(--password-not-poggers)");
  }

  UpdateAdresseValue();
  if (passwordValue.match(addresseValue)) {
    $("#messageAdresse")
      .html("✔ Le mot de passe contient votre adresse multiplié par 2")
      .css("color", "var(--password-poggers)");
  } else {
    $("#messageAdresse")
      .html("✘ Le mot de passe doit contenir votre adresse multiplié par deux")
      .css("color", "var(--password-not-poggers)");
  }
}

$(document).ready(function () {
  $("#password, #confirm_password, #Adresse").on("keyup", function () {
    UpdatePasswordRequirement();
  });

  $("#password, #confirm_password2").on("keyup", function () {
    if ($("#password").val() == $("#confirm_password2").val()) {
      $("#messagePasswordComparaison2")
        .html("Ce mot de passe ne sont pas différents")
        .css("color", "var(--password-poggers)");
    } else $("#messagePasswordComparaison2").html("Ce mot de passe ne sont pas identiques").css("color", "var(--password-not-poggers)");
  });

  $("#password, #confirm_password3").on("keyup", function () {
    if ($("#password").val() == $("#confirm_password3").val()) {
      $("#messagePasswordComparaison3")
        .html("Ce mot de passe ne sont pas différents")
        .css("color", "var(--password-poggers)");
    } else $("#messagePasswordComparaison3").html("Ce mot de passe ne sont pas identiques").css("color", "var(--password-not-poggers)");
  });
});
