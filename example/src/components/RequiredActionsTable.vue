<script setup>
import { ref } from "vue";
import Trash from "@s/assets/icons/trash-01.svg";
import InputWrapper from "form-builder/js/components/common/InputWrapper.vue";

const createRow = () => {
  return {
    column1: {
      name: "item_no",
      value: null,
    },
    column2: {
      name: "action",
      value: [],
    },
    column3: {
      name: "pass",
      type: "checkbox",
      value: null,
    },
    column4: {
      name: "fail",
      type: "checkbox",
      value: null,
    },
    column5: {
      name: "na",
      type: "checkbox",
      value: null,
    },
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

const addInput = (rowIndex) => {
  rows.value[rowIndex].column2.value.push({
    label: "",
    type: "input",
    value: null,
  });
};

const addHeading = (rowIndex) => {
  rows.value[rowIndex].column2.value.push({
    type: "heading",
    label: "",
  });
};

const cFirst = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const removeInput = (rowIndex, inputIndex) => {
  rows.value[rowIndex].column2.value.splice(inputIndex, 1);
};
</script>

<template>
  <div>
    <!-- Column Titles -->
    <div class="flex gap-4 items-center font-bold mb-4 text-sm">
      <div class="w-[80px] text-center">Item No.</div>
      <div class="w-full text-center">Action</div>
      <div class="w-[400px] flex">
        <div class="flex-1 text-center">Pass</div>
        <div class="flex-1 text-center">Fail</div>
        <div class="flex-1 text-center">N/A</div>
      </div>
      <div class="max-w-[120px] w-full"></div>
    </div>
    <div class="space-y-4">
      <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="flex gap-4 items-start border-b pb-2">
        <!-- Column 1 -->
        <div class="w-[80px]">
          <input
              type="text"
              v-model="row.column1.value"
              placeholder="Item No."
              class="w-full p-2 border rounded"
          />
        </div>
        <!-- Column 2 (Multiple Inputs) -->
        <div class="w-full">
          <div v-for="(input, index) in row.column2.value" :key="index" class="flex items-baseline gap-2 mb-2 border rounded-xl p-2 bg-gray-100">
            <span> #{{ index + 1 }} </span>
            <input-wrapper is-vertical field="state" :label-text="cFirst(input.type)" class="w-full">
              <input
                  type="text"
                  v-model="input.label"
                  :placeholder="input.type === 'heading' ? 'Enter your heading' : 'Enter your input label'"
                  class="w-full p-2 border rounded text-gray-900"
              />
            </input-wrapper>
            <Trash class="w-5 h-5 cursor-pointer text-gray-300 hover:text-gray-600" @click="removeInput(rowIndex, index)" />
          </div>
          <div class="flex gap-2">
            <a
                @click="addInput(rowIndex)"
                class="bg-brand-500 hover:bg-brand-700 cursor-pointer px-2 py-1 rounded-full text-white text-xs"
            >
              Add Input
            </a>
            <a
                @click="addHeading(rowIndex)"
                class="bg-brand-500 hover:bg-brand-700 cursor-pointer px-2 py-1 rounded-full text-white text-xs"
            >
              Add Heading
            </a>
          </div>
        </div>
        <div class="w-[400px] flex">
          <!-- Column 3 -->
          <div class="flex-1 text-center">
            <input
                type="checkbox"
                v-model="row.column3.value"
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
                v-model="row.column3.value"
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