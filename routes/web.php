<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\IndexController;
use App\Http\Controllers\CreateAccountController;

Route::prefix('/')->group(function () {
    Route::get('/', [IndexController::class, 'indexView']);
    Route::get('/createAccount', [CreateAccountController::class, 'createAccountView']);

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

