<template>
  <form class="v-form" :action="action" :method="method !== 'get' ? 'post' : 'get'" :name="name">
    <input type="hidden" name="_token" :value="csrf"/>
    <input type="hidden" name="_method" :value="method"/>
    <input type="hidden" :name="name" :value="JSON.stringify(modelValue)"/>
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
      <div v-for="field in modelValue.fields" :key="field.id" v-if="modelValue?.fields?.length">
        <v-field
            :key="field.name"
            :model-value="field"
            :editable="editable"
            :preview="preview"
            :possible-values="possibleValues"
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
import {getCurrentInstance, markRaw} from "vue";

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
    modelValue: {
      type: [Object],
      default: () => {
        return {}
      }
    },
    possibleValues: {
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
      csrf: document.head.querySelector('meta[name="csrf-token"]')?.content
    };
  },
  provide() {
    return {
      possibleFormValues: this.possibleValues,
      getFormValue: (obj, path) => {
        return path?.split('.').reduce((acc, key) => {
          return acc && acc[key];
        }, obj);
      },
    };
  },
  mounted() {
    const instance = getCurrentInstance();
    const customFormComponents = instance?.appContext.config.globalProperties.$customFormComponents;

    this.populateCustomComponents(customFormComponents);
  },
  methods: {
    populateCustomComponents(customFormComponents) {
      this.modelValue.fields = this.modelValue.fields.map((field) => {
        ['builder', 'presenter'].forEach((key) => {
          if (field[key]) {
            const found = customFormComponents.find((component) => {
              return component[key]?.__name === field[key]?.__name;
            });

            if (found) {
              field[key] = markRaw(found[key]);
            }
          }
        });

        return field;
      });
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