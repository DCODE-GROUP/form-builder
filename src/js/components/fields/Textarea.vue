<template>
  <div :class="modelValue?.class">
    <textarea v-if="editable"
              v-model="input"
              :name="modelValue.name"
              rows="4"
              :placeholder="modelValue?.placeholder">
    </textarea>
    <p v-else>{{ input }}</p>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";
import cloneDeep from "lodash.clonedeep";

export default {
  name: "Textarea",
  mixins: [BaseField],
  inject: ["possibleFormValues", "getFormValue"],
  props: {
    modelValue: {default: null},
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
