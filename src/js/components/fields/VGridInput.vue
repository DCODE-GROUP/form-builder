<template>
  <div>
    <p v-if="modelValue.hint" class="mb-4 font-regular text-gray-600">{{ modelValue.hint }}</p>
    <div class="grid gap-4 w-full">
      <div
          v-for="(row, rowIndex) in grid"
          :key="'row-' + rowIndex"
      >
        <div v-if="row.filter(o => o.length).length" class="flex gap-2 relative">
          <div
              v-for="(cell, colIndex) in row"
              :key="'cell-' + rowIndex + '-' + colIndex + '-' + cell[0]?.name"
              :class="getClassForItem(grid[rowIndex], colIndex) + (canRemoveRow(rowIndex) ? ' pr-[40px]' : '')">
            <div
                v-if="cell[0]?.type"
                class="v-field"
                :class="fieldClass(cell[0])">
              <label
                  :for="modelValue.name"
                  v-if="cell[0].type === 'heading' && !cell[0]?.on_flight"
                  class="text-lg font-semibold !text-gray-900">
                {{ cell[0]?.label }}
              </label>
              <label
                  class="text-sm text-gray-700"
                  :for="modelValue.name"
                  v-else-if="!['paragraph', 'checkbox'].includes(cell[0]?.type) && !cell[0]?.on_flight">
                <component v-if="cell[0]?.label" :is="fieldLabel(cell[0])">{{ cell[0]?.label }}
                  {{ cell[0]?.required ? '*' : '' }}
                </component>
                <span v-else>&nbsp;</span>
              </label>
              <component
                  :key="modelValue.name + cell[0]?.name"
                  v-if="fieldComponent(cell[0]) && cell[0]?.name && !processing"
                  v-model="grid[rowIndex][colIndex][0]"
                  :is="fieldComponent(cell[0])"
                  :editable="editable"
              ></component>
              <p v-if="getError(rowIndex, colIndex)" class="text-red-700 text-xs mt-1">{{ getError(rowIndex, colIndex) }}</p>
              <slot></slot>
            </div>
          </div>
          <a v-if="canRemoveRow(rowIndex)"
             class="cursor-pointer absolute top-2.5 right-[12px]"
             @click="removeRow(rowIndex)"
          >
            <MinusCircle class="w-5 h-5 text-brand-700 hover:text-brand-800"></MinusCircle>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-2 flex gap-2" v-if="modelValue.allow_add_row && editable">
      <a
          @click="addRow"
          class="cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      >
        <Plus class="w-5 h-5"></Plus>
        Add Row
      </a>
    </div>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";
import {markRaw, toRaw} from "vue";
import SingleCheckbox from "./SingleCheckbox.vue";
import CheckGroup from "./CheckGroup.vue";
import VDatePicker from "./VDatepicker.vue";
import VAddress from "./VAddress.vue";
import FileUpload from "./FileUpload.vue";
import Input from "./Input.vue";
import Select from "./Select.vue";
import SignaturePad from "./SignaturePad.vue";
import Textarea from "./Textarea.vue";
import Paragraph from "./Paragraph.vue";
import MinusCircle from "@/icons/minus-circle.svg";
import Plus from "@/icons/plus.svg";
import cloneDeep from "lodash.clonedeep";

