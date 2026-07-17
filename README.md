# Laravel Form Builder

Drag-and-drop form builder for Laravel + Vue 3. Define form schemas in an admin UI (`FormBuilder`), then render and collect submissions with `VForm`.

| Package | Purpose |
|---------|---------|
| `dcodegroup/form-builder` | Laravel models, migrations, validation helpers |
| `@dcodegroup-au/form-builder` | Vue components and styles |

## Requirements

- PHP 8.2+
- Laravel 11, 12, or 13 (package 3.x)
- Vue 3
- Node.js (for building or consuming the frontend package)

## Installation

### Version support

| Version / Branch | Laravel | Install |
|------------------|---------|---------|
| 1.x | ≤ 10 | `composer require dcodegroup/form-builder:^1.0` |
| 2.x | ≥ 11 | `composer require dcodegroup/form-builder:^2.0` |
| 3.x | ≥ 11 | `composer require dcodegroup/form-builder:^3.0` |

### Backend

```bash
composer require dcodegroup/form-builder:^3.0
php artisan form-builder:install
php artisan migrate
```

`form-builder:install` publishes the `forms` and `form_data` migrations when they are not already present.

### Frontend

```bash
npm install @dcodegroup-au/form-builder
```

Register the components and import the stylesheet:

```js
import { createApp } from 'vue'
import { FormBuilder, VForm } from '@dcodegroup-au/form-builder'
import '@dcodegroup-au/form-builder/form-builder.css'

const app = createApp({ /* ... */ })

app.component('FormBuilder', FormBuilder)
app.component('VForm', VForm)
app.mount('#app')
```

Ensure your layout includes a CSRF meta tag (required by `VForm`):

```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```

---

## Quick start

### Build a form schema (`FormBuilder`)

Use in an admin/create-or-edit screen. The component keeps a hidden input with the JSON schema for traditional form posts, and can also save via `storeUrl`.

```vue
<template>
  <FormBuilder
    :form="form"
    name="data"
    :has-recipient="true"
    :show-breadcrumbs="true"
    redirect-url="/forms"
    store-url="/forms"
    :actions="[
      { value: 'send_mail', label: 'Send Mail' },
      { value: 'send_sms', label: 'Send SMS' },
    ]"
  />
</template>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `form` | `Object` | `{}` | Existing form model (`id`, `title`, `fields`, `status`, …) |
| `name` | `String` | — | Hidden input name for the serialized schema |
| `hasRecipient` | `Boolean` | `false` | Show recipients field for notification emails |
| `showBreadcrumbs` | `Boolean` | `true` | Show breadcrumb navigation |
| `redirectUrl` | `String` | — | URL for discard / breadcrumb “Form” link |
| `storeUrl` | `String` | — | Endpoint used when saving draft or publishing |
| `actions` | `Array` | `[]` | Optional custom field actions (`{ value, label }`) |

### Collect responses (`VForm`)

```vue
<template>
  <VForm
    v-model="formData"
    name="data"
    action="/forms/store"
    method="post"
    :editable="true"
    :possible-values="possibleValues"
    :validation-errors="errors"
    google-api-key="YOUR_GOOGLE_MAPS_KEY"
    upload-url="/uploads"
  />
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  title: 'Site inspection',
  fields: [/* schema from Form model */],
})

const possibleValues = ref({}) // optional prefilled / lookup data
const errors = ref({})         // Laravel validation errors bag
</script>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` / `v-model` | `Object` | `{}` | Form payload (`{ title?, fields: [...] }`) |
| `action` | `String` | `'#'` | Form submit URL |
| `method` | `String` | `'get'` | HTTP method (`post`, `put`, … via `_method`) |
| `name` | `String` | — | Hidden input name for JSON payload |
| `title` | `String` | — | Optional heading above fields |
| `editable` | `Boolean` | `false` | Allow users to edit field values |
| `preview` | `Boolean` | `false` | Preview mode (used by the builder) |
| `canInteract` | `Boolean` | `true` | Enable pointer events on fields |
| `possibleValues` | `Object` | `{}` | Data for custom presenters / defined keys |
| `validationErrors` | `Object` | `{}` | Server validation errors |
| `googleApiKey` | `String` | `null` | Required for address autocomplete |
| `uploadUrl` | `String` | `''` | Endpoint for file uploads |
| `dateFullYear` | `Boolean` | `false` | Prefer full-year date display |

---

## Field types

Built-in components available in the palette:

| Type | Label |
|------|-------|
| `grid` | Grid (multi-column / row layout) |
| `heading` | Heading |
| `paragraph` | Paragraph |
| `text` | Input Field |
| `textarea` | Text Area |
| `number` | Number |
| `address` | Address |
| `datepicker` | Date Picker |
| `select` | Select |
| `checkbox` | Single Checkbox |
| `check-group` | Checkbox Group |
| `radio-group` | Radio Button Group |
| `signature` | Signature |
| `file-upload` | File Upload |

---

## Backend models & traits

### `Form`

Stores the form definition (`title`, `recipients`, `status`, `published_at`, `fields`).

```php
use Dcodegroup\FormBuilder\Models\Form;

