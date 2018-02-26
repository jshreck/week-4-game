var guessNumber = 0;
var userNumber = 0;
// var highestValue = 0;
// var values = [];
// var lowestValue = 12;

//reset progress
function reset() {
    // change this to (201-19)
    guessNumber = Math.floor(Math.random() * (201 - 19));
    $("#guessNumber").html(guessNumber);
    userNumber = 0;
    $(".progress-bar").css("width", "0%");
    $("#userNumber").html(userNumber);
    $(".crystals-collected").empty();
    crystalValues();
}

//give values to the crystals
function crystalValues() {
    $(".crystal").each(function() {
        $(this).attr("value", Math.floor(Math.random() * (13 - 1)));
        var currentValue = $(this).attr("value");
        // values.push(currentValue);
        // console.log(values);
        // if (currentValue < lowestValue) {
        //     lowestValue = currentValue;
        //     console.log("lowest" + lowestValue);
        // }
        // if (currentValue > highestValue) {
        //     highestValue = currentValue;
        //     console.log("highest" + highestValue);
        // }
        console.log($(this).attr("alt") + " " + $(this).attr("value"));
      });
}
//check to see if the user has guessed the guessNumber
function check() {
    if (userNumber === guessNumber) {
        var $wins = parseInt($("#wins").html()) + 1;
        $("#wins").html($wins);
        $(".crystals-collected").append("<div class='win-lose-message'>You win!</div>");
        reset();
    }
    else if (userNumber > guessNumber) {
        var $losses = parseInt($("#losses").html()) + 1;
        $("#losses").html($losses);
        $(".crystals-collected").append("<div class='win-lose-message'>You lose!</div>");
        reset();
    }
}

//==============================================================
$(document).ready(function () {

    reset();
    //When crystal is clicked, add the crystal to the the "collected crystals" section, add it's value to the user's number, and update the progress bar to reflect current status
    $(".crystal").on("click", function () {
        $(".crystals-collected").append("<img src=" + $(this).attr("src") + " max-height='100px' width='100px' class='crystal-collected'>");
        userNumber += parseInt($(this).attr("value"));
        $(".progress-bar").css("width", (userNumber / parseInt(guessNumber) * 100) + "%");
        $("#userNumber").html(userNumber);
        check();
    });
});

//Notes: challenge # of clicks?
