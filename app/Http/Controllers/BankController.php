<?php

namespace App\Http\Controllers;

use App\Providers\BanksService;
use Illuminate\Http\Request;

class BankController extends Controller {
    public function banks()
    {
        return response()->json(BanksService::ServiceGetBanks());
    }

    public function createAccounts(Request $req){
        return response()->json(BanksService::ServiceCreateAccount($req->all()));
    }
}
