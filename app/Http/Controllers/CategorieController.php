<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index(Request $request)
    {
        if (strpos($request->url(), 'categorie') !== false) {
            dd('yes');
        }
    }
    
}
