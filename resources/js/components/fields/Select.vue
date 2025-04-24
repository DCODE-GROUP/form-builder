<template>
  <div :class="field?.class">
    <select :name="name" v-model="input" :disabled="!editable">
      <option v-for="option in options">{{ option }}</option>
    </select>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ field.hint }}</p>
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
      input: null,
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
};
</script>