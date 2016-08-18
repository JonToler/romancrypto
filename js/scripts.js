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
    for(var j = 1; j <= arrOfDigitsInNumType[i];j++){
      romanNumber += "I";
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
    alert(decimalInNumType);
  });
});
