function printMousePos(event) {
    document.body.textContent =
        "( X: " + event.clientX +
        ", Y: " + event.clientY + " )";
  }

window.onload = function(){
    document.addEventListener("click", printMousePos);
}