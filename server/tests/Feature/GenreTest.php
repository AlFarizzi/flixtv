<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Genre;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GenreTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    // public function test_example()
    // {
    //     $response = $this->get('/');

    //     $response->assertStatus(200);
    // }

    public function testAddGenre() {
        $res = $this->post('/api/g/add-genre', [
            "genre" => "mystery"
        ]);
        $res->assertJson([
            "status" => 200,
            "created" => true
        ]);
    }

    public function testDeleteGenre() {
        $res = $this->delete('/api/g/delete-genre', [
            "id" => Genre::latest()->limit(1)->get('id')[0]->id
        ]);
        $res->assertJson([
            "status" => 200,
            "deleted" => true
        ]);
    }
}
