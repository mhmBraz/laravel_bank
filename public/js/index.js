$(document).ready(function () {

  $('#enter').on('click', function () {
    let login = $('#login').val();
    let password = $('#password').val();

    if (login == '' || password == '') {
      Swal.fire(
        'Campos em branco!',
        'Por favor, preencha todos os campos!',
        'error'
      );
    } else {
      $.ajax({
        method: 'post',
        url: '/postLogin',
        data: {login, password}
      }).done(function (data) {
        if (data.status) {
          Swal.fire(
            'Bem vindo ' + data.name + '!',
            '',
            'success'
          );
        } else {
          Swal.fire(
            data.message,
            '',
            'error'
          );
        }
      });
    }
  });

  $('#savePassword').on('click', function () {
    let email = $('#rememberEmail').val();
    let login = $('#rememberLogin').val();
    let question = $('#rememberSecretQuestion').val();

    if (email == '' || login == '') {
      Swal.fire(
        'Existem campos obrigatorios vazios',
        '',
        'error'
      );
    } else {
      $.ajax({
        method: 'post',
        url: '/postRemember',
        data: {email, login, question}
      }).done(function (data) {
      });
      $('#rememberPassword').modal('hide');
    }

  });
})
