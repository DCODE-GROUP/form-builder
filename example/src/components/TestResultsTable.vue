<template>
  <div class="px-4">
    <input-wrapper
      is-vertical
      field="label"
      label-text="Heading"
      class="w-full mb-4"
    >
      <input
        type="text"
        v-model="data.label"
        placeholder="Enter your heading"
        class="w-full p-2 border rounded text-gray-900"
      />
    </input-wrapper>
    <div class="flex gap-4 items-center font-bold mb-4 text-sm">
      <div class="max-w-[300px] w-full">Name</div>
      <div class="w-full">Items</div>
      <div class="w-1/5 flex">Result</div>
      <div class="w-[120px]"></div>
    </div>
    <div class="space-y-4">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="flex gap-4 items-start border-b pb-2"
      >
        <div class="w-[300px]">
          <input
            type="text"
            v-model="row.column1.value"
            placeholder="Item No."
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="w-full">
          <div
            v-for="(input, index) in row.column2.value"
            :key="index"
            class="flex items-baseline gap-2 mb-2 border rounded-xl p-2 bg-gray-100"
          >
            <span> #{{ index + 1 }} </span>
            <input-wrapper
              is-vertical
              field="state"
              :label-text="cFirst(input.type)"
              class="w-full"
            >
              <input
                type="text"
                v-model="input.label"
                placeholder="Enter your heading"
                class="w-full p-2 border rounded text-gray-900"
              />
            </input-wrapper>
            <input-wrapper
              is-vertical
              field="state"
              label-text="Unit"
              class="w-full"
            >
              <select
                v-model="input.unit"
                class="w-full p-2 border rounded text-gray-900"
              >
                <option value="kPa">kPa</option>
                <option value="Secs">Secs</option>
              </select>
            </input-wrapper>
            <input-wrapper
                is-vertical
                field="state"
                label-text="Defined Key"
                class="w-full"
            >
              <input
                  type="text"
                  v-model="input.defined_key"
                  placeholder="Enter your heading"
                  class="w-full p-2 border rounded text-gray-900"
              />
            </input-wrapper>
            <Trash class="w-[40px] cursor-pointer text-gray-300 hover:text-gray-600" @click="removeItem(rowIndex, index)" />
          </div>
          <div class="flex gap-2">
            <a
              @click="addItem(rowIndex)"
              class="bg-brand-500 hover:bg-brand-700 cursor-pointer px-2 py-1 rounded-full text-white text-xs"
            >
              Add Item
            </a>
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
import {ref} from "vue";
import InputWrapper from "form-builder/js/components/common/InputWrapper.vue";
import Trash from "@s/assets/icons/trash-01.svg";

const createRow = () => {
  return {
    column1: {
      name: "item_no",
      value: null,
    },
    column2: {
      name: "heading",
      value: [],
    },
  };
}

const props = defineProps({
  component: {
    type: Object,
    default: () => ({}),
  },
});
const rows = ref(props.component.data);
const data = ref(props.component);

const addRow = () => {
  rows.value.push(createRow());
};

const removeRow = (rowIndex) => {
  rows.value.splice(rowIndex, 1);
};

const addItem = (rowIndex) => {
  rows.value[rowIndex].column2.value.push({
    label: "",
    type: "input",
    unit: "",
    value: null,
  });
};

const cFirst = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const removeItem = (rowIndex, inputIndex) => {
  rows.value[rowIndex].column2.value.splice(inputIndex, 1);
};
</script>
