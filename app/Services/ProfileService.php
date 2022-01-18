<?php

namespace App\Providers;

use App\Models\Account;
use App\Models\Bank;
use Illuminate\Support\ServiceProvider;
use Exception;

class ProfileService extends ServiceProvider
{
    // criar um service de contas e banks separados
    static function GetAccounts($pArr)
    {
        $arr = [];
        $arrAccounts = [];
        try {

            if (Auth()->user() == true) {
                if (Auth()->user()->pArr == $pArr || Auth()->user()->admin == 1) {
                    $accounts = Account::where('users_id', Auth()->user()->id)
                        ->get()->toArray();
                    foreach ($accounts as &$value) {
                        $bank = Bank::where('id', intval($value["bank_id"]))
                            ->first();
                        $value["bank_name"] = $bank->name;
                    }
                    $arr = [
                        'status' => true,
                        'message' => 'Contas encontradas',
                        'accounts' => $accounts,
                    ];
                } else {
                    $arr = [
                        'status' => false,
                        'message' => 'Não tem permissão'
                    ];
                }
            } else {
                $arr = [
                    'status' => false,
                    'message' => 'Não está logado'
                ];
            }
        } catch (Exception $e) {
            $arr = [
                'status' => false,
                'message' => $e->getMessage()
            ];
        }

        return $arr;
    }
}
