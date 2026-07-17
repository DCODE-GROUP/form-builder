<template>
  <label
      :for="field"
      class="block space-y-2xsSpace text-sm font-medium leading-none text-tertiary-700"
  >
    <span
        v-if="labelText || $slots.label"
        class="v-field-label inline-block mb-2"
    >
      <template v-if="$slots.label">
        <slot name="label"></slot>
      </template>
      <template v-else>
        <span v-html="labelText"></span>
        <span v-if="isRequired"> *</span>
      </template>
    </span>
    <slot/>
  </label>
</template>

<script>
export default {
  name: "InputWrapper",
  props: {
    field: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
    },
    darkTheme: {
      type: Boolean,
      required: false,
    },
    isRequired: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
