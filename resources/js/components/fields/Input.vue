<template>
  <div :class="field?.class">
    <input v-if="editable" :name="name" :type="type" v-model="input" :placeholder="field?.placeholder"/>
    <p v-else v-text="modelValue"></p>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ field.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";
import cloneDeep from "lodash.clonedeep";

export default {
  name: "Input",
  mixins: [BaseField],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      input: null,
    };
  },
  created() {
    this.input = cloneDeep(this.modelValue);
  },
  watch: {
    input(val) {
      this.$emit("update:modelValue", val);
    },
  },
};
</script>