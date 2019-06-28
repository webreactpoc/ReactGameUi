// function printMousePos(event) {
//     document.body.textContent =
//         "( X: " + event.clientX +
//         ", Y: " + event.clientY + " )";
//   }

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

function startGameCountDown(testName){
    alert("timer started");
}

window.onload = function(){
    loadBeginState();
}