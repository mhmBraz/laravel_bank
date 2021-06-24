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
                url: '/post',
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
})
