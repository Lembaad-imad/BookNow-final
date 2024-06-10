<?php

use App\Http\Controllers\EvenementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EvenementApiController;
use App\Http\Controllers\BreadcrumbController;

// Route::get('/event', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');





Route::resource('events', EvenementApiController::class);
Route::post('/api/breadcrumbs', [BreadcrumbController::class, 'getBreadcrumbs']);
