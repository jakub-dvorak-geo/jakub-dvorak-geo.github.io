// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
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

// Opening modals from differnt pages
var modal_name_to_open = document.location.hash.substr(1);

switch (modal_name_to_open) {
	case "isprs_paper": modal[0].style.display = "block";
	break;
	case "msc_thesis": modal[0].style.display = "block";
	break;
	case "cnn_compare": modal[2].style.display = "block";
	break;
	case "bsc_thesis": modal[6].style.display = "block";
	break;
}