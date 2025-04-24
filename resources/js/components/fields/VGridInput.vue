<template>
  <div>
    <p v-if="field.hint" class="mb-4 font-regular text-gray-600">{{ field.hint }}</p>
    <div class="grid gap-4 w-full">
      <template
          v-for="(row, rowIndex) in grid"
          :key="'row-' + rowIndex"
      >
        <div v-if="row.filter(o => o.length).length" class="flex gap-2 relative">
          <div
              v-for="(cell, colIndex) in row"
              :key="'cell-' + rowIndex + '-' + colIndex"
              :class="getClassForItem(grid[rowIndex], colIndex)">
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
                  v-if="fieldComponent(cell[0]) && cell[0]?.name"
                  v-model="inputs[cell[0]?.name]"
                  :is="fieldComponent(cell[0])"
                  :name="cell[0].name"
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
        </div>
      </template>
    </div>
    <div class="mt-2 flex gap-2" v-if="field.allow_add_row">
      <a
          @click="addRow"
          class="cursor-pointer text-brand flex items-center text-sm font-semibold hover:bg-brand-200 p-1 gap-1 rounded"
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
import BaseField from "../mixins/BaseField";
import {markRaw, toRaw} from "vue";
import SingleCheckbox from "./SingleCheckbox.vue";
import CheckGroup from "./CheckGroup.vue";
import VDatePicker from "./VDatepicker.vue";
import FileUpload from "./FileUpload.vue";
import Input from "./Input.vue";
import Select from "./Select.vue";
import SignaturePad from "./SignaturePad.vue";
import Textarea from "./Textarea.vue";
import Paragraph from "./Paragraph.vue";
import {cloneDeep} from "lodash";

export default {
  name: "VGridInput",
  mixins: [BaseField],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: {default: null},
  },
  data() {
    return {
      inputs: {},
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
      },
    };
  },
  computed: {
    grid() {
      return this.field.grid;
    },
    getLatestColumnIndex() {
      return Math.max(...this.grid.map(row => row.length)) - 1;
    },
    isLatestColumnEmpty() {
      return this.grid.every(row => {
        const lastColumn = row[row.length - 1];
        return !lastColumn || lastColumn.length === 0;
      });
    }
  },
  created() {
    this.input = this.modelValue;
  },
  watch: {
    modelValue() {
      this.input = this.modelValue;
    },
    input() {
      this.$emit("update:modelValue", this.input);
    },
  },
  methods: {
    addRow() {
      if (!this.field.allow_add_row) {
        return;
      }

      if (this.field.grid && this.field.grid.length) {
        const filteredGrid = this.field.grid.filter(row =>
            row.some(cell => cell.some(item => !item?.on_flight))
        );

        filteredGrid.forEach((row) => {
          const newRow = cloneDeep(row.map((o) => {
            return toRaw(o);
          }));
          this.field.grid.push(newRow.map((o) => {
            const id = Math.floor(Math.random() * Date.now());
            if (o[0]?.id) {
              o[0].id = id;
              o[0].on_flight = true;
              o[0].name = `${o[0].type}_${id}`;
            }

            return o;
          }));
        });
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
    getValidationMessage(cell) {
      if (!this.validationErrors.hasOwnProperty(this.validationKey(cell))) {
        return '';
      }

      return this.validationErrors[this.validationKey(cell)].join('|');
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