import * as Vue from "vue";
window.Vue = Vue;

import FormBuilder from "./components/FormBuilder.vue";
import VForm from "./components/VForm.vue";

const app = window.Vue.createApp({});
app.component("FormBuilder", FormBuilder);
app.component("VForm", VForm);

app.mount('#app');