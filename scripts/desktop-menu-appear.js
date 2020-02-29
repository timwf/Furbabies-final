

myID = document.getElementById("solid-fixed-nav");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 150) {
    myID.classList.add("nav-display-block");
    myID.classList.remove("nav-display-none");
    setTimeout(function () {
      myID.classList.add("nav-show");
      myID.classList.remove("nav-hide");
    }, 100);

  }
  if (y <= 149) {
    myID.classList.add("nav-display-none");
    myID.classList.remove("nav-display-block");
    setTimeout(function () {
      myID.classList.add("nav-hide");
      myID.classList.remove("nav-show");
    }, 100);

  }


};

window.addEventListener("scroll", myScrollFunc);
