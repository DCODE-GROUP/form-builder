<template>
  <div>
    <v-toggle
        class="mt-3 mb-1"
        title="Allow form users to add rows when filling out the form"
        v-model="localAllowToAdd"
    />
    <div class="flex justify-between py-2">
      <h4 class="text-base font-semibold text-gray-900">Define columns/rows</h4>
      <div>
        <a
            @click="addColumn"
            class="cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327" stroke="#931C61" stroke-width="1.66667"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add Column
        </a>
      </div>
    </div>
    <div class="grid gap-2 w-full">
      <div
          v-for="(row, rowIndex) in grid"
          :key="'row-' + rowIndex"
          class="flex gap-2 relative"
      >
        <div v-for="(cell, colIndex) in row" :key="'cell-' + rowIndex + '-' + colIndex"
             :class="getClassForItem(grid[rowIndex], colIndex)">
          <draggable
              item-key="id"
              v-model="grid[rowIndex][colIndex]"
              @add="handleAdd($event, rowIndex, colIndex)"
              @drag="onDrag"
              swap-threshold="0.65"
              :group="{ name: `${rowIndex} - ${colIndex}`, pull: true, put: true }"
              class="w-full h-full items-center justify-center"
              ghost-class="dragging-item"
              :class="{'flex': !grid[rowIndex][colIndex].length}"
          >
            <template #item="{element}">
              <div class="pl-1 pr-3 py-2.5 w-full bg-white rounded-lg flex items-center gap-2">
                <svg class="cursor-pointer" width="8" height="13" viewBox="0 0 7 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="2" height="2" fill="#667085"/>
                  <rect x="4" y="1" width="2" height="2" fill="#667085"/>
                  <rect x="1" y="4" width="2" height="2" fill="#667085"/>
                  <rect x="4" y="4" width="2" height="2" fill="#667085"/>
                  <rect x="1" y="7" width="2" height="2" fill="#667085"/>
                  <rect x="1" y="10" width="2" height="2" fill="#667085"/>
                  <rect x="4" y="7" width="2" height="2" fill="#667085"/>
                  <rect x="4" y="10" width="2" height="2" fill="#667085"/>
                </svg>
                <div class="flex flex-row justify-between items-center w-full">
                  <span class="text-sm text-gray-900">{{ element.label }}</span>
                  <v-actions>
                    <template v-slot:dropdown>
                      <ul class="divide-y text-sm text-gray-700">
                        <li @click="edit(rowIndex)"
                            class="cursor-pointer flex items-center p-2 hover:bg-brand-50 gap-2 rounded-t">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.66602 14.3334L5.36553 12.9105C5.60216 12.8195 5.72047 12.774 5.83116 12.7146C5.92948 12.6618 6.02322 12.6009 6.11138 12.5324C6.21063 12.4554 6.30027 12.3658 6.47954 12.1865L13.9994 4.66671C14.7357 3.93033 14.7357 2.73642 13.9994 2.00004C13.263 1.26366 12.0691 1.26366 11.3327 2.00004L3.81287 9.51985C3.6336 9.69912 3.54396 9.78876 3.46694 9.88801C3.39853 9.97617 3.33762 10.0699 3.28484 10.1682C3.22542 10.2789 3.17991 10.3972 3.0889 10.6339L1.66602 14.3334ZM1.66602 14.3334L3.0381 10.766C3.13628 10.5107 3.18537 10.3831 3.26958 10.3246C3.34316 10.2735 3.43422 10.2542 3.52221 10.271C3.6229 10.2902 3.7196 10.3869 3.913 10.5803L5.41906 12.0864C5.61246 12.2798 5.70916 12.3765 5.72839 12.4772C5.7452 12.5652 5.72587 12.6562 5.67478 12.7298C5.61631 12.814 5.48867 12.8631 5.2334 12.9613L1.66602 14.3334Z"
                                stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>Edit</span>
                        </li>
                        <li @click="removeField(rowIndex, colIndex)"
                            class="cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-200">
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992"
                                stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>Remove this cell</span>
                        </li>
                        <li @click="removeColumn(rowIndex, colIndex)"
                            class="cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded-b">
                          <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992"
                                stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>Remove whole column</span>
                        </li>
                      </ul>
                    </template>
                  </v-actions>
                </div>
              </div>
            </template>
          </draggable>
          <p v-show="!grid[rowIndex][colIndex].length"
             class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-600 z-0">
            <span v-if="!isDragging">Drag a layout/component in</span>
          </p>
        </div>
      </div>
    </div>
    <div class="mt-2 flex gap-2" v-if="allowAddRowAsTemplate">
      <a
          @click="addRow"
          class="cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327" stroke="#931C61" stroke-width="1.66667"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add Row
      </a>
    </div>
  </div>
