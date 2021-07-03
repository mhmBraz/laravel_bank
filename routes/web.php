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

Route::prefix('/')->group(function () {
    Route::get('/', [IndexController::class, 'indexView']);
    Route::get('/createAccount', [IndexController::class, 'createAccountView']);
    Route::post('/postLogin', [IndexController::class, 'indexCheckLogin']);
  Route::post('/postRemember', [IndexController::class, 'indexRemember']);
});


Route::prefix('admin')->group(function () {
    Route::get('/', [IndexController::class, 'admin']);
});

