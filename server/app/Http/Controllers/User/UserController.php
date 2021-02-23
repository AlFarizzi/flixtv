<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Dotenv\Exception\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function updateUser(Request $request) {
        $updated = Auth::user()->update($request->all());
        if($updated === true) {
            return $request->all();
        }
    }

    public function updatePassword(Request $request) {
        try {
            $request->validate([
                "password" => ["required", "confirmed"],
                "password_confirmation" => ["required"]
            ]);
            if(Hash::check($request->old_password,Auth::user()->password)) {
            $updated = Auth::user()->update([
                    "password" => bcrypt($request->password)
                    ]);
                return response()->json(["updated" => $updated]);
            } else{
                return response()->json([
                    "error" => "Your Old Password Does Not Match"
                ],422);
            }
        } catch (ValidationException $exception) {
            return response()->json([
                "error" => $exception->getMessage()
            ],422);
        }
    }

}
