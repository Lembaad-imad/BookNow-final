<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Categorie;
use App\Models\Evenement;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use App\Http\Resources\EventResource;
use App\Http\Requests\StoreEvenementRequest;
use App\Http\Requests\UpdateEvenementRequest;

class EvenementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
    //  dd($request->all());
        return Inertia::render('Event/Index', [
            // 'auth' => Auth::user(),
            'allCategories' => Categorie::all()
        ]);
    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        $categories = Categorie::pluck('value','id');
        return inertia("Event/Create",[
            // 'auth' => Auth::user(),
            'allCategories' => Categorie::all()

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEvenementRequest $request)
    {
        $data= $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
      $image = $data['cover_path'] ?? null;
      $logo = $data['logo_path'] ?? null;
      $data['created_by'] = Auth::id();
      $data['updated_by'] = Auth::id();
      if ($image) {
          $data['cover_path'] = $image->store('event/' . Str::random(), 'public');
      }
      if ($logo) {
        $data['logo_path'] = $logo->store('event/' . Str::random(), 'public');
    }
    $event = Evenement::create($data);

    $event->categories()->sync($request->validate([
        'categories' => 'required',
    ]));
      return to_route('event.index')
          ->with('success', 'Event was created');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // dd($evenement);
        // $event=$request;
        // dd($event);
        $event = Evenement::find($id);
        return inertia('Event/Show', [
            'evenement' => new EventResource($event),
            
        ]);
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
