<template>
  <h1>Form Builder Example</h1>
  <VForm :form="formData" action="/forms/store" method="post" editable/>
  <FormBuilder
      :form="formData"
      @update:fields="updateFields"
  />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      formData: {
        title: "Example Form",
        status: "active",
        fields: [{
          id: 722778613653,
          name: "grid_722778613653",
          type: "grid",
          label: "Grid",
          hint: "Input your hint here",
          allow_add_row: true,
          grid: [
            [
              [
                {
                  id: 566046152306,
                  name: "text_566046152306",
                  type: "text",
                  label: "Input Field",
                  hint: null,
                  placeholder: "Text",
                  class: "w-full",
                  required: true
                }
              ],
              [
                {
                  id: 792178675503,
                  name: "datepicker_792178675503",
                  type: "datepicker",
                  label: "Date Picker",
                  hint: null,
                  placeholder: "Select date",
                  class: "w-full",
                  required: true
                },
              ],
              [
                {
                  id: 1108808545567,
                  name: "select_1108808545567",
                  type: "select",
                  label: "Select",
                  options: ["Option 1", "Option 2", "Option 3"],
                  hint: null,
                  placeholder: "Select an Option",
                  class: "w-full",
                  required: true
                }
              ],
            ],
            [
              [
                {
                  id: 100028376473,
                  name: "number_100028376473",
                  type: "number",
                  label: "Number",
                  hint: null,
                  placeholder: "Number",
                  class: "w-full",
                  required: true
                }
              ],
            ],
          ]
        }
        ],
      },
    };
  },
  methods: {
    updateFields(newFields) {
      this.fields = newFields;
    },
  },
};
</script>
