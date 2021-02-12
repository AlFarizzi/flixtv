<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

class MovieFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Movie::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "title" => $this->faker->name,
            "duration" => "2 hrs 50 mins",
            "release_date" => "06 Dec,2020",
            "synopsis" => $this->faker->text(250),
            "poster_link" => null
        ];
    }
}
