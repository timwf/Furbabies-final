var x = document.getElementById("services-wrapper").querySelectorAll(".service-hidden-n-content-wrapper");
var y = document.getElementById("services-wrapper").querySelectorAll(".hidden-service-content");


console.log(x[0].childNodes[1].childNodes[1]);

for (var i = 0; i < x.length; i++) {

  let counter = i
  x[i].addEventListener("mouseover", function(){
    console.log(x[1]);
    y[counter].childNodes[1].classList.add("hid-price-cont-active");
    y[counter].childNodes[3].classList.add("hidd-short-des-active");
    y[counter].childNodes[5].classList.add("arrow-active");


    //x1 img, x3 title, x5 p
    x[counter].childNodes[1].childNodes[1].childNodes[1].classList.add("img-active");
    x[counter].childNodes[1].childNodes[1].childNodes[3].classList.add("header-active");
    x[counter].childNodes[1].childNodes[1].childNodes[5].classList.add("p-active");

  })
  x[i].addEventListener("mouseleave", function(){
    y[counter].childNodes[1].classList.remove("hid-price-cont-active");
    y[counter].childNodes[3].classList.remove("hidd-short-des-active");
        y[counter].childNodes[5].classList.remove("arrow-active");

    //x1 img, x3 title, x5 p

    x[counter].childNodes[1].childNodes[1].childNodes[1].classList.remove("img-active");
    x[counter].childNodes[1].childNodes[1].childNodes[3].classList.remove("header-active");
    x[counter].childNodes[1].childNodes[1].childNodes[5].classList.remove("p-active");


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
