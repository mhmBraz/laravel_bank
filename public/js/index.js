$(document).ready(function () {

    $('#enter').on('click', function () {
        let login = $('#login').val();
        let password = $('#password').val();
        $.ajax({
            method: 'get',
            url: '/get',
            data: { login, password }
        }).done(function (data) {
        })

    });
})