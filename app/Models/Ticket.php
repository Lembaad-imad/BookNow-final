<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'quantity',
        'price',
        'event_id',
        'user_id',
        'code_promo_id',
        'totalprice',
    ];
}
