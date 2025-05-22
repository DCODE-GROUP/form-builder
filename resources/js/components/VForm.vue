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
            :model-value="getInputValue(field.name)"
            @update:model-value="updateInputValue(field.name, $event)"
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
import VField from "./VField";

export default {
  name: "VForm",
  components: {
    VField,
  },
  props: {
    action: {required: true},
    method: {required: true},

    /**
     * Form data can be editable after its complete
     */
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
      type: [Object, String],
      default: () => {
        return {}
      }
    },
    formData: {
      type: [Object, String],
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
      inputs: {},
      fields: typeof this.form === 'string' ? JSON.parse(this.form)?.fields : this.form.fields,
      csrf: document.head.querySelector('meta[name="csrf-token"]').content
    };
  },
  created() {
    if (this.formData) {
      let data = ((typeof this.formData === 'string')  ? JSON.parse(this.formData).values : this.formData?.values) ?? [];
      data.map((o) => {
        if (this.name) {
          this.inputs[this.name][o.name] = o.value ?? '';
        } else {
          this.inputs[o.name] = o.value ?? '';
        }
      })
    }
  },
  watch: {
    inputs: {
      handler(newInputs) {
        const event = new CustomEvent("formUpdated", { detail: newInputs });
        window.dispatchEvent(event);
      },
      deep: true,
    },
  },
  methods: {
    updateInputValue(fieldName, value) {
      if (this.name) {
        if (!this.inputs[this.name]) {
          this.inputs[this.name] = {}; // Directly assign an empty object
        }

        if (fieldName.includes('grid')) {
          this.inputs[this.name] = value;
        } else {
          this.inputs[this.name][fieldName] = value;
        }
      } else {
        this.inputs[fieldName] = value;
      }
    },
    getInputValue(fieldName) {
      return this.name ? this.inputs[this.name]?.[fieldName] : this.inputs[fieldName];
    },
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