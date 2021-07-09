<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Exception;

class CreateAccountService {

    static function ServiceCheckLogin($pArr) {
        $arr = [];
        try {
            $user = User::where(['login' => $pArr["login"]])
                ->first();

            if ($user != null) {
                $arr = [
                    'status' => true,
                    'message' => 'Login em uso'
                ];
            } else {
                $arr = [
                    'status' => false,
                    'message' => 'Login disponivel'
                ];
            }
        } catch (Exception $e) {
            $arr = [
                'status' => false,
                'message' => 'Ocorreu algum erro ao checar usuario'
            ];
        }
        return $arr;
    }

    static function ServiceCheckEmail($pArr) {
        $arr = [];
        try {
            $user = User::where(['email' => $pArr["email"]])
                ->first();

            if ($user != null) {
                $arr = [
                    'status' => true,
                    'message' => 'Email em uso'
                ];
            } else {
                $arr = [
                    'status' => false,
                    'message' => 'Email disponivel'
                ];
            }
        } catch (Exception $e) {
            $arr = [
                'status' => false,
                'message' => 'Ocorreu algum erro no checar email'
            ];
        }
        return $arr;
    }

    static function ServiceCreate($pArr) {
        $arr = [];
        try {
            $User = new User();
            $User->name = $pArr["name"];
            $User->password = Hash::make($pArr["password"]);
            $User->login = $pArr["login"];
            $User->email = $pArr["email"];
            $User->secretQuestion = $pArr["keyword"];
            $User->postalCode = $pArr["cep"];
            $User->admin = 0;
            $User->blockedAccount = 0;
            $User->save();
            $arr = [
                'status' => true,
                'message' => 'Usuario cadastrado com sucesso'
            ];
        } catch (Exception $e) {
            $arr = [
                'status' => false,
                'message' => 'Ocorreu algum erro na criação do usuario'
            ];
        }

        return $arr;
    }
}

