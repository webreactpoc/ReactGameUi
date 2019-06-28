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
    startGame();

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

function startGame() {
    var w_key = document.createElement("div");
    w_key.setAttribute('class', 'key');
    w_key.innerHTML = "W";
    document.getElementsByTagName("body")[0].appendChild(w_key);
    var a_key = document.createElement("div");
    a_key.setAttribute('class', 'key');
    a_key.innerHTML = "A";
    document.getElementsByTagName("body")[0].appendChild(a_key);
    var s_key = document.createElement("div");
    s_key.setAttribute('class', 'key');
    s_key.innerHTML = "S";
    document.getElementsByTagName("body")[0].appendChild(s_key);
    var d_key = document.createElement("div");
    d_key.setAttribute('class', 'key');
    d_key.innerHTML = "D";
    document.getElementsByTagName("body")[0].appendChild(d_key);
}

window.onload = function(){
    loadBeginState();
}