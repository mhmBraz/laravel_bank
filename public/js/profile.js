$(document).ready(function () {

    tableAccounts();

    $('#createAccount').on('click', function () {
        $.ajax({
            method: 'get',
            url: `${baseurl}/banks`
        }).done(function (data) {
            if (data.status) {
                console.log(data);
                let banks = $('#inputCategory');
                banks.html('');
                banks.append(`<option value="0"></option>`);
                data.banks.map(e => {
                    banks.append(`<option value="${e.id}"> ${e.name}</option>`)
                });
            }
        })
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
        }
    });
}