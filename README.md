# Laravel Form Builder

This package provides the standard form builder functionality used in most projects.

## Installation
#### PHP
You can install the package via composer:

```bash
composer require dcodegroup/form-builder
```

Then run the install command.

```bash
php artisan form-builder:install
```

This will publish the configuration file and the migration file.

Run the migrations

```bash
php artisan migrate
```

#### JS

Include this built file to your layouts:

```
<script type="text/javascript" src="/vendor/form-builder/index.js" defer></script>
```

#### SCSS

There is a new generated file under `public/vendor/form-builder/index.css`. You must use this file in your main scss file 

Run the npm build (dev/prod)

```bash
npm run dev
```

## Configuration

Most of configuration has been set the fair defaults. However you can review the configuration file at `config/form-builder.php` and adjust as needed

```
return [
    'middleware' => ['web', 'auth'],
    'layout_path' => 'layouts.app', // Make sure you have correct base layout name,
    'content_section' => 'content', // Name of your content section
    'route_path' => 'forms', // eg 'admin/settings/waivers',
    'route_name' => 'forms', // eg 'admin.setting.waivers',
    'binding' => 'form' // eg 'waiver',
]
```

## Usage

The package provides an endpoints which you can use. See the full list by running
```bash
php artisan route:list --name=form
```

They are

[example.com/forms] Which is where you will form index. This is by default protected auth middleware but you can modify in the configuration. This is where you want to link to in your admin and possibly a new window

## Override views

Create new folder name `form-builder-views` under `resources/views` section then put following files to override:
```
edit.blade.php
index.blade.php
show.blade.php
```

## Traits for form validation

Located in 
```
src\Http\Traits\FormValidator.php
```