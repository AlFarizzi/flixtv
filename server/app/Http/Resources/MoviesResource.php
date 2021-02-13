<?php

namespace App\Http\Resources;

use App\Http\Controllers\Movie\MovieController;
use Illuminate\Http\Resources\Json\JsonResource;

class MoviesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "genres" => GenresResource::collection($this->genres),
            "poster_link" => $this->poster_link,
            "video_link" => $this->video_link,
            "rating" => $this->rating
        ];
    }
}
