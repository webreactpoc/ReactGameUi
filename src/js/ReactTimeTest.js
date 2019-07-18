// function printMousePos(event) {
//     document.body.textContent =
//         "( X: " + event.clientX +
//         ", Y: " + event.clientY + " )";
//   }

//CONSTANTS 

TIMER_COUNT = 0;
gameOnGoing = false;//game state
globalStartTimer = Date.now(); // NOT SURE IF THIS IS CORRECT...        keeps track of start highlight time
globalCorrectKey = 0; // NOT SURE IF THIS IS CORRECT...                 keeps track of highlighted key

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

function keyfactory(letter) {
    var key = document.createElement("div");
    key.setAttribute('class', 'key');
    key.innerHTML = letter;
    return key;
}

function startGame() {
    gameOnGoing = true; //TODO concurrency problem, need a singleton to simulate game state
    var virtual_box = document.createElement("div");
    virtual_box.setAttribute('class', 'virtualbox');
    var the_body = document.getElementsByTagName("body")[0];

    var letters = ["W", "A", "S", "D"];
    var keycodes = [87, 65, 83, 68];

    var filler_1 = keyfactory("");
    var filler_2 = keyfactory("");
    var keys = [];
    for (i = 0; i < letters.length; i++) {
        keys.push(keyfactory(letters[i]));
    }

    // TODO insert next part in a loop
    virtual_box.appendChild(filler_1);
    virtual_box.appendChild(keys[0]);
    virtual_box.appendChild(filler_2);
    virtual_box.appendChild(keys[1]);
    virtual_box.appendChild(keys[2]);
    virtual_box.appendChild(keys[3]);

    the_body.appendChild(virtual_box);

    // Start a timer and measure reaction time
    // Select key to highlight

    var rnjesus = Math.floor(Math.random() * 4);
    globalCorrectKey = keycodes[rnjesus];
    console.log(globalCorrectKey);
    var selection = keys[rnjesus];
    globalStartTimer = Date.now();
    selection.style.boxShadow = "0px 0px 10px rgb(15, 239, 255)";

    // Shit lights up
}

window.onload = function(){
    document.addEventListener("keydown", keyDownDetection);
    loadBeginState();
}


function keyDownDetection(key){
    //fonctions a executer lorsqu'une touche est presse
    console.log(key.keycode);
    if(gameOnGoing){
        if(key.keyCode== globalCorrectKey){// si une autre touche que awsd est presse, rien n'arrive 
            //document.getElementById("pageTitle").innerText = key.keyCode;
            var delta = Date.now() - globalStartTimer;
            document.getElementById("pageTitle").innerText = delta/1000 + "seconds";
        }
    }
}
