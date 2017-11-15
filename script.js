// A $( document ).ready() block.
$(document).ready(function() {

  $(".submit").click(function() {
    var guess = $("#guess").val();
    var guessNum = parseFloat(guess);

    if (guessNum == 2.4) {
      $(".answer").text("You're right!");
    } else if (guessNum <= 2.4 ) {
      $(".answer").text("Too low! It's 2.4%.");
    } else {
      $(".answer").text("Too high! It's 2.4%.");
    }

    $(".submit").hide();
  });
});
