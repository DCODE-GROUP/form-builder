<template>
  <textarea :name="name" v-model="input" :disabled="!editable"></textarea>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "Textarea",
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