export default {
  name: "VGridInput",
  mixins: [BaseField],
  components: {
    MinusCircle,
    Plus,
  },
  props: {
    modelValue: {default: []},
  },
  data() {
    return {
      localField: this.modelValue,
      processing: false,
      groupSize: 0,
      componentTypes: {
        checkbox: markRaw(SingleCheckbox),
        "check-group": markRaw(CheckGroup),
        datepicker: markRaw(VDatePicker),
        "file-upload": markRaw(FileUpload),
        number: markRaw(Input),
        "radio-group": markRaw(CheckGroup),
        select: markRaw(Select),
        signature: markRaw(SignaturePad),
        text: markRaw(Input),
        textarea: markRaw(Textarea),
        paragraph: markRaw(Paragraph),
        address: markRaw(VAddress),
      },
    };
  },
  computed: {
    grid() {
      return this.localField.grid;
    },
    getLatestColumnIndex() {
      return Math.max(...this.grid.map(row => row.length)) - 1;
    },
    isLatestColumnEmpty() {
      return this.grid.every(row => {
        const lastColumn = row[row.length - 1];
        return !lastColumn || lastColumn.length === 0;
      });
    },
  },
  created() {
    this.localField = this.modelValue;
    this.groupSize = this.calculateGroupSize();
  },
  watch: {
    'localField.template_row_count'(count) {
      if (count) {
        this.groupSize = count;
      }
    },
  },
  methods: {
    calculateGroupSize() {
      if (!this.grid?.length) {
        return 0;
      }

      if (this.localField.template_row_count) {
        return this.localField.template_row_count;
      }

      let size = 0;
      for (const row of this.grid) {
        if (this.isAddedRow(row)) {
          break;
        }
        size++;
      }

      return size || this.grid.length;
    },
    isAddedRow(row) {
      const fields = row.flatMap(cell => cell).filter(Boolean);

      if (!fields.length) {
        return false;
      }

      return fields.every(item => item.on_flight === true);
    },
    rowHasContent(rowIndex) {
      const row = this.grid[rowIndex];
      return row && row.some(cell => cell.length > 0);
    },
    getTemplateRows() {
      return this.grid.slice(0, this.groupSize);
    },
    canRemoveRow(rowIndex) {
      if (!this.editable || !this.modelValue.allow_add_row || !this.groupSize) {
        return false;
      }

      if (this.grid.length <= this.groupSize || rowIndex < this.groupSize || rowIndex >= this.grid.length) {
        return false;
      }

      return this.isLastVisibleRowOfGroup(rowIndex);
    },
    isLastVisibleRowOfGroup(rowIndex) {
      const groupStart = Math.floor(rowIndex / this.groupSize) * this.groupSize;
      const groupEnd = groupStart + this.groupSize - 1;

      for (let i = groupEnd; i >= groupStart; i--) {
        if (this.rowHasContent(i)) {
          return rowIndex === i;
        }
      }

      return rowIndex === groupEnd;
    },
    getGroupStartIndex(rowIndex) {
      return Math.floor(rowIndex / this.groupSize) * this.groupSize;
    },
    initiateGrid(populate = false) {
      this.grid?.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell[0]?.name) {
            if (!this.localField) {
              this.localField = {
                grid: []
              };
            }

            if (!this.localField.hasOwnProperty('grid')) {
              this.localField.grid = [];
            }

            if (!this.localField.grid.hasOwnProperty(rowIndex)) {
              this.localField.grid[rowIndex] = {};
            }
          }
        });
      });

      if (populate) {
        this.processing = true;
        this.localField.filter((value, index) => (index + 1) > this.grid.length).forEach((savedRow) => {
          this.getTemplateRows().forEach((row) => {
            const newRow = cloneDeep(row.map((o) => {
              return toRaw(o);
            })).map((r) => {
              Object.keys(savedRow)
                  .forEach((key) => {
                    if (r[0].name === this.getTemplateFieldName(key)) {
                      r[0].name = key;
                    }
                  });

              return r;
            });

            this.grid.push(newRow.map((o) => {
              const id = Math.floor(Math.random() * Date.now());
              if (o[0]) {
                o[0].on_flight = true;
                if (o[0].id) {
                  o[0].id = id;
                }
              }

              return o;
            }));
          });
        })

        this.processing = false;
      }
    },
    getTemplateFieldName(str) {
      const lastUnderscoreIndex = str.lastIndexOf("_");
      if (lastUnderscoreIndex === -1) {
        return str;
      }
      return str.substring(0, lastUnderscoreIndex);
    },
    removeRow(rowIndex) {
      if (!this.canRemoveRow(rowIndex)) {
        return;
      }

      const groupStartIndex = this.getGroupStartIndex(rowIndex);

      if (groupStartIndex < 0 || groupStartIndex >= this.grid.length) {
        return;
      }

      this.grid.splice(groupStartIndex, this.groupSize);
    },
    addRow() {
      if (!this.localField.allow_add_row) {
        return;
      }

      if (this.grid && this.grid.length && this.groupSize) {
        this.processing = true;
        const templateRows = cloneDeep(this.getTemplateRows().map((row) => {
          return row.map((o) => toRaw(o));
        }));

        templateRows.forEach((row) => {
          const newRow = cloneDeep(row);

          this.grid.push(newRow.map((o) => {
            if (!o[0]) {
              return o;
            }

            const id = Math.floor(Math.random() * Date.now());
            o[0].value = null;
            o[0].on_flight = true;
            if (o[0].id) {
              o[0].id = id;
              o[0].name = `${o[0].name}_${id}`;
            }

            return o;
          }));
        });

        this.initiateGrid();

        this.processing = false;
      }
    },
    fieldLabel(cell) {
      return cell?.type === "heading" ? "h4" : "span";
    },
    fieldClass(cell) {
      return ["cell", `-type-${cell?.type}`].join(" ");
    },
    getError(rowIndex, colIndex) {
      const key = `fields.${this.index}.grid.${rowIndex}.${colIndex}.0.value`;
      if (!this.validationErrors.hasOwnProperty(key)) {
        return null;
      }

      return this.validationErrors[key][0];
    },
    fieldComponent(cell) {
      if (!cell?.type) {
        return '';
      }

      return this.componentTypes[cell.type];
    },
    getClassForItem(rowItems, colIndex) {
      const hasItem = rowItems[colIndex].some((item) => item.hasOwnProperty('label'))
      if (!hasItem && colIndex === !this.getLatestColumnIndex) {
        return 'relative flex items-center justify-center rounded-lg w-full';
      }

      if (!hasItem && colIndex === this.getLatestColumnIndex && this.isLatestColumnEmpty) {
        return '';
      }

      return 'relative rounded-lg w-full';
    },

  }
};
</script>