</template>

<script>
import VToggle from "../common/VToggle.vue";
import draggable from "vuedraggable";
import VActions from "../common/VActions.vue";
import {cloneDeep} from "lodash";

export default {
  name: "VGrid",
  inject: ['bus'],
  components: {VActions, VToggle, draggable},
  props: {
    modelValue: {
      type: Array,
      default: () => [
        [[], []]
      ],
    },
    allowAddRow: {
      type: Boolean,
      default: true,
    },
    allowAddRowAsTemplate: {
      type: Boolean,
      default: false,
    },
    isDragging: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      grid: JSON.parse(JSON.stringify(this.modelValue)),
      previousGrid: JSON.parse(JSON.stringify(this.modelValue)),
      localAllowToAdd: this.allowAddRow,
    };
  },
  computed: {
    canAddColumn() {
      return this.grid[0].length < 7;
    },
  },
  methods: {
    getClassForItem(rowItems, colIndex) {
      const hasItem = rowItems[colIndex].some((item) => item.hasOwnProperty('label'))
      if (!hasItem) {
        return 'relative text-center flex items-center justify-center border border-dashed border-gray-300 rounded-lg w-full min-h-[150px]';
      }

      return 'relative text-center border-gray-300 rounded-lg w-full';
    },
    edit(rowIndex) {
      this.bus?.$emit("openModal", {
        componentName: "EditFieldGrid",
        componentData: {
          fields: this.grid[rowIndex],
          index: rowIndex,
        },
        scrollable: true,
        isAsyncCallback: true,
        callback: async (updatedFields) => {
          this.grid[rowIndex] = updatedFields;
        },
        cancelCallback: () => {
        },
      });
    },
    removeField(rowIndex, colIndex) {
      this.grid[rowIndex][colIndex] = [];
    },
    removeColumn(rowIndex, colIndex) {
      this.grid.forEach((row) => {
        row.splice(colIndex, 1);
      });
    },
    findFieldPosition(movingField) {
      for (let rowIndex = 0; rowIndex < this.previousGrid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < this.previousGrid[rowIndex].length; colIndex++) {
          const cell = this.previousGrid[rowIndex][colIndex];
          if (Array.isArray(cell) && cell.some(field => field.id === movingField.id)) {
            return { rowIndex, colIndex };
          }
        }
      }
      return null;
    },
    onDrag() {
      this.previousGrid = cloneDeep(this.grid);
    },
    handleAdd($event, rowIndex, colIndex) {
      const movingField = cloneDeep($event.item._underlying_vm_);
      const originalPosition = this.findFieldPosition(movingField);
      const currentField = this.previousGrid[rowIndex][colIndex];
      if (movingField.type === 'grid') {
        this.grid[rowIndex][colIndex] = [];
        return;
      }
      if (this.grid[rowIndex][colIndex].length > 1) {
        if (originalPosition && Object.keys(originalPosition).length && currentField[0].id !== movingField.id) {
          this.grid[originalPosition.rowIndex][originalPosition.colIndex] = [];
          this.grid[originalPosition.rowIndex][originalPosition.colIndex].push(currentField[0]);
        }

        this.grid[rowIndex][colIndex] = [];
        this.grid[rowIndex][colIndex].push(movingField);
      }

      this.previousGrid = cloneDeep(this.grid);
    },
    item(rowIndex, colIndex) {
      return this.grid[rowIndex][colIndex]
    },
    addRow() {
      const newRow = Array(this.grid[0].length).fill([]);
      this.grid.push(newRow);
    },
    addColumn() {
      if (this.canAddColumn) {
        this.grid.forEach((row) => {
          row.push([]);
        });
      }
    },
  },
  watch: {
    grid: {
      deep: true,
      handler(newGrid) {
        this.$emit("update:modelValue", newGrid);
      },
    },
    localAllowToAdd: {
      handler(newValue) {
        this.$emit("update:allowAddRow", newValue);
      },
    },
  },
};
</script>