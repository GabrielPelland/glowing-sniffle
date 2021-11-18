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

  $(document).ready(function () {

  $('#password, #confirm_password').on('keyup', function() {
    if ($('#password').val() == $('#confirm_password').val()) {
      $('#messagePasswordComparaison1').html('Ce mot de passe ne sont pas différents').css('color', 'green');
    } else 
      $('#messagePasswordComparaison1').html('Ce mot de passe ne sont pas identiques').css('color', 'red');
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



  