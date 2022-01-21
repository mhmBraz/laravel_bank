<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Providers\ProfileService;
use function response;

class ProfileController extends Controller
{
    public function accounts($login)
    {
        return response()->json(ProfileService::GetAccounts($login));
    }
}
