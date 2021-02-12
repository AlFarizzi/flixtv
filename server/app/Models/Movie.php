<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $fillable = ["title", "duration",
    "release_date","synopsis","poster_link","video_link"];

    public function genres() {
        return $this->belongsToMany(Genre::class);
    }
}
