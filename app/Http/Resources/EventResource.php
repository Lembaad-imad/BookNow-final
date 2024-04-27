<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class EventResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'titre' => $this->titre,
            'localisation' => $this->localisation,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'description' => $this->description,
            'cover_path' => $this->cover_path && !(str_starts_with($this->cover_path, 'http')) ?
            Storage::url($this->cover_path) : $this->cover_path,
            'logo_path' => $this->logo_path && !(str_starts_with($this->logo_path, 'http')) ?
            Storage::url($this->logo_path) : $this->logo_path,
            'return' => $this->return,
            'capacity' => $this->capacity,
            'prix' => $this->prix,
            'categories' => $this->categories,
            'created_at' =>  (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => $this->updated_at,
            'createdby' => new UserResource($this->createdby),
            'updatedby' => new UserResource($this->updatedby)
        ];
    }
}
