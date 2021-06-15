<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Users;
use App\Models\Usuarios;

class PagesController extends Controller
{
    public function index()
    {

        $users = Usuarios::where('id', 1)
            ->get();
        $teste = json_decode($users);
        echo json_encode($teste[0]->nome);
        return view('welcome', ['users' => $users]);
    }

    public function admin()
    {
        return view('admin');
    }
}
