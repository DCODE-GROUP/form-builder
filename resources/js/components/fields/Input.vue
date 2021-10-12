<template>
    <input :name="name" :type="type" v-model="input" :disabled="disabled" />
</template>

<script>
    export default {
        name: "Input",
        props: {
            name: {},
            type: {},
            value: { default: null },
            disabled: { default: false },
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