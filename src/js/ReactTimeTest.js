// function printMousePos(event) {
//     document.body.textContent =
//         "( X: " + event.clientX +
//         ", Y: " + event.clientY + " )";
//   }

function loadBeginState(){
    // Initialyse and create startGameButton and 
    var startGameButton = document.createElement("startGameButton");
    startGameButton.
    startGameButton.innerHTML = "Begin";
    document.getElementsByTagName("body")[0].appendChild(startGameButton);
    startGameButton.addEventListener("click", startGameButtonFunction);
}


function startGameButtonFunction(){
    alert("Clicked");
}

window.onload = function(){
    loadBeginState();
}