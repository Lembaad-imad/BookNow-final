<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Evenement;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Views;

class DashBoardController extends Controller
{
    public function statisticsEevents()
    {
        $eventsCount = Evenement::count();
        $usersCount = User::count();
        $ticketsCount = Ticket::count();
        $RevenueTotal = Ticket::sum('totalprice');

        return compact('eventsCount', 'usersCount', 'ticketsCount','RevenueTotal');
    }
    public function index(Request $request)
    {
        $counts = $this->statisticsEevents();
        // $event = Evenement::all();
        // $eventViewsCount = Views::count($event);
        // dd($eventViewsCount);
        return Inertia::render('Data',[
            'counts' => $counts,
        ]);
    }
    // public function eventlist(Request $request)
    //    {
    //    $urlpath =  $request->path();
    //     $query = Evenement::query();
    //     $sortField = $request->input('sort_field', 'created_at');
    //     $sortDirection = $request->input('sort_direction', 'desc');

    //     $events = Evenement::with('createdBy')
    //         ->whereHas('createdBy', function ($query) use ($request) {
    //             $query->where('name', Auth::user()->name);
    //         });

    //     if ($request->filled('titre')) {
    //         $events->where('titre', 'like', '%' . $request->input('titre') . '%');
    //     }

    //     if ($request->filled('status')) {
    //         $events->where('status', $request->input('status'));
    //     }

    //     $events = $events->orderBy($sortField, $sortDirection)
    //         ->paginate(10)
    //         ->onEachSide(1)
    //         ->appends($request->only(['sort_field', 'sort_direction', 'titre', 'status']));
    //     $paginationevent = $query->paginate(9);
    //     return inertia('ListEvent', [
    //         'urlpath'=>$urlpath,
    //         'events' => EventResource::collection($events),
    //         'paginationevent'=>$paginationevent,
    //         "queryParams" => request()->query() ?: null,
    //         'success'=>session('success')
    //     ]);
    // }
}
