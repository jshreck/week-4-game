var guessNumber = 0;
var userNumber = 0;
var $crystal1 = $("#crystal1");
var $crystal2 = $("#crystal2");
var $crystal3 = $("#crystal3");
var $crystal4 = $("#crystal4");

function reset () {
    guessNumber = Math.floor(Math.random() * (201-19));
    console.log("guessNumber = " + guessNumber)
    userNumber = 0;
    crystalNumbers();
}

//Give values to the crystals
function crystalNumbers () {
    
    $crystal1.attr("value", Math.floor(Math.random() * (13-1)));
    console.log("crystal1 attribute value " + $crystal1.attr("value"));

    $crystal2.attr("value", Math.floor(Math.random() * (13-1)));
    console.log("crystal2 attribute value " + $crystal2.attr("value"));

    $crystal3.attr("value", Math.floor(Math.random() * (13-1)));
    console.log("crystal3 attribute value " + $crystal3.attr("value"));

    $crystal4.attr("value", Math.floor(Math.random() * (13-1)));
    console.log("crystal4 attribute value " + $crystal4.attr("value"));
 }

 function check () {
    if (userNumber === guessNumber) {
      //eventually display on screen
      console.log("You win!");
      reset();
    }
    else if (userNumber > guessNumber) {
        //eventually display on screen
        console.log("You lose");
        reset();
    }
}
//document.ready here
reset();
 //When crystal is clicked, add it's value to the user's number
 $(".crystal").on("click", function () {
    userNumber += parseInt($(this).attr("value"));
    console.log("userNumber" + userNumber);

    check();
 });

