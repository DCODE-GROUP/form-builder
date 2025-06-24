<template>
  <form class="v-form" :action="action" :method="method !== 'get' ? 'post' : 'get'" :name="name">
    <input type="hidden" name="_token" :value="csrf"/>
    <input type="hidden" name="_method" :value="method"/>
    <input type="hidden" :name="name" :value="JSON.stringify(inputs)"/>
    <div
        class="fields"
        :style="{
        'pointer-events': canInteract ? 'auto' : 'none',
        'user-select': canInteract ? 'auto' : 'none'
      }">
      <div v-if="title">
        <h3>{{ title }}</h3>
        <hr/>
      </div>
      <div v-for="field in fields" :key="field.id" v-if="fields.length">
        <v-field
            :key="name + field.name"
            v-model="inputs[field.name]"
            :name="fieldName(field)"
            :label="field.label"
            :type="field.type"
            :options="field.options"
            :placeholder="field.placeholder"
            :field="field"
            :editable="editable"
            :preview="preview"
        >
          <span class="error" v-text="getValidationMessage(field)"/>
        </v-field>
      </div>
    </div>
    <slot v-if="editable"></slot>
  </form>
</template>

<script>
import VField from "./VField.vue";

export default {
  name: "VForm",
  components: {
    VField,
  },
  props: {
    action: {
      required: false,
      default: () => {
        return '#'
      }
    },
    method: {
      required: false,
      default: () => {
        return 'get'
      }
    },
    editable: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: false
    },
    canInteract: {
      type: Boolean,
      default: true,
    },
    name: String,
    title: String,
    form: {
      type: [Object],
      default: () => {
        return {}
      }
    },
    formData: {
      type: [Object],
      default: () => {
        return {}
      }
    },
    validationErrors: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  data() {
    return {
      inputs: this.formData,
      fields: this.form.fields,
      csrf: document.head.querySelector('meta[name="csrf-token"]')?.content
    };
  },
  created() {
    const entry = this.formData;
    if(entry.hasOwnProperty('id')) {
      this.inputs['id'] = entry.id;
    }
  },
  watch: {
    inputs: {
      handler(newInputs) {
        console.log('newInputs', newInputs)
        this.$emit('update:formData', newInputs);
      },
      deep: true,
    },
  },
  methods: {
    fieldName(field) {
      if (!this.name) {
        return field.name;
      }
      return `${this.name}[${field.name}]`;
    },
    validationKey(field) {
      if (!this.name) {
        return field.name;
      }

      return `${this.name}.${field.name}`;
    },
    getValidationMessage(field) {
      if (!this.validationErrors.hasOwnProperty(this.validationKey(field))) {
        return '';
      }

      return this.validationErrors[this.validationKey(field)].join('|');
    }
  },
};
</script>