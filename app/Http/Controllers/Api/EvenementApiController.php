<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Evenement;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EvenementApiController extends Controller
{
    public function index(Request $request)
    {
        $query = Evenement::query();

        // Apply any filters or search criteria here if needed
        
        // Fetch events
        $events = $query->paginate(9);

        // Fetch all categories
        $categories = Categorie::all();

        // Return the response as JSON
        return response()->json([
            'events' => $events,
            'queryParams' => $request->query() ?: null,
            'user' => Auth::user(),
            'categories' => $categories
        ]);
    }
}