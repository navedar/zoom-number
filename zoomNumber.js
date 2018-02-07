//Include this code in HTML File and Add class 'zoomNumber' to every Integer element
function zoomNumber(element) {
  var number = parseInt($(element).html());
  var interval = parseInt(number/20);
  var initial = number%20;
  var myNumber = setInterval(function(){
    initial += interval;
    $(element).html(initial);
    if(initial >= number){
      clearInterval(myNumber);
    }
  }, 100);
}
var elements = document.getElementsByClassName('zoomNumber');
for(var i = 0; i < elements.length; i++){
  zoomNumber(elements[i]);
}
