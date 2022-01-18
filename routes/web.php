<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\IndexController;
use App\Http\Controllers\CreateAccountController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BankController;

Route::prefix('/')->group(function () {
    Route::get('/', [IndexController::class, 'indexView']);
    Route::get('/createAccount', [CreateAccountController::class, 'createAccountView']);
    Route::get('/profile/{login}', [IndexController::class, 'profile']);
    Route::get('/logout', [IndexController::class, 'logout']);

    Route::post('/indexGetLogin', [IndexController::class, 'indexCheckLogin']);
    Route::post('/indexGetLogin', [IndexController::class, 'indexCheckLogin']);
    Route::post('/postLogin', [IndexController::class, 'indexCheckLogin']);
    Route::post('/postRemember', [IndexController::class, 'indexRemember']);
});

Route::prefix('createAccount')->group(function () {

    Route::get('/createGetLogin', [CreateAccountController::class, 'createCheckLogin']);
    Route::get('/createGetEmail', [CreateAccountController::class, 'createGetEmail']);
    Route::post('/create', [CreateAccountController::class, 'create']);
});

Route::prefix('admin')->group(function () {
    Route::get('/', [IndexController::class, 'admin']);
});

Route::prefix('/profile/{login}')->group(function () {
    Route::get('/accounts', [ProfileController::class, 'accounts']);
});

Route::prefix('/banks')->group(function () {
    Route::get('/', [BankController::class, 'banks']);
    Route::post('/createAccounts', [BankController::class, 'createAccounts']);
});
