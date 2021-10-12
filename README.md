# Laravel Form Builder

This package provides the standard form builder functionality used in most projects.

## Installation

You can install the package via composer:

```bash
composer require dcodegroup/form-builder
```

Then run the install command.

```bash
php artsian form-builder:install
```

This will publish the configuration file and the migration file.

Run the migrations

```bash
php artsian migrate
```

## Configuration

Most of configuration has been set the fair defaults. However you can review the configuration file at `config/form-builder.php` and adjust as needed


## Usage

The package provides an endpoints which you can use. See the full list by running
```bash
php artsian route:list --name=form-builder
```

They are

[example.com/forms] Which is where you will form index. This is by default protected auth middleware but you can modify in the configuration. This is where you want to link to in your admin and possibly a new window

```php

```
