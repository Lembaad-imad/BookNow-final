<?php

namespace App\Http\Controllers;

use App\Models\Evenement;
use Illuminate\Http\Request;

class AdminDescision extends Controller
{
    public function index(Request $request){
        $data = $request->data;
        $idevent = $data['event_id'];
        $event = Evenement::findOrFail($idevent);
    //  dd('$data['value']')
        if ($data['value'] === 'approved') {
          $event->status = 'approved';
          $event->decision = $data['decision'];
          $event->save();
        } else {
            $event->status = 'unapproved';
            $event->decision = $data['decision'];
          $event->save();
         
        }
     }
}