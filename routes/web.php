<?php

use App\Http\Controllers\Bank\BankController;
use App\Http\Controllers\Home\CreateAccountController;
use App\Http\Controllers\Home\IndexController;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {

    Route::get('/', [IndexController::class, 'indexView'])
        ->name('home.view');
    Route::prefix('/cadastrar')->group(function () {
        Route::get('/', [CreateAccountController::class, 'createAccountView'])
            ->name('home.createAccountView');
        Route::get('/checkEmail', [CreateAccountController::class, 'checkEmail'])
            ->name('home.checkEmail');
        Route::get('/checkLogin', [CreateAccountController::class, 'checkLogin'])
            ->name('home.checkLogin');
    });

    //criar controle de user
    Route::get('/perfil/{login}', [IndexController::class, 'profile'])
        ->name('home.profile');
    Route::get('/logout', [IndexController::class, 'logout'])
        ->name('logout');
    Route::get('/checkLogin', [IndexController::class, 'checkLogin'])
        ->name('home.checkLogin');
    Route::get('/checkEmail', [IndexController::class, 'checkEmail'])
        ->name('home.checkEmail');
    Route::post('/createAccount', [IndexController::class, 'createAccount'])
        ->name('home.createAccount');
    Route::post('/rememberPass', [IndexController::class, 'rememberPass'])
        ->name('home.rememberPass');
});

Route::prefix('/banks')->group(function () {
    Route::get('/get', [BankController::class, 'get'])
        ->name('banks.get');
    Route::post('/createAccount', [BankController::class, 'createAccount'])
        ->name('banks.createAccount');
});
