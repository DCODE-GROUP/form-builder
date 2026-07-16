<template>
  <form class="v-form" :action="action" :method="method !== 'get' ? 'post' : 'get'" :name="name">
    <input type="hidden" name="_token" :value="csrf"/>
    <input type="hidden" name="_method" :value="method"/>
    <input type="hidden" :name="name" :value="JSON.stringify(updatedData)"/>
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
      <div v-for="(field, index) in modelValue.fields" :key="field.id" v-if="modelValue?.fields?.length">
        <v-field
            :key="field.name"
            :index="index"
            :model-value="field"
            @update:modelValue="(value) => updateField(index, value)"
            :editable="editable"
            :preview="preview"
            :validation-errors="validationErrors"
            :possible-values="possibleValues"
        >
          <p v-if="!field.hasOwnProperty('presenter')" class="text-red-700 text-xs mt-1" v-text="getValidationMessage(index)"/>
        </v-field>
      </div>
    </div>
    <slot v-if="editable"></slot>
  </form>
</template>

<script>
import VField from "./VField.vue";
import {getCurrentInstance, markRaw} from "vue";
import cloneDeep from "lodash.clonedeep";

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
    googleApiKey: {
      type: String,
      default: null,
    },
    dateFullYear: {
      type: Boolean,
      default: false,
    },
    uploadUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      csrf: document.head.querySelector('meta[name="csrf-token"]')?.content,
      updatedData: cloneDeep(this.modelValue),
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
    console.log('Mounted VForm', this.googleApiKey);
    const instance = getCurrentInstance();
    const customFormComponents = instance?.appContext.config.globalProperties.$customFormComponents ?? [];

    this.populateCustomComponents(customFormComponents);
  },
  methods: {
    updateField(index, value) {
     this.modelValue.fields[index]= value;
     this.updatedData = cloneDeep(this.modelValue);
    },
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
    getValidationMessage(index) {
      const key = `fields.${index}.value`;
      if (!this.validationErrors.hasOwnProperty(key)) {
        return '';
      }

      return this.validationErrors[key].join('|');
    }
  },
};
</script>