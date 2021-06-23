<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Users;
use App\Providers\LoginService;
use Exception;

class PagesController extends Controller
{
    public function indexView()
    {
        return view('welcome');
    }

    public function indexCheckLogin(Request $req)
    {
        $arr = [];
        $information = $req->all();
        $User = Users::where('login', $information["login"])
            ->first();
        try {
            if ($User != null) {
                if ($User->password == $information["password"]) {
                    $arr = [
                        'status' => true,
                        'message' => 'Usuario encontrado'
                    ];
                } else {
                    $arr = [
                        'status' => true,
                        'message' => 'Usuario ou senha incorretos'
                    ];
                }
            } else {
                $arr = [
                    'status' => true,
                    'message' => 'Usuario não encontrado'
                ];
            }
        } catch (Exception $e) {
            $arr = [
                'status' => false,
                'message' => 'Ocorreu um erro ao buscar usuario'
            ];
        }

        return response()->json($arr);
    }

    public function admin()
    {
        return view('admin');
    }
}
