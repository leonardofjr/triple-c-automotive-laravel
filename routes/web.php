<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Mail\SendContactForm;
use Illuminate\Support\Facades\Mail;

Route::get('/', function () {
 return \File::get(public_path());
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/mail', function(\Illuminate\Http\Request $request, \Illuminate\Mail\Mailer $mailer) {
        $mailer
        ->send(new \App\Mail\SendContactForm(
            $request->input('name'),
            $request->input('email'),
            $request->input('phone'),
            $request->input('interest')
        ));

        return response()->json([
            "success" => true
        ]);
});

Route::get('/auth', function() {
    //Perform a check whether the user is authenticated or not
    //Remove the if block during production

    if (!Auth::check()) {
        //If they are not, we forcefully login the user with id=1
        $user = App\User::find(1);
        Auth::login($user);
    }
    return Auth::user();
});