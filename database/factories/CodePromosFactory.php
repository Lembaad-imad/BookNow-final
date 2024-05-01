<?php

namespace Database\Factories;

use App\Models\Evenement;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CodePromos>
 */
class CodePromosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>fake()->word,
            'start_date'=>fake()->date,
            'end_date'=>fake()->date,
            'percentage'=>fake()->numberBetween(10, 100),
            'event_id' => fake()->numberBetween(1, 30),

        ];
    }
}
