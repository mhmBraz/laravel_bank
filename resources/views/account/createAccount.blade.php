@extends('layouts.main')
@section('title', 'Cadastro')
@section('scripts')
<script type="text/javascript" src="{{asset('js/createAccount.js')}}"></script>
@endsection

@section('content')
<div class="container bg-white shadow-lg">
    <div class="row border border-primary rounded py-1 px-1">
        <div class="col-lg-6 mb-0">
            <div class="my-3">
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
                    <label for="login" class="form-label small mb-0"> <i class="fas fa-user-secret"></i> Keyword </label>
                    <input type="text" class="form-control mb-1" id="inputKeyword" placeholder="Keyword">
                </div>
            </div>
        </div>

        <div class="col-lg-6">
                <div class="row mt-3 col-12">
                    <div class="form-group mb-3 col-12">
                        <label for="login" class="form-label small mb-0"> <i class="fas fa-map-marked-alt"></i> Cep </label>
                        <input id="inputCep" type="text" class="form-control w-100" placeholder="CEP" maxlength="8">
                    </div>
                    <div class="form-group d-flex justify-content-center align-items-center">
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

                    <div class="col-lg-6 pl-lg-1">
                        <input id="inputBairro" type="text" class="form-control my-1 " placeholder="Bairro" disabled>
                    </div>

                    <div class="col-lg-6 pl-lg-1">
                        <input id="inputLogradouro" type="text" class="form-control my-1" placeholder="Logradouro" disabled>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="login" class="form-label small mb-0"> <i class="fas fa-envelope"></i> E-mail </label>
                    <input type="email" class="form-control mb-1" id="inputEmail" placeholder="E-mail">
                </div>
            </div>
        <div class="row w-100 mx-0">
            <div id="alert" class="w-100 mx-3 my-2 mb-0"></div>
            <button id="inputSignup" class="btn btn-primary btn-block">Criar conta</button>
        </div>
    </div>
</div>
@endsection
