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
              :class="getClassForItem(grid[rowIndex], colIndex) + (canRemove ? ' pr-[40px]' : '')">
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
              <slot></slot>
            </div>
          </div>
          <a v-if="canRemoveRow(rowIndex) && originalGrid"
             class="cursor-pointer absolute top-2.5 right-[12px]"
             :class="{'!top-[38px]': rowIndex === 0}"
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
import MinusCircle from "@r/icons/minus-circle.svg";
import Plus from "@r/icons/plus.svg";
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
    originalGrid() {
      return this.grid.filter(row =>
          row.some(cell => cell.some(item => !item?.on_flight))
      );
    },
    canRemove() {
      return this.grid.some((row, rowIndex) => this.canRemoveRow(rowIndex));
    },
  },
  created() {
    this.localField = this.modelValue;
    // this.initiateGrid(this.grid && this.localField?.length > this.grid.length);
  },
  methods: {
    canRemoveRow(rowIndex) {
      return this.editable && (rowIndex + this.originalGrid.length) % this.originalGrid.length === 0 &&
          this.modelValue.allow_add_row && this.grid.length > this.originalGrid.length;
    },
    initiateGrid(populate = false) {
      this.grid?.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell[0]?.name) {
            if (!this.localField) {
              this.localField = [];
            }

            if (!this.localField.hasOwnProperty(rowIndex)) {
              this.localField[rowIndex] = {};
            }

            if (!this.localField[rowIndex].hasOwnProperty(cell[0].name)) {
              // this.localField[rowIndex][colIndex][0] = null;
            }
          }
        });
      });

      if (populate) {
        this.processing = true;
        this.localField.filter((value, index) => (index + 1) > this.grid.length).forEach((savedRow) => {
          this.originalGrid.forEach((row) => {
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
              if (o[0]?.id) {
                o[0].id = id;
                o[0].on_flight = true;
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
      if (rowIndex >= 0 && rowIndex < this.grid.length) {
        const isOriginalGrid = this.grid[rowIndex].some(cell =>
            cell.some(item => !item.hasOwnProperty('on_flight') || !item.on_flight)
        );

        const length = this.originalGrid.length;
        this.grid.splice(rowIndex, length);
        if (isOriginalGrid) {
          for (let i = 0; i < length; i++) {
            this.grid[i].forEach(cell => {
              cell.forEach(item => {
                item.on_flight = false;
              });
            });
          }
        }

        if (this.localField.hasOwnProperty(rowIndex)) {
          this.localField.splice(rowIndex, length);
        }
      }
    },
    addRow() {
      if (!this.localField.allow_add_row) {
        return;
      }

      if (this.grid && this.grid.length) {
        this.processing = true;
        const originalGrid = cloneDeep(this.grid.filter(row =>
            row.some(cell => cell.some(item => !item?.on_flight))
        ));

        originalGrid.forEach((row) => {
          const newRow = cloneDeep(row.map((o) => {
            return toRaw(o);
          }));

          this.grid.push(newRow.map((o) => {
            const id = Math.floor(Math.random() * Date.now());
            o[0].value = null;
            if (o[0]?.id) {
              o[0].id = id;
              o[0].on_flight = true;
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