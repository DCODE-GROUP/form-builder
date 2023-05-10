<template>
  <select :name="name" v-model="input" :disabled="disabled || !editable">
    <option v-for="option in options">{{ option }}</option>
  </select>
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
    options: {default: () => []},
    disabled: {},
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
      this.$emit("input", this.input);
    },
  },
};
</script>