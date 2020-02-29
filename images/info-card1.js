var x = document.getElementById("services").querySelectorAll(".service-item");
var y = document.getElementById("services").querySelectorAll(".content");





for (var i = 0; i < x.length; i++) {

  let counter = i
  x[i].addEventListener("mouseover", function(){

    x[counter].classList.add("active-card");
  })
  x[i].addEventListener("mouseleave", function(){
x[counter].classList.remove("active-card");
  })

  ;
}




// var mobBtn = document.getElementById("mob-btn");
// var mobCont = document.getElementById("mob-menu-cont");
// var mobOver = document.getElementById("mob-over");
//
//
// console.log(mobBtn);
//
// mobBtn.addEventListener("click", function(){
//   mobCont.classList.toggle("mob-menu-active");
//   mobOver.classList.toggle("mob-over-active");
//   let mobBtn = undefined;
//
//
//     });
