<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Evenement>
 */
class EvenementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titre' => fake()->sentence,
            'localisation' => fake()->address,
            'start_date' => fake()->date,
            'end_date' => fake()->date,
            'logo_path' => fake()->imageUrl(640, 480, 'business', true),
            'cover_path' => fake()->imageUrl(640, 480, 'nature', true),
            'description' => fake()->realText(),
            'return' => fake()->boolean,
            'status' => fake()->randomElement (['pending', 'approved',
            'unapproved' ]),
            'capacity' => fake()->numberBetween(50, 1000),
            'prix' => fake()->randomFloat(2, 10, 5000),
            'created_by' => 1, 
            'updated_by' => 1,
        ];
    }
}
