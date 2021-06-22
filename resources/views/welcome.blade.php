@extends('layouts.main')

@section('title', 'Tela inicial')

@section('content')

<div class="container">
    <div class="row  border border-primary rounded p-5">
        <p class="d-flex justify-content-center fs-1 mb-0"> Login </p>
        <hr class="mt-2">
        <div class="col-lg-6">

            <div class="form-group mb-3">
                <label class="form-label small mb-0"> Usuario </label>
                <input type="text" class="form-control" id="login">

            </div>

            <div class="form-group mb-3">
                <label class="form-label small mb-0"> Senha </label>
                <input type="password" class="form-control" id="password">
            </div>
        </div>

        <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div>
                <button id="enter" class="btn btn-primary"> Entrar </button>
            </div>
        </div>
    </div>
</div>


<!-- ModalADD -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="row g-3 needs-validation" novalidate>

                    <div>
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" id="nameADD">
                    </div>

                    <div class="col-lg-3 col-md-3">
                        <label class="form-label">Cep</label>
                        <input type="text" class="form-control" id="cepADD">
                        <button id="cep" type="button" class="btn btn-primary">Pesquisar</button>
                    </div>


                    <div class="col-lg-7 col-md-7">
                        <label class="form-label">Rua</label>
                        <input type="text" class="form-control" id="ruaADD" disabled>
                    </div>

                    <div class="col-lg-5 col-md-5">
                        <label class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidadeADD" disabled>
                    </div>

                    <div class="col-lg-5 col-md-5">
                        <label class="form-label">Bairro</label>
                        <input type="text" class="form-control" id="bairroADD" disabled>
                    </div>

                    <div class="col-lg-5 col-md-5">
                        <label class="form-label">UF</label>
                        <input type="text" class="form-control" id="ufADD" disabled>
                    </div>

                    <div>
                        <label class="form-label">Age</label>
                        <input type="date" class="form-control" id="ageADD" required>
                    </div>

                    <div>
                        <label class="form-label">Login</label>
                        <input type="text" class="form-control" id="loginADD" required>
                    </div>

                    <div>
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="passwordADD" required>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="buttonAdicionar" type="button" class="btn btn-primary" data-bs-dismiss="modal">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script type="text/javascript" src="/js/index.js"></script>
@endsection