<?php

use Dcodegroup\FormBuilder\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;

Route::resource('/'.config('form-builder.route_path'), FormController::class, [
    'names' => config('form-builder.route_name'),
]);
