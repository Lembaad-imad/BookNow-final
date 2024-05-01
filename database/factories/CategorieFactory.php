<?php

namespace Database\Factories;

use App\Models\Categorie; 
use Illuminate\Database\Eloquent\Factories\Factory;

class CategorieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            "Business ",
            "Arts ",
            "Sports ",
            "Food ",
            "Education ",
            "Health ",
            "Community ",
            "Technology ",
            "Travel ",
            "Environment "
        ];
        static $index = 0;

        if ($index >= count($categories)) {
            $index = 0;
        }

        return [
            'value' => $categories[$index],
            'label' => $categories[$index++],
            'checked' => $this->faker->boolean,
        ];
    }
}
