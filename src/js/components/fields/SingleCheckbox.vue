<template>
  <div>
    <div class="flex flex-row-reverse gap-2 items-center justify-end">
      <span class="inline-block text-base text-gray-700">{{ modelValue?.label }}</span>
      <div>
        <input v-if="editable" :name="modelValue.name" :type="modelValue.type" v-model="input" :disabled="!editable" class="h-5 w-5 text-brand-700 border-gray-300 rounded focus:ring-brand-700 focus:ring-2"/>
        <p v-else v-text="modelValue?.value"></p>
      </div>
    </div>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 pl-[28px]">{{ modelValue.hint }}</p>
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
      default: {}
    },
  },
  data() {
    return {
      input: null,
    };
  },
  created() {
    this.input = cloneDeep(this.modelValue.value) ?? this.getFormValue(this.possibleFormValues, this.modelValue?.defined_key);
  },
  watch: {
    input(val) {
      this.modelValue.value = val;
    },
  },
};
</script>