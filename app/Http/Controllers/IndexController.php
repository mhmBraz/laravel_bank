<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Users;
use App\Providers\IndexService;
use Exception;

class IndexController extends Controller {
    public function indexView() {
        return view('welcome');
    }

    public function createAccountView() {

        return view('createAccount');

    }

    public function indexCheckLogin(Request $req) {

        return response()->json(IndexService::ServiceLogin($req->all()));

    }


    public function indexRemember(Request $req) {

        return response()->json(IndexService::ServiceRemember($req->all()));

    }

    public function admin() {
        return view('admin');
    }
}
