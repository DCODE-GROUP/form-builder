import {createApp, markRaw} from 'vue';
import App from './App.vue';
import { FormBuilder, VForm } from '../../dist/form-builder.es.js';
import '../../dist/form-builder.css';
import RequiredActionsTable from "./components/RequiredActionsTable.vue";
import TestResultsTable from "@s/components/TestResultsTable.vue";
import EquipmentServiceTable from "@s/components/EquipmentServiceTable.vue";
import DefectTable from "@s/components/DefectTable.vue";
import RequiredActionsTablePresenter from "@s/components/RequiredActionsTablePresenter.vue";
import TestResultsTablePresenter from "@s/components/TestResultsTablePresenter.vue";
import EquipmentServiceTablePresenter from "@s/components/EquipmentServiceTablePresenter.vue";
import DefectTablePresenter from "@s/components/DefectTablePresenter.vue";

const app = createApp(App);
app.config.globalProperties.$customFormComponents = [
  {
    builder: markRaw(RequiredActionsTable),
    presenter: markRaw(RequiredActionsTablePresenter),
    type: 'required_actions_table',
    label: 'Required Actions Table',
    data: []
  },
  {
    builder: markRaw(TestResultsTable),
    presenter: markRaw(TestResultsTablePresenter),
    type: 'test_results_table',
    label: 'Test Results Table',
    data: []
  },
  {
    builder: markRaw(EquipmentServiceTable),
    presenter: markRaw(EquipmentServiceTablePresenter),
    type: 'equipment_service',
    label: 'Equipment Service',
    data: []
  },
  {
    builder: markRaw(DefectTable),
    presenter: markRaw(DefectTablePresenter),
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