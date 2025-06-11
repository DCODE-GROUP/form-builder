<template>
  <div id="app">
    <h1>Form Builder Example</h1>
    <VForm :form="formData" />
    <FormBuilder
        :form="formData"
        :fields="fields"
        @update:fields="updateFields"
    />
  </div>
</template>

<script>
import FormBuilder from "@/components/FormBuilder.vue";
import VForm from "@/components/VForm.vue";

export default {
  name: "App",
  components: {
    FormBuilder,
    VForm,
  },
  data() {
    return {
      formData: {
        title: "Example Form",
        status: "active",
      },
      fields: [
        {
          id: 1,
          name: "name",
          type: "text",
          label: "Name",
          placeholder: "Enter your name",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          label: "Email",
          placeholder: "Enter your email",
          required: true,
        },
      ],
    };
  },
  methods: {
    updateFields(newFields) {
      this.fields = newFields;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>