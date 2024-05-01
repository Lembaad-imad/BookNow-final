<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AcceuilController;
use App\Http\Controllers\AnotherController;
use App\Http\Controllers\CodePromosController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EvenementController;
use App\Http\Controllers\MyeventController;

Route::get('/', [AcceuilController::class, 'index'])->name('aucceuil');

Route::resource('event', EvenementController::class);
Route::get('/dashboard', function () {
    return Inertia::render('Welcome');
})->name('dashboard');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('Pricing');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('Contact');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('eventlist', MyeventController::class);
Route::resource('codepromos', CodePromosController::class);

require __DIR__.'/auth.php';
