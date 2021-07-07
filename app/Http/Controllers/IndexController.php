<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\IndexService;

class IndexController extends Controller {
    public function indexView() {
        return view('welcome');
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
