<template>
  <div class="-options">
    <label v-for="option in (modelValue?.options ?? [])" class="cursor-pointer">
      <input
        :type="inputType"
        :name="inputName"
        :value="option"
        v-model="input"
        :disabled="!editable"
        :class="{'[&]:checked:bg-brand-600 [&]:hover:bg-brand-600 [&]:checked:hover:bg-brand-600 [&]:focus:bg-brand-600 [&]:focus:ring-brand-600 [&]:focus:checked:bg-brand-600 !rounded-full': type === 'radio-group'}"
      />
      <span>{{ option }}</span>
    </label>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "CheckGroup",
  mixins: [BaseField],
  props: {
    modelValue: {default: () => []},
  },
  data() {
    return {
      input: [],
    };
  },
  created() {
    this.input = this.modelValue?.value ?? [];
  },
  watch: {
    input(val) {
      this.modelValue.value = val;
    },
  },
  computed: {
    inputName() {
      if (this.modelValue.type === "check-group") {
        return `${this.modelValue.name}[]`;
      }
      return this.name;
    },
    inputType() {
      if (this.modelValue.type === "check-group") {
        return "checkbox";
      }
      if (this.modelValue.type === "radio-group") {
        return "radio";
      }
    },
  },
};
</script>