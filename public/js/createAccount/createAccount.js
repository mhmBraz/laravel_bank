$(document).ready(function () {
    // $('#inputCidade').addClass()
    // $('#inputCidade').removeClass()
    // $('#inputCidade').hasClass()
    $('#inputCepBusca').on('click', function () {
        if ($('#inputCep').val() != '' && $('#inputCep').val().length >= 8) {
            let cep = $('#inputCep').val();
            $.ajax({
                method: 'get',
                url: `http://viacep.com.br/ws/${cep}/json/`
            }).done(function (data) {
                if (data.erro != true) {
                    $('#inputCidade').val(data.localidade);
                    $('#inputEstado').val(data.uf);
                    $('#inputBairro').val(data.bairro);
                    $('#inputLogradouro').val(data.logradouro);
                    addClassValid($('#inputCidade'));
                    addClassValid($('#inputEstado'));
                    addClassValid($('#inputBairro'));
                    addClassValid($('#inputLogradouro'));
                    $('#inputCep').removeClass('is-invalid');

                } else {
                    alertGlobal('error', 'CEP não encontrado, digite novamente');
                }
            });
        } else {
            alertGlobal('error', 'Campo "CEP" em branco ou "CEP" não encontrado');
        }
    });
    $('#inputLogin').blur(function () {
        if ($('#inputLogin').val() != '') {

            let login = $('#inputLogin').val();
            $.ajax({
                method: 'get',
                url: `${baseurl}/createAccount/createGetLogin`,
                data: { login }
            }).done(function (data) {
                if (data.status) {
                    addClassIsvalid($('#inputLogin'));
                    alertGlobal('error', 'Login já em uso');
                } else {
                    addClassValid($('#inputLogin'));
                    alertGlobal('success', 'Login disponivel');
                }
            });
        }
    });
    $('#inputEmail').blur(function () {

        if ($('#inputEmail').val() != '' && validateEmail($('#inputEmail').val()) == true) {

            let email = $('#inputEmail').val();
            $.ajax({
                method: 'get',
                url: `${baseurl}/createAccount/createGetEmail`,
                data: { email }
            }).done(function (data) {
                if (data.status) {
                    addClassIsvalid($('#inputEmail'));
                    alertGlobal('error', 'Email já em uso');
                } else {
                    alertGlobal('success', 'Email disponivel');
                    addClassValid($('#inputEmail'));
                }
            });
        } else if ($('#inputEmail').val() != '' && validateEmail($('#inputEmail').val()) == false) {
            alertGlobal('error', 'Email invalido');
        }
    });
    $('#inputSignup').on('click', function () {
        let check = true;
        if ($('#inputLogin').val() != '') {
            addClassValid($('#inputLogin'));
        } else {
            addClassIsvalid($('#inputLogin'));
            check = false;
        }

        if ($('#inputPassword').val() != '') {
            addClassValid($('#inputPassword'));
        } else {
            addClassIsvalid($('#inputPassword'));
            check = false;
        }

        if ($('#inputName').val() != '') {
            addClassValid($('#inputName'));
        } else {
            addClassIsvalid($('#inputName'));
            check = false;
        }

        if ($('#inputEmail').val() != '') {
            addClassValid($('#inputEmail'));
        } else {
            addClassIsvalid($('#inputEmail'));
            check = false;
        }

        if ($('#inputCep').val() != '') {
            addClassValid($('#inputCep'));
        } else {
            addClassIsvalid($('#inputCep'));
            check = false;
        }

        if ($('#inputCep').val() != '') {
            addClassValid($('#inputCidade'));
            addClassValid($('#inputEstado'));
            addClassValid($('#inputBairro'));
            addClassValid($('#inputLogradouro'));
        } else {
            addClassIsvalid($('#inputCidade'));
            addClassIsvalid($('#inputEstado'));
            addClassIsvalid($('#inputBairro'));
            addClassIsvalid($('#inputLogradouro'));
            check = false;
        }

        if (check == true) {

            let login = $('#inputLogin').val();
            let password = $('#inputPassword').val();
            let name = $('#inputName').val();
            let email = $('#inputEmail').val();
            let keyword = $('#inputKeyword').val();
            let cep = $('#inputCep').val();

            $.ajax({
                method: 'post',
                url: `${baseurl}/createAccount/create`,
                data: {
                    login, password,
                    name, email,
                    keyword, cep,
                }
            }).done(function (data) {
                if (data.status) {
                    alertGlobal('success', 'Usuario cadastro com sucesso');
                    setTimeout( () => {
                        window.location = `${baseurl}/${data.login}`
                    }, 3000);
                    $('#inputSignup').addClass('disabled');
                } else {
                    alertGlobal('error', 'usuario ou e-mail já em uso, por favor tente novamente');
                }
            });


        } else {
            alertGlobal('error', 'Campos em branco, preencher todos os campos em vermelho');
        }
    });

    function addClassValid(pInput) {
        pInput.removeClass('is-invalid');
        pInput.addClass('is-valid');
    }

    function addClassIsvalid(pInput) {
        pInput.removeClass('is-valid');
        pInput.addClass('is-invalid');
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

})
