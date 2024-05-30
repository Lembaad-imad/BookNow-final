<?php

use App\Http\Controllers\EvenementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EvenementApiController;

// Route::get('/event', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');





Route::resource('events', EvenementApiController::class);