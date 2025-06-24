<template>
  <div>
    <p v-if="field.hint" class="mb-4 font-regular text-gray-600">{{ field.hint }}</p>
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
                  :for="name"
                  v-if="cell[0].type === 'heading' && !cell[0]?.on_flight"
                  class="text-lg font-semibold !text-gray-900">
                {{ cell[0]?.label }}
              </label>
              <label
                  class="text-sm text-gray-700"
                  :for="name"
                  v-else-if="!['paragraph', 'checkbox'].includes(cell[0]?.type) && !cell[0]?.on_flight">
                <component v-if="cell[0]?.label" :is="fieldLabel(cell[0])">{{ cell[0]?.label }}
                  {{ cell[0]?.required ? '*' : '' }}
                </component>
                <span v-else>&nbsp;</span>
              </label>
              <component
                  :key="name + cell[0]?.name"
                  v-if="fieldComponent(cell[0]) && cell[0]?.name && !processing"
                  v-model="inputs[rowIndex][cell[0]?.name]"
                  :is="fieldComponent(cell[0])"
                  :name="`${name}[${rowIndex}][${cell[0].name}]`"
                  :type="cell[0].type"
                  :options="cell[0]?.options"
                  :placeholder="cell[0]?.placeholder"
                  :field="cell[0]"
                  :required="cell[0].hasOwnProperty('required') && cell[0].required"
                  :editable="editable"
              ></component>
              <slot></slot>
            </div>
          </div>
          <a v-if="canRemoveRow(rowIndex)"
             class="cursor-pointer absolute top-[-48px] right-[12px]"
             @click="removeRow(rowIndex)"
          >
            <MinusCircle class="w-5 h-5 text-brand-700 hover:text-brand-800"></MinusCircle>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-2 flex gap-2" v-if="field.allow_add_row">
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
    name: {},
    type: {},
    field: {},
    modelValue: {default: {}},
  },
  data() {
    return {
      inputs: cloneDeep(this.modelValue),
      processing: false,
      localField: {},
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
    this.localField = cloneDeep(this.field);
    this.initiateGrid(this.inputs?.length > this.grid.length);
  },
  watch: {
    inputs: {
      handler: function handler(newValue) {
        this.$emit("update:modelValue", newValue);
      },
      deep: true
    },
  },
  methods: {
    canRemoveRow(rowIndex) {
      return (rowIndex + 1) % this.originalGrid.length === 0 &&
          this.field.allow_add_row &&
          (rowIndex + 1 !== this.originalGrid.length || this.grid.length > this.originalGrid.length);
    },
    initiateGrid(populate = false) {
      this.grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell[0]?.name) {
            if (!this.inputs) {
              this.inputs = {};
            }

            if (!this.inputs.hasOwnProperty(rowIndex)) {
              this.inputs[rowIndex] = {};
            }

            if (!this.inputs[rowIndex].hasOwnProperty(cell[0].name)) {
              this.inputs[rowIndex][cell[0].name] = null;
            }
          }
        });
      });

      if (populate) {
        this.processing = true;
        this.inputs.filter((value, index) => (index + 1) > this.grid.length).forEach((savedRow) => {
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
        this.grid.splice(rowIndex - 1, length);
        if (isOriginalGrid) {
          for (let i = 0; i < length; i++) {
            this.grid[i].forEach(cell => {
              cell.forEach(item => {
                item.on_flight = false;
              });
            });
          }
        }

        if (this.inputs.hasOwnProperty(rowIndex)) {
          for (let i = (rowIndex - 1); i < ((rowIndex - 1) + length); i++) {
            delete this.inputs[i];
          }
        }

        //Re-index the inputs to ensure proper order
        this.inputs = Object.keys(this.inputs)
            .sort((a, b) => a - b)
            .reduce((acc, key, index) => {
              acc[index] = this.inputs[key];
              return acc;
            }, {});
      }
    },
    addRow() {
      if (!this.localField.allow_add_row) {
        return;
      }

      if (this.grid && this.grid.length) {
        this.processing = true;
        const originalGrid = this.grid.filter(row =>
            row.some(cell => cell.some(item => !item?.on_flight))
        );

        originalGrid.forEach((row) => {
          const newRow = cloneDeep(row.map((o) => {
            return toRaw(o);
          }));

          this.grid.push(newRow.map((o) => {
            const id = Math.floor(Math.random() * Date.now());
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
      if (!hasItem && colIndex ===! this.getLatestColumnIndex) {
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