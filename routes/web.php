<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AcceuilController;
use App\Http\Controllers\AdminDescision;
use App\Http\Controllers\AnotherController;
use App\Http\Controllers\BreadcrumbController;
use App\Http\Controllers\CodePromosController;
use App\Http\Controllers\DashBoardController;
use App\Http\Controllers\DashBoardControllerEventlist;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EvenementController;
use App\Http\Controllers\MyeventController;
use App\Http\Controllers\TicketController;


Route::get('/', [AcceuilController::class, 'index'])->name('aucceuil');

Route::resource('event', EvenementController::class);

// Route::get('/dashboard', [DashBoardControllerEventlist::class, 'index'])->name('listevent.index');

Route::resource('/listevent', DashBoardControllerEventlist::class );
Route::get('/listuser', [DashBoardControllerEventlist::class ,'listusers'])->name('listusers');
Route::resource('/dashboard', DashBoardController::class);
Route::put('/dashboard', [AdminDescision::class ,'index'])->name('admin.descision');
// Route::get('/dashboard/eventlist',DashBoardController::class,'eventlist')->name('dashboard.eventlist');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');
// Route::post('/api/breadcrumbs', [BreadcrumbController::class, 'getBreadcrumbs']);
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('eventlist', MyeventController::class);
Route::resource('codepromos', CodePromosController::class);
Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('Pricing');
Route::get('checkout', function () {
    return Inertia::render('Event/Checkout');
})->name('Checkout');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('Contact');

Route::resource('paymentevent', TicketController::class);

Route::get('/Thankyou', function () {
    return Inertia::render('Event/ThankYouPage', [
        'auth' => Auth::user(),
    ]);
})->name('thankyou');

require __DIR__.'/auth.php';
