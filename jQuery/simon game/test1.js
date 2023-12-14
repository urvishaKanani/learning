var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;                                                   

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);  //level 0
    nextSequence();                            // level 1
    started = true;                            //game start
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");         //userChosenColor = red
  userClickedPattern.push(userChosenColour);         //userClickedPattern = [red]

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);          //1-1 = 0
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {    //gamePattern = userClickPattern
      if (userClickedPattern.length === gamePattern.length){                 //gamePattern.length = UserClickedPattern.length
        setTimeout(function () {
          nextSequence();                                                     //nextSequence on 1 sec
        }, 1000);
      }
    } else {
      playSound("wrong");                                      //not a sound play
      $("body").addClass("game-over");                         
      $("#level-title").text("Game Over, Press Any Key to Restart");  //game over  

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);                                                 //after 2 sec

      startOver();                                             //game start
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;                                     
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);        // 0,1,2,3
  var randomChosenColour = buttonColours[randomNumber];   //randomChosenColor = red
  gamePattern.push(randomChosenColour);                   //gamePattern = [red]

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);  //#red (red button)
  playSound(randomChosenColour);                                     //playSound
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");    //#red (red button) on animate
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");  //animate remove at 1 sec
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");  //sounds/red.mp3
  audio.play();                                      //play sound
}

function startOver() {                          //game over 
  level = 0;                                    
  gamePattern = [];
  started = false;
}

