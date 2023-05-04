<template>
  <form class="v-form" :action="action" :method="method !== 'get' ? 'post' : 'get'">
    <input type="hidden" name="_token" :value="csrf"/>
    <input type="hidden" name="_method" :value="method"/>
    <div class="grid-x grid-margin-x grid-margin-y callout curved-box-shadow">
      <div class="small-12" v-if="title">
        <h3 class="h4 mb-2">{{ title }}</h3>
        <hr class="mb-2"/>
      </div>
      <template v-for="field in items" :key="field.id">
        <v-field
          v-model="inputs[field.name]"
          :name="fieldName(field)"
          :label="field.label"
          :type="field.type"
          :options="field.options"
          :placeholder="field.placeholder"
          :field="field"
        ></v-field>
      </template>
    </div>
    <slot></slot>
  </form>
</template>

<script>
import VField from "./VField";

export default {
  name: "VForm",
  components: {
    "v-field": VField,
  },
  props: {
    action: {required: true},
    method: {required: true},
    name: String,
    title: String,
    fields: Array,
    values: {},
  },
  data() {
    return {
      inputs: {},
      items: typeof this.fields === 'string' ? JSON.parse(this.fields) : this.fields,
      csrf: document.head.querySelector('meta[name="csrf-token"]').content
    };
  },
  created() {
    if (this.values) {
      this.inputs = this.values;
    }
  },
  methods: {
    fieldName(field) {
      if (!this.name) {
        return field.name;
      }
      return `${this.name}[${field.name}]`;
    },
  },
};
</script>
