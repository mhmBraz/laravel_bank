$(document).ready(function () {

    $('#enter').on('click', function () {
        let email = $('#login').val();
        let password = $('#password').val();
        if (email == '' || password == '') {
            alertGlobal('error', 'Campos em branco, Por favor, preencha todos os campos!')
        } else {
            $.ajax({
                method: 'post',
                url: `${baseurl}/indexGetLogin`,
                data: {email, password}
            }).done(function (data) {
                if (data.status) {
                    alertGlobal('success', `Bem vindo ${data.name}!`)
                } else {
                    alertGlobal('error', `${data.message}`)
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
            alertGlobal('error', 'Existem campos obrigatorios vazios')
        } else {
            $.ajax({
                method: 'post',
                url: `${baseurl}/postRemember`,
                data: {rememberEmail, rememberLogin, rememberQuestion, rememberPassword}
            }).done(function (data) {
                if (data.status) {
                    alertGlobal('success', `${data.message}`)
                    $('#rememberPassword').modal('hide');
                } else {
                    alertGlobal('error', `${data.message}`)
                }
            });
        }

    });
})
