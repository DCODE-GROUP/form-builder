<template>
  <div class="v-field" :class="fieldClass">
    <label :for="localModelValue.name" v-if="localModelValue.type === 'heading'" class="text-lg font-semibold !text-gray-900">
      {{ localModelValue.label }}
    </label>
    <label :for="localModelValue.name" v-else-if="!['paragraph', 'checkbox'].includes(localModelValue.type) && !localModelValue?.presenter">
      <component v-if="localModelValue.label" :is="fieldLabel">{{ localModelValue.label }} {{ localModelValue.required ? '*' : '' }}</component>
      <span v-else>&nbsp;</span>
    </label>
    <component
        :key="localModelValue.name"
        v-model="localModelValue"
        :is="fieldComponent"
        :editable="editable"
        :preview="preview"
    ></component>
    <component
        v-if="modelValue.presenter"
        :model-value="modelValue"
        :is="modelValue.presenter"
        v-bind="{possibleValues: possibleValues}"
    >
    </component>
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
    modelValue: {},

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
    possibleValues: {
      type: [Object, null],
      default: () => {
        return {}
      }
    },
  },
  data() {
    return {
      componentTypes: markRaw({
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
        address: markRaw(VAddress),
      }),
      localModelValue: this.modelValue
    };
  },
  watch: {
    localModelValue: {
      handler(newValue) {
        this.$emit("update:modelValue", {
          ...newValue
        });
      },
      deep: true,
    }
  },
  computed: {
    fieldComponent() {
      return this.componentTypes[this.localModelValue.type];
    },
    fieldLabel() {
      return this.localModelValue.type === "heading" ? "h4" : "span";
    },
    fieldClass() {
      return ["cell", `-type-${this.localModelValue.type}`].join(" ");
    },
  },
};
</script>