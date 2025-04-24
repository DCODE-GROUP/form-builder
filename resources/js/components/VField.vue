<template>
  <div class="v-field" :class="fieldClass">
    <label :for="name" v-if="field.type === 'heading'" class="text-lg font-semibold !text-gray-900">
      {{ label }}
    </label>
    <label :for="name" v-else-if="!['paragraph', 'checkbox'].includes(field.type)">
      <component v-if="label" :is="fieldLabel">{{ label }} {{ field.required ? '*' : '' }}</component>
      <span v-else>&nbsp;</span>
    </label>
    <component
        v-if="fieldComponent"
        v-model="input"
        :is="fieldComponent"
        :name="name"
        :type="type"
        :options="options"
        :placeholder="placeholder"
        :field="field"
        :required="field.hasOwnProperty('required') && field.required"
        :editable="editable"
    ></component>
    <slot></slot>
  </div>
</template>

<script>
import CheckGroup from "./fields/CheckGroup.vue";
import FileUpload from "./fields/FileUpload.vue";
import Input from "./fields/Input.vue";
import Select from "./fields/Select.vue";
import SignaturePad from "./fields/SignaturePad.vue";
import Textarea from "./fields/Textarea.vue";
import Paragraph from "./fields/Paragraph.vue";
import VDatePicker from "./fields/VDatepicker.vue";
import SingleCheckbox from "./fields/SingleCheckbox.vue";
import VGridInput from "./fields/VGridInput.vue";
import { markRaw } from "vue";

export default {
  name: "VField",
  props: {
    name: String,
    type: String,
    label: String,
    modelValue: {},
    options: {default: () => []},
    placeholder: {default: null},
    field: {
      type: Object,
      default: () => {
        return {}
      }
    },

    /**
     * Form data can be editable after its complete
     */
    editable: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      input: null,
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
        grid: markRaw(VGridInput),
      },
    };
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
  computed: {
    fieldComponent() {
      return this.componentTypes[this.type];
    },
    fieldLabel() {
      return this.type === "heading" ? "h4" : "span";
    },
    fieldClass() {
      return ["cell", `-type-${this.type}`].join(" ");
    },
  },
};
</script>