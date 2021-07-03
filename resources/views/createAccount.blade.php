@extends('layouts.main')

@section('title', 'Cadastro')

@section('scripts')
    <script type="text/javascript" src="/js/createAccount.js"></script>
@endsection

@section('content')
    <div class="container col-lg-8 col-xl-8 col-md-6">
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

                    <input type="text" class="form-control mb-1" id="inputLogin" placeholder="Login">
                    <input type="text" class="form-control mb-1" id="inputPassword" placeholder="Password">
                </div>
                <div class="my-3 mt-0">
                    <h1 class="h6  text-center"> Perfil </h1>
                    <hr class="mt-0">

                    <input type="text" class="form-control mb-1" id="inputName" placeholder="Name">
                    <input type="text" class="form-control mb-1" id="inputEmail" placeholder="E-mail">
                    <input type="text" class="form-control mb-1" id="inputKeyword" placeholder="Keyword">
                </div>
            </div>

            <div class="col-lg-6 mt-5">
                <div class="mt-5">
                    <h1 class="h6  text-center"> Endereço </h1>
                    <hr class="mb-4">
                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <input id="inputCep" type="text" class="form-control w-75" placeholder="CEP">
                        <div>
                            <button id="btnCep" class="btn btn-secondary">Buscar</button>
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
                    <div class="row mt-2">
                        <div class="col-lg-6 pr-lg-1">
                            <input id="inputBairro" type="text" class="form-control my-1" placeholder="Bairro" disabled>
                        </div>
                        <div class="col-lg-6 pl-lg-1">
                            <input id="inputComplemento" type="text" class="form-control my-1"
                                   placeholder="Complemento">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 pr-lg-1">
                            <input id="inputLogradouro" type="text" class="form-control my-1" placeholder="Logradouro"
                                   disabled>
                        </div>
                        <div class="col-lg-4 pl-lg-1">
                            <input id="inputNum" type="text" class="form-control my-1" placeholder="Número">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row w-100 mx-0">
                <div id="alert" class="w-100 mx-3 my-2"></div>
                <button id="btnSignup" class="btn btn-primary btn-block">Criar conta</button>
            </div>
        </div>
    </div>
@endsection