$form = Form::saveModel([
    'title' => 'Onboarding',
    'status' => 'published',
    'fields' => $request->input('data.fields'),
]);
```

### `FormData`

Stores a filled submission (`values`, `completed_at`) morph-linked to any model via `formable`, and related to a `Form`.

### `HasFilledForms`

Add to any Eloquent model that can have filled forms:

```php
use Dcodegroup\FormBuilder\Models\Traits\HasFilledForms;

class Job extends Model
{
    use HasFilledForms;
}

// Latest (or create) submission for a form
$formData = $job->getFormData($form, createNew: true);

// Persist values
$job->saveFormData($form, $values);
```

### `FormValidator`

Use on a Form Request to build rules from required fields in the schema:

```php
use Dcodegroup\FormBuilder\Http\Traits\FormValidator;
use Illuminate\Foundation\Http\FormRequest;

class StoreFormSubmissionRequest extends FormRequest
{
    use FormValidator;

    public function rules(): array
    {
        return $this->getRules([
            // extra static rules...
        ]);
    }

    public function messages(): array
    {
        return $this->getRules([], isMessage: true);
    }
}
```

Rules are derived from `route('form')?->fields` when present, otherwise from `request()->input('data.fields')`.

---

## Custom field components

Register custom builder + presenter pairs on the Vue app. They appear in the component palette and render in `VForm`.

```js
import { markRaw } from 'vue'
import MyBuilder from './components/MyBuilder.vue'
import MyPresenter from './components/MyPresenter.vue'

app.config.globalProperties.$customFormComponents = [
  {
    type: 'my_custom_field',
    label: 'My Custom Field',
    builder: markRaw(MyBuilder),
    presenter: markRaw(MyPresenter),
    data: [],
  },
]
```

See `/example` for working custom table fields (defects, test results, etc.).

---

## Theming

### Brand colours

Brand colours use CSS custom properties. Override them after importing the package CSS:

```css
@import '@dcodegroup-au/form-builder/form-builder.css';

:root {
  --fb-brand-50: #eff6ff;
  --fb-brand-200: #bfdbfe;
  --fb-brand-300: #93c5fd;
  --fb-brand-400: #60a5fa;
  --fb-brand-500: #3b82f6;
  --fb-brand-600: #2563eb;
  --fb-brand-700: #1d4ed8;
  --fb-brand-800: #1e40af;
  --fb-brand-900: #1e3a8a;
}
```

You can scope overrides to a parent selector. Components that use `brand-*` utilities (buttons, checkboxes, radios, toggles, links, etc.) pick these up automatically.

Available tokens: `--fb-brand-25` through `--fb-brand-950`.

### Viewport height (host layout)

The builder uses a fixed viewport shell (`.form-builder-page`) so only the form column and component palette scroll — not the whole page.

If your app has a top nav (or other chrome), set an offset or explicit height:

```css
:root {
  /* Height of host chrome above the builder */
  --fb-chrome-offset: 64px;
}

/* Or pin the builder to a flex slot */
.my-builder-slot {
  height: 100%;
  --fb-page-height: 100%;
}
```

### Tailwind

The package ships compiled CSS. Source styles use **Tailwind CSS v3** with **v4-compatible** syntax (e.g. `ring-sky-200/50`). The `/example` app remains on Tailwind v3 for backwards compatibility.

---

## Database

**`forms`**

| Column | Notes |
|--------|--------|
| `title` | Form name |
| `recipients` | JSON (notification emails) |
| `status` | e.g. draft / published |
| `published_at` | Set when published |
| `fields` | JSON schema |

**`form_data`**

| Column | Notes |
|--------|--------|
| `formable_type` / `formable_id` | Morph to the owning model |
| `form_id` | Related `forms` row |
| `values` | JSON answers |
| `completed_at` | Nullable completion timestamp |

---

## Development

Build the library assets from the package root:

```bash
npm install
npm run build
```

Run the example app:

```bash
cd example
npm install
npm run dev
```

The example imports the built `dist/` bundle and demonstrates `VForm`, `FormBuilder`, and custom field components.
