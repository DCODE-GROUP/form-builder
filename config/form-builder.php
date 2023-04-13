<?php

return [
    'middleware' => ['web', 'auth'],
    'layout_path' => 'layouts.app',
    'content_section' => 'content',
    'route_path' => 'forms', // eg 'admin/settings/waivers',
    'route_name' => 'forms', // eg 'admin.setting.waivers',
    'binding' => 'form' // eg 'waiver',
];