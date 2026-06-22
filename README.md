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

## Traits for form validation

Located in
```
src\Http\Traits\FormValidator.php
```

## Development
To build the assets, run this command
```bash
npm run build
```

### Tailwind CSS

The project uses **Tailwind CSS v3** with **v4-compatible syntax**. This means:

- All CSS utilities and Vue components are compatible with both Tailwind v3 and v4
- Opacity syntax uses the modern slash notation: `ring-sky-200/50` instead of `ring-opacity-50`
- When upgrading to Tailwind v4 in the future, no CSS or component changes will be needed

**Custom Theme Extensions:**
- `brand` color palette (25, 50, 100, ..., 950) for brand styling
- `success`, `error`, `warning` color utilities
- Custom `fill` width utility for responsive layouts

**Note:** The `/example` directory remains on Tailwind v3 for backwards compatibility.

## Example
Check example folder to see how to use the package.
```bash
/example
```
