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