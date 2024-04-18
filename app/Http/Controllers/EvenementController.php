<?php

namespace App\Http\Controllers;

use App\Models\Evenement;
use App\Http\Requests\StoreEvenementRequest;
use App\Http\Requests\UpdateEvenementRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EvenementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Evenement::query();
        if (request("search")) {
            $query->where("titre", "like", "%" . request("search") . "%");
        }
        if (request()->has("price") && request("price") === "Paid") {
            $query->where("prix", ">", 0);
        } elseif(request()->has("price") && request("price") === "Free"){
            $query->where("prix", "=", 0);
        }
        $events = $query->paginate(9);
       
      
        $auth = Auth::user();
        return Inertia("Event/Index",[
            'events' =>$events,
            "queryParams"=> request()->query()?:null,
            'auth' => $auth,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEvenementRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Evenement $evenement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Evenement $evenement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEvenementRequest $request, Evenement $evenement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Evenement $evenement)
    {
        //
    }
}
