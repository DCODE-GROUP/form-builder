<?php

return [
    'path'             => env('FORM_BUILDER_PATH', 'forms'),
    'middleware'       => ['web', 'auth'],
    'layout_path' => 'layouts.admin'
];
