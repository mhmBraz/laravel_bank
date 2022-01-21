<?php

namespace App\Http\Controllers\Bank;

use App\Http\Controllers\Controller;
use App\Providers\BanksService;
use Illuminate\Http\Request;
use function response;

class BankController extends Controller {
    public function banks()
    {
        return response()->json(BanksService::ServiceGetBanks());
    }

    public function createAccounts(Request $req){
        return response()->json(BanksService::ServiceCreateAccount($req->all()));
    }
}
