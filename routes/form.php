<?php

use Dcodegroup\FormBuilder\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;

Route::resource(sprintf('/%s', config('form-builder.path')), FormController::class);
