<?php

namespace Tests\Feature;

use App\Http\Resources\MoviesResource;
use App\Models\Movie;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UploadDataTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUploadData() {
        $response = $this->post('/api/m/add-movie', [
           "title" => "ini title",
           "synopsis" => "ini sinopsis",
           "release_date" => "27 Feb, 2020",
           "duration" => "2 hrs 10 mins",
           "genres" => [
               ["value" => 1,"label" => "Cielo Reichert"],
               ["value" => 2,"label" => "Javon Kreiger"],
               ["value" => 3,"label" => "Bernice Roob"],
           ],
           "poster_link" => "https://inivideo",
           "video_link" => "https://inivideo"
        ]);
           $response->assertJson([
               "status" => 200,
               "created" => true
           ]);
    }
}
