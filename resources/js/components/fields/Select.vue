<template>
  <div :class="field?.class" class="relative">
    <input type="hidden" :name="name" :id="name" :value="selectedLabel"/>
    <div
        class="input-base cursor-pointer"
        :class="{'text-gray-400' : !selectedLabel && field?.placeholder }"
        @click="toggleDropdown"
    >
      {{ selectedLabel || field?.placeholder || "Select an option" }}
    </div>
    <ul
        v-if="isOpen"
        class="absolute z-50 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-auto"
    >
      <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ option }}
      </li>
    </ul>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">
      {{ field.hint }}
    </p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "Select",
  mixins: [BaseField],

  props: {
    modelValue: {},
    name: {},
    type: {},
    field: {},
    options: {default: () => []},
  },
  data() {
    return {
      isOpen: false,
      selectedLabel: null,
    };
  },
  created() {
    this.selectedLabel = this.modelValue;
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedLabel = option;
      this.isOpen = false;
      this.$emit("update:modelValue", option);
    },
  },
  watch: {
    modelValue(newValue) {
      this.selectedLabel = newValue;
    },
  },
};
</script>