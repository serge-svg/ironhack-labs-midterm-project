/* Toggle between adding and removing the "responsive" class to nav-top 
   when the user clicks on the icon */
function burguerFunction() {
    var x = document.querySelector(".nav-top");
    if (x.className === "nav-top") {
        console.log(1)
        x.className += " responsive";
    } else {
        console.log(2)
        x.className = "nav-top";
    }
}

