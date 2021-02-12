<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Genre::create(["genre" => "thriller"]);
        Genre::create(["genre" => "horror"]);
        Genre::create(["genre" => "drama"]);
        Genre::create(["genre" => "romance"]);
        Genre::create(["genre" => "action"]);
        Genre::create(["genre" => "comedy"]);
        Genre::create(["genre" => "romantic"]);
        Genre::create(["genre" => "animation"]);
        Genre::create(["genre" => "sci-fi"]);
        Genre::create(["genre" => "adventure"]);
    }
}
