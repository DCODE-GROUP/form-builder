<template>
  <div class="v-datepicker" :class="modelValue?.class">
    <input type="hidden" :name="modelValue.name" :id="modelValue.name" :value="date"/>
    <date-picker
        v-model:value="date"
        :format="formatTimeString()"
        value-type="format"
        :type="formatTimeString() === 'hh:mm' ? 'time' : 'date'"
        class="!w-full h-[40px]"
        :placeholder="modelValue.placeholder"
        v-if="editable"
    />
    <p v-else v-text="modelValue.value"></p>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
  </div>
</template>

<script>
import DatePicker from "vue-datepicker-next";
import 'vue-datepicker-next/index.css';
import BaseField from "../mixins/BaseField";

export default {
  name: "VDatepicker",
  components: {DatePicker},
  inject: ["possibleFormValues", "getFormValue"],
  mixins: [BaseField],
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      date: null,
    };
  },
  created() {
    this.date = this.modelValue.value ?? this.getFormValue(this.possibleFormValues, this.modelValue?.defined_key);
  },
  watch: {
    date() {
      Object.assign(this.modelValue, {value: this.date})
    },
  },
  methods: {
    formatTimeString() {
      if (this.modelValue?.sub_type === 'time') {
        return `hh:mm`;
      }

      if (typeof this.modelValue.value === 'string') {
        let isTimeFormat = false;
        [':', 'am', 'pm', 'AM', 'PM'].forEach((s) => {
          if (this.modelValue.value.includes(s)) {
            isTimeFormat = true;
          }
        })

        if (isTimeFormat) {
          return `hh:mm`;
        }
      }

      return 'DD/MM/YY';
    }
  }
};
</script>

