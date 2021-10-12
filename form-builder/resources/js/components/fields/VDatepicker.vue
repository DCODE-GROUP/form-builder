<template>
    <div class="v-datepicker">
        <input type="hidden" :name="name" :id="name" :value="date"/>
        <date-picker v-model="date" :name="name" value-type="format" format="YYYY-MM-DD" @change="$emit('input', date)" :placeholder="placeholder"></date-picker>
    </div>
</template>

<script>
    import DatePicker from 'vue2-datepicker';

    export default {
        name: "VDatepicker",
        components: {
            "v-date-picker": DatePicker,
        },
        props: {
            name: {
                type: String,
                required: true,
            },
            value: {
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
            if (this.value) {
                this.date = new Date(this.value);
            }
        }
    };
</script>

