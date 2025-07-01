import { createApp } from 'vue';
import App from './App.vue';
import { FormBuilder, VForm } from '../../dist/form-builder.es.js';
import '../../dist/form-builder.css';
import RequiredActionsTable from "./components/RequiredActionsTable.vue";
import TestResultsTable from "@s/components/TestResultsTable.vue";
import EquipmentServiceTable from "@s/components/EquipmentServiceTable.vue";
import DefectTable from "@s/components/DefectTable.vue";

const app = createApp(App);
app.config.globalProperties.$customFormComponents = [
  {
    builder: RequiredActionsTable,
    presenter: 'CustomInput',
    type: 'required_actions_table',
    label: 'Required Actions Table',
    data: []
  },
  {
    builder: TestResultsTable,
    presenter: 'CustomInput',
    type: 'test_results_table',
    label: 'Test Results Table',
    data: []
  },
  {
    builder: EquipmentServiceTable,
    presenter: 'CustomInput',
    type: 'equipment_service',
    label: 'Equipment Service',
    data: []
  },
  {
    builder: DefectTable,
    presenter: "CustomInput",
    type: "defect",
    label: "Defect",
    data: {
      other_note_label: "Further information recorded on notes page",
      other_note_value: null,
      defects: [],
      defect_types: [],
    },
  },
]

app.component('FormBuilder', FormBuilder);
app.component('VForm', VForm);

app.mount('#app');