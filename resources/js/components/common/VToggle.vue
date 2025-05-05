<template>
  <div class="flex items-center gap-2">
    <button
      type="button"
      class="relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out"
      role="switch"
      :aria-checked="modelValue"
      @click="toggle"
      :class="classes"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        :class="{
          'translate-x-5': modelValue,
          'translate-x-0': !modelValue,
          '!translate-x-3': small && modelValue,
          '!h-2 !w-2': small,
        }"
      >
      </span>
    </button>
    <span class="text-sm text-gray-700 font-medium" v-if="title">{{ title }}</span>
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
      required: false,
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
  computed: {
    classes() {
      return {
        "!bg-brand-700 !hover:bg-brand-700": this.modelValue,
        "!h-3 !w-6": this.small,
        "focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2": this.ring,
      };
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
