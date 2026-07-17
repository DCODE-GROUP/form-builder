<template>
  <div class="signature-pad" :class="modelValue?.class">
    <input type="hidden" class="signature-input" :name="name" :value="input"/>
    <div class="signature-pad-body rounded-lg border border-dashed border-gray-300 shadow-sm h-[160px] relative">
      <canvas ref="signaturePadCanvas"></canvas>
      <div class="signature-pad-actions absolute top-2 right-2">
        <button
          v-if="input && editable"
          data-action="clear"
          type="button"
          class="p-1"
          @click="clear"
        >
          <XClose class="w-5 h-5 hover:text-red-500" />
        </button>
      </div>
    </div>
    <p v-if="modelValue?.hint" class="inline-block text-sm text-gray-600 mt-1.5 brand-200">{{ modelValue.hint }}</p>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";
import XClose from "@/icons/x-close.svg";
import BaseField from "../mixins/BaseField";

export default {
  name: "SignaturePad",
  components: {XClose},
  mixins: [BaseField],

  props: {
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      input: {},
      signaturePad: null,
      updatingFromCanvas: false
    };
  },
  mounted() {
    let canvas = this.$refs.signaturePadCanvas;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    this.$nextTick(() => {
      this.resizeCanvas(canvas);
      this.signaturePad = new SignaturePad(canvas);
      this.signaturePad.onEnd = () => {
        if (!this.signaturePad.isEmpty()) {
          this.updatingFromCanvas = true;
          this.input.value = this.signaturePad.toDataURL();
        }
      };

      if (this.modelValue) {
        this.input = this.modelValue;
        if (this.input?.value) {
          this.signaturePad.fromDataURL(this.input?.value);
        }
      }

      if (!this.editable) {
        this.signaturePad.off();
      }
    });
  },
  watch: {
    input: {
      handler: function handler(newValue) {
        this.$emit("update:modelValue", this.input);
      },
      deep: true
    },
    modelValue: {
      handler: function handler(newValue) {
        if (this.updatingFromCanvas) {
          this.updatingFromCanvas = false;
          return;
        }
        this.input = this.modelValue;
        if (this.input?.value) {
          this.signaturePad.fromDataURL(this.input.value);
        }
      },
      deep: true
    },
  },
  methods: {
    resizeCanvas(canvas) {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
    },
    clear() {
      this.input.value = null;
      this.signaturePad.clear();
    }
  }
};
</script>