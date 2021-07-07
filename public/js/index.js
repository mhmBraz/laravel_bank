$(document).ready(function () {

    $('#enter').on('click', function () {
        let email = $('#login').val();
        let password = $('#password').val();

        if (email == '' || password == '') {
            Swal.fire(
                'Campos em branco!',
                'Por favor, preencha todos os campos!',
                'error'
            );
        } else {
            $.ajax({
                method: 'post',
                url: '/indexGetLogin',
                data: {email, password}
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
        let rememberEmail = $('#rememberEmail').val();
        let rememberLogin = $('#rememberLogin').val();
        let rememberQuestion = $('#rememberSecretQuestion').val();
        let rememberPassword = $('#rememberNewPassword').val();
        console.log(rememberPassword);
        if (rememberEmail == '' || rememberLogin == '') {
            Swal.fire(
                'Existem campos obrigatorios vazios',
                '',
                'error'
            );
        } else {
            $.ajax({
                method: 'post',
                url: '/postRemember',
                data: {rememberEmail, rememberLogin, rememberQuestion, rememberPassword}
            }).done(function (data) {
                if (data.status) {
                    Swal.fire(
                        data.message,
                        '',
                        'success'
                    );
                    $('#rememberPassword').modal('hide');
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
})
