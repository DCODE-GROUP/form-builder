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
      <div class="grid grid-cols-2 gap-2 w-full">
        <p>Defect Type</p>
        <p>Defined Key</p>
      </div>
      <div class="max-w-[100px] w-full"></div>
      <div class="max-w-[120px] w-full"></div>
    </div>
    <div class="space-y-2">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="flex gap-4 items-start justify-center border-b pb-2"
      >
        <div class="grid grid-cols-2 gap-2 w-full">
          <input
            type="text"
            v-model="row.label"
            placeholder="Enter your type"
            class="w-full p-2 border rounded"
          />
          <input
              v-if="row.hasOwnProperty('defined_key')"
              type="text"
              v-model="row.defined_key"
              placeholder="Enter your type"
              class="w-full p-2 border rounded"
          />
        </div>
        <div class="max-w-[100px] w-full">
          <input
            type="checkbox"
            v-model="row.value"
            placeholder=""
            class="w-4 h-4 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300 mt-2.5"
          />
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
    <div
      v-if="data.hasOwnProperty('other_note_label')"
      class="w-full flex mt-4"
    >
      <div class="w-full">
        <input
          type="text"
          v-model="data.other_note_label"
          placeholder="Enter your type"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="max-w-[252px] w-full flex">
        <input
          type="checkbox"
          v-model="data.other_note_value"
          placeholder=""
          class="mt-2.5 ml-4 w-4 h-4 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
        />
      </div>
    </div>
    <vue-json-pretty :deep="1" class="mb-smSpace" :editable="true" :show-icon="true" :path="'res'" :data="defects"> </vue-json-pretty>
  </div>
</template>
<script setup>
import {ref} from "vue";
import InputWrapper from "@s/components/InputWrapper.vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

const createRow = () => {
  return {
    label: "",
    value: null,
    defined_key: null,
  };
};

const props = defineProps({
  component: {
    type: Object,
    default: () => ({}),
  },
});
const rows = ref(props.component.data.defect_types || []);
const data = ref(props.component.data || []);
const defects = ref(data.value.defects || []);

const addRow = () => {
  rows.value.push(createRow());
};

const removeRow = (rowIndex) => {
  rows.value.splice(rowIndex, 1);
};
</script>
