<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "title" => ["required"],
            "synopsis" => ["required"],
            "release_date" => ["required"],
            "duration" => ["required"],
            "genres" => ["required"],
            "poster_link" => ["required"],
            "video_link" => ["required"]
        ];
    }
}
