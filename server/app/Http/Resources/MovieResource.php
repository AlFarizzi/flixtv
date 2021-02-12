<?php

namespace App\Http\Resources;

use App\Http\Controllers\Movie\MovieController;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $repo = new MovieController();
        return [
            "id" => $this->id,
            "title" => $this->title,
            "duration" => $this->duration,
            "release" => $this->release_date,
            "poster" => $this->poster_link,
            "video" => $this->video_link,
            "sinopsis" => $this->synopsis,
            "genres" => GenresResource::collection($this->genres),
            "comments" => $repo->getComments($this->id),
        ];
    }
}
