//Business Logic
function roman(decimal){
  var decimalInNumType = parseInt(decimal);
  var romanNumber;
  var arrOfDigits=decimal.split("");
  alert(decimal);
  alert(arrOfDigits);
  if ((decimalInNumType <= 0) || (decimalInNumType >= 4000)){
     return "Please enter a number between 1 and 3999";
   }

  return decimal;
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
