<template>
  <v-modal></v-modal>
  <div class="flex gap-4 mb-1 px-6 items-center">
    <a :href="redirectUrl" class="cursor-pointer"> Form </a>
    / <span class="text-sm font-semibold" v-text="title ? title : (showPreview ? 'Preview' : 'Add New Form')"></span>
  </div>
  <div class="flex justify-between items-center mb-6 px-6">
    <h4 class="text-gray-900 text-[30px] font-semibold">
      {{ showPreview ? 'Preview' : (title ? title : 'Add New Form') }}</h4>
    <a
      class="inline-block rounded-full px-3 py-2 cursor-pointer text-sm text-gray-700 font-semibold border border-gray-300 hover:bg-gray-200"
      @click="handleShowPreview"
    >
        <span v-if="!showPreview" class="flex gap-1 items-center">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.01677 7.5944C1.90328 7.4147 1.84654 7.32485 1.81477 7.18626C1.79091 7.08216 1.79091 6.918 1.81477 6.8139C1.84654 6.67532 1.90328 6.58547 2.01677 6.40577C2.95461 4.92078 5.74617 1.16675 10.0003 1.16675C14.2545 1.16675 17.0461 4.92078 17.9839 6.40577C18.0974 6.58547 18.1541 6.67532 18.1859 6.8139C18.2098 6.918 18.2098 7.08216 18.1859 7.18626C18.1541 7.32485 18.0974 7.4147 17.9839 7.5944C17.0461 9.07938 14.2545 12.8334 10.0003 12.8334C5.74617 12.8334 2.95461 9.07938 2.01677 7.5944Z"
              stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path
              d="M10.0003 9.50008C11.381 9.50008 12.5003 8.38079 12.5003 7.00008C12.5003 5.61937 11.381 4.50008 10.0003 4.50008C8.61962 4.50008 7.50034 5.61937 7.50034 7.00008C7.50034 8.38079 8.61962 9.50008 10.0003 9.50008Z"
              stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
           Preview
        </span>
      <span v-else class="flex gap-1 items-center">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.08398 17.9166L5.70838 16.138C6.00416 16.0242 6.15205 15.9673 6.29042 15.8931C6.41332 15.8271 6.53048 15.751 6.64068 15.6654C6.76475 15.5692 6.8768 15.4571 7.10088 15.233L16.5007 5.83326C17.4211 4.91279 17.4211 3.4204 16.5007 2.49993C15.5802 1.57945 14.0878 1.57945 13.1673 2.49992L3.76755 11.8997C3.54346 12.1238 3.43142 12.2358 3.33514 12.3599C3.24963 12.4701 3.17349 12.5873 3.10751 12.7102C3.03324 12.8485 2.97636 12.9964 2.86259 13.2922L1.08398 17.9166ZM1.08398 17.9166L2.79908 13.4574C2.92182 13.1383 2.98318 12.9787 3.08843 12.9057C3.18042 12.8418 3.29424 12.8176 3.40423 12.8386C3.5301 12.8627 3.65097 12.9836 3.89272 13.2253L5.7753 15.1079C6.01704 15.3496 6.13792 15.4705 6.16196 15.5964C6.18296 15.7064 6.15881 15.8202 6.09494 15.9122C6.02186 16.0174 5.86231 16.0788 5.54321 16.2015L1.08398 17.9166Z"
              stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Edit
        </span>
    </a>
  </div>
  <input type="hidden" :name="name" :value="valueJson"/>
  <div v-if="showPreview" class="form-builder-preview-container px-6">
    <p class="pb-6 text-xl font-semibold text-gray-900" v-if="title">{{ title }}</p>
    <div class="form-builder-preview">
      <v-form
        action="#"
        method="get"
        :form="{fields}"
        :preview="true"
        :editable="true"
        :can-interact="showPreview">
      </v-form>
    </div>
  </div>
  <div v-else class="form-builder-container mb-1 px-6">
    <div class="flex">
      <div class="form-builder">
        <div class="form-builder-fields">
          <div class="settings">
            <h3>Settings</h3>
            <div>
              <p class="mb-1">Form Title *</p>
              <input type="text" placeholder="Enter your form name" v-model="title"/>
              <span class="text-red-600 text-sm mt-0.5 inline-block" v-if="errors?.title">{{ errors.title[0] }}</span>
            </div>
          </div>
          <div class="fields" :class="{'overflow-y-auto' : !showPreview}">
            <h3>Form</h3>
            <div class="draggable" :class="{'!border-none !shadow-none': fields.length}">
              <field-draggable v-model="fields" :is-dragging="isDragging"></field-draggable>
            </div>
          </div>
        </div>
        <div class="flex w-1/3 flex-col">
          <div v-if="id" class="p-6 mb-4 bg-gray-50 shadow-sm rounded-xl">
            <p class="mb-5">Status</p>
            <div class="space-y-3">
              <div
                class="pr-3 py-1 text-sm text-gray-700 border font-medium border-warning-200 bg-warning-50 text-warning-700 rounded-full flex w-fit items-center"
                :class="{'!text-success-700 !bg-success-50 !border-success-200' : localForm.status === 'published'}"
              >
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" :fill="localForm.status === 'published' ? '#17B26A' : '#F79009'"/>
                </svg>
                {{ cFirst(localForm.status) }}
              </div>
              <div v-if="localForm.status === 'published'"
                   class="flex flex-col text-sm font-regular text-gray-900 gap-1">
                <label>
                  Published
                </label>
                <label class="text-base">{{ localForm.formatted_published_at }}</label>
              </div>
              <div class="flex flex-col text-sm font-regular text-gray-900 gap-1">
                <label>
                  Last Modified
                </label>
                <label class="text-base">{{ localForm.last_modified }}</label>
              </div>
            </div>
          </div>
          <div class="form-builder-templates overflow-y-auto">
            <div class="heading">
              <h3>Select layouts/components</h3>
              <p>Click and/or drag a field to the left</p>
            </div>
            <draggable
              item-key="id"
              v-model="templates"
              :clone="cloneTemplate"
              :group="{ name: 'fields', pull: 'clone', put: false }"
              @start="onDragStart"
              @end="onDragEnd"
              class="components"
            >
              <template #item="{element}">
                <li
                  class="flex gap-1 flex-row items-center"
                  :key="element.name"
                  @click="addFieldToBottom(element)"
                >
                  {{ element.label }}
                  <div class="relative group">
                    <span v-if="element.icon" v-html="element.icon"></span>
                    <div
                      class="absolute hidden group-hover:block bg-black text-white text-sm rounded px-4 py-2 -top-16 left-0 w-[200px]"
                    >
                      {{ element.tooltip_text }}
                    </div>
                  </div>
                </li>
              </template>
            </draggable>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!showPreview"
       class="sticky bottom-0 flex justify-between text-sm font-semibold w-fill py-2 px-6 z-50 bg-gray-200">
    <a @click="close" class="cursor-pointer text-error-500 hover:text-error-700 flex items-center">Discard</a>
    <div class="flex justify-end gap-2">
      <a @click.prevent="save('draft')"
         class="rounded-full cursor-pointer border border-brand-300 text-brand-700 hover:bg-brand-700 hover:text-white px-3 py-2">
        <span v-if="!loading">
          Save as draft
        </span>
        <span v-else class="flex items-center gap-2">
          <svg
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
          </svg>
        </span>
      </a>
      <a @click.prevent="save('published')"
         class="rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2">
        <span v-if="!loading">
          Publish
        </span>
        <span v-else class="flex items-center gap-2">
          <svg
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import VForm from "./VForm.vue";
import VModal from "./common/VModal.vue";
import draggable from "vuedraggable";
import FieldDraggable from "./common/FieldDraggable.vue";
import axios from "axios";
import cloneDeep from "lodash.clonedeep";

