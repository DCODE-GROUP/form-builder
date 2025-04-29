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

Then run the installation command.

```bash
php artisan form-builder:install
```

This will publish the configuration file and the migration file.

Run the migrations

```bash
php artisan migrate
```

To build and copy the assets, run this command
```bash
npm run prod && npm run copy-assets {project name here}

```

EG:
```bash
npm run prod && npm run copy-assets elaa

```

#### JS

Include this built file to your layouts:

```
<script type="text/javascript" src="/vendor/form-builder/index.js" defer></script>
```

#### CSS

There is a new generated file under `public/vendor/form-builder/index.css`. You must use this file in your main scss file 

Run the npm build (dev/prod)

### Example a standard header

```html
<head>
    <title>Form Builder</title>
    <meta name="csrf-token" content="John Doe">
    <link rel="stylesheet" href="index.css">
    <script>
        const googleMapsApiKey = "test_key"; // For VAddress google api look up
    </script>
    <script type="text/javascript" src="index.js" defer></script>
</head>
```

```bash
npm run dev
```

## Traits for form validation

Located in 
```
src\Http\Traits\FormValidator.php
```