(function() {
  'use strict';
  window.addEventListener('load', function() {

    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
const regLogin = /^@\w{8,}/;
const banned = ["admin","1234","password","dupa123"];


var login = document.getElementById("username");

login.addEventListener("input", function (event) {
  if (regLogin.test(login.value)) {
    login.setCustomValidity("");
  } else {
    login.setCustomValidity("bruh");
  }
});



var number = document.getElementById("number");

number.addEventListener("input", function (event) {
  if (number.value == 7) {
    number.setCustomValidity("");
  } else {
    number.setCustomValidity("bruh");
  }
});



var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");

pass1.addEventListener("input", function (event) {
  if (banned.includes(pass1.value)) {
    pass1.setCustomValidity("bruh");
  } else {
    pass1.setCustomValidity("");
  }
});


pass2.addEventListener("input", function (event) {
  if (pass1.value===pass2.value) {
    pass2.setCustomValidity("");
  } else {
    pass2.setCustomValidity("bruh");
  }
});
