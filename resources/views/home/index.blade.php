@extends('layouts.main')

@section('title', 'Tela inicial')

@section('content')
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="card border rounded col-lg-4 col-xl-3 col-md-5 py-5 px-3 shadow-lg">
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

    @include('home.modals.rememberPassword')
@endsection

@section('scripts')
    <script src="{{ mix('/js/home/index.js') }}" type="text/javascript"></script>
@endsection
