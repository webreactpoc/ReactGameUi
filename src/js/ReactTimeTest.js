// function printMousePos(event) {
//     document.body.textContent =
//         "( X: " + event.clientX +
//         ", Y: " + event.clientY + " )";
//   }

//CONSTANTS 

TIMER_COUNT = 3;


function loadBeginState(){
    // Initialyse and create startGameButton and 
    var startGameButton = document.createElement("button");
    startGameButton.id = "startGameButton";
    startGameButton.type = "button"; // different browsers default to diferent types 
    startGameButton.innerHTML = "Begin";
    document.getElementsByTagName("body")[0].appendChild(startGameButton);
    startGameButton.addEventListener("click", startGameButtonFunction);
}

function startGameButtonFunction(){
    //clicking the button disables it and starts the timer . TODO should detect which button is pressed
    var startGameButton = document.getElementById("startGameButton");
    startGameButton.style.visibility = "hidden";
    startGameButton.disabled = true;
    startGameCountDown("asdwTest");//TODO hardcoded test. should detect which dutton was pressed
}

function endCountdown(timer) {
    // logic to finish the countdown here
    clearInterval(timer);
    alert("timer ended");

  }
  
function startTimer(timer) {
    count = document.getElementById("pageTitle").innerText;
    if(document.getElementById("pageTitle").innerText == 0) {
        endCountdown(timer);
      } else {
        count = count - 1;
        document.getElementById("pageTitle").innerText = count;
      }
}

function startGameCountDown(testName){
    document.getElementById("pageTitle").innerText = TIMER_COUNT
    var timer = setInterval(function() { startTimer(timer); }, 1000); //TODO find a better way to stop timer
}

window.onload = function(){
    loadBeginState();
}