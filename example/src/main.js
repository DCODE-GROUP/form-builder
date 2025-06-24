import { createApp } from 'vue';
import App from './App.vue';
import { FormBuilder, VForm } from '../../dist/form-builder.es.js';
import '../../dist/form-builder.css';

const app = createApp(App);
app.component('FormBuilder', FormBuilder);
app.component('VForm', VForm);

app.mount('#app');