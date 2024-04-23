<?php

namespace Database\Seeders;

use App\Models\Categorie;
use App\Models\Evenement;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Categorie::factory()->count(10)->create();
        User::create([
            'name' => 'Zura',
            'email' => 'imad5@gmail.com',
            'password' => bcrypt('imad123456'),
            'email_verified_at' => time() 
        ]);
        Evenement::factory()->count(20)->create()->each(function ($event) {
            $event->categories()->attach(Categorie::all()->random(rand(1, 5))->pluck('id')->toArray());
        });
    }
}
