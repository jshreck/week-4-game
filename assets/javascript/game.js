var guessNumber = 0;
var userNumber = 0;

//reset game
function reset() {
    guessNumber = Math.floor(Math.random() * 182 + 19);
    $("#guessNumber").html(guessNumber);
    userNumber = 0;
    $(".progress-bar").css("width", "0%");
    $("#userNumber").html(userNumber);
    $(".gems-collected").empty();
    gemValues();
}

//give values to the gems
function gemValues() {
    $(".gem").each(function() {
        $(this).attr("value", Math.floor(Math.random() * 12 +1));
        var currentValue = $(this).attr("value");
        console.log($(this).attr("alt") + " " + $(this).attr("value"));
      });
}

//check to see if the user has guessed the guessNumber
function check() {
    if (userNumber === guessNumber) {
        var $wins = parseInt($("#wins").html()) + 1;
        $("#wins").html($wins);
        $(".gems-collected").append("<h1 class='win-lose-message' style='background: green'>You win!</h1>");
        setTimeout(reset, 2000);
    }
    else if (userNumber > guessNumber) {
        var $losses = parseInt($("#losses").html()) + 1;
        $("#losses").html($losses);
        $(".gems-collected").append("<h1 class='win-lose-message' style='background: red'>You lose!</h1>");
        setTimeout(reset, 2000);
    }
}

//==============================================================
$(document).ready(function () {

    reset();
    //When gem is clicked, add the gem to the the "collected gems" section, add it's value to the user's number, and update the progress bar to reflect current status
    $(".gem").on("click", function () {
        $(".gems-collected").append("<img src=" + $(this).attr("src") + " max-height='100px' width='100px' class='gem-collected'>");
        userNumber += parseInt($(this).attr("value"));
        $(".progress-bar").css("width", (userNumber / parseInt(guessNumber) * 100) + "%");
        $("#userNumber").html(userNumber);
        check();
    });
});
