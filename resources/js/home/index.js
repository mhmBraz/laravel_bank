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
                Swal.fire({
                    icon: 'success',
                    text: response.message,
                    timer: 3000
                }).then(() => {
                    window.location.href = route('home.profile', response.id);
                })

            }
            let data = '&email=' + email + ' &password=' + password;
            sendRequisition('GET',route('home.checkLogin'),data,successFunction)
        }
    });
}
