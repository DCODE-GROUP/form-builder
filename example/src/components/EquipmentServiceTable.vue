<template>
  <div>
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
      <div class="w-full text-center">Description</div>
      <div class="w-[400px] flex">
        <div class="flex-1 text-center">Yes</div>
        <div class="flex-1 text-center">No</div>
        <div class="flex-1 text-center">N/A</div>
      </div>
      <div class="max-w-[120px] w-full"></div>
    </div>
    <div class="space-y-4">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="flex gap-4 items-start border-b pb-2"
      >
        <div class="w-full">
          <input
            type="text"
            v-model="row.column1.value"
            placeholder="Enter your heading"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="w-[400px] flex">
          <div class="flex-1 text-center">
            <input
              type="checkbox"
              v-model="row.column2.value"
              placeholder=""
              class="w-4 h-4 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
            />
          </div>
          <div class="flex-1 text-center">
            <input
              type="checkbox"
              v-model="row.column3.value"
              placeholder=""
              class="w-4 h-4 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
            />
          </div>
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

    <vue-json-pretty class="mb-smSpace" :deep="1" :editable="true" :show-icon="true" :path="'res'" :data="rows"> </vue-json-pretty>
  </div>
</template>
<script setup>
import { ref } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

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
</script>
