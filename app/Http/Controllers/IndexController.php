<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Providers\IndexService;

class IndexController extends Controller {
    public function indexView() {
        return view('welcome');
    }

    public function profile($login) {
        return view('profile', ['login' => $login]);
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
