


var mobBtn = document.getElementById("mob-btn");
var mobCont = document.getElementById("mob-menu-cont");
var mobOver = document.getElementById("mob-over");
var mobButton = document.getElementById("hamb");


mobButton.addEventListener("click", function(){
  mobButton.classList.toggle("animate");




    });



console.log(mobBtn);

mobBtn.addEventListener("click", function(){
  mobCont.classList.toggle("mob-menu-active");
  mobOver.classList.toggle("mob-over-active");
  let mobBtn = undefined;


    });
