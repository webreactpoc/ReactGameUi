// function printMousePos(event) {
//     document.body.textContent =
//         "( X: " + event.clientX +
//         ", Y: " + event.clientY + " )";
//   }

//CONSTANTS 

TIMER_COUNT = 0;
gameOnGoing = false;//game state

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
    gameOnGoing = true; //TODO concurrency problem, need a singleton to simulate game state
    var virtual_box = document.createElement("div");
    virtual_box.setAttribute('class', 'virtualbox');
    var the_body = document.getElementsByTagName("body")[0];

    var filler_1 = document.createElement("div");
    filler_1.setAttribute('class', 'key');
    var w_key = document.createElement("div");
    w_key.setAttribute('class', 'key');
    w_key.innerHTML = "W";
    var filler_2 = document.createElement("div");
    filler_2.setAttribute('class', 'key');
    var a_key = document.createElement("div");
    a_key.setAttribute('class', 'key');
    a_key.innerHTML = "A";
    var s_key = document.createElement("div");
    s_key.setAttribute('class', 'key');
    s_key.innerHTML = "S";
    var d_key = document.createElement("div");
    d_key.setAttribute('class', 'key');
    d_key.innerHTML = "D";
    virtual_box.appendChild(filler_1);
    virtual_box.appendChild(w_key);
    virtual_box.appendChild(filler_2);
    virtual_box.appendChild(a_key);
    virtual_box.appendChild(s_key);
    virtual_box.appendChild(d_key);

    the_body.appendChild(virtual_box);

    /*
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
    */
}

window.onload = function(){
    document.addEventListener("keydown", keyDownDetection);
    loadBeginState();
}


function keyDownDetection(key){
    //fonctions a executer lorsqu'une touche est presse
    console.log(key.keycode);
    if(gameOnGoing){
        if(key.keyCode=='65'||key.keyCode=='87'||key.keyCode=='83'||key.keyCode=='68'){// si une autre touche que awsd est presse, rien n'arrive 
            document.getElementById("pageTitle").innerText = key.keyCode;
        }
    }
}
