<?php

namespace App\Http\Controllers\Comment;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;

class CommentController extends Controller
{
    // ------------------------ COMMENT SECTION ----------------

    public function postComment(Request $request) {
        try {
            $request->validate(["comment" => ["required"]]);
            $comment = Comment::create([
                "name" => $request->name,
                "movie_id" => $request->id,
                "comment" => $request->comment
            ]);
            return response()->json([
                "status" => 200,
                "created" => $comment
            ]);
        } catch (\Throwable $th) {
            throw $th->getMessage();
        }
    }

    public function getComments($id = null,$range=1) {
        $limit = $range * 5;
        $comments = $id === null
        ? Comment::orderBy('id','desc')->limit($limit)->get()
        : Comment::where('movie_id',$id)->orderBy('id','desc')->limit($limit)->get();
        return CommentResource::collection($comments);
    }
    // ------------------------ COMMENT SECTION ----------------
}
