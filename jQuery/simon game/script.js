// //3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

// var buttonColours = ["red", "blue", "green", "yellow"];

// //5. At the top of the game.js file, create a new empty array called gamePattern.

// var gamePattern = [];

// //3. At the top of the game.js file, create a new empty array with the name userClickedPattern.

// var userClickedPattern = [];

// //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

// var started = false;

// //2. Create a new variable called level and start at level 0.

// var level = 0;


// //1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

// $(document).keypress(function() {
//   if (!started) {

// //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// //1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

// $(".btn").click(function() {

//     //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

//   var userChosenColour = $(this).attr("id");

// //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

//   userClickedPattern.push(userChosenColour);

//   //console.log(userClickedPattern);


// //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//    //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

//   checkAnswer(userClickedPattern.length-1);
// });

// //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel

// function checkAnswer(currentLevel) {

//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//          //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){

//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }

// //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
// function nextSequence() {
//   userClickedPattern = [];

//  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

//   level++;

// //5. Inside nextSequence(), update the h1 with this change in the value of level.

//   $("#level-title").text("Level " + level);

//  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

//   var randomNumber = Math.floor(Math.random() * 4);

//  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

//   var randomChosenColour = buttonColours[randomNumber];

//  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

//   gamePattern.push(randomChosenColour);

//      //1. Use jQuery to select the button with the same id as the randomChosenColour
// //   //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

// //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.

//   playSound(randomChosenColour);
// }

// //1. Create a new function called animatePress(), it should take a single input parameter called currentColour.

// function animatePress(currentColor) {

//      //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().

//   $("#" + currentColor).addClass("pressed");

// //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// //2. Create a new function called playSound() that takes a single input parameter called name.

// function playSound(name) {

// //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().


// //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }

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

