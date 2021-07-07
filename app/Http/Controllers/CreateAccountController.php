<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\CreateAccountService;

class CreateAccountController extends Controller {

    public function createAccountView() {
        return view('createAccount');
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
