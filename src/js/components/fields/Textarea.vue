<template>
  <div :class="modelValue?.class">
    <textarea :name="modelValue.name"
              v-model="input"
              rows="4"
              v-if="editable"
              :placeholder="modelValue?.placeholder">
    </textarea>
    <p v-else>{{ input }}</p>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "Textarea",
  mixins: [BaseField],
  props: {
    modelValue: {default: null},
  },
  data() {
    return {
      input: null,
    };
  },
  created() {
    this.input = this.modelValue.value;
  },
  watch: {
    input(val) {
      this.modelValue.value = val;
    },
  },
};
</script>