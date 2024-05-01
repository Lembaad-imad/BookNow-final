<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evenement extends Model
{
    use HasFactory;
    protected $fillable = [
        'titre',
        'localisation',
        'start_date',
        'end_date',
        'logo_path',
        'cover_path',
        'description',
        'return',
        'capacity',
        'prix',
        'created_by',
        'updated_by',
    ];
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
    public function categories()
    {
        return $this->belongsToMany(Categorie::class, 'categorie_event');
    }
    public function codepromos()
    {
        return $this->hasMany(CodePromos::class,'event_id');
    }
}
