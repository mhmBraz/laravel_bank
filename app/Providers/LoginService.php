<?php

namespace App\Providers;

use App\Models\Users;
use phpDocumentor\Reflection\Utils;

class LoginService {
    static function ServiceLogin($pArr) {
        try {
            $arr = [];
            $User = Users::where('login', $pArr["login"])
                ->first();

            if ($User != null) {
                if ($User->password == $pArr["password"]) {
                    $arr = [
                        'status' => true,
                        'message' => 'Usuario encontrado',
                        'name' => $User->name
                    ];
                } else {
                    $arr = [
                        'status' => false,
                        'message' => 'senha incorreta'
                    ];
                }
            } else {
                $arr = [
                    'status' => false,
                    'message' => 'Usuario não encontrado'
                ];
            }
        } catch (Exception $e) {
            $arr = [
                'status' => false,
                'message' => 'Ocorreu um erro ao buscar usuario'
            ];
        }
        return $arr;
    }

    static function ServiceRemember($pArr) {

        try {
            $arr = [];
            $User = Users::where(['email' => $pArr["rememberEmail"]])
                ->first();

            if ($User != null) {
                if ($User->blockedAccount != 3) {
                    if ($User->login == $pArr["rememberLogin"]) {
                        if ($User->secretQuestion == $pArr["rememberQuestion"]) {
                            $User->password = $pArr["rememberPassword"];
                            $User->save();
                            $arr = [
                                'status' => true,
                                'message' => 'senha alterada com sucesso'
                            ];
                        } else {
                            $User->blockedAccount += 1;
                            $User->save();
                            $arr = [
                                'status' => false,
                                'message' => 'não foi possivel mudar a senha, campos incorretos'
                            ];
                        }
                    } else {
                        $arr = [
                            'status' => false,
                            'message' => 'não foi possivel mudar a senha, campos incorretos'
                        ];
                    }
                } else {
                    $arr = [
                        'status' => false,
                        'message' => 'Usuario bloqueado'
                    ];
                }
            }

        } catch (Exception $e) {
            $arr = [
                'status' => false,
                'message' => 'Ocorreu algum erro'
            ];
        }
        return $arr;
    }
}
