<template>
  <div :class="field?.class">
    <textarea :name="name" v-model="input" rows="4" :disabled="!editable" :placeholder="field?.placeholder"></textarea>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ field.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "Textarea",
  mixins: [BaseField],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: {default: null},
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