<template>
    <div class="-options">
        <label v-for="option in options">
            <input
                :type="inputType"
                :name="inputName"
                :value="option"
                v-model="input"
            />
            <span>{{ option }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "CheckGroup",
        props: {
            name: {},
            type: {},
            value: { default: () => [] },
            options: { default: () => [] },
            disabled: { default: false },
        },
        data() {
            return {
                input: [],
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
        methods: {
            // isChecked(option) {
            //     return this.input.includes(option);
            // },
        },
        computed: {
            inputName() {
                if (this.type === "check-group") {
                    return `${this.name}[]`;
                }
                return this.name;
            },
            inputType() {
                if (this.type === "check-group") {
                    return "checkbox";
                }
                if (this.type === "radio-group") {
                    return "radio";
                }
            },
        },
    };
</script>