@extends('layouts.main')

@section('title', 'Tela inicial')

@section('scripts')
<script type="text/javascript" src="{{asset('js/index.js')}}"></script>
@endsection

@section('content')

<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="card border rounded col-lg-4 col-xl-3 col-md-5 py-5 px-3 shadow-lg">
        <div>
            <h1 class="text-center mb-3 d-flex align-items-center justify-content-center"> <img src="../../laravel_bank/public/img/user.svg" class="w-25"/> Login </h1>
        </div>
      <div class="form-group mb-3">
        <label for="login" class="form-label small mb-0"> <i class="fas fa-at"></i> E-mail </label>
        <input type="text" class="form-control" id="login">
      </div>

      <div class="form-group mb-3">
        <label for="password" class="form-label small mb-0"> <i class="fas fa-key"></i> Senha </label>
        <input type="password" class="form-control" id="password">
        <small>
          <a class="link-dark text-decoration-none" data-bs-toggle="modal" href="#rememberPassword" role="button">Esqueci minha senha</a>
        </small>

      </div>

      <div class="d-flex align-items-center justify-content-center mt-3">
        <button id="enter" class="btn rounded w-100" style="background-color: #0099ff; color: white" > Entrar <i class="fas fa-sign-in-alt"></i> </button>
      </div>
    </div>
  </div>
</div>


<!-- ModalRememberPassword  -->
<div class="modal fade" id="rememberPassword" tabindex="-1" aria-labelledby="rememberPasswordLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header ">
        <h5 class="modal-title" id="rememberPasswordLabel">Recuperação de senha</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <div class="container">
          <div id="divRemember" class="row align-items-start">
            <div class="form-group col-12">
              <label for="login" class="form-label small mb-0"> E-mail<span class="text-danger"> *</span> </label>
              <input id="rememberEmail" type="email" class="form-control">
            </div>
            <div class="form-group col-6">
              <label for="login" class="form-label small mb-0"> login <span class="text-danger"> *</span> </label>
              <input id="rememberLogin" type="text" class="form-control">
            </div>
            <div class="form-group col-6">
              <label for="login" class="form-label small mb-0"> Palavra secreta </label>
              <input id="rememberSecretQuestion" type="text" class="form-control">
            </div>
            <div class="form-group col mt-2">
              <label for="login" class="form-label small mb-0"> Nova Senha </label>
              <input id="rememberNewPassword" type="password" class="form-control">
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
        <button id="savePassword" type="button" class="btn btn-primary rounded-0"><span id="nameRemember"> Salvar senha</span>
        </button>
      </div>
    </div>
  </div>
</div>
@endsection
