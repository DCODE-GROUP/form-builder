<template>
  <div class="v-datepicker" :class="field?.class">
    <input type="hidden" :name="name" :id="name" :value="date"/>
    <date-picker
        v-model:value="date"
        format="DD/MM/YYYY"
        value-type="format"
        type="date"
        class="!w-full h-[40px]"
        :placeholder="placeholder"
        v-if="editable"
    />
    <p v-else v-text="modelValue"></p>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ field.hint }}</p>
  </div>
</template>

<script>
import DatePicker from "vue-datepicker-next";
import 'vue-datepicker-next/index.css';
import BaseField from "../mixins/BaseField";

export default {
  name: "VDatepicker",
  components: {DatePicker},
  mixins: [BaseField],
  props: {
    name: {
      type: String,
      required: true,
    },
    field: {},
    modelValue: {
      type: String,
      default: null,
    },
    placeholder: String,
  },
  data() {
    return {
      date: null,
    };
  },
  created() {
    if (this.modelValue) {
      this.date = this.modelValue;
    }
  },
  watch: {
    date() {
      this.$emit("update:modelValue", this.date);
    },
  },
};
</script>

