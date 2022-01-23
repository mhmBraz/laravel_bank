$(document).ready(function () {

    // criar datatable e colocar o extrato em baixo das contas criadas
    tableAccounts();

    // ajax para pegar os bancos disponiveis
    $('#createAccount').on('click', function () {
        $.ajax({
            method: 'get',
            url: `${baseurl}/banks`
        }).done(function (data) {
            if (data.status) {
                let banks = $('#inputCategory');
                banks.html('');
                banks.append(`<option value="0"></option>`);
                data.banks.map(e => {
                    banks.append(`<option value="${e.id}"> ${e.name}</option>`)
                });
            }
        })
    })

    $('#saveBank').on('click', function () {
        let bank  = $('#inputCategory').val();
        let price = $('#price').val();
        if ( bank != '' && price != ''){
            $.ajax({
                method: 'post',
                url: `${baseurl}/banks/createAccounts`,
                data: {bank,price}
            }).done(function (data) {
                if (data.status) {
                    $('#addAccountModal').modal('hide');
                    tableAccounts();
                }else{

                }
            })
        }
    })
});

function tableAccounts() {
    $.ajax({
        method: 'get',
        url: `${baseurl}/profile/{login}/accounts`,
    }).done(function (data) {
        if (data.status) {
            let accounts = $('#accounts');

            accounts.html('');
            data.accounts.map(e => {
                let price = parseInt(e.price);
                price = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                accounts.append(`
                <tr>
                    <td>${e.id}</td>
                    <td>${e.bank_name}</td>
                    <td>${price}</td>
                    <td align="end">
                        <button class="btn btn-secondary mx-1 actEdit">Detalhes da conta</button>
                        <button class="btn btn-danger mx-1 actRemove">Remover</button>
                    </td>
                <tr>`)
            });
        }else{
            // montar error
        }
    });
}
