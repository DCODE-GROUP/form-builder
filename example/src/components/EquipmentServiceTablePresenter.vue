<template>
  <div class="border rounded-xl p-6">
    <h3 class="text-lg font-semibold text-gray-900">{{ modelValue.label }}</h3>
    <div class="rounded-lg border border-gray-200 overflow-hidden">
      <div>
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="w-full flex flex-col divide-y"
        >
          <div class="flex font-medium text-xs bg-gray-50 py-[21px] px-3">
            <div class="w-full"></div>
            <div class="max-w-[200px] w-full pl-3">
              <div class="flex gap-[38px] justify-start items-center h-full">
                <div class="flex-1">Yes</div>
                <div class="flex-1">No</div>
                <div class="flex-1">N/A</div>
              </div>
            </div>
          </div>
          <div class="w-full flex">
            <div class="flex pl-4 w-full">
              <div class="!text-xs !text-gray-900 py-[27px]">{{ row.column1.value }}</div>
            </div>
            <div class="max-w-[200px] w-full mr-3 border-l pl-3">
              <div class="flex gap-[38px] justify-start items-center h-full">
                <div class="flex-1">
                  <input
                    type="radio"
                    :value="row.column2.name"
                    v-model="row.column2.value"
                    :checked="row.column2.value"
                    :name="`${rowIndex} - ${modelValue.label}`"
                    class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
                  />
                </div>
                <div class="flex-1">
                  <input
                    type="radio"
                    :value="row.column3.name"
                    v-model="row.column3.value"
                    :checked="row.column3.value"
                    :name="`${rowIndex} - ${modelValue.label}`"
                    class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
                  />
                </div>
                <div class="flex-1">
                  <input
                    type="radio"
                    :value="row.column4.name"
                    v-model="row.column4.value"
                    :checked="row.column4.value"
                    :name="`${rowIndex} - ${modelValue.label}`"
                    class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="bg-gray-50 px-4 py-[13px] text-center text-xs text-gray-900">{{ row.other.label }}</p>
            <input
              type="text"
              v-model="row.other.value"
              placeholder=""
              class="!w-fill p-2 m-4 border rounded text-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

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
      for (let i = 1; i <= 5; i++) {
        const column = row.hasOwnProperty(`column${i}`) ? row[`column${i}`] : (row.hasOwnProperty('other') ? row.other : null);

        if (column?.defined_key) {
          column.value = getFormValue(props.possibleValues, column.defined_key);
        }
      }
    }
  });
});
</script>
