<template>
    <textarea :name="name" v-model="input"></textarea>
</template>

<script>
    export default {
        name: "Textarea",
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