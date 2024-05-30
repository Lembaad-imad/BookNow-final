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

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where('titre', 'like', '%' . $searchTerm . '%');
        }

        if ($request->has('sort')) {
            $sortOption = $request->input('sort');
            if ($sortOption === 'Low to High') {
                $query->orderBy('prix', 'asc');
            } elseif ($sortOption === 'High to Low') {
                $query->orderBy('prix', 'desc');
            }
        }
        if ($request->has("price")) {
            if ($request->input("price") === "Paid") {
                $query->where("prix", ">", 0);
            } elseif ($request->input("price") === "Free") {
                $query->where("prix", "=", 0);
            }
        }

        if ($request->has("categories")) {
            $categories = $request->input("categories");
            $query->whereHas('categories', function ($query) use ($categories) {
                $query->whereIn('label', $categories);
            });
        }

        $query->with('categories');

        $events = $query->paginate(9);
        $pagination = $query->paginate(9);
        // Return the response as JSON
        return response()->json([
            'events' => $events,
            'pagination' => $pagination,
            'searchParams' => $request->query() ?: null,
        ]);
    }
}