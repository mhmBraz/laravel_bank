<?php

namespace App\Providers;

use App\Models\Account;
use App\Models\Bank;
use Exception;
use Illuminate\Support\Facades\Auth;
use PHPUnit\TextUI\XmlConfiguration\ExtensionCollectionIterator;

class BanksService {

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

    static function ServiceCreateAccount($pArr){
        try {
            $account = new Account();
            $account->bank_id = intval($pArr['bank']);
            $account->users_id = intval(Auth()->user()->id);
            $account->price = intval($pArr['price']);
            $account->save();

            $arr = [
                'status' => true,
                'message' => 'Conta criado com sucesso'
            ];
        }catch (Exception $e){
            $arr = [
                'status' => false,
                'message' => $e
            ];
        }
        return $arr;
    }
}
