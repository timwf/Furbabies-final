


var mobBtn = document.getElementById("mob-btn");
var mobCont = document.getElementById("mob-menu-cont");
var mobOver = document.getElementById("mob-over");
var mobButton = document.getElementById("hamb");
var contactUs = document.getElementById("contact-us-mob");


contactUs.addEventListener("click", function(){
  mobButton.classList.toggle("animate");
  mobCont.classList.remove("mob-menu-active");
  mobOver.classList.remove("mob-over-active");

  window.scrollTo(0,document.body.scrollHeight);
    });

mobBtn.addEventListener("click", function(){
  mobButton.classList.toggle("animate");
    });




mobBtn.addEventListener("click", function(){
  mobCont.classList.toggle("mob-menu-active");
  mobOver.classList.toggle("mob-over-active");
  let mobBtn = undefined;


    });
