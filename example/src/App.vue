<template>
  <div class="m-8">
    <h1>Form Builder Example</h1>
    <VForm v-model="formData1"
           :possible-values="possibleValues"
           action="/forms/store"
           method="post" editable
           google-api-key="AIzaSyBEbm9sxrbXcpUdKoqDMXMSqlh8h7t5Mko"
    />
    <!--    <FormBuilder v-model:form="formData1"/>-->
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
  provide() {
    return {
      possibleFormValues: this.possibleValues,
      getFormValue: (obj, path) => {
        return path.split('.').reduce((acc, key) => {
          return acc && acc[key];
        }, obj);
      },
    };
  },
  data() {
    return {
      formData1: this.getData(),
      possibleValues:
          {
            "defect_table": [{"type": 'Tung', "value": "This is tung test", "item_no": '1/1'}, {
              "type": null,
              "value": "This is tung test 2",
              "item_no": null
            }, {"type": null, "value": "This is tung test 3", "item_no": null}],
            "pressure_reading": {
              "row_1": {
                "label": "Below Stop Valve kPa",
                "input_1": "23",
                "input_2": "23",
                "input_3": "23",
                "input_4": null
              },
              "row_2": {
                "label": "Water Supply 1 kPa",
                "input_1": "22",
                "input_2": "22",
                "input_3": "22",
                "input_4": "90"
              },
              "row_3": {
                "label": "Water Supply 2 kPa",
                "input_1": "24",
                "input_2": "24",
                "input_3": "24",
                "input_4": null
              }
            },
            "site_information": {
              "date": "24/03/25",
              "time": "3.20pm",
              "site_id": "9543923950",
              "site_name": "Dcode Group",
              "site_address": "2/112 Rokeby Street, Collingwood 3066",
              "work_order_no": "1235953464"
            },
            "compliance_summary": {"row_1": true, "row_2": false},
            "action_required_items": [{
              "label": "All previous defects and non-conformances attended to and recorded",
              "value": {"na": true, "fail": false, "pass": false},
              "inputs": null,
              "item_no": null
            }, {
              "label": "Check control valve assembly is unobstructed",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.1"
            }, {
              "label": "Check spare sprinklers and spanner are available",
              "value": {"na": false, "fail": true, "pass": false},
              "inputs": null,
              "item_no": "1.2"
            }, {
              "label": "Check signage for damage, legibility and location",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.3"
            }, {
              "label": "Check fire brigade booster connection is operational",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.4"
            }, {
              "label": "Check main stop valves and alarm cocks are open, secured and labelled",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": {"input_1": "3", "input_2": null},
              "item_no": "1.5"
            }, {
              "label": "Check pump-starting devices are open and secured",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": {"input_1": "2", "input_2": null},
              "item_no": "1.6"
            }, {
              "label": "Check pressure switches",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.7"
            }, {
              "label": "Check alarm signalling equipment (ASE)",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.8"
            }, {
              "label": "Check sprinkler system interface status",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.9"
            }, {
              "label": "Verify water supply stop valves are open and secured",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": {"input_1": "4", "input_2": null},
              "item_no": "1.10a"
            }, {
              "label": "Verify water supply Stop valve position indicators",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": {"input_1": "2", "input_2": null},
              "item_no": "1.10b"
            }, {
              "label": "Record and verify system pressure gauge readings before alarm function test (record in table below)",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.11"
            }, {
              "label": "Conduct alarm function test and verify time of operation of gong(s) (record in table below)",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.12"
            }, {
              "label": "Verify alarm signal operation",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": {"input_1": "3", "input_2": null},
              "item_no": "1.13"
            }, {
              "label": "Check operation of strobe indicators",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.14"
            }, {
              "label": "Record and verify system pressure gauge readings after alarm function test (record in table below)",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.15"
            }, {
              "label": "Check foam concentrate levels",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": null,
              "item_no": "1.19"
            }, {
              "label": "Test automatic and manual pump starting devices in accordance with item 1.13 and 1.17 of Table 3.4.1. Record results in pumpset logbook.",
              "value": {"na": false, "fail": false, "pass": true},
              "inputs": {"input_1": "2", "input_2": "1"},
              "item_no": "1.16 & 1.17"
            }],
            "defect_type_identified": {"row_1": true, "row_2": false, "row_3": false, "row_4": true, "row_5": true},
            "alarm_function_test_results": {
              "row_1": {
                "label": "Installation pressure before test - 1.11 kPa",
                "input_1": "23",
                "input_2": "23",
                "input_3": null,
                "input_4": null,
                "input_5": null,
                "input_6": null,
                "input_7": null,
                "input_8": null,
                "input_9": null,
                "input_10": null,
                "input_11": null,
                "input_12": null
              },
              "row_2": {
                "label": "Time to operation of alarm gong - 1.12b Secs",
                "input_1": "5",
                "input_2": "5",
                "input_3": null,
                "input_4": null,
                "input_5": null,
                "input_6": null,
                "input_7": null,
                "input_8": null,
                "input_9": null,
                "input_10": null,
                "input_11": null,
                "input_12": null
              },
              "row_3": {
                "label": "Installation pressure after test - 1.15 kPa",
                "input_1": "24",
                "input_2": "24",
                "input_3": null,
                "input_4": null,
                "input_5": null,
                "input_6": null,
                "input_7": null,
                "input_8": null,
                "input_9": null,
                "input_10": "25",
                "input_11": null,
                "input_12": null
              }
            },
            "technician_client_information": {
              "date_1": "24/03/25",
              "date_2": "24/03/25",
              "fpas_no": "42928983",
              "client_name": "Dcode Group",
              "licence_type": "FSC",
              "technician_name": "George Andrews",
              "client_signature": "A.Sirianni",
              "technician_signature": "G.Andrews",
              "licence_permit_holder": "George Andrews",
              "licence_permit_number": "22355789"
            },
            "associated_connected_equipment": {
              "row_1": {
                "na": false,
                "no": true,
                "yes": false,
                "input": "Tung do test data",
                "label": "Monthly pumpset"
              },
              "row_2": {
                "na": false,
                "no": false,
                "yes": true,
                "input": "Connected EQ",
                "label": "Monthly water storage tank (Item 1.18)"
              },
              "row_3": {"na": true, "no": false, "yes": false, "input": null, "label": "Monthly CIE"}
            }
          },
      formData: {},
      //     {
      //   title: "Example Form",
      //   status: "active",
      //   fields: [
      //     {
      //       builder: markRaw(DefectTable),
      //       presenter: markRaw(DefectTablePresenter),
      //       type: 'defect',
      //       name: "defect_1566472378527",
      //       label: 'Activity / System Failures & Comments',
      //       data: {
      //         other_note_value: null,
      //         other_note_label: 'Further information recorded on notes page',
      //         defect_types: [
      //           {
      //             label: "1 - Critical Defect",
      //             value: null,
      //           },
      //           {
      //             label: "2 - Non Critical Defect",
      //             value: null,
      //           },
      //           {
      //             label: "3 - Non Conformance",
      //             value: null,
      //           },
      //           {
      //             label: "4 - Recommendations",
      //             value: null,
      //           },
      //         ],
      //         defects: [
      //           {
      //             item_no: 1.4,
      //             defect_type: 1,
      //             description_label: 'Description / Corrective Action Required or Repairs Completed',
      //             description_value: '',
      //             attachments: [],
      //           }
      //         ]
      //       },
      //     },
      //     {
      //       builder: markRaw(EquipmentServiceTable),
      //       presenter: markRaw(EquipmentServiceTablePresenter),
      //       type: 'equipment_service',
      //       name: "equipment_service_1566472378527",
      //       label: 'Associated / Connected Equipment Service Completed',
      //       data: [
      //         {
      //           column1: {
      //             name: "heading",
      //             value: 'Monthly pumpset',
      //           },
      //           column2: {
      //             name: "pass",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column3: {
      //             name: "fail",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column4: {
      //             name: "na",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           other: {
      //             type: "text",
      //             label: "If No or N/A, indicate reason below",
      //             value: null,
      //           },
      //         },
      //         {
      //           column1: {
      //             name: "heading",
      //             value: 'Monthly water storage tank (Item 1.18)',
      //           },
      //           column2: {
      //             name: "pass",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column3: {
      //             name: "fail",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column4: {
      //             name: "na",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           other: {
      //             type: "text",
      //             label: "If No or N/A, indicate reason below",
      //             value: null,
      //           },
      //         },
      //       ]
      //     },
      //     {
      //       builder: markRaw(TestResultsTable),
      //       presenter: markRaw(TestResultsTablePresenter),
      //       type: 'test_results_table',
      //       name: "test_results_table_1566472378527",
      //       label: 'Pressure Readings 1.15',
      //       data: [
      //         {
      //           column1: {
      //             name: "item_no",
      //             value: 'Location 1',
      //           },
      //           column2: {
      //             name: "action",
      //             value: [
      //               {
      //                 label: "Below Stop Valve",
      //                 type: "input",
      //                 unit: "Secs",
      //                 value: null,
      //               },
      //               {
      //                 label: "Water Supply 1",
      //                 type: "input",
      //                 unit: "kPa",
      //                 value: null,
      //               },
      //               {
      //                 label: "Water Supply 2",
      //                 type: "input",
      //                 unit: "Secs",
      //                 value: null,
      //               }
      //             ],
      //           },
      //         },
      //         {
      //           column1: {
      //             name: "item_no",
      //             value: 'Location 2',
      //           },
      //           column2: {
      //             name: "action",
      //             value: [
      //               {
      //                 label: "Below Stop Valve",
      //                 type: "input",
      //                 unit: "Secs",
      //                 value: null,
      //               },
      //               {
      //                 label: "Water Supply 1",
      //                 type: "input",
      //                 unit: "kPa",
      //                 value: null,
      //               },
      //               {
      //                 label: "Water Supply 2",
      //                 type: "input",
      //                 unit: "Secs",
      //                 value: null,
      //               }
      //             ],
      //           },
      //         },
      //       ]
      //     },
      //     {
      //       builder: markRaw(RequiredActionsTable),
      //       presenter: markRaw(RequiredActionsTablePresenter),
      //       type: 'required_actions_table',
      //       name: "required_actions_table_1566472378527",
      //       label: 'Required Actions Table',
      //       data: [
      //         {
      //           column1: {
      //             name: "item_no",
      //             value: 1.1,
      //           },
      //           column2: {
      //             name: "action",
      //             value: [
      //               {
      //                 type: "heading",
      //                 label: "Check main stop valves and alarm cocks are open, secured and labelled",
      //               },
      //               {
      //                 label: "No. checked",
      //                 type: "input",
      //                 value: 3,
      //               }
      //             ],
      //           },
      //           column3: {
      //             name: "pass",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column4: {
      //             name: "fail",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column5: {
      //             name: "na",
      //             type: "checkbox",
      //             value: null,
      //           },
      //         },
      //         {
      //           column1: {
      //             name: "item_no",
      //             value: '',
      //           },
      //           column2: {
      //             name: "action",
      //             value: [
      //               {
      //                 type: "heading",
      //                 label: "This sets the section name shown in the breadcrumb (e.g. Home / Who We Are / Page). Leave blank to skip the section.",
      //               },
      //             ],
      //           },
      //           column3: {
      //             name: "pass",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column4: {
      //             name: "fail",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column5: {
      //             name: "na",
      //             type: "checkbox",
      //             value: null,
      //           },
      //         },
      //         {
      //           column1: {
      //             name: "item_no",
      //             value: 1.3,
      //           },
      //           column2: {
      //             name: "action",
      //             value: [
      //               {
      //                 type: "heading",
      //                 label: "Check main stop valves and alarm cocks are open, secured and labelled",
      //               },
      //               {
      //                 label: "No. checked",
      //                 type: "input",
      //                 value: 3,
      //               }
      //             ],
      //           },
      //           column3: {
      //             name: "pass",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column4: {
      //             name: "fail",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column5: {
      //             name: "na",
      //             type: "checkbox",
      //             value: null,
      //           },
      //         },
      //         {
      //           column1: {
      //             name: "item_no",
      //             value: 1.4,
      //           },
      //           column2: {
      //             name: "action",
      //             value: [
      //               {
      //                 type: "heading",
      //                 label: "Test automatic and manual pump starting devices in accordance with item 1.13 and 1.17 of Table 3.4.1. Record results in pumpset logbook.",
      //               },
      //               {
      //                 label: "No. of devices checked <br> Auto",
      //                 type: "input",
      //                 value: 3,
      //               },
      //               {
      //                 label: "Manual",
      //                 type: "input",
      //                 value: 3,
      //               }
      //             ],
      //           },
      //           column3: {
      //             name: "pass",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column4: {
      //             name: "fail",
      //             type: "checkbox",
      //             value: null,
      //           },
      //           column5: {
      //             name: "na",
      //             type: "checkbox",
      //             value: null,
      //           },
      //         },
      //       ]
      //     },
      //     {
      //       id: 722778613653,
      //       name: "grid_722778613653",
      //       type: "grid",
      //       label: "Grid",
      //       hint: "Input your hint here",
      //       allow_add_row: true,
      //       grid: [
      //         [
      //           [
      //             {
      //               id: 566046152306,
      //               name: "text_566046152306",
      //               type: "text",
      //               label: "Input Field",
      //               hint: null,
      //               placeholder: "Text",
      //               class: "w-full",
      //               required: true
      //             }
      //           ],
      //           [
      //             {
      //               id: 792178675503,
      //               name: "datepicker_792178675503",
      //               type: "datepicker",
      //               label: "Date Picker",
      //               hint: null,
      //               placeholder: "Select date",
      //               class: "w-full",
      //               required: true
      //             },
      //           ],
      //           [
      //             {
      //               id: 1108808545567,
      //               name: "select_1108808545567",
      //               type: "select",
      //               label: "Select",
      //               options: ["Option 1", "Option 2", "Option 3"],
      //               hint: null,
      //               placeholder: "Select an Option",
      //               class: "w-full",
      //               required: true
      //             }
      //           ],
      //         ],
      //         [
      //           [
      //             {
      //               id: 100028376473,
      //               name: "number_100028376473",
      //               type: "number",
      //               label: "Number",
      //               hint: null,
      //               placeholder: "Number",
      //               class: "w-full",
      //               required: true
      //             }
      //           ],
      //         ],
      //       ]
      //     }
      //   ],
      // },
    };
  },
  watch: {
    formData1: {
      handler(newValue) {
        console.log("Form Data Updated:", newValue, this.$customFormComponents);
      },
      deep: true,
    }
  },
  methods: {
    getData() {
      let a = '{"title":"LB2A - Monthly Sprinkler System Inspection","version":"1.0","status":"published","fields":[{"id":1313742323755,"hint":null,"name":"text_1313742323755","type":"text","class":"w-full","label":"Site Name","required":true,"placeholder":"Enter your site name","defined_key":"site_information.site_name"},{"id":1163101150978,"hint":null,"name":"datepicker_1163101150978","type":"datepicker","class":"w-full","label":"Date","required":true,"placeholder":"Select date","defined_key":"site_information.date"},{"id":502076699943,"hint":null,"name":"number_502076699943","type":"number","class":"w-full","label":"Work Order No.","required":true,"placeholder":"Number","defined_key":"site_information.work_order_no"},{"id":1503178739477,"hint":null,"name":"address_1503178739477","type":"address","class":"w-full","label":"Site Address","required":true,"placeholder":"Enter your address","defined_key":"site_information.site_address"},{"id":1084974421574,"hint":null,"name":"datepicker_1084974421574","type":"datepicker","class":"w-full","label":"Time","required":true,"placeholder":"Select time","defined_key":"site_information.time"},{"id":1357428031910,"hint":null,"name":"number_1357428031910","type":"number","class":"w-full","label":"Site ID","required":true,"placeholder":"Number","defined_key":"site_information.site_id"},{"id":1511069538997,"data":[{"column1":{"name":"item_no","value":null,"defined_key":"action_required_items.0.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"All previous defects and non-conformances attended to and recorded"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.0.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.0.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.0.value.na"}},{"column1":{"name":"item_no","value":"1.1","defined_key":"action_required_items.1.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check control valve assembly is unobstructed"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.1.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.1.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.1.value.na"}},{"column1":{"name":"item_no","value":"1.2","defined_key":"action_required_items.2.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check spare sprinklers and spanner are available"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.2.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.2.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.2.value.na"}},{"column1":{"name":"item_no","value":"1.3","defined_key":"action_required_items.3.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check signage for damage, legibility and location"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.3.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.3.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.3.value.na"}},{"column1":{"name":"item_no","value":"1.4","defined_key":"action_required_items.4.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check fire brigade booster connection is operational"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.4.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.4.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.4.value.na"}},{"column1":{"name":"item_no","value":"1.5","defined_key":"action_required_items.5.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check main stop valves and alarm cocks are open, secured and labelled"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.5.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.5.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.5.value.na"}},{"column1":{"name":"item_no","value":"1.6","defined_key":"action_required_items.6.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check pump-starting devices are open and secured"},{"type":"input","label":"No. checked","value":null,"defined_key":"action_required_items.6.inputs.input_1"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.6.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.6.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.6.value.na"}},{"column1":{"name":"item_no","value":"1.7","defined_key":"action_required_items.7.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check pressure switches"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.7.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.7.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.7.value.na"}},{"column1":{"name":"item_no","value":"1.8","defined_key":"action_required_items.8.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check alarm signalling equipment (ASE)"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.8.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.8.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.8.value.na"}},{"column1":{"name":"item_no","value":"1.9","defined_key":"action_required_items.9.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check sprinkler system interface status"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.9.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.9.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.9.value.na"}},{"column1":{"name":"item_no","value":"1.10a","defined_key":"action_required_items.10.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Verify water supply stop valves are open and secured"},{"type":"input","label":"No. checked","value":null,"defined_key":"action_required_items.10.inputs.input_1"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.10.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.10.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.10.value.na"}},{"column1":{"name":"item_no","value":"1.10b","defined_key":"action_required_items.11.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Verify water supply Stop valve position indicators"},{"type":"input","label":"No. checked","value":null,"defined_key":"action_required_items.11.inputs.input_1"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.11.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.11.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.11.value.na"}},{"column1":{"name":"item_no","value":"1.11","defined_key":"action_required_items.12.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Record and verify system pressure gauge readings before alarm function test (record in table below)"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.12.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.12.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.12.value.na"}},{"column1":{"name":"item_no","value":"1.12","defined_key":"action_required_items.13.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Conduct alarm function test and verify time of operation of gong(s) (record in table below)"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.13.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.13.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.13.value.na"}},{"column1":{"name":"item_no","value":"1.13","defined_key":"action_required_items.14.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Verify alarm signal operation"},{"type":"input","label":"No. checked","value":null,"defined_key":"action_required_items.14.inputs.input_1"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.14.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.14.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.14.value.na"}},{"column1":{"name":"item_no","value":"1.14","defined_key":"action_required_items.15.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check operation of strobe indicators"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.15.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.15.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.15.value.na"}},{"column1":{"name":"item_no","value":"1.15","defined_key":"action_required_items.16.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Record and verify system pressure gauge readings after alarm function test (record in table below)"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.16.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.16.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.16.value.na"}},{"column1":{"name":"item_no","value":"1.19","defined_key":"action_required_items.17.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Check foam concentrate levels"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.17.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.17.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.17.value.na"}},{"column1":{"name":"item_no","value":"1.16 & 1.17","defined_key":"action_required_items.18.item_no"},"column2":{"name":"action","value":[{"type":"heading","label":"Test automatic and manual pump starting devices in accordance with item 1.13 and 1.17 of Table 3.4.1. Record results in pumpset logbook."},{"type":"input","label":"No. of devices checked <br> Auto","value":null,"defined_key":"action_required_items.18.inputs.input_1"},{"type":"input","label":"Manual","value":null,"defined_key":"action_required_items.18.inputs.input_2"}]},"column3":{"name":"pass","type":"checkbox","value":null,"defined_key":"action_required_items.18.value.pass"},"column4":{"name":"fail","type":"checkbox","value":null,"defined_key":"action_required_items.18.value.fail"},"column5":{"name":"na","type":"checkbox","value":null,"defined_key":"action_required_items.18.value.na"}}],"name":"required_actions_table_1511069538997","type":"required_actions_table","label":"Actions required by Table 2.1.2.1","builder":{"props":{"component":[]},"__name":"RequiredActionsTable"},"presenter":{"props":{"field":[]},"__name":"RequiredActionsTablePresenter"},"defined_key":"action_required_items"},{"id":1325732415272,"data":[{"column1":{"name":"item_no","value":"No. 1"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_1"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_1"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_1"}]}},{"column1":{"name":"item_no","value":"No. 2"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_2"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_2"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_2"}]}},{"column1":{"name":"item_no","value":"No. 3"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_3"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_3"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_3"}]}},{"column1":{"name":"item_no","value":"No. 4"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_4"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_4"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_4"}]}},{"column1":{"name":"item_no","value":"No. 5"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_5"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_5"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_5"}]}},{"column1":{"name":"item_no","value":"No. 6"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_6"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_6"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_6"}]}},{"column1":{"name":"item_no","value":"No. 7"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_7"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_7"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_7"}]}},{"column1":{"name":"item_no","value":"No. 8"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_8"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_8"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_8"}]}},{"column1":{"name":"item_no","value":"No. 9"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_9"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_9"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_9"}]}},{"column1":{"name":"item_no","value":"No. 10"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_10"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_10"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_10"}]}},{"column1":{"name":"item_no","value":"No. 11"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_11"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_11"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_11"}]}},{"column1":{"name":"item_no","value":"No. 12"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Installation pressure before test - 1.11","value":null,"defined_key":"alarm_function_test_results.row_1.input_12"},{"type":"input","unit":"Secs","label":"Time to operation of alarm gong - 1.12b","value":null,"defined_key":"alarm_function_test_results.row_2.input_12"},{"type":"input","unit":"kPa","label":"Installation pressure after test - 1.15","value":null,"defined_key":"alarm_function_test_results.row_3.input_12"}]}}],"name":"test_results_table_1325732415272","type":"test_results_table","label":"Alarm function test results","builder":{"props":{"component":[]},"__name":"TestResultsTable"},"presenter":{"props":{"field":[]},"__name":"TestResultsTablePresenter"}},{"id":862891009948,"data":[{"column1":{"name":"item_no","value":"Location 1"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Below Stop Valve","value":null,"defined_key":"pressure_reading.row_1.input_1"},{"type":"input","unit":"Secs","label":"Water Supply 1","value":null,"defined_key":"pressure_reading.row_2.input_1"},{"type":"input","unit":"kPa","label":"Water Supply 2","value":null,"defined_key":"pressure_reading.row_3.input_1"}]}},{"column1":{"name":"item_no","value":"Location 2"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Below Stop Valve","value":null,"defined_key":"pressure_reading.row_1.input_2"},{"type":"input","unit":"Secs","label":"Water Supply 1","value":null,"defined_key":"pressure_reading.row_2.input_2"},{"type":"input","unit":"kPa","label":"Water Supply 2","value":null,"defined_key":"pressure_reading.row_3.input_2"}]}},{"column1":{"name":"item_no","value":"Location 3"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Below Stop Valve","value":null,"defined_key":"pressure_reading.row_1.input_3"},{"type":"input","unit":"Secs","label":"Water Supply 1","value":null,"defined_key":"pressure_reading.row_2.input_3"},{"type":"input","unit":"kPa","label":"Water Supply 2","value":null,"defined_key":"pressure_reading.row_3.input_3"}]}},{"column1":{"name":"item_no","value":"Location 4"},"column2":{"name":"heading","value":[{"type":"input","unit":"kPa","label":"Below Stop Valve","value":null,"defined_key":"pressure_reading.row_1.input_4"},{"type":"input","unit":"Secs","label":"Water Supply 1","value":null,"defined_key":"pressure_reading.row_2.input_4"},{"type":"input","unit":"kPa","label":"Water Supply 2","value":null,"defined_key":"pressure_reading.row_3.input_4"}]}}],"name":"test_results_table_862891009948","type":"test_results_table","label":"Pressure readings 1.15","builder":{"props":{"component":[]},"__name":"TestResultsTable"},"presenter":{"props":{"field":[]},"__name":"TestResultsTablePresenter"}},{"id":837634320780,"data":[{"other":{"name":"other","label":"If No or N\\/A, indicate reason below","value":null,"defined_key":"associated_connected_equipment.row_1.input"},"column1":{"name":"action","value":"Monthly CIE"},"column2":{"name":"yes","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_1.yes"},"column3":{"name":"no","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_1.no"},"column4":{"name":"na","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_1.na"}},{"other":{"name":"other","label":"If No or N\\/A, indicate reason below","value":null,"defined_key":"associated_connected_equipment.row_2.input"},"column1":{"name":"action","value":"Monthly CIE"},"column2":{"name":"yes","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_2.yes"},"column3":{"name":"no","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_2.no"},"column4":{"name":"na","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_2.na"}},{"other":{"name":"other","label":"If No or N\\/A, indicate reason below","value":null,"defined_key":"associated_connected_equipment.row_3.input"},"column1":{"name":"action","value":"Monthly CIE"},"column2":{"name":"yes","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_3.yes"},"column3":{"name":"no","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_3.no"},"column4":{"name":"na","type":"checkbox","value":null,"defined_key":"associated_connected_equipment.row_3.na"}}],"name":"equipment_service_837634320780","type":"equipment_service","label":"Associated \\/ Connected Equipment Service Completed","builder":{"props":{"component":[]},"__name":"EquipmentServiceTable"},"presenter":{"props":{"field":[]},"__name":"EquipmentServiceTablePresenter"}},{"id":1446257355516,"data":{"label":"Activity \\/ System Failures & Comments","defects":[{"item_no":"","item_no_define_key":"defect_table.0.item_no","defect_type":"","defect_type_define_key":"defect_table.0.type","description_label":"Description","description_value":"","description_value_define_key":"defect_table.0.value"},{"item_no":"","item_no_define_key":"defect_table.1.item_no","defect_type":"","defect_type_define_key":"defect_table.1.type","description_label":"Description","description_value":"","description_value_define_key":"defect_table.1.value"},{"item_no":"","item_no_define_key":"defect_table.2.item_no","defect_type":"","defect_type_define_key":"defect_table.2.type","description_label":"Description","description_value":"","description_value_define_key":"defect_table.2.value"},{"item_no":"","item_no_define_key":"defect_table.3.item_no","defect_type":"","defect_type_define_key":"defect_table.3.type","description_label":"Description","description_value":"","description_value_define_key":"defect_table.3.value"},{"item_no":"","item_no_define_key":"defect_table.4.item_no","defect_type":"","defect_type_define_key":"defect_table.4.type","description_label":"Description","description_value":"","description_value_define_key":"defect_table.4.value"},{"item_no":"","item_no_define_key":"defect_table.5.item_no","defect_type":"","defect_type_define_key":"defect_table.5.type","description_label":"Description","description_value":"","description_value_define_key":"defect_table.5.value"},{"item_no":"","item_no_define_key":"defect_table.6.item_no","defect_type":"","defect_type_define_key":"defect_table.6.type","description_label":"Description","description_value":"","description_value_define_key":"defect_table.6.value"}],"defect_types":[{"label":"1 - Critical Defect","value":null,"defined_key":"defect_type_identified.row_1"},{"label":"2 - Non Critical Defect","value":null,"defined_key":"defect_type_identified.row_2"},{"label":"3 - Non Conformance","value":null,"defined_key":"defect_type_identified.row_3"},{"label":"4 - Recommendations","value":null,"defined_key":"defect_type_identified.row_4"}],"other_note_label":"Further information recorded on notes page","other_note_value":null,"defined_key":"defect_type_identified.row_5"},"name":"defect_1446257355516","type":"defect","label":"Defect","builder":{"props":{"component":[]},"__name":"DefectTable"},"presenter":{"props":{"field":[]},"__name":"DefectTablePresenter"}},{"id":1472752428848,"grid":[[[{"id":266110664790,"hint":null,"name":"textarea_266110664790","type":"textarea","class":"w-full","label":"Notes and comments","required":true,"placeholder":"Textarea"}]]],"hint":null,"name":"grid_1472752428848","type":"grid","label":"Notes","allow_add_row":true},{"id":78560054298,"hint":null,"name":"checkbox_78560054298","type":"checkbox","class":"w-full","label":"I hereby certify that the above system has been routinely serviced in accordance with AS1851-2012 (Incorporating Amendment 1) and that the information on this service record is true and correct. This record does not infer compliance with all appliance building and fire safety legislation within the relevant jurisdiction.","required":true,"placeholder":null},{"id":390844107819,"label":"Queensland Buildings Only","name":"heading_390844107819","options":null,"placeholder":null,"type":"heading"},{"class":"w-full","hint":null,"id":694064933489,"label":"Maintenance complies with QDC, MP6.1","name":"checkbox_694064933489","options":null,"placeholder":null,"required":true,"type":"checkbox","defined_key":"compliance_summary.row_1"},{"class":"w-full","hint":null,"id":694064933488,"label":"System is in proper working order","name":"checkbox_694064933488","options":null,"placeholder":null,"required":true,"type":"checkbox","defined_key":"compliance_summary.row_2"},{"id":1310090165799,"hint":null,"name":"text_1310090165799","type":"text","class":"w-full","label":"Technician Name","required":true,"placeholder":"Technician Name","defined_key":"technician_client_information.technician_name"},{"id":1623014928866,"hint":null,"name":"text_1623014928866","type":"text","class":"w-full","label":"Signature","required":true,"placeholder":"Signature","defined_key":""},{"id":693281370221,"hint":null,"name":"datepicker_693281370221","type":"datepicker","class":"w-full","label":"Date","required":true,"placeholder":"Select date","defined_key":"technician_client_information.date_1"},{"id":1289599995477,"hint":null,"name":"text_1289599995477","type":"text","class":"w-full","label":"License \\/ Permit Holder","required":true,"placeholder":"License \\/ Permit Holder","defined_key":"technician_client_information.licence_permit_holder"},{"id":81255140681,"hint":null,"name":"number_81255140681","type":"number","class":"w-full","label":"License No.","required":true,"placeholder":"License No.","defined_key":"technician_client_information.licence_permit_number"},{"id":175538693366,"hint":null,"name":"text_175538693366","type":"text","class":"w-full","label":"License Type","required":true,"placeholder":"License Type","defined_key":"technician_client_information.licence_type"},{"id":211707693004,"hint":null,"name":"number_211707693004","type":"number","class":"w-full","label":"FPAS No.","required":true,"placeholder":"Number","defined_key":"technician_client_information.fpas_no"},{"id":239242809285,"hint":null,"name":"text_239242809285","type":"text","class":"w-full","label":"Client Name","required":true,"placeholder":"Client Name","defined_key":"technician_client_information.client_name"},{"id":1517017470650,"hint":null,"name":"text_1517017470650","type":"text","class":"w-full","label":"Signature","required":true,"placeholder":"Signature","defined_key":"technician_client_information.client_signature"},{"id":726876071778,"hint":null,"name":"datepicker_726876071778","type":"datepicker","class":"w-full","label":"Date","required":true,"placeholder":"Select date","defined_key":"technician_client_information.date_2"}]}';

      return JSON.parse(a);
    }
  }
};
</script>
