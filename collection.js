//  side navbar
  let openbtn = document.getElementById("side-navbar")
  let closebtn = document.getElementById("side-navbar-close")
  let sidenav = document.querySelector(".side-menu")
  openbtn.addEventListener("click", 
    function(){
        sidenav.style.marginLeft = "0"
   })
   closebtn.addEventListener("click", function(){
        sidenav.style.marginLeft = "-60%"

   })