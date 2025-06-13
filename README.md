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

##### For new version with Vite
Import Vue components for Vite development
```
import { FormBuilder } from '/path/to/vendor/dcodegroup/form-builder/resources/js/index.js';
```

##### For deprecated version or using directly from vendor
Include this built file to your layouts:

```
<script type="text/javascript" src="/vendor/form-builder/index.js" defer></script>
```

#### CSS

##### For new version with Vite/TailwindCSS

Listing the components in the `tailwind.config.js` file

```
   [
      ...
      "/path/to/vendor/dcodegroup/form-builder/resources/**/*.{vue,js,ts,jsx,tsx}",
      ...
  ]
```

##### For the deprecated version or using directly from vendor

There is a new generated file under `public/vendor/form-builder/index.css`. You must use this file in your main scss file 

Run the npm build (dev/prod)

### [BUILDER]Example a standard usage on blade / html file

```html
<head>
    <title>Form Builder</title>
    <meta name="csrf-token" content="John Doe">
    <link rel="stylesheet" href="index.css">
    <script type="text/javascript" src="index.js?appId=test&googleMapsApiKey="testKey" defer></script>
</head>
<body>
    <div id="test">
        <form-builder
            name="form_builder"
            form='<?php echo $form; ?>'
        ></form-builder>
    </div>
</body>
```

### [USAGE]Example a standard usage on blade / html file

```html
<head>
    <title>Form Builder</title>
    <meta name="csrf-token" content="John Doe">
    <link rel="stylesheet" href="index.css">
    <script type="text/javascript" src="index.js?appId=test&googleMapsApiKey="testKey" defer></script>
</head>
<body>
    <div id="test">
        <v-form
                action="#"
                method="get"
                :form="form"
                :name="name"
                :editable="true"
        >
        </v-form>
    </div>
</body>
```

### [TYPESCRIPT INTEGRATION] Example a standard usage on vue file

```vue
<template>
  <div :id="name">
    <v-form
        action="#"
        method="get"
        :form="form"
        :name="name"
        :editable="true"
    >
    </v-form>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, watch } from "vue";
  const emits = defineEmits(["update:modelValue"]);

  const props = defineProps({
    form: { type: Object, required: true, default: () => ({}) },
    googleMapsApiKey: {type: String, required: true},
    modelValue: { type: Object, required: true, default: () => ({}) },
    name: {type: String, required: false},
  });

  let form = JSON.stringify(props.form);

  onMounted(() => {
    const linkExists = document.querySelector('link[href="/vendor/form-builder/index.css"]');
    if (!linkExists) {

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/vendor/form-builder/index.css";
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = `/vendor/form-builder/index.js?appId=${props.name}&googleMapsApiKey=${props.googleMapsApiKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    setInterval(() => {
      const nameInput = document.querySelector(`input[name="${props.name}"]`);
      if (nameInput) {
        emits("update:modelValue", JSON.parse(nameInput.value));
      }
    }, 100);
  });
</script>
```

```bash
npm run dev
```

## Traits for form validation

Located in 
```
src\Http\Traits\FormValidator.php
```