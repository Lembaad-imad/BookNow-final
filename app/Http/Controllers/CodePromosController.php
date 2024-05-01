<?php

namespace App\Http\Controllers;

use App\Http\Requests\CodePromosRequest;
use App\Models\CodePromos;
use App\Models\Evenement;
use Illuminate\Http\Request;

class CodePromosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(CodePromosRequest $request)
    {
        $data = $request->validated();
        CodePromos::create([
                'name' => $data['name'],
                'start_date' => $data['start_date'],
                'end_date' => $data['end_date'],
                'percentage' => $data['percentage'],
                'event_id' => $data['event_id'],
            ]);
    
            return redirect()->route('event.edit', ['event' => $data['event_id']])->with('success', 'Code promos was created');

    }

    /**
     * Display the specified resource.
     */
    public function show(CodePromos $codePromos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CodePromos $codePromos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CodePromosRequest $request, $id)
    {
        $codepromo = CodePromos::findOrFail($id);
        $data = $request->validated();
        $codepromo->update($data);
        return redirect()->route('event.edit', ['event' => $codepromo['event_id']])->with('success', 'Code promos was updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $codepromo = CodePromos::findOrFail($id);
        $codepromo->delete();
        return redirect()->route('event.edit', ['event' => $codepromo['event_id']])->with('success', 'Code promos was deleted');
    }
}
