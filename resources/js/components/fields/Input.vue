<template>
  <input v-if="editable" :name="name" :type="type" v-model="input" :disabled="disabled"/>
  <p v-else v-text="modelValue"></p>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "Input",
  mixins: [BaseField],
  props: {
    name: {},
    type: {},
    modelValue: {default: null},
    disabled: {default: false},
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