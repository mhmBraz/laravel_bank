$(document).ready(function () {

    checkLogin();
} )

const checkLogin = function () {
    $('#enter').on('click', function () {
        let email    = $('#login').val();
        let password = $('#password').val();

        if (email === '' || password === '') {
            SweetAlert('error', 'Campos em branco, Por favor, preencha todos os campos!')
        } else {
            const successFunction = function (response) {
                console.log(response)
            }
            let data = '&email=' + email + ' &password=' + password;
            sendRequisition('GET',route('home.checkLogin'),data,successFunction)
        }
    });
}
