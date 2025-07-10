<template>
  <div class="border rounded-xl p-6">
    <h3 class="!text-lg font-semibold text-gray-900">{{ modelValue.label }}</h3>
    <div class="rounded-lg border border-gray-200 overflow-hidden">
      <div class="flex font-medium text-xs bg-gray-50 py-[21px] px-3">
        <div class="w-[80px]">Item No.</div>
        <div class="w-full"></div>
        <div class="w-[200px] flex">
          <div class="flex-1 text-center">Pass</div>
          <div class="flex-1 text-center">Fail</div>
          <div class="flex-1 text-center">N/A</div>
        </div>
      </div>
      <div>
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="w-full flex divide-y"
        >
          <div class="flex justify-center items-center px-6 w-[80px] border-t">
            <div class="!text-xs !text-gray-900">{{ row.column1.value }}</div>
          </div>
          <div class="w-full text-sm border-x h-full">
            <div
              v-for="(input, index) in row.column2.value"
              :key="index"
              class="flex"
            >
              <p
                v-if="input.type === 'heading'"
                class="p-3 w-full !text-xs !text-gray-600"
                v-html="input.label"
              ></p>
              <input-wrapper
                v-else
                is-vertical
                field="input"
                :label-text="cFirst(input.label)"
                class="p-3 !border-t w-full !text-xs !text-gray-600 !font-normal"
              >
                <input
                  type="text"
                  v-model="input.value"
                  placeholder=""
                  class="w-full p-2 border rounded !text-gray-900 !text-normal"
                />
              </input-wrapper>
            </div>
          </div>
          <div>
            <div class="w-[200px] flex gap-[38px] justify-center items-center h-full">
              <input
                type="radio"
                :value="row.column3.name"
                :name="`${rowIndex} - ${modelValue.label}`"
                v-model="row.column3.value"
                :checked="row.column3.value"
                class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300 cursor-pointer"
              />
              <input
                type="radio"
                :value="row.column4.name"
                :name="`${rowIndex} - ${modelValue.label}`"
                v-model="row.column4.value"
                :checked="row.column4.value"
                class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300 cursor-pointer"
              />
              <input
                type="radio"
                :value="row.column5.name"
                :name="`${rowIndex} - ${modelValue.label}`"
                v-model="row.column5.value"
                :checked="row.column5.value"
                class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import InputWrapper from "./InputWrapper.vue";

const props = defineProps({
  modelValue: {
    type: Object || String,
    default: () => ({}),
  },
  possibleValues: {
    type: [Object],
    default: () => {
      return {}
    }
  },
});
const rows = ref(props.modelValue.data);

const getFormValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => {
    return acc && acc[key];
  }, obj);
};

onMounted(() => {
  rows.value.forEach((row) => {
    for (let i = 1; i <= rows.value.length; i++) {
      const column = row[`column${i}`];

      if (column?.defined_key) {
        column.value = column.value ? column.value : getFormValue(props.possibleValues, column.defined_key);
      }

      if (Array.isArray(column?.value)) {
        column.value.forEach((o) => {
          if (o?.type === 'input' && o?.defined_key) {
            o.value = o.value ? o.value : getFormValue(props.possibleValues, o.defined_key);
          }
        })
      }
    }
  });
});

const cFirst = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
</script>
