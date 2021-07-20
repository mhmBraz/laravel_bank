@extends('layouts.profileMain')
@section('title', 'Profile')
@section('scripts')
<!-- <script>
    const login = "{{$login}}";
</script> -->
<script type="text/javascript" src="{{asset('js/profile.js')}}"></script>
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="border border-primary rounded py-5 px-3">
            <h1 class="text-center mb-0"> Perfil </h1>
            <hr class="mt-2">
            <div class="row">
                <div class="col text-center">
                    <h2 class="h2 text-center title mb-2">Contas</h2>
                    <button id="createAccount" class="btn btn-success my-2 mb-3 rounded-0" data-bs-toggle="modal" data-bs-target="#addAccountModal"> Criar nova conta</button>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Conta</th>
                                <th scope="col">Banco</th>
                                <th scope="col">Valor em conta</th>
                                <th scope="col" class="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody id="accounts">
                        </tbody>
                    </table>
                </div>

                <div class="col text-center">
                    <h2 class="h2 title mb-2">Historico</h2>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Conta</th>
                                <th scope="col">Conta_destinatario</th>
                                <th scope="col">Operação</th>
                                <th scope="col">Valor</th>
                                <th scope="col" class="text-center" style="width: 240px">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody id="accounts">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal ADD ACCOUNT-->
<div class="modal fade" id="addAccountModal" tabindex="-1" aria-labelledby="addAccountModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addAccountModalLabel">Criar Conta</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col">
                            <div class="form-group">
                                <label for="inputCategory">Bancos</label>
                                <select id="inputCategory" class="form-control">
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group col-8">
                                <label for="login" class="form-label small mb-0">Valor </label>
                                <input type="text" class="form-control" id="login">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection