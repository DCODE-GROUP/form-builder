import * as Vue from "vue";
window.Vue = Vue;
import $bus from "./components/mixins/Vue3EventBus";
import FormBuilder from "./components/FormBuilder.vue";
import EditFieldGrid from "./components/common/EditFieldGrid.vue";
import VForm from "./components/VForm.vue";

const app = window.Vue.createApp({});
app.component("FormBuilder", FormBuilder);
app.component("VForm", VForm);
app.component("EditFieldGrid", EditFieldGrid);
app.directive("click-outside",  {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
});

app.provide("bus", $bus);

app.mount('#form-builder-app');