<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Evenement;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\EventResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdateEvenementRequest;
use Illuminate\Routing\Route;

class MyeventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $urlpath =  $request->path();
        $query = Evenement::query();
        $sortField = $request->input('sort_field', 'created_at');
        $sortDirection = $request->input('sort_direction', 'desc');

        $events = Evenement::with('createdBy')
            ->whereHas('createdBy', function ($query) use ($request) {
                $query->where('name', Auth::user()->name);
            });

        if ($request->filled('titre')) {
            $events->where('titre', 'like', '%' . $request->input('titre') . '%');
        }

        if ($request->filled('status')) {
            $events->where('status', $request->input('status'));
        }

        $events = $events->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1)
            ->appends($request->only(['sort_field', 'sort_direction', 'titre', 'status']));
        $paginationevent = $query->paginate(9);
        return inertia('Event/Myevent', [
            'urlpath' => $urlpath,
            'events' => EventResource::collection($events),
            'paginationevent' => $paginationevent,
            "queryParams" => request()->query() ?: null,
            'success' => session('success')
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function getPrvUrl($url){
        return $url;
    }
    public function edit($id)
    {
        session()->put('previous_url', url()->previous());
        $event = Evenement::findOrFail($id);
        return inertia('Event/Edit', [
            'event' => new EventResource($event),
            'allCategories' => Categorie::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEvenementRequest $request, $id)
    {
      
        $previousUrl = session()->pull('previous_url');
       
        $evenement = Evenement::findOrFail($id);

        $data = $request->validated();
        $logo = $request->file('logo_path');
        $cover = $request->file('cover_path');
        $data['updated_by'] = Auth::id();

        if ($logo) {
            if ($evenement->logo_path) {
                Storage::disk('public')->deleteDirectory(dirname($evenement->logo_path));
            }
            $data['logo_path'] = $logo->store('event/' . Str::random(), 'public');
        } else {
            $data['logo_path'] = $evenement->logo_path;
        }

        if ($cover) {
            if ($evenement->cover_path) {
                Storage::disk('public')->delete($evenement->cover_path);
            }
            $data['cover_path'] = $cover->store('event/' . Str::random(), 'public');
        } else {
            $data['cover_path'] = $evenement->cover_path;
        }

        $evenement->update($data);
        return redirect($previousUrl)->with('success', "Event \"$evenement->titre\" was updated");

    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {

        $evenement = Evenement::findOrFail($id);

        $name = $evenement->titre;
        // dd($name);
        $evenement->delete();

        if ($evenement->cover_path && Storage::disk('public')->exists($evenement->cover_path)) {
            Storage::disk('public')->delete($evenement->cover_path);
        }

        if ($evenement->logo_path && Storage::disk('public')->exists($evenement->logo_path)) {
            Storage::disk('public')->delete($evenement->logo_path);
        }

        return redirect()->back()->with('success', "Event \"$name\" was deleted");
    }
}
