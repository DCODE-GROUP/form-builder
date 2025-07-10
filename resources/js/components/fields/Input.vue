<template>
  <div :class="modelValue?.class">
    <input v-if="editable" :name="modelValue.name" :type="modelValue.type" v-model="input" :placeholder="modelValue?.placeholder"/>
    <p v-else v-text="input"></p>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";
import cloneDeep from "lodash.clonedeep";

export default {
  name: "Input",
  mixins: [BaseField],
  inject: ["possibleFormValues", "getFormValue"],
  props: {
    modelValue: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      input: null,
    };
  },
  created() {
    this.input = cloneDeep(this.modelValue?.value) ?? this.getFormValue(this.possibleFormValues, this.modelValue?.defined_key);
  },
  watch: {
    input(val) {
      this.modelValue.value = val;
    },
  },
};
</script>