<?php

use App\Http\Controllers\Bank\BankController;
use App\Http\Controllers\Home\CreateAccountController;
use App\Http\Controllers\Home\IndexController;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function () {

    Route::get('/', [IndexController::class, 'indexView'])
        ->name('index.view');
    Route::prefix('/cadastrar')->group(function () {
        Route::get('/', [CreateAccountController::class, 'createAccountView'])
            ->name('index.createAccountView');
        Route::get('/getLogin', [CreateAccountController::class, 'createAccountView'])
            ->name('index.createAccountView');
        Route::get('/', [CreateAccountController::class, 'createAccountView'])
            ->name('index.createAccountView');
    });

    //criar controle de user
    Route::get('/perfil/{login}', [IndexController::class, 'profile'])
        ->name('index.profile');
    Route::get('/logout', [IndexController::class, 'logout'])
        ->name('logout');
    Route::get('/checkLogin', [IndexController::class, 'checkLogin'])
        ->name('index.checkLogin');
    Route::get('/checkEmail', [IndexController::class, 'checkEmail'])
        ->name('index.checkEmail');
    Route::post('/createAccount', [IndexController::class, 'createAccount'])
        ->name('index.createAccount');
    Route::post('/rememberPass', [IndexController::class, 'rememberPass'])
        ->name('index.rememberPass');
});

Route::prefix('/banks')->group(function () {
    Route::get('/get', [BankController::class, 'get'])
        ->name('banks.get');
    Route::post('/createAccount', [BankController::class, 'createAccount'])
        ->name('banks.createAccount');
});
