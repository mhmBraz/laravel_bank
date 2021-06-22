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

use App\Http\Controllers\PagesController;

Route::get('/',[PagesController::class,'indexView']);
Route::get('/get',[PagesController::class,'indexLogin']);


Route::prefix('admin')->group(function () {
    Route::get('/',[PagesController::class,'admin']);
});

