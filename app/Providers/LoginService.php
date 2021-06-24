<?php

namespace App\Providers;

use App\Models\Users;
class LoginService
{
    public function ServiceLogin($pArr)
    {
        $arr = [];
        $User = Users::where('login', $pArr["login"])
            ->first();
        try {
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
}
