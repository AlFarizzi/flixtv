<?php

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\MoviesResource;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Genre\GenreController;
use App\Http\Controllers\Movie\MovieController;
use App\Http\Controllers\Comment\CommentController;

Route::group(["prefix" => "m"],function() {
    Route::get('/movies', [MovieController::class,'getAllMovies']);
    Route::post("/movie-genre",[MovieController::class,'getMovieByGenre']);
    Route::get('/movie-detail', [MovieController::class,'getMovieDetail']);
    Route::group(["auth:api"],function() {
        Route::post('/add-movie', [MovieController::class,'addMovie']);
        // Route::get('/update-movie', [MovieController::class,'editMovie']);
        Route::put('/update-movie', [MovieController::class,'updateMovie']);
        Route::delete('/delete-movie', [MovieController::class,'deleteMovie']);
    });
    Route::get('/search', [MovieController::class,'searchMovie']);

    Route::get("/dashboard-data",[MovieController::class, 'dashboardData']);
});

Route::group(["prefix" => "g"], function()  {
    Route::get('/genres', [GenreController::class,'getAllGenres']);
    Route::get('/add-movie-genres', [GenreController::class,'getAllGenreForAddMovie']);
    Route::group(["middleware" => "auth:api"],function() {
        Route::post('/add-genre', [GenreController::class,'addGenre']);
        Route::delete('/delete-genre', [GenreController::class,'deleteGenre']);
        Route::put('/update-genre', [GenreController::class,'updateGenre']);
    });
});

Route::group(["prefix" => "c"],function() {
    Route::post('/comment', [CommentController::class,'postComment']);
    Route::get("/comments", [CommentController::class,'getComments']);
});

Route::group(["middleware" => "auth:api", "prefix" => "u"],function() {
    Route::put('/update-user', [UserController::class,'updateUser']);
    Route::put('/update-password', [UserController::class,'updatePassword']);
});

Route::post('/login', [AuthController::class,'login']);
