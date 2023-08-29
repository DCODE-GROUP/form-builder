<template>
  <form class="v-form" :action="action" :method="method !== 'get' ? 'post' : 'get'">
    <input type="hidden" name="_token" :value="csrf"/>
    <input type="hidden" name="_method" :value="method"/>
    <div class="right" v-if="!preview">
      <a class="btn-download" target="_blank" :href="`?download=true`"> Download Attachments </a>
      <a class="btn-print" href="?pdf=true" v-if="!editable"> PDF </a>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y callout curved-box-shadow">
      <div v-if="title">
        <h3>{{ title }}</h3>
        <hr/>
      </div>
      <template v-for="field in fields" :key="field.id" v-if="fields.length">
        <v-field
          v-model="inputs[field.name]"
          :name="fieldName(field)"
          :label="field.label"
          :type="field.type"
          :options="field.options"
          :placeholder="field.placeholder"
          :field="field"
          :editable="editable"
        >
          <span class="error" v-text="getValidationMessage(field)" />
        </v-field>
      </template>
    </div>
    <slot v-if="editable"></slot>
  </form>
</template>

<script>
import VField from "./VField";
import axios from "axios";

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
    name: String,
    title: String,
    form: Array,
    formData: Array,
    validationErrors: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      inputs: {},
      fields: this.form.fields,
      csrf: document.head.querySelector('meta[name="csrf-token"]').content
    };
  },
  created() {
    if (this.formData) {
      let data = this.formData.values;
      data.map((o) => {
        this.inputs[o.name] = o.value ?? '';
      })
    }
  },
  methods: {
    download() {
      axios
        .delete(`/api/generic/form-data/${this.formData.id}/media/${file.id}`)
        .then((res) => {
          this.files.splice(index, 1);
        })
        .catch(console.error);
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
<style>
.v-form {
  position: relative;

  .right {
    position: absolute;
    z-index: 1;
    right: 0;
    display: flex;
    gap: 10px;
  }
  .btn-print, .btn-download {
    cursor: pointer;
  }
}
</style>