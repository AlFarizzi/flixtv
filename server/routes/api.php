<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Movie\MovieController;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\MoviesResource;

Route::group(["prefix" => "m"],function() {
    Route::get('/movies', [MovieController::class,'getAllMovies']);
    Route::post("/movie-genre",[MovieController::class,'getMovieByGenre']);
    Route::get('/movie-detail', [MovieController::class,'getMovieDetail']);
    Route::post('/add-movie', [MovieController::class,'addMovie']);
    Route::get('/update-movie', [MovieController::class,'editMovie']);
    Route::put('/update-movie', [MovieController::class,'updateMovie']);
    Route::delete('/delete-movie', [MovieController::class,'deleteMovie']);
    Route::get('/search', [MovieController::class,'searchMovie']);
});

Route::group(["prefix" => "g"], function()  {
    Route::get('/genres', [MovieController::class,'getAllGenres']);
    Route::get('/add-movie-genres', [MovieController::class,'getAllGenreForAddMovie']);
    Route::post('/add-genre', [MovieController::class,'addGenre']);
    Route::delete('/delete-genre', [MovieController::class,'deleteGenre']);
    Route::put('/update-genre', [MovieController::class,'updateGenre']);
});

Route::post('/login', [AuthController::class,'login']);
