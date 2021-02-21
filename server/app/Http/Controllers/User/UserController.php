<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function updateUser(Request $request) {
        $data = User::where('id',$request->id)->get()[0];
        $updated = $data->update($request->all());
        if($updated === true) {
            return $request->all();
        }
    }

    public function updatePassword(Request $request) {
        $request->validate([
            "password" => ["required", "confirmed"],
            "password_confirmation" => ["required"]
        ]);
     if(Hash::check($request->old_password,Auth::user()->password)) {
       $updated = Auth::user()->update([
            "password" => bcrypt($request->password)
        ]);
     }
     return response()->json(["updated" => $updated]);
    }

}
