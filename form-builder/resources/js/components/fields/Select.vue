<template>
    <select :name="name" v-model="input" :disabled="disabled">
        <option v-for="option in options">{{ option }}</option>
    </select>
</template>

<script>
    export default {
        name: "Select",
        props: {
            value: {},
            name: {},
            type: {},
            options: { default: () => [] },
            disabled: {},
        },
        data() {
            return {
                input: null,
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
    };
</script>