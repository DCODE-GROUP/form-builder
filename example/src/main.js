import { createApp } from 'vue';
import App from './App.vue';
import { FormBuilder, VForm } from '../../dist/form-builder.es.js';
import '../../dist/form-builder.css';
import RequiredActionsTable from "./components/RequiredActionsTable.vue";
import TestResultsTable from "@s/components/TestResultsTable.vue";
import EquipmentServiceTable from "@s/components/EquipmentServiceTable.vue";

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
]

app.component('FormBuilder', FormBuilder);
app.component('VForm', VForm);

app.mount('#app');