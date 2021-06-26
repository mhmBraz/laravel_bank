<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Users;
use App\Providers\LoginService;
use Exception;

class PagesController extends Controller {
  public function indexView() {
    return view('welcome');
  }

  public function indexCheckLogin(Request $req) {

    return response()->json(LoginService::ServiceLogin($req->all()));

  }

  public function indexRemember(Request $req) {

    return response()->json(LoginService::ServiceRemember($req->all()));

  }

  public function admin() {
    return view('admin');
  }
}
