<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
Route::resource('sales', 'SaleController');
Route::resource('products', 'ProductController');