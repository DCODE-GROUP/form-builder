<template>
  <div class="border rounded-xl p-6">
    <h3 class="!text-lg font-semibold text-gray-900">{{ field.label }}</h3>
    <div class="space-y-3">
      <div v-for="(row, rowIndex) in rows" :key="rowIndex"
           class="w-full overflow-hidden flex flex-col rounded-lg border border-gray-200">
        <div class="flex p-3 text-xs">
          {{ row.column1.value }}
        </div>
        <div class="w-full text-sm h-full">
          <div v-for="(input, index) in row.column2.value" :key="index" class="flex">
            <div class="w-full bg-gray-50 flex items-center text-xs px-3 py-6 text-gray-900">{{ input.label }}</div>
            <div class="max-w-[120px] w-full flex items-center p-3 justify-between border-t">
              <input
                  type="text"
                  v-model="input.value"
                  placeholder=""
                  class="!w-[64px] p-2 border rounded !text-gray-900 !text-normal"
              />
              <p class="text-xs">{{ input.unit }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  field: {
    type: Object,
    default: () => ({}),
  },
});
const rows = ref(props.field?.data);
</script>