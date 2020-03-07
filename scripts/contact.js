var closeContactBtn = document.getElementById("close-form");
var toggleContactForm = document.getElementById("contact-form-all");



var ContactLink = document.querySelectorAll(".js-contact-us");

console.log(ContactLink);

for (var i = 0; i < ContactLink.length; i++) {
  console.log(window.innerWidth);

if (window.innerWidth > 800) {
  ContactLink[i].addEventListener("click", function(){
    toggleContactForm.classList.toggle("contact-form-toggle");

  });
}

}




closeContactBtn.addEventListener("click", function(){
  toggleContactForm.classList.toggle("contact-form-toggle");
    });
