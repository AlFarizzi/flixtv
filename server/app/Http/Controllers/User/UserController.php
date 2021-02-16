<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{

    public function updateUser(Request $request) {
        $data = User::where('id',$request->id)->get()[0];
        $updated = $data->update($request->all());
        if($updated === true) {
            return $request->all();
        }
    }

}
