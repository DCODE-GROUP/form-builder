<template>
  <div class="v-field" :class="fieldClass">
    <label :for="name" v-if="field.type !== 'paragraph'">
      <component v-if="label" :is="fieldLabel">{{ label }}</component>
      <span v-else>&nbsp;</span>
    </label>
    <component
      v-if="fieldComponent"
      v-model="input"
      :is="fieldComponent"
      :name="name"
      :type="type"
      :options="options"
      :disabled="disabled"
      :placeholder="placeholder"
      :field="field"
      :required="field.hasOwnProperty('required') && field.required"
      :editable="editable"
    ></component>
  </div>
</template>

<script>
import CheckGroup from "./fields/CheckGroup";
import FileUpload from "./fields/FileUpload";
import Input from "./fields/Input";
import Select from "./fields/Select";
import SignaturePad from "./fields/SignaturePad";
import Textarea from "./fields/Textarea";
import Paragraph from "./fields/Paragraph";
import VDatePicker from "./fields/VDatepicker";

export default {
  name: "VField",
  props: {
    name: String,
    type: String,
    label: String,
    modelValue: {},
    options: {default: () => []},
    disabled: {default: false},
    placeholder: {default: null},
    field: {},

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
        checkbox: Input,
        "check-group": CheckGroup,
        datepicker: VDatePicker,
        "file-upload": FileUpload,
        number: Input,
        "radio-group": CheckGroup,
        select: Select,
        signature: SignaturePad,
        text: Input,
        textarea: Textarea,
        paragraph: Paragraph,
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
      this.$emit("input", this.input);
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