export default {
  name: "FormBuilder",
  inject: ['bus'],
  components: {
    FieldDraggable,
    VForm,
    draggable: draggable,
    VModal,
  },
  props: {
    name: String,
    form: {
      type: Object,
      default: () => {
        return {};
      },
    },
    redirectUrl: String,
    storeUrl: String,
  },
  created() {
    this.localForm = this.form;
    if (this.localForm.hasOwnProperty('id')) {
      this.title = this.localForm.title;
      this.id = this.localForm.id;
      this.fields = this.localForm.fields;
    }
  },
  data() {
    return {
      isDragging: false,
      loading: false,
      localForm: {},
      id: null,
      title: null,
      fields: [],
      errors: [],
      showPreview: false,
      hasOptionsFieldTypes: ["select", "check-group", "radio-group"],
      templates: [
        {
          name: "grid",
          type: "grid",
          label: "Grid",
          hint: "Input your supporting text here",
          icon: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M6.06065 5.99992C6.21739 5.55436 6.52675 5.17866 6.93395 4.93934C7.34116 4.70002 7.81991 4.61254 8.28544 4.69239C8.75096 4.77224 9.1732 5.01427 9.47737 5.3756C9.78154 5.73694 9.94802 6.19427 9.94732 6.66659C9.94732 7.99992 7.94732 8.66659 7.94732 8.66659M8.00065 11.3333H8.00732M14.6673 7.99992C14.6673 11.6818 11.6826 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6826 1.33325 14.6673 4.31802 14.6673 7.99992Z\" stroke=\"#98A2B3\" stroke-width=\"1.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "</svg>\n",
          tooltip_text: 'Use a grid for multiple columns and/or rows.',
          allow_add_row: true,
        },
        {
          name: "heading",
          type: "heading",
          label: "Heading",
          placeholder: null,
        },
        {
          name: "paragraph",
          type: "paragraph",
          label: "Paragraph",
          content: "Paragraph",
          content_type: "p",
          class: "",
        },
        {
          name: "text",
          type: "text",
          label: "Input Field",
          hint: null,
          class: "w-full",
          placeholder: "Text",
          required: true,
        },
        {
          name: "textarea",
          type: "textarea",
          label: "Text Area",
          hint: null,
          class: "w-full",
          placeholder: "Textarea",
          required: true,
        },
        {
          name: "number",
          type: "number",
          label: "Number",
          hint: null,
          class: "w-full",
          placeholder: "Number",
          required: true,
        },
        {
          name: "address",
          type: "address",
          label: "Address",
          hint: null,
          class: "w-full",
          placeholder: "Enter your address",
          required: true,
        },
        {
          name: "datepicker",
          type: "datepicker",
          label: "Date Picker",
          hint: null,
          class: "w-full",
          placeholder: "Select date",
          required: true,
        },
        {
          name: "select",
          type: "select",
          label: "Select",
          hint: null,
          class: "w-full",
          placeholder: "Select an Option",
          options: ['Option 1'],
          required: true,
        },
        {
          name: "checkbox",
          type: "checkbox",
          label: "Single Checkbox",
          hint: null,
          class: "w-full",
          placeholder: null,
          required: true,
        },
        {
          name: "check-group",
          type: "check-group",
          label: "Checkbox Group",
          class: "w-full",
          placeholder: null,
          options: ['Option 1'],
          required: true,
        },
        {
          name: "radio-group",
          type: "radio-group",
          label: "Radio Button Group",
          class: "w-full",
          placeholder: null,
          options: ['Option 1'],
          required: true,
        },
        {
          name: "signature",
          type: "signature",
          label: "Signature",
          class: "w-full",
          placeholder: null,
          required: true,
        },
        {
          name: "file-upload",
          type: "file-upload",
          label: "File Upload",
          class: "w-full",
          required: true,
        },
      ],
    };
  },
  watch: {
    title(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.errors = [];
      }
    },
  },
  methods: {
    close() {
      window.location.href = this.redirectUrl;
    },
    save(status = null) {
      if (this.loading) {
        return;
      }

      this.loading = true;
      console.log(JSON.stringify(this.fields))
      axios.post(this.storeUrl, this.formPayload(status)).then((res) => {
        setTimeout(() => {
          window.location.href = this.redirectUrl;
        }, 500)
      }).catch((e) => {
        this.loading = false;
        this.errors = e.response?.data?.errors;
      });
    },
    onDragStart() {
      this.isDragging = true;
    },
    onDragEnd() {
      this.isDragging = false;
    },
    handleShowPreview() {
      this.showPreview = !this.showPreview;
    },
    uniqueId() {
      return Math.floor(Math.random() * Date.now());
    },
    cloneTemplate(template) {
      let id = this.uniqueId();
      let field = {
        id: id,
        name: `${template.type}_${id}`,
        type: template.type,
        label: template.label,
        options: cloneDeep(template.options),
      }

      const fields = ['hint', 'placeholder', 'class', 'content', 'content_type', 'allow_add_row'];
      fields.forEach((f) => {
        if (template.hasOwnProperty(f)) {
          field[f] = template[f]
        }
      });

      if (template.hasOwnProperty('content')) {
        field.content = template.content
        field.content_type = template.content_type
      }

      if (template.hasOwnProperty('required')) {
        field.required = template.required
      }

      return field;
    },
    addFieldToBottom(fieldTemplate) {
      let field = this.cloneTemplate(fieldTemplate);
      this.fields.push(field);
    },
    formPayload(status = null) {
      return {
        title: this.title,
        fields: this.fields,
        ...(this.id && {id: this.id}),
        ...(status && {status: status}),
      };
    },
    cFirst(string) {
      if (!string) return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    valueJson() {
      return JSON.stringify({
        title: this.title,
        status: this.localForm?.status,
        fields: this.fields.map((field) => {
          let f = {
            id: field.id,
            name: field.name,
            type: field.type,
            label: field.label,
            placeholder: field.placeholder,
            class: field.class,
            options: [...(field.options || [])],
          }

          if (field.hasOwnProperty('content')) {
            f.content = field.content
            f.content_type = field.content_type
          }

          if (field.hasOwnProperty('required')) {
            f.required = field.required
          }

          return f;
        }),
      });
    },
  },
};
</script>
<style scoped>
svg {
  width: 25px;
  cursor: pointer;
}

h2 {
  display: flex;
}

li {
  cursor: pointer;
}
</style>
