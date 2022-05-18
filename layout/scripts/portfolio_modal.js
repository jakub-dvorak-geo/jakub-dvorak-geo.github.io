// Get the modal
//var modal = document.getElementById("myModal");
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var btn = document.getElementsByClassName("btn-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");


for (let i = 0; i < modal.length; i++) {
// When the user clicks on the button, open the modal
btn[i].onclick = function() {
  modal[i].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[i].onclick = function() {
  modal[i].style.display = "none";
}
} 


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (let i = 0; i < modal.length; i++) {
	if (event.target == modal[i]) {
		modal[i].style.display = "none";
	}
  }
} 