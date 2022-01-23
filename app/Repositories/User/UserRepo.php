<?php

namespace App\Repositories\User;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserRepo
{
    public function getUser($options)
    {
        return User::query()
            ->where('email',$options['email'])
            ->where('password', md5(md5($options['password'])) . 'laravel_bank')->first();
    }
}
