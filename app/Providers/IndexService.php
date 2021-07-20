<?php

namespace App\Providers;

use App\Models\User;
use App\Models\Bank;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\Hash;

class IndexService
{
	static function ServiceLogin($pArr)
	{
		$arr = [];
		try {
			if (Auth::attempt($pArr)) {
				$arr = [
					'status' => true,
					'message' => 'Usuario encontrado',
					'login' => Auth()->user()->login,
					'name' => Auth()->user()->name
				];
			} else {
				$arr = [
					'status' => false,
					'message' => 'E-mail ou senha incorretos'
				];
			}
		} catch (Exception $e) {
			$arr = [
				'status' => false,
				'message' => 'Erro ao encontra usuario',
				'error' => $e->getMessage()
			];
		}
		return $arr;
	}

	static function ServiceRemember($pArr)
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

	static function ServiceGetBanks()
	{
		$arr = [];
		try {
			$banks = Bank::all();
			$arr = [
				'status' => true,
				'banks' => $banks
			];
		} catch (Exception $e) {
			$arr = [
				'status' => false,
				'message' => 'Ocorreu algum erro'
			];
		}

		return $arr;
	}
}
