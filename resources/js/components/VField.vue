<template>
    <div class="v-field" :class="fieldClass">
        <label :for="name">
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
    // import VDatePicker from "./fields/VDatepicker";

    export default {
        name: "VField",
        props: {
            name: String,
            type: String,
            label: String,
            value: {},
            options: { default: () => [] },
            disabled: { default: false },
            placeholder: { default: null },
        },
        data() {
            return {
                input: null,
                componentTypes: {
                    checkbox: Input,
                    "check-group": CheckGroup,
                    // datepicker: VDatePicker,
                    "file-upload": FileUpload,
                    number: Input,
                    "radio-group": CheckGroup,
                    select: Select,
                    signature: SignaturePad,
                    text: Input,
                    textarea: Textarea,
                },
            };
        },
        created() {
            this.input = this.value;
        },
        watch: {
            value() {
                this.input = this.value;
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
                return ["cell", this.class, `-type-${this.type}`].join(" ");
            },
        },
    };
</script>
