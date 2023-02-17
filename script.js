// Şifremi unuttum linkine tıklandığında şifre sıfırlama talebi gönderilmesi için
// bir AJAX isteği gönderiyoruz.

var forgotPasswordLink = document.querySelector(".forgot-password a");

forgotPasswordLink.addEventListener("click", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/reset-password");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({username: username}));

  alert("Şifre sıfırlama talebiniz alınmıştır. Lütfen e-postanızı kontrol edin.");
});
``

