<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Providers\ProfileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function response;

class ProfileController extends Controller
{
    public function index($id)
    {
        if (Auth::check()) {
            if (Auth()->user()->login == $id || Auth()->user()->admin == 1) {
                return view('profile.profile')
                    ->with('login',$id);
            } else {
                return redirect('/');
            }
        } else {
            return redirect('/');
        }
    }

    public function accounts($login)
    {
        return response()->json(ProfileService::GetAccounts($login));
    }
}
