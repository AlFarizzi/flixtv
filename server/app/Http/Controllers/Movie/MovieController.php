<?php

namespace App\Http\Controllers\Movie;

use App\Models\Genre;
use App\Models\Movie;
use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UploadRequest;
use App\Http\Resources\MovieResource;
use App\Http\Resources\GenresResource;
use App\Http\Resources\MoviesResource;
use App\Http\Resources\CommentResource;

class MovieController extends Controller
{
    //------------------------ MOVIE SECTION --------------------
    public function getAllMovies(Request $request) {
        $page = $request->page * 12;
        return MoviesResource::collection(
            Movie::orderBy('id','desc')->limit($page)->get()
        );
    }

    public function getMovieByGenre(Request $request) {
        $id = $request->id;
        $genre = new GenresResource(Genre::find($id));
        $movies = MoviesResource::collection($genre->movies);
        return $movies;
    }

    public function getMovieDetail(Request $request) {
        return new MovieResource(Movie::find($request->id));
    }

    public function extractGenre($genres) {
        $myGenres = [];
        $index = isset($genres[0]['value']) ? 'value' : 'id';
        for ($i=0; $i < count($genres); $i++) {
            array_push($myGenres,$genres[$i][$index]);
        }
        return $myGenres;
    }

    public function addMovie(UploadRequest $request) {
        try {
            $movie = Movie::create($request->all());
            $genres = $this->extractGenre($request->genres);
            $movie->genres()->attach($genres);
            return response()->json([
                "status" => 200,
                "created" => $movie !== null
            ]);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function editMovie(Request $request) {
        $movie = Movie::where("id",$request->id)->get()[0];
        return response()->json($movie);
    }

    public function updateMovie(Request $request) {
        $movie = Movie::where('id',$request->movie["id"])->get()[0];
        $edited = $movie->update([
            "title" => $request->title,
            "duration" => $request->duration,
            "release_date" => $request->release_date,
            "synopsis" => $request->synopsis,
        ]);
        $genres = $this->extractGenre($request->genres);
        $movie->genres()->sync($genres);
        return response()->json([
            "status" => 200,
            "edited" => $edited
        ]);
    }

    public function deleteMovie(Request $request) {
        $movie = Movie::where('id',$request->id)->get()[0];
        $deleted = $movie->delete();
        return response()->json([
            "status" => 200,
            "deleted" => $deleted
        ]);
    }

    public function searchMovie(Request $request) {
        $movies = MoviesResource::collection(
            Movie::where('title', 'LIKE', '%'.$request->title.'%')->get()
        );
        return $movies;
    }

    public function dashboardData() {
        $movies = count(MovieResource::collection(Movie::get()));
        $genres = count(GenresResource::collection(Genre::get()));
        $comments = count(CommentResource::collection(Comment::get()));

        return response()->json([
            "movies" => $movies,
            "genres" => $genres,
            "comments" => $comments
        ]);
    }
    // ----------------------- MOVIE SECTION -------------------
}
