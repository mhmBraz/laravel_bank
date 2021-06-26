@extends('layouts.main')

@section('title', 'Tela inicial')

@section('scripts')
  <script type="text/javascript" src="/js/index.js"></script>
@endsection

@section('content')

  <div class="container col-lg-4 col-xl-3 col-md-5">
    <div class="row  border border-primary rounded py-5 px-3">
      <h1 class="text-center mb-0"> Login </h1>
      <hr class="mt-2">
      <div class="form-group mb-3">
        <label for="login" class="form-label small mb-0"> Usuario </label>
        <input type="text" class="form-control" id="login">
      </div>

      <div class="form-group mb-3">
        <label for="password" class="form-label small mb-0"> Senha </label>
        <input type="password" class="form-control" id="password">
        <small>
          <a class="link-dark text-decoration-none" data-bs-toggle="modal" href="#rememberPassword"
             role="button">Esqueci minha senha</a>
        </small>

        <hr class="mt-2 mb-0">
      </div>

      <div class="d-flex align-items-center justify-content-center mt-0">
        <button id="enter" class="btn btn-primary rounded-0"> Entrar</button>
      </div>
    </div>
  </div>


  <!-- ModalADD -->
  <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="row g-3 needs-validation">

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
              <input type="text" class="form-control" id="ruaADD">
            </div>

            <div class="col-lg-5 col-md-5">
              <label class="form-label">Cidade</label>
              <input type="text" class="form-control" id="cidadeADD">
            </div>

            <div class="col-lg-5 col-md-5">
              <label class="form-label">Bairro</label>
              <input type="text" class="form-control" id="bairroADD">
            </div>

            <div class="col-lg-5 col-md-5">
              <label class="form-label">UF</label>
              <input type="text" class="form-control" id="ufADD">
            </div>

            <div>
              <label class="form-label">Age</label>
              <input type="date" class="form-control" id="ageADD">
            </div>

            <div>
              <label class="form-label">Login</label>
              <input type="text" class="form-control" id="loginADD">
            </div>

            <div>
              <label class="form-label">Password</label>
              <input type="password" class="form-control" id="passwordADD">
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="buttonAdicionar" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                Adicionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- ModalRememberPassword  -->
  <div class="modal fade" id="rememberPassword" tabindex="-1" aria-labelledby="rememberPasswordLabel"
       aria-hidden="true">
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


