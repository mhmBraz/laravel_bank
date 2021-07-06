$(document).ready(function () {
    // $('#inputCidade').addClass()
    // $('#inputCidade').removeClass()
    // $('#inputCidade').hasClass()
    $('#inputCepBusca').on('click', function () {
        if ($('#inputCep').val() != '') {
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
                } else {
                    Swal.fire(
                        'CPF não encontrado, digite novamente',
                        '',
                        'error'
                    );
                }
            });
        } else {
            Swal.fire(
                'Campo "CPF" em branco',
                '',
                'error'
            );
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

        if ($('#inputCidade').val() != '') {
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

        } else {
            Swal.fire(
                'Campos em branco, preencher todos os campos em vermelho',
                '',
                'error'
            );
        }
    })


    function addClassValid(pInput) {
        pInput.removeClass('is-invalid');
        pInput.addClass('is-valid');
    }

    function addClassIsvalid(pInput) {
        pInput.removeClass('is-valid');
        pInput.addClass('is-invalid');
    }

})
