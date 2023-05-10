import * as Vue from "vue";
window.Vue = Vue;

import FormBuilder from "./components/FormBuilder.vue";
import VForm from "./components/VForm.vue";
import "../sass/index.scss";
import "../../node_modules/dropzone/dist/dropzone.css";

const app = window.Vue.createApp({});
app.component("FormBuilder", FormBuilder);
app.component("VForm", VForm);

app.mount('#form-builder-app');