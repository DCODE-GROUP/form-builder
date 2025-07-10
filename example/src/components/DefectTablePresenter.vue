<template>
  <div class="border rounded-xl p-6">
    <h3 class="text-lg font-semibold text-gray-900">{{ data.label }}</h3>
    <div class="border rounded-lg overflow-hidden divide-y">
      <p class="flex justify-center items-center font-normal text-gray-900 text-sm bg-gray-50 px-4 py-3">Defect Type Identified</p>
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="w-full flex"
      >
        <div class="w-full">
          <p class="text-sm font-normal text-gray-600 py-[26px] px-4">{{ row.label }}</p>
        </div>
        <div class="max-w-[68px] w-full border-l flex justify-center items-center">
          <input
            type="checkbox"
            v-model="row.value"
            placeholder=""
            class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300 mt-2.5"
          />
        </div>
      </div>
    </div>
    <div
      v-if="data.hasOwnProperty('other_note_label')"
      class="w-full flex mt-4 border rounded-lg"
    >
      <div class="w-full">
        <p class="text-sm font-normal text-gray-600 py-[26px] px-4">{{ data.other_note_label }}</p>
      </div>
      <div class="max-w-[68px] w-full flex border-l justify-center items-center">
        <input
          type="checkbox"
          v-model="data.other_note_value"
          placeholder=""
          class="w-5 h-5 rounded text-brand-600 ring-brand-500 focus:ring-1 focus:ring-brand-300 border border-gray-300"
        />
      </div>
    </div>
    <div>
      <div
        v-for="(defect, index) in data.defects"
        class="relative rounded-lg border overflow-hidden mt-4"
      >
        <a
          @click="removeRow(index)"
          class="cursor-pointer absolute right-4 top-4 text-gray-600 hover:text-gray-900"
        >
          <Trash class="w-5 h-5"></Trash>
        </a>
        <div class="flex bg-gray-50 p-4">
          <p class="flex-1 text-center">Item No.</p>
          <p class="flex-1 text-center">Defect Type</p>
        </div>
        <div class="flex p-4 gap-8 border-b">
          <div class="flex-1">
            <input
              type="text"
              v-model="defect.item_no"
              placeholder=""
              class="w-full border rounded"
            />
          </div>
          <div class="flex-1">
            <input
              type="text"
              v-model="defect.defect_type"
              placeholder=""
              class="w-full border rounded"
            />
          </div>
        </div>
        <div class="flex p-4 border-b">
          <input-wrapper
            is-vertical
            field="state"
            :label-text="defect.description_label"
            class="w-full"
          >
            <textarea
              cols="30"
              rows="3"
              v-model="defect.description_value"
              placeholder="Enter your description"
            />
          </input-wrapper>
        </div>
        <div class="flex p-4">// Todo implement file upload here for defect attachments</div>
      </div>
      <a
        @click="addRow"
        class="mt-4 px-4 py-2 cursor-pointer flex justify-center rounded-lg border hover:bg-gray-100"
      >
        <Plus class="w-5 h-5"></Plus>
        Add defect
      </a>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Plus from "@s/assets/icons/plus.svg";
import Trash from "@s/assets/icons/trash-01.svg";
import InputWrapper from "form-builder/js/components/common/InputWrapper.vue";

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

const getFormValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => {
    return acc && acc[key];
  }, obj);
};

const rows = ref(props.modelValue.data.defect_types || []);
const data = ref(props.modelValue.data || []);

const addRow = () => {
  data.value.defects.push({
    item_no: "",
    defect_type: "",
    description_label: "Description",
    description_value: "",
  });
}

const removeRow = (index) => {
  data.value.defects.splice(index, 1);
};

onMounted(() => {
  rows.value.forEach((row) => {
    if (row?.defined_key) {
      row.value = getFormValue(props.possibleValues, row.defined_key);
    }
  });

  if (data.value?.defined_key) {
    data.value.other_note_value = getFormValue(props.possibleValues, data.value?.defined_key)
  }

  data.value.defects.forEach((o) => {
    Object.keys(o).forEach((key) => {
      if (key.includes('_define_key')) {
        o[key.split('_define_key')[0]] = getFormValue(props.possibleValues, o[key]);
      }
    })
  });
});
</script>
