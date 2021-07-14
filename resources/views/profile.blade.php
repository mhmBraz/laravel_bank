@extends('layouts.profileMain')
@section('title', 'Profile')
@section('scripts')
<script>
    const login = "{{$login}}";
</script>
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
                    <button id="createAccount" class="btn btn-success my-2 mb-3 rounded-0">Criar nova conta</button>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Conta</th>
                                <th scope="col">Banco</th>
                                <th scope="col">Valor</th>
                                <th scope="col" class="text-center" style="width: 240px">Ações</th>
                            </tr>
                        </thead>
                        <tbody id="accounts">
                        </tbody>
                    </table>
                </div>

                <div class="col">
                    <h2 class="h2  text-center title mb-2">Historico</h2>
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
@endsection