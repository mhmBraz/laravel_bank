$(document).ready(function () {
  $('#enter').on('click', function () {
    var email = $('#login').val();
    var password = $('#password').val();

    if (email == '' || password == '') {
      alertGlobal('error', 'Campos em branco, Por favor, preencha todos os campos!');
    } else {
      $.ajax({
        method: 'post',
        url: "".concat(baseurl, "/indexGetLogin"),
        data: {
          email: email,
          password: password
        }
      }).done(function (data) {
        if (data.status) {
          var login = data.login;
          alertGlobal('success', "Bem vindo ".concat(data.name, "!"));
          setTimeout(function () {
            window.location.href = "".concat(baseurl, "/profile/").concat(login);
          }, 3000);
        } else {
          alertGlobal('error', "".concat(data.message));
        }
      });
    }
  });
  $('#savePassword').on('click', function () {
    var rememberEmail = $('#rememberEmail').val();
    var rememberLogin = $('#rememberLogin').val();
    var rememberQuestion = $('#rememberSecretQuestion').val();
    var rememberPassword = $('#rememberNewPassword').val();

    if (rememberEmail == '' || rememberLogin == '') {
      alertGlobal('error', 'Existem campos obrigatorios vazios');
    } else {
      $.ajax({
        method: 'post',
        url: "".concat(baseurl, "/postRemember"),
        data: {
          rememberEmail: rememberEmail,
          rememberLogin: rememberLogin,
          rememberQuestion: rememberQuestion,
          rememberPassword: rememberPassword
        }
      }).done(function (data) {
        if (data.status) {
          alertGlobal('success', "".concat(data.message));
          $('#rememberPassword').modal('hide');
        } else {
          alertGlobal('error', "".concat(data.message));
        }
      });
    }
  });
});
