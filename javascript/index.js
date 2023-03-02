/* Toggle between adding and removing the "responsive" class to nav-top 
   when the user clicks on the icon 
*/

function burguerFunction() {
  var verticalMenu = document.querySelector('.vertical-menu');
  if (verticalMenu.style.display === "block") {
    console.log("hide v-m");
    verticalMenu.style.display = "none";
  } else {
    console.log("show v-m");
    verticalMenu.style.display = "block";
  }
}
