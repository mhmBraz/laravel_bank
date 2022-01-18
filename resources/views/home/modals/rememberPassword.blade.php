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
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button id="savePassword" type="button" class="btn btn-primary"><span id="nameRemember"> Salvar senha</span>
                </button>
            </div>
        </div>
    </div>
</div>
