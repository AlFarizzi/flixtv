<?php

namespace Tests\Feature;

use App\Models\Movie;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UpdateFilmTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUpdateFilm() {
        $movie = Movie::where('id',44)->get()[0];
        $res = $this->put('/api/m/update-movie', [
           "title" => "ini adalah title setelah update",
           "duration" => "10 hrs 59 mins",
           "release_date" => "20 Feb,2021",
           "synopsis" => "ini adalh synopsis setelah update",
            "genres" => [
                ["value" => 100, "label" => "Korbin Erdman"],
                ["value" => 99, "label" => "Cory Wyman PhD"],
                ["value" => 92, "label" => "Catharine Corkery I"],
            ],
           "movie" => $movie
        ]);
        $res->assertJson([
            "status" => 200,
            "edited" => true
        ]);
    }
}
