<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CreateAccountService;
use Illuminate\Http\Request;
use function response;
use function view;

class CreateAccountController extends Controller {

    public function createAccountView() {
        return view('account.createAccount');
    }

    public function createCheckLogin(Request $req) {
        return response()->json(CreateAccountService::ServiceCheckLogin($req->all()));
    }

    public function createGetEmail(Request $req) {
        return response()->json(CreateAccountService::ServiceCheckEmail($req->all()));
    }

    public function create(Request $req) {
        return response()->json(CreateAccountService::ServiceCreate($req->all()));
    }
}
