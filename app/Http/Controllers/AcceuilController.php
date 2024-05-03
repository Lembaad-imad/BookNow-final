<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AcceuilController extends Controller
{
   public function index()
   {
    $auth = Auth::user();
    return Inertia::render('Welcome', [
       
    ]);
}
}
