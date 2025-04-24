# Laravel Form Builder

This package provides the standard scaffolding of form builder functionality used in most projects.

## Installation
#### PHP

You can install the package via composer:

| Version / Branch | Laravel Support | Install Command                                 |
|------------------|-----------------|-------------------------------------------------|
| 1.x              | <= v10          | `composer require dcodegroup/form-builder:^1.0` |
| 2.x              | >= v11          | `composer require dcodegroup/form-builder:^2.0` |
| 3.x              | >= v11          | `composer require dcodegroup/form-builder:^3.0` |

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
]
```

## Traits for form validation

Located in 
```
src\Http\Traits\FormValidator.php
```