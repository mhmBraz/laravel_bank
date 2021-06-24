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
        $information = $req->all();
        $service = new LoginService();
        $information = $service->ServiceLogin($information);
        return response()->json($information);

    }

    public function admin() {
        return view('admin');
    }
}
