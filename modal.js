// Get the modal
//var redModal = document.getElementById("redModal");
//var blueModal = document.getElementById("blueModal");

// When the user clicks on the button, open the modal 
function redWins() {
    document.getElementById("redModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function redWinsClose() {
    document.getElementById("redModal").style.display = "none";
}

// When the user clicks on the button, open the modal 
function blueWins() {
    document.getElementById("blueModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function blueWinsClose() {
    document.getElementById("blueModal").style.display = "none";
}

// When the user clicks on the button, open the modal 
function grayWins() {
    document.getElementById("grayModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function grayWinsClose() {
    document.getElementById("grayModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == redModal || event.target == blueModal || event.target == grayModal) {
        blueModal.style.display = "none";
        redModal.style.display = "none";
        grayModal.style.display = "none";
    }
}