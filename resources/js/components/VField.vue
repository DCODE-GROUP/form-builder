<template>
  <div class="v-field" :class="fieldClass">
    <label :for="name" v-if="field.type === 'heading'" class="text-lg font-semibold !text-gray-900">
      {{ label }}
    </label>
    <label :for="name" v-else-if="!['paragraph', 'checkbox'].includes(field.type) && !field?.presenter">
      <component v-if="label" :is="fieldLabel">{{ label }} {{ field.required ? '*' : '' }}</component>
      <span v-else>&nbsp;</span>
    </label>
    <component
        :key="name"
        v-if="fieldComponent"
        :model-value="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :is="fieldComponent"
        :name="name"
        :type="type"
        :options="options"
        :placeholder="placeholder"
        :field="field"
        :required="field.hasOwnProperty('required') && field.required"
        :editable="editable"
        :preview="preview"
    ></component>
    <component v-else-if="field.presenter" :is="field.presenter" v-bind="{field: field}"></component>
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
import VAddress from "./fields/VAddress.vue";
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
    preview: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      componentTypes: markRaw({
        checkbox: SingleCheckbox,
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
        grid: VGridInput,
        address: VAddress,
      }),
    };
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