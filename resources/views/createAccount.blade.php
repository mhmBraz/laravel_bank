@extends('layouts.main')
@section('title', 'Cadastro')
@section('scripts')
<script type="text/javascript" src="{{asset('js/createAccount.js')}}"></script>
@endsection

@section('content')
<div class="container">
    <div class="row border border-primary rounded py-5 px-3">
        <h1 class="text-center mb-0 mt-0"> Cadastro </h1>
        <hr class="mt-2">

        <div class="col-lg-6 mb-0">
            <h2 class="h6 text-secondary text-center">
                Seja bem-vindo(a) ao BankLaravel!
                Realize seu cadastro no formulário abaixo:</h2>
            <div class="my-3">
                <h3 class="h5 text-center">Usuário</h3>
                <hr class="mt-2">
                <div class="form-group mb-3">
                    <label for="login" class="form-label small mb-0"> <i class="fas fa-user"></i> Login </label>
                    <input type="text" class="form-control mb-1" id="inputLogin" placeholder="Login">
                </div>
                <div class="form-group mb-3">
                    <label for="login" class="form-label small mb-0"> <i class="fas fa-key"></i> Password </label>
                    <input type="password" class="form-control mb-1" id="inputPassword" placeholder="Password">
                </div>


            </div>
            <div class="my-3 mt-0">
                <h1 class="h6  text-center"> Perfil </h1>
                <hr class="mt-0">
                <div class="form-group mb-3">
                    <label for="login" class="form-label small mb-0"> <i class="fas fa-male"></i> Name </label>
                    <input type="text" class="form-control mb-1" id="inputName" placeholder="Name">
                </div>
                <div class="form-group mb-3">
                    <label for="login" class="form-label small mb-0"> <i class="fas fa-envelope"></i> E-mail </label>
                    <input type="email" class="form-control mb-1" id="inputEmail" placeholder="E-mail">
                </div>
                <div class="form-group mb-3">
                    <label for="login" class="form-label small mb-0"> <i class="fas fa-user-secret"></i> Keyword </label>
                    <input type="text" class="form-control mb-1" id="inputKeyword" placeholder="Keyword">
                </div>
            </div>
        </div>

        <div class="col-lg-6 mt-5">
            <div class="mt-5">
                <h1 class="h6  text-center"> Endereço </h1>
                <hr class="mb-4">
                <div class="d-flex justify-content-between align-items-center mt-4">
                    <i class="fas fa-map-marked-alt"></i>
                    <input id="inputCep" type="text" class="form-control w-75" placeholder="CEP" maxlength="8">
                    <div>
                        <button id="inputCepBusca" class="btn btn-secondary">Buscar</button>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-lg-6 pr-lg-1">
                        <input id="inputCidade" type="text" class="form-control my-1" placeholder="Cidade" disabled>
                    </div>
                    <div class="col-lg-6 pl-lg-1">
                        <input id="inputEstado" type="text" class="form-control my-1" placeholder="Estado" disabled>
                    </div>
                </div>
                <div class="row mt-2  d-flex justify-content-center align-items-center">
                    <div class="col-lg-6 pr-lg-1">
                        <input id="inputBairro" type="text" class="form-control my-1 " placeholder="Bairro" disabled>
                    </div>
                </div>
                <div class="row  d-flex justify-content-center align-items-center">
                    <div class="col-lg-8 pr-lg-1">
                        <input id="inputLogradouro" type="text" class="form-control my-1" placeholder="Logradouro" disabled>
                    </div>
                </div>
            </div>
        </div>
        <div class="row w-100 mx-0">
            <div id="alert" class="w-100 mx-3 my-2"></div>
            <button id="inputSignup" class="btn btn-primary btn-block">Criar conta</button>
        </div>
    </div>
</div>
@endsection