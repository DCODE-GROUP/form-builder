<template>
  <div class="v-toggle">
    <button
      type="button"
      class="v-toggle__track"
      role="switch"
      :aria-checked="modelValue"
      @click="toggle"
      :class="{
        'v-toggle__track--on': modelValue,
        'v-toggle__track--small': small,
        'v-toggle__track--ring': ring,
      }"
    >
      <span
        aria-hidden="true"
        class="v-toggle__thumb"
        :class="{
          'v-toggle__thumb--on': modelValue,
          'v-toggle__thumb--small': small,
        }"
      >
      </span>
    </button>
    <span class="v-toggle__label" v-if="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [Boolean, Number],
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    isDisabled: {
      type: [Boolean],
    },
    small: {
      type: [Boolean],
      required: false,
    },
    ring: {
      type: [Boolean],
      default: true,
      required: false,
    },
  },
  methods: {
    toggle() {
      if (this.isDisabled) {
        return;
      }

      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>
