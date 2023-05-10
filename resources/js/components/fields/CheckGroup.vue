<template>
  <div class="-options">
    <label v-for="option in options">
      <input
        :type="inputType"
        :name="inputName"
        :value="option"
        v-model="input"
        :disabled="!editable"
      />
      <span>{{ option }}</span>
    </label>
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
    modelValue: {default: () => []},
    options: {default: () => []},
    disabled: {default: false},
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
      this.$emit("input", this.input);
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