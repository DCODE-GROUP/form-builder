<template>
    <div class="signature-pad">
        <input type="hidden" class="signature-input" :name="name" :value="input" />
        <div class="signature-pad-body">
            <canvas ref="signaturePadCanvas"></canvas>
            <div class="signature-pad-actions">
                <button
                    v-if="input"
                    data-action="clear"
                    type="button"
                    class="p-1"
                    @click="clear"
                >
                    <i class="fa fa-times primary-text"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import SignaturePad from "signature_pad";

    export default {
        name: "SignaturePad",
        props: {
            name: {
                type: String,
                required: true
            },
            value: String
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

            if (this.value) {
                this.input = this.value;
                this.signaturePad.fromDataURL(this.input);
            }
        },
        watch: {
            input() {
                this.$emit("input", this.input);
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

<style scoped>
.signature-pad-body {
    position: relative;
    border: 1px solid #000;
    margin-bottom: 1rem;
}
.signature-pad-body .signature-pad-actions {
    position: absolute;
    bottom: 5px;
    right: 5px;
}
</style>