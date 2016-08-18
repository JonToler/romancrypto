//Business Logic
function roman(decimal){
  var decimalInNumType = parseInt(decimal);
  var romanNumber = "";
  var arrOfDigitsInStringType = decimal.split("");
  var arrOfDigitsInNumType = [];
  if ((decimalInNumType <= 0) || (decimalInNumType >= 4000)){
    return "Please enter a number between 1 and 3999";
  }
  for (var i = 0; i < arrOfDigitsInStringType.length; i++) {
    arrOfDigitsInNumType[i] = parseInt(arrOfDigitsInStringType[i]);
  }
  for (var i = 0; i < arrOfDigitsInNumType.length; i++) {
    if(arrOfDigitsInNumType[i] < 4){
      for (var digit = 0; digit < arrOfDigitsInNumType[i]; digit++) {
        romanNumber += "I";
      }
    }
    else if (arrOfDigitsInNumType[i] === 4) {
      omanNumber += "IV";
    }
    else if(arrOfDigitsInNumType[i] === 5){
      romanNumber += "V";
    }
    else if (arrOfDigitsInNumType[i]> 5 && (arrOfDigitsInNumType[i] < 9)){
      romanNumber += "V" ;
      for (var digit = 0; digit < (arrOfDigitsInNumType[i] - 5); digit++) {
        romanNumber += "I";
      }
    }
    else{
      romanNumber += "IX" ;
    }
  }
  alert(romanNumber);
  return romanNumber;
}
//UI logic
$(document).ready(function() {
  $("form#roman").submit(function(event){
    $("#hidden1").hide();
    var number = roman($("#decimal").val());
    $("#romanAnswer").text(number);
    $("#hidden1").slideDown();
    event.preventDefault();
  });
});
