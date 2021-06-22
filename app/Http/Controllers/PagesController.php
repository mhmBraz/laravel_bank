<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Users;

class PagesController extends Controller
{
    public function indexView()
    {
        return view('welcome');
    }

    public function indexLogin(Request $req)
    {
        $login = $req->all();
        $User = Users::where('login', $login["login"])
        ->first();

        $User->name = "rodrigo";
        $User->created_at = date('Y-m-d H:i:s');
        $User->save();
        return response()->json($User);
    }

    public function admin()
    {
        return view('admin');
    }
}
