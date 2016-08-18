//Business Logic
function roman(decimal){
  var decimalInNumType = parseInt(decimal); //used for checking only
  var romanNumber = ""; //used to build our roman numeral
  var numerals =["I","V","X","L","C","D","M"]; // Array fo possible numerals
  var numeralIndex = 0; // used to index the array defined above
  var arrOfDigitsInStringType = decimal.split(""); // used to split up our number from user, ex. "2543" is now ["2","5","4","3"]
  var arrOfDigitsInNumType = []; // usd to  hold our converted array we will build below in first for loop
  if ((decimalInNumType <= 0) || (decimalInNumType >= 4000)){ //error checking condition to let user know they entered an invalid number
    return "Please enter a number between 1 and 3999";
  }
  for (var i = 0; i < arrOfDigitsInStringType.length; i++) { //builds our converted array ex ["2","5","4","3"] is now [2,5,4,3]
    arrOfDigitsInNumType[i] = parseInt(arrOfDigitsInStringType[i]);
  }
  arrOfDigitsInNumType = arrOfDigitsInNumType.reverse(); //reverses our converted array ex [2,5,4,3] is now [3,4,5,2]
  for (var i = 0; i < arrOfDigitsInNumType.length; i++) {
    if(arrOfDigitsInNumType[i] < 4){
      // if digit is 1-3
      for (var j = 0; j < arrOfDigitsInNumType[i]; j++) {
        //adds extra numerals ex digit 3 in tens place is III or digit 2 in 1000s place is MM
        romanNumber = numerals[numeralIndex] + romanNumber;
      }
    }
    else if (arrOfDigitsInNumType[i] === 4) {
      // if digit is 4
      romanNumber = (numerals[numeralIndex]+ numerals[numeralIndex+1]) + romanNumber;
    }
    else if (arrOfDigitsInNumType[i]>= 5 && (arrOfDigitsInNumType[i] < 9)){
      // if digit is 5-8
      for (var j = 0; j < (arrOfDigitsInNumType[i] - 5); j++) {
        //adds extra numerals ex digit 7 in hundreds place
        romanNumber = numerals[numeralIndex] + romanNumber;
      }
      romanNumber = numerals[numeralIndex+1] + romanNumber;
    }
    else{
      // if digit is 9
      romanNumber = (numerals[numeralIndex]+ numerals[numeralIndex+2]) + romanNumber ;
    }
    numeralIndex +=2; // changes our index so we can move up 1 power of ten
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
