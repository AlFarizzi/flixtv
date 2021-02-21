<?php

namespace App\Http\Controllers\Genre;

use App\Models\Genre;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\GenresResource;

class GenreController extends Controller
{
    // ------------------------ GENRE SECTION ----------------
    public function getAllGenres(Request $request) {
        $limit = $request->page;
        return GenresResource::collection(Genre::latest()->limit($limit * 5)->get());
    }

    public function getAllGenreForAddMovie() {
        return GenresResource::collection(Genre::latest()->get());
    }

    public function addGenre(Request $request) {
        try {
            $request->validate(["genre" => ["required", "unique:genres,genre"]]);
            $genres = Genre::create($request->all());
            return response()->json([
                "status" => 200,
                "created" => $genres !== null
            ]);
        } catch (\Throwable $th) {
            throw $th->getMessage();
        }
    }

    public function deleteGenre(Request $request) {
        try {
            $genre = Genre::where('id',$request->id)->get()[0];
            $deleted = $genre->delete();
            return response()->json([
                "status" => 200,
                "deleted" => $deleted
            ]);
        } catch (\Throwable $th) {
            throw $th->getMessage();
        }
    }

    public function updateGenre(Request $request) {
        $genre = Genre::where('id',$request->id)->get()[0];
        $updated = $genre->update([
            "genre" => $request->genre
        ]);
        return response()->json([
            "status" => 200,
            "updated" => $updated
        ],200);
    }

    // ------------------------ GENRE SECTION ----------------
}
