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

        if ($request->has("search")) {
            $query->where("titre", "like", "%" . $request->input("search") . "%");
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
        // Return the response as JSON
        return response()->json([
            'events' => $events,
            'searchParams' => $request->query() ?: null,
        ]);
    }
}
