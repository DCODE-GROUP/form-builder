<template>
    <div class="v-datepicker">
        <input type="hidden" :name="name" :id="name" :value="date"/>
        <date-picker
                v-model:value="date"
                format="YYYY-MM-DD"
                value-type="format"
                type="date"
                class="w-full"
                :placeholder="placeholder"
                v-if="editable"
        />
        <p v-else v-text="modelValue"></p>
    </div>
</template>

<script>
import DatePicker from "vue-datepicker-next";
import 'vue-datepicker-next/index.css';
import BaseField from "../mixins/BaseField";

export default {
    name: "VDatepicker",
    components: {DatePicker},
    mixins: [BaseField],
    props: {
        name: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            default: null,
        },
        placeholder: String,
    },
    data() {
        return {
            date: null,
        };
    },
    created() {
        if (this.modelValue) {
            this.date = this.modelValue;
        }
    },
    watch: {
        date() {
            this.$emit("update:modelValue", this.date);
        },
    },
};
</script>

