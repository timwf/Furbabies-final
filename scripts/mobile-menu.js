


var mobBtn = document.getElementById("mob-btn");
var mobCont = document.getElementById("mob-menu-cont");
var mobOver = document.getElementById("mob-over");
var mobButton = document.getElementById("hamb");
var contactUs = document.getElementById("contact-us-mob");
var contactUsPara = document.getElementById("contact-us-mob-para");
var contactUsMobButton = document.getElementById("contact-us-mob-button");



mobBtn.addEventListener("click", function(){
  mobCont.classList.toggle("mob-menu-active");
  mobOver.classList.toggle("mob-over-active");
  let mobBtn = undefined;


    });



contactUs.addEventListener("click", function(){
  mobButton.classList.toggle("animate");
  mobCont.classList.remove("mob-menu-active");
  mobOver.classList.remove("mob-over-active");

  window.scrollTo(0,document.body.scrollHeight);
    });

mobBtn.addEventListener("click", function(){
  mobButton.classList.toggle("animate");
    });





        if (window.innerWidth <= 800) {
          contactUsMobButton.addEventListener("click", function(){
            window.scrollTo(0,document.body.scrollHeight);
              });

              contactUsPara.addEventListener("click", function(){
                window.scrollTo(0,document.body.scrollHeight);
                  });
        }
