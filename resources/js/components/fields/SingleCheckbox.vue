<template>
  <div>
    <div class="flex flex-row-reverse gap-2 items-center justify-end">
      <span class="inline-block text-base text-gray-700">{{ field.label }}</span>
      <div>
        <input v-if="editable" :name="name" :type="type" v-model="input" :disabled="!editable" class="h-5 w-5 text-brand-700 border-gray-300 rounded focus:ring-brand focus:ring-2"/>
        <p v-else v-text="modelValue"></p>
      </div>
    </div>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 pl-[28px]">{{ field.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "Input",
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