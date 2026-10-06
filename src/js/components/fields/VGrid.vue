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
          <Plus class="w-3.5 h-3.5"/>
          Add Column
        </a>
      </div>
    </div>
    <div class="grid gap-2 w-full">
      <div
          v-for="(row, rowIndex) in grid"
          :key="'row-' + rowIndex"
          class="flex gap-2 relative"
          :class="{ 'pr-10': canRemoveRow }"
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
                <Handle class="cursor-pointer shrink-0"/>
                <div class="flex flex-row justify-between items-center w-full">
                  <span class="text-sm text-gray-900">{{ element.label }}</span>
                  <v-actions>
                    <template v-slot:dropdown>
                      <ul class="divide-y text-sm text-gray-700">
                        <li @click="edit(rowIndex)"
                            class="cursor-pointer flex items-center p-2 hover:bg-brand-50 gap-2 rounded-t">
                          <Edit01 class="w-4 h-4 shrink-0 text-gray-500"/>
                          <span>Edit</span>
                        </li>
                        <li @click="removeField(rowIndex, colIndex)"
                            class="cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-200">
                          <Trash class="w-3.5 h-4 shrink-0 text-gray-500"/>
                          <span>Remove this cell</span>
                        </li>
                        <li v-if="canRemoveRow"
                            @click="removeRow(rowIndex)"
                            class="cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50">
                          <Trash class="w-3.5 h-4 shrink-0 text-gray-500"/>
                          <span>Remove whole row</span>
                        </li>
                        <li @click="removeColumn(rowIndex, colIndex)"
                            class="cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded-b">
                          <Trash class="w-3.5 h-4 shrink-0 text-gray-500"/>
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
        <a v-if="canRemoveRow"
           class="cursor-pointer absolute top-1/2 right-0 -translate-y-1/2"
           title="Remove whole row"
           @click="removeRow(rowIndex)"
        >
          <Trash class="w-5 h-5 text-gray-400 hover:text-red-600"/>
        </a>
      </div>
    </div>
    <div class="mt-2 flex gap-2" v-if="allowAddRowAsTemplate">
      <a
          @click="addRow"
          class="cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      >
        <Plus class="w-3.5 h-3.5"/>
        Add Row
      </a>
    </div>
  </div>
</template>

<script>
import VToggle from "../common/VToggle.vue";
import draggable from "vuedraggable";
import VActions from "../common/VActions.vue";
import Plus from "@/icons/plus.svg";
import Handle from "@/icons/handle.svg";
import Edit01 from "@/icons/edit-01.svg";
import Trash from "@/icons/trash-01.svg";
import cloneDeep from "lodash.clonedeep";

export default {
  name: "VGrid",
  inject: ['bus'],
  components: {VActions, VToggle, draggable, Plus, Handle, Edit01, Trash},
  props: {
    modelValue: {
      type: Array,
      default: () => [
        [[]]
      ],
    },
    allowAddRow: {
      type: Boolean,
      default: true,
    },
    allowAddRowAsTemplate: {
      type: Boolean,
      default: true,
    },
    templateRowCount: {
      type: Number,
      default: null,
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
    canRemoveRow() {
      return this.grid.length > 1;
    },
  },
  mounted() {
    this.$emit("update:templateRowCount", this.grid.length);
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
        cancelCallback: () => {},
      });
    },
    removeField(rowIndex, colIndex) {
      this.grid[rowIndex][colIndex] = [];
    },
    removeColumn(rowIndex, colIndex) {
      this.grid.forEach((row) => {
        row.splice(colIndex, 1);
      });
      this.previousGrid = cloneDeep(this.grid);
    },
    removeRow(rowIndex) {
      if (!this.canRemoveRow) {
        return;
      }

      this.grid.splice(rowIndex, 1);
      this.previousGrid = cloneDeep(this.grid);
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
        this.$emit("update:templateRowCount", newGrid.length);
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