<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\IndexService;

class IndexController extends Controller
{
    public function indexView()
    {
        return view('welcome');
    }
    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

    public function profile($login)
    {
        if (Auth()->user() == true) {
            if (Auth()->user()->login == $login || Auth()->user()->admin == 1) {
                return view('profile', ['login' => $login]);
            } else {
                return redirect('/');
            }
        } else {
            return redirect('/');
        }
    }

    public function indexCheckLogin(Request $req)
    {

        return response()->json(IndexService::ServiceLogin($req->all()));
    }


    public function indexRemember(Request $req)
    {

        return response()->json(IndexService::ServiceRemember($req->all()));
    }

    public function admin()
    {
        return view('admin');
    }
}
