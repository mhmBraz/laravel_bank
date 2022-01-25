$(document).ready(function () {
  checkLogin();
});

var checkLogin = function checkLogin() {
  $('#enter').on('click', function () {
    var email = $('#login').val();
    var password = $('#password').val();

    if (email === '' || password === '') {
      SweetAlert('error', 'Campos em branco, Por favor, preencha todos os campos!');
    } else {
      var successFunction = function successFunction(response) {
        Swal.fire({
          icon: 'success',
          text: response.message,
          timer: 3000
        }).then(function () {
          window.location.href = route('home.profile', response.id);
        });
      };

      var data = '&email=' + email + ' &password=' + password;
      sendRequisition('GET', route('home.checkLogin'), data, successFunction);
    }
  });
};
