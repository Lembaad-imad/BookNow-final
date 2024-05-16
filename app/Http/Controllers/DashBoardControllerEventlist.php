<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Evenement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashBoardControllerEventlist extends Controller
{
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
     return inertia('ListEvent', [
         'urlpath'=>$urlpath,
         'events' => EventResource::collection($events),
         'paginationevent'=>$paginationevent,
         "queryParams" => request()->query() ?: null,
         'success'=>session('success')
     ]);
 }
}
