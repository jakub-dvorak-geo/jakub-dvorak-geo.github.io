/*Navigation bar*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function open_mobile_menu() {
  var x = document.getElementById("header");
  if (x.className === "hoc clear my_nav") {
    x.className += " responsive";
  } else {
    x.className = "hoc clear my_nav";
  }
  
  var y = document.getElementById("nav_list");
  if (y.className === "clear my_nav") {
    y.className += " responsive";
  } else {
    y.className = "clear my_nav";
  }
} 

/*Contact info*/

function set_div_size_to_largest() {
	// Get all elements with class 'box'
    var elements = document.getElementsByClassName('box');
	console.log(elements)

    var maxHeight = 0;

    // Iterate through each element to find the maximum height
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var height = element.offsetHeight; // Get the height of the element

        // Update maximum height if necessary
        if (height > maxHeight) {
            maxHeight = height;
        }
		console.log(maxHeight)
    }

    // Set the maximum height to all elements
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.height = maxHeight + 'px';
    }
}
