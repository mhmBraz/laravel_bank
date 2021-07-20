<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\ProfileService;
class ProfileController extends Controller
{
    public function accounts($login)
    {
        return response()->json(ProfileService::GetAccounts($login));
    }
}
