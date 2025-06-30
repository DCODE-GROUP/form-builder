<template>
  <div class="m-8">
    <h1>Form Builder Example</h1>
    <VForm :form="formData" v-model:formData="formData" action="/forms/store" method="post" editable/>
    <FormBuilder v-model:form="formData"/>
  </div>
</template>

<script>
import RequiredActionsTable from "@s/components/RequiredActionsTable.vue";
import RequiredActionsTablePresenter from "@s/components/RequiredActionsTablePresenter.vue";
import TestResultsTablePresenter from "@s/components/TestResultsTablePresenter.vue";
import TestResultsTable from "@s/components/TestResultsTable.vue";
import EquipmentServiceTable from "@s/components/EquipmentServiceTable.vue";
import EquipmentServiceTablePresenter from "@s/components/EquipmentServiceTablePresenter.vue";
import DefectTablePresenter from "@s/components/DefectTablePresenter.vue";
import DefectTable from "@s/components/DefectTable.vue";
import {markRaw} from "vue";

export default {
  name: "App",
  data() {
    return {
      formData1: {},
      formData: {
        title: "Example Form",
        status: "active",
        fields: [
          {
            builder: markRaw(DefectTable),
            presenter: markRaw(DefectTablePresenter),
            type: 'defect',
            name: "defect_1566472378527",
            label: 'Activity / System Failures & Comments',
            data: {
              other_note_value: null,
              other_note_label: 'Further information recorded on notes page',
              defect_types: [
                {
                  label: "1 - Critical Defect",
                  value: null,
                },
                {
                  label: "2 - Non Critical Defect",
                  value: null,
                },
                {
                  label: "3 - Non Conformance",
                  value: null,
                },
                {
                  label: "4 - Recommendations",
                  value: null,
                },
              ],
              defects: [
                {
                  item_no: 1.4,
                  defect_type: 1,
                  description_label: 'Description / Corrective Action Required or Repairs Completed',
                  description_value: '',
                  attachments: [],
                }
              ]
            },
          },
          {
            builder: markRaw(EquipmentServiceTable),
            presenter: markRaw(EquipmentServiceTablePresenter),
            type: 'equipment_service',
            name: "equipment_service_1566472378527",
            label: 'Associated / Connected Equipment Service Completed',
            data: [
              {
                column1: {
                  name: "heading",
                  value: 'Monthly pumpset',
                },
                column2: {
                  name: "pass",
                  type: "checkbox",
                  value: null,
                },
                column3: {
                  name: "fail",
                  type: "checkbox",
                  value: null,
                },
                column4: {
                  name: "na",
                  type: "checkbox",
                  value: null,
                },
                other: {
                  type: "text",
                  label: "If No or N/A, indicate reason below",
                  value: null,
                },
              },
              {
                column1: {
                  name: "heading",
                  value: 'Monthly water storage tank (Item 1.18)',
                },
                column2: {
                  name: "pass",
                  type: "checkbox",
                  value: null,
                },
                column3: {
                  name: "fail",
                  type: "checkbox",
                  value: null,
                },
                column4: {
                  name: "na",
                  type: "checkbox",
                  value: null,
                },
                other: {
                  type: "text",
                  label: "If No or N/A, indicate reason below",
                  value: null,
                },
              },
            ]
          },
          {
            builder: markRaw(TestResultsTable),
            presenter: markRaw(TestResultsTablePresenter),
            type: 'test_results_table',
            name: "test_results_table_1566472378527",
            label: 'Pressure Readings 1.15',
            data: [
              {
                column1: {
                  name: "item_no",
                  value: 'Location 1',
                },
                column2: {
                  name: "action",
                  value: [
                    {
                      label: "Below Stop Valve",
                      type: "input",
                      unit: "Secs",
                      value: null,
                    },
                    {
                      label: "Water Supply 1",
                      type: "input",
                      unit: "kPa",
                      value: null,
                    },
                    {
                      label: "Water Supply 2",
                      type: "input",
                      unit: "Secs",
                      value: null,
                    }
                  ],
                },
              },
              {
                column1: {
                  name: "item_no",
                  value: 'Location 2',
                },
                column2: {
                  name: "action",
                  value: [
                    {
                      label: "Below Stop Valve",
                      type: "input",
                      unit: "Secs",
                      value: null,
                    },
                    {
                      label: "Water Supply 1",
                      type: "input",
                      unit: "kPa",
                      value: null,
                    },
                    {
                      label: "Water Supply 2",
                      type: "input",
                      unit: "Secs",
                      value: null,
                    }
                  ],
                },
              },
            ]
          },
          {
            builder: markRaw(RequiredActionsTable),
            presenter: markRaw(RequiredActionsTablePresenter),
            type: 'required_actions_table',
            name: "required_actions_table_1566472378527",
            label: 'Required Actions Table',
            data: [
              {
                column1: {
                  name: "item_no",
                  value: 1.1,
                },
                column2: {
                  name: "action",
                  value: [
                    {
                      type: "heading",
                      label: "Check main stop valves and alarm cocks are open, secured and labelled",
                    },
                    {
                      label: "No. checked",
                      type: "input",
                      value: 3,
                    }
                  ],
                },
                column3: {
                  name: "pass",
                  type: "checkbox",
                  value: null,
                },
                column4: {
                  name: "fail",
                  type: "checkbox",
                  value: null,
                },
                column5: {
                  name: "na",
                  type: "checkbox",
                  value: null,
                },
              },
              {
                column1: {
                  name: "item_no",
                  value: '',
                },
                column2: {
                  name: "action",
                  value: [
                    {
                      type: "heading",
                      label: "This sets the section name shown in the breadcrumb (e.g. Home / Who We Are / Page). Leave blank to skip the section.",
                    },
                  ],
                },
                column3: {
                  name: "pass",
                  type: "checkbox",
                  value: null,
                },
                column4: {
                  name: "fail",
                  type: "checkbox",
                  value: null,
                },
                column5: {
                  name: "na",
                  type: "checkbox",
                  value: null,
                },
              },
              {
                column1: {
                  name: "item_no",
                  value: 1.3,
                },
                column2: {
                  name: "action",
                  value: [
                    {
                      type: "heading",
                      label: "Check main stop valves and alarm cocks are open, secured and labelled",
                    },
                    {
                      label: "No. checked",
                      type: "input",
                      value: 3,
                    }
                  ],
                },
                column3: {
                  name: "pass",
                  type: "checkbox",
                  value: null,
                },
                column4: {
                  name: "fail",
                  type: "checkbox",
                  value: null,
                },
                column5: {
                  name: "na",
                  type: "checkbox",
                  value: null,
                },
              },
              {
                column1: {
                  name: "item_no",
                  value: 1.4,
                },
                column2: {
                  name: "action",
                  value: [
                    {
                      type: "heading",
                      label: "Test automatic and manual pump starting devices in accordance with item 1.13 and 1.17 of Table 3.4.1. Record results in pumpset logbook.",
                    },
                    {
                      label: "No. of devices checked <br> Auto",
                      type: "input",
                      value: 3,
                    },
                    {
                      label: "Manual",
                      type: "input",
                      value: 3,
                    }
                  ],
                },
                column3: {
                  name: "pass",
                  type: "checkbox",
                  value: null,
                },
                column4: {
                  name: "fail",
                  type: "checkbox",
                  value: null,
                },
                column5: {
                  name: "na",
                  type: "checkbox",
                  value: null,
                },
              },
            ]
          },
          {
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
  watch: {
    formData1: {
      handler(newValue) {
        console.log("Form Data Updated:", newValue);
      },
      deep: true,
    }
  }
};
</script>
