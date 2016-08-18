//Business Logic
function roman(decimal){
  var decimalInNumType = parseInt(decimal);
  var romanNumber = "";
  var numerals =["I","V","X","L","C","D","M"];
  var numeralIndex = 0;
  var arrOfDigitsInStringType = decimal.split("");
  var arrOfDigitsInNumType = [];
  if ((decimalInNumType <= 0) || (decimalInNumType >= 4000)){
    return "Please enter a number between 1 and 3999";
  }
  for (var i = 0; i < arrOfDigitsInStringType.length; i++) {
    arrOfDigitsInNumType[i] = parseInt(arrOfDigitsInStringType[i]);
  }
  //debugger;
  arrOfDigitsInNumType = arrOfDigitsInNumType.reverse();
  alert(arrOfDigitsInNumType);
  for (var i = 0; i < arrOfDigitsInNumType.length; i++) {
    if(arrOfDigitsInNumType[i] < 4){
      for (var digit = 0; digit < arrOfDigitsInNumType[i]; digit++) {
        romanNumber = numerals[numeralIndex] + romanNumber;
      }
    }
    else if (arrOfDigitsInNumType[i] === 4) {
      romanNumber = (numerals[numeralIndex]+ numerals[numeralIndex+1]) + romanNumber;
    }
    else if (arrOfDigitsInNumType[i]>= 5 && (arrOfDigitsInNumType[i] < 9)){
      romanNumber = numerals[numeralIndex+1] + romanNumber;
      for (var digit = 0; digit < (arrOfDigitsInNumType[i] - 5); digit++) {
        romanNumber = numerals[numeralIndex] + romanNumber;
      }
    }
    else{
      romanNumber = (numerals[numeralIndex]+ numerals[numeralIndex+2]) + romanNumber ;
    }
    numeralIndex +=2;
  }
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
