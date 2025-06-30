<template>
  <div>
    <!-- Column Titles -->
    <div class="flex gap-4 items-center font-bold mb-4 text-sm">
      <div class="w-full text-center">Description</div>
      <div class="w-[400px] flex">
        <div class="flex-1 text-center">Yes</div>
        <div class="flex-1 text-center">No</div>
        <div class="flex-1 text-center">N/A</div>
      </div>
      <div class="max-w-[120px] w-full"></div>
    </div>
    <div class="space-y-4">
      <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="flex gap-4 items-start border-b pb-2">
        <!-- Column 1 -->
        <div class="w-full">
          <input
              type="text"
              v-model="row.column1.value"
              placeholder="Enter your heading"
              class="w-full p-2 border rounded"
          />
        </div>
        <div class="w-[400px] flex">
          <!-- Column 3 -->
          <div class="flex-1 text-center">
            <input
                type="checkbox"
                v-model="row.column2.value"
                placeholder=""
                class="w-4 h-4 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
            />
          </div>
          <!-- Column 4 -->
          <div class="flex-1 text-center">
            <input
                type="checkbox"
                v-model="row.column3.value"
                placeholder=""
                class="w-4 h-4 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
            />
          </div>
          <!-- Column 5 -->
          <div class="flex-1 text-center">
            <input
                type="checkbox"
                v-model="row.column4.value"
                placeholder=""
                class="w-4 h-4 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
            />
          </div>
        </div>
        <div class="max-w-[120px] w-full flex justify-end">
          <a
              @click="removeRow(rowIndex)"
              class="px-4 py-2 bg-brand-500 text-white rounded-full hover:bg-brand-600 cursor-pointer inline-block text-xs"
          >
            Remove Row
          </a>
        </div>
      </div>
    </div>
    <a
        @click="addRow"
        class="mt-4 px-4 py-2 bg-brand-500 text-white rounded-full hover:bg-brand-600 cursor-pointer inline-block"
    >
      Add Row
    </a>
  </div>
</template>
<script setup>
import { ref } from "vue";

const createRow = () => {
  return {
    column1: {
      name: "action",
      value: [],
    },
    column2: {
      name: "yes",
      type: "checkbox",
      value: null,
    },
    column3: {
      name: "no",
      type: "checkbox",
      value: null,
    },
    column4: {
      name: "na",
      type: "checkbox",
      value: null,
    },
    other: {
      name: "other",
      label: "If No or N/A, indicate reason below",
      value: null,
    }
  };
};

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const rows = ref(props.data);

const addRow = () => {
  rows.value.push(createRow());
};

const removeRow = (rowIndex) => {
  rows.value.splice(rowIndex, 1);
};
</script>