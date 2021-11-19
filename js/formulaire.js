var root = document.querySelector(':root');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function random3DigitsEntry() {
    var value = Math.random().toString().slice(2,5);
    document.getElementById('phoneEntry1').innerHTML = value;
  }

  function random3Digits() {
    var value = Math.random().toString().slice(2,5);
    document.getElementById('phoneEntry2').innerHTML = value;
  }

  function random4Digits() {
    var value = Math.random().toString().slice(2,6);
    document.getElementById('phoneEntry3').innerHTML = value;
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
    document.getElementById('CodePostal').innerHTML = codePostal;
  }

  function codePostalChoisie() {
    document.getElementById('codePostalChoisie').innerHTML = codePostal;
  }

  function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  function generateRandomStringNumber() {
    const alphabet = "0123456789"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  function IncrementerAdresse() {
    adresse++;
    document.getElementById('Adresse').innerHTML = adresse;
  }

  function test() {
    document.getElementById('demo').innerHTML = Date();
  }

  var lowerCaseLetters = /[a-z]/g;
  var numbers = /[0-9]/g;
  var numberValidation = /^[0-9]+$/;
  var grecMiniscule = /[αβγ]/g;
  var html = "ma passion est le html";
  var upperCaseLetters = /[A-Z]/g;
  var grecMajuscule = /[ΧΨΩ]/g;
  var letters = /[a-z]/g;

  var addresseValue;


  function CheckContainNumber(valueToCheck, errorMessage) {
    if(!(valueToCheck.match(numbers))) {
      errorMessage += "\r\n";
      errorMessage += "• ne contient pas un nombre";
    }
    return errorMessage;
  }

  function CheckOnlyContainNumber(valueToCheck, errorMessage) {
    if(!(valueToCheck.match(numberValidation))) {
      errorMessage += "\r\n";
      errorMessage += "• Peut uniquement contenir des nombres";
    }
    return errorMessage;
  }

  function CheckLowerCaseLetters(valueToCheck, errorMessage) {
    if(!(valueToCheck.match(letters))) {
      errorMessage += "\r\n";
      errorMessage += "• ne contient pas un caractère en minuscule"   
    }
    return errorMessage;
  }

  function CheckUpperCaseLetters(valueToCheck, errorMessage) {
    if(!(valueToCheck.match(upperCaseLetters))) {
      errorMessage += "\r\n";
      errorMessage += "• ne contient pas un caractère en majuscule"   
    }
    return errorMessage;
  }

  function CheckSmallerThan(valueToCheck, errorMessage, number) {
    if(valueToCheck.length < number) {  
      errorMessage += "\r\n";
      errorMessage += "• est plus petit que " + number + " caractères"; 
    }
    return errorMessage;
  }

  function CheckNull(valueToCheck, errorMessage) {
    if(valueToCheck == "") {  
      errorMessage += "\r\n";
      errorMessage += "• a un champ vide"; 
    }
    return errorMessage;
  }

  function CheckZero(valueToCheck, errorMessage) {
    if(valueToCheck == "0") {  
      errorMessage += "\r\n";
      errorMessage += "• ne peut pas être 0"; 
    }
    return errorMessage;
  }

  function CheckNegative(valueToCheck, errorMessage) {
    if(valueToCheck < 0) {  
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

    if(messageError=="Erreur de validation dans l'adresse. L'adresse : ") {
      alert("Votre adresse est validée.");
    } else {
      alert(messageError);
    }
  
  }

  function DeepFormValidation() {
    
    var passwordValue = document.getElementById("password").value;
    var errorMessage = "Nous avons trouvé les erreurs suivantes dans le formulaire. Votre mot de passe :";
   
    errorMessage = CheckSmallerThan(passwordValue, errorMessage, 23);
    errorMessage = CheckLowerCaseLetters(passwordValue, errorMessage);
    errorMessage = CheckUpperCaseLetters(passwordValue, errorMessage);
    errorMessage = CheckContainNumber(passwordValue, errorMessage);

      if(!(passwordValue.match(html))) {
        errorMessage += "\r\n";
        errorMessage += "• ne contient pas : ma passion est le html"
      }

      if(!(passwordValue.match(grecMiniscule))) {
        errorMessage += "\r\n";
        errorMessage += "• ne contient pas au moins une des trois première lettre miniscule de lalphabet grec"
      }

      if(!(passwordValue.match(grecMajuscule))) {
        errorMessage += "\r\n";
        errorMessage += "• ne contient pas au moins une des trois dernière lettre majuscule de lalphabet grec"
      }

      if(errorMessage=="Nous avons trouvé les erreurs suivantes dans le formulaire. Votre mot de passe :") {
        alert('Félicitation! Votre mot de passe est correcte');
      } else {
        alert(errorMessage);
      }
      
  }

  function validation() {
    var validation = document.getElementById("validation").value;

    if (validation == "Gilles-Philippe Grégoire est le meilleur professeur de site web") {
      $('#messagePasswordComparaison2').html('Ce mot de passe ne sont pas différents').css('color', 'green');
      alert('Notre système avancé de AI va maintenant procédé à la vérification');
      alert('Beep Boop');
      alert('Boop Boop Beep Boop');
      alert('Nous avons validé vos entrées, voici les résulats : ');
      DeepFormValidation();
    } else {
      $('#messagePasswordComparaison2').html('Ce mot de passe ne sont pas identiques').css('color', 'red');
      alert('Vous navez pas correctement écrit : Gilles-Philippe Grégoire est le meilleur professeur de site web');
      alert('Il faut donc recommencer et écrire correctement le message pour savoir si les entrées que vous avez mis sont valide');
      alert('Merci de votre compréhension');
      alert('Vous pouvez maintenant fermer ce message et procéder à écrire le bon message de validation');
      alert('Merci à notre sponsor RAID: Shadow Legend et NORD VPN.');
    }
  }

  function UpdatePasswordRequirement() {

    var passwordValue = document.getElementById("password").value;

    if (passwordValue == $('#confirm_password').val()) {
      $('#messagePasswordComparaison1').html('Ce mot de passe ne sont pas différents').css('color', 'green');
    } else {
      $('#messagePasswordComparaison1').html('Ce mot de passe ne sont pas identiques').css('color', 'red');
    }

    if(passwordValue.length < 23) {  
      $('#messagePasswordLength').html('✘ Le mot de passe est plus petit que 23 caractères').css('color', 'red');
    } else {
      $('#messagePasswordLength').html('✔ Le mot de passe est plus grand que 23 caractères').css('color', 'green');
    }

    if(passwordValue.match(upperCaseLetters)) {
      $('#messagePasswordUpperCase').html('✔ Le mot de passe contient un caractère en majuscule').css('color', 'green');
    } else {
      $('#messagePasswordUpperCase').html('✘ Le mot de passe doit contenir un caractère en majuscule').css('color', 'red');
    }

    if(passwordValue.match(lowerCaseLetters)) {
      $('#messagePasswordLowerCase').html('✔ Le mot de passe contient un caractère en minuscule').css('color', 'green');
    } else {
      $('#messagePasswordLowerCase').html('✘ Le mot de passe doit contenir un caractère en miniscule').css('color', 'red');
    }

    if(passwordValue.match(numbers)) {
      $('#messageNombre').html('✔ Le mot de passe contient un nombre').css('color', 'green');
    } else {
      $('#messageNombre').html('✘ Le mot de passe doit contenir de nombre').css('color', 'red');
    }

    if(passwordValue.match(html)) {
      $('#messageHTML').html('✔ Le mot de passe contient : Ma passion est le html').css('color', 'green');
    } else {
      $('#messageHTML').html('✘ Le mot de passe doit contenir : ma passion est le html').css('color', 'red');
    }

    if(passwordValue.match(grecMiniscule)) {
      $('#messageGrecMinuscule').html('✔ Le mot de passe contient au moins une des trois première lettre miniscule de lalphabet grec').css('color', 'green');
    } else {
      $('#messageGrecMinuscule').html('✘ Le mot de passe doit contenir une des trois première lettre miniscule de lalphabet grec').css('color', 'red');
    }

    if(passwordValue.match(grecMajuscule)) {
      $('#messageGrecMajuscule').html('✔ Le mot de passe contient au moins une des trois dernière lettre majuscule de lalphabet grec').css('color', 'green');
    } else {
      $('#messageGrecMajuscule').html('✘ Le mot de passe doit contenir une des trois dernière lettre majuscule de lalphabet grec').css('color', 'red');
    }

    UpdateAdresseValue();
    if(passwordValue.match(addresseValue)) {
      $('#messageAdresse').html('✔ Le mot de passe contient votre adresse multiplié par 2').css('color', 'green');
    } else {
      $('#messageAdresse').html('✘ Le mot de passe doit contenir votre adresse multiplié par deux').css('color', 'red');
    }
  }

  $(document).ready(function () {

    $('#password, #confirm_password, #Adresse').on('keyup', function() {
      UpdatePasswordRequirement();
  });

  $('#password, #confirm_password2').on('keyup', function() {
    if ($('#password').val() == $('#confirm_password2').val()) {
      $('#messagePasswordComparaison2').html('Ce mot de passe ne sont pas différents').css('color', 'green');
    } else 
      $('#messagePasswordComparaison2').html('Ce mot de passe ne sont pas identiques').css('color', 'red');
  });

  $('#password, #confirm_password3').on('keyup', function() {
    if ($('#password').val() == $('#confirm_password3').val()) {
      $('#messagePasswordComparaison3').html('Ce mot de passe ne sont pas différents').css('color', 'green');
    } else 
      $('#messagePasswordComparaison3').html('Ce mot de passe ne sont pas identiques').css('color', 'red');
  });

});



  