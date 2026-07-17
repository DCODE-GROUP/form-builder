<template>
  <div :class="modelValue?.class" v-click-outside="() => this.isOpen && (this.isOpen = false)" class="relative">
    <input type="hidden" :name="modelValue.type" :id="modelValue.name" :value="selectedLabel"/>
    <div
        class="input-base bg-white cursor-pointer"
        :class="{'text-gray-400' : !selectedLabel && modelValue?.placeholder }"
        @click="toggleDropdown"
    >
      {{ selectedLabel || modelValue?.placeholder || "Select an option" }}
    </div>
    <ul
        v-if="isOpen"
        class="absolute z-50 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-auto"
    >
      <li
          v-for="(option, index) in (modelValue?.options ?? [])"
          :key="index"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ option }}
      </li>
    </ul>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">
      {{ modelValue.hint }}
    </p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";
import clickOutside from "../../helpers/ClickOutSide";

export default {
  name: "Select",
  mixins: [BaseField],
  directives: {
    clickOutside,
  },

  props: {
    modelValue: {},
  },
  data() {
    return {
      isOpen: false,
      selectedLabel: null,
    };
  },
  created() {
    this.selectedLabel = this.modelValue?.value;
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedLabel = option;
      this.isOpen = false;
      this.modelValue.value = option;
    },
  },
  watch: {
    modelValue(newValue) {
      this.selectedLabel = newValue;
    },
  },
};
</script>