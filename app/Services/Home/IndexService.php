<?php

namespace App\Services\Home;

use Illuminate\Support\Facades\Response;
use App\Models\User;
use App\Repositories\User\UserRepo;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\Hash;

class IndexService
{
	public function ServiceLogin($pArr)
	{
        $user = new UserRepo();
        $user = $user->getUser($pArr);

        if ($user) {
            if ($user->blockedAccount == 3) {
                return Response::json([
                    'success' => false,
                    'message' => 'Usuario Bloqueado, favor entrar em contato com o administrador do sistema'
                ]);
            } else {
                Auth::login($user);
                return Response::json([
                    'success' => true,
                    'message' => 'Login com sucesso',
                    'id'      => $user->id,
                    'name'    => $user->name
                ]);
            }
        } else {
            return Response::json([
                'success' => false,
                'message' => 'E-mail ou senha incorretos'
            ]);
        }
	}

	public function ServiceRemember($pArr)
	{

		try {
			$arr = [];
			$User = User::where(['email' => $pArr["rememberEmail"]])
				->first();

			if ($User != null) {
				if ($User->blockedAccount != 3) {
					if ($User->login == $pArr["rememberLogin"]) {
						if ($User->secretQuestion == $pArr["rememberQuestion"]) {
							$User->password = Hash::make($pArr["rememberPassword"]);
							$User->save();
							$arr = [
								'status' => true,
								'message' => 'Senha alterada com sucesso'
							];
						} else {
							$User->blockedAccount += 1;
							$User->save();
							$arr = [
								'status' => false,
								'message' => 'Não foi possivel mudar a senha, campos incorretos'
							];
						}
					} else {
						$arr = [
							'status' => false,
							'message' => 'Não foi possivel mudar a senha, campos incorretos'
						];
					}
				} else {
					$arr = [
						'status' => false,
						'message' => 'Usuario bloqueado, entre contato com o administrador'
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
