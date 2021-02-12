<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        try {
            $request->validate([
                "email" => ["required"],
                "password" => ["required"]
            ]);
            if($token = Auth::attempt(["email" => $request->email, "password" => $request->password])) {
                return $this->responseWithJSON($token);
            } else {
                return response()->json([
                    "message" => "Username / Password Salah"
                ]);
            }
        } catch (ValidationException $th) {
            throw $th->getMessage();
        }
    }

    public function responseWithJSON($token) {
        return response()->json([
            "data" => Auth::user(),
            "token" => $token,
            "status" => 200
         ]);
    }

}
