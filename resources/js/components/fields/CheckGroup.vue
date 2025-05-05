<template>
  <div class="-options">
    <label v-for="option in options" class="cursor-pointer">
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
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ field.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "CheckGroup",
  mixins: [BaseField],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: {default: () => []},
    options: {default: () => []},
  },
  data() {
    return {
      input: [],
    };
  },
  created() {
    this.input = this.modelValue;
  },
  watch: {
    modelValue() {
      this.input = this.modelValue;
    },
    input() {
        this.$emit("update:modelValue", this.input);
    },
  },
  methods: {},
  computed: {
    inputName() {
      if (this.type === "check-group") {
        return `${this.name}[]`;
      }
      return this.name;
    },
    inputType() {
      if (this.type === "check-group") {
        return "checkbox";
      }
      if (this.type === "radio-group") {
        return "radio";
      }
    },
  },
};
</script>