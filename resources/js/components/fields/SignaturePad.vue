<template>
  <div class="signature-pad" :class="field?.class">
    <input type="hidden" class="signature-input" :name="name" :value="input"/>
    <div class="signature-pad-body rounded-lg border border-dashed border-gray-300 shadow-sm h-[160px]">
      <canvas ref="signaturePadCanvas"></canvas>
      <div class="signature-pad-actions">
        <button
          v-if="input && editable"
          data-action="clear"
          type="button"
          class="p-1"
          @click="clear"
        >
          <i class="fa fa-times primary-text"></i>
        </button>
      </div>
    </div>
    <p v-if="field?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ field.hint }}</p>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";
import BaseField from "../mixins/BaseField";

export default {
  name: "SignaturePad",
  mixins: [BaseField],

  props: {
    name: {
      type: String,
      required: true
    },
    field: {},
    modelValue: String
  },
  data() {
    return {
      input: null,
      signaturePad: null
    };
  },
  mounted() {
    let canvas = this.$refs.signaturePadCanvas;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    this.signaturePad = new SignaturePad(canvas);
    this.signaturePad.onEnd = () => {
      if (!this.signaturePad.isEmpty()) {
        this.input = this.signaturePad.toDataURL();
      }
    };

    if (this.modelValue) {
      this.input = this.modelValue;
      this.signaturePad.fromDataURL(this.input);
    }

    if (!this.editable) {
      this.signaturePad.off();
    }
  },
  watch: {
    input() {
        this.$emit("update:modelValue", this.input);
    }
  },
  methods: {
    clear() {
      this.input = null;
      this.signaturePad.clear();
    }
  }
};
</script>