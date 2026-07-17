# Laravel Form Builder

Drag-and-drop form builder for Vue 3. Define form schemas in an admin UI (`FormBuilder`), then render and collect submissions with `VForm`.

| Package | Purpose |
|---------|---------|
| `@dcodegroup-au/form-builder` | Vue components and styles |

## Requirements
- Vue 3
- Node.js (for building or consuming the frontend package)

## Installation

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
