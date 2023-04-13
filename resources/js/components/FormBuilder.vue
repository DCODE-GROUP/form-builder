<template>
  <div>
    <div class="form-basic">
      <div>
        <input type="text" v-model="title"/>
      </div>
      <br>
      <div>
        <button
          type="button"
          class="button"
          @click="handleShowPreview"
        >{{ showPreview ? 'Edit' : 'Preview' }}
        </button>
        <a :href="cancelUrl" class="button">Cancel</a>
        <input type="submit" :value="form ? 'Update Form' : 'Create Form'" class="button success">
      </div>
    </div>
    <input type="hidden" :name="name" :value="valueJson"/>
    <div v-if="showPreview" class="form-builder-preview-container">
      <div class="form-builder-preview">
        <v-form action="#" method="get" :fields="fields"></v-form>
      </div>
    </div>
    <div v-else class="form-builder-container">
      <div class="form-builder">
        <div class="menu form-builder-templates">
          <draggable
            item-key="id"
            v-model="templates"
            :clone="cloneTemplate"
            :group="{ name: 'fields', pull: 'clone', put: false }"
          >
            <template #item="{element}">
              <li
                class="button"
                :key="element.name"
                @click="addFieldToBottom(element)"
              >{{ element.label }}
              </li>
            </template>
          </draggable>
        </div>
        <div class="form-builder-fields">
          <draggable
            v-model="fields"
            item-key="id"
            ghost-class="fields"
            :group="{ name: 'fields', pull: false, put: true }"
            handle=".handle"
          >
            <template #item="{element, index}" :key="element.id">
              <div
                class="p-r-2 relative -field"
                :class="['-type-'+element.type]"
              >
                <div class="-field-title handle">
                  <h2 @click="element.isShowing = ! element.isShowing">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                    </svg>
                    <span class="-title">
                        <span class="-type-title">{{ getFieldTypeTitle(element) }}:</span>
                        <span class="-name">{{ element.label }}</span>
                    </span>
                  </h2>
                  <svg @click="removeField(index)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div class="-field-properties">
                  <div class="-prop -label-text">
                    <span>Label</span>
                    <input type="text" v-model="element.label"/>
                  </div>
                  <div class="-prop -placeholder" v-if="element.placeholder !== null">
                    <span>Placeholder</span>
                    <input type="text" v-model="element.placeholder"/>
                  </div>
                  <div class="-prop -width" v-if="element.class">
                    <span class="-label">Width</span>
                    <select v-model="element.class">
                      <option value="small-12">Full</option>
                      <option value="small-6">Half</option>
                    </select>
                  </div>
                  <div class="-prop -options" v-if="element.options">
                    <span class="-label">Options</span>
                    <draggable
                      :list="element.options"
                      class="-added"
                      :group="{ name: element.id, pull: false, put: false }"
                      handle=".option-handle"
                    >
                      <template #item="{option, index}" :key="option.id">
                        <div class="-option">
                          <div class="option-handle">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                            </svg>
                          </div>
                          <input v-model="element.options[index]" type="text"/>
                          <button
                            type="button"
                            class="-remove"
                            @click="removeFieldOption(option, index)"
                          >
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </template>
                    </draggable>
                    <div class="-new">
                      <input
                        type="text"
                        v-model="element.newOption"
                        @keydown.enter.prevent="onAddOption(element)"
                        placeholder="Add option"
                      />
                      <button
                        type="button"
                        class="button tiny"
                        @click.prevent="onAddOption(element)"
                      >
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VForm from "./VForm";
import draggable from "vuedraggable";

export default {
  name: "FormBuilder",
  components: {
    "v-form": VForm,
    draggable: draggable,
  },
  props: {
    name: String,
    form: {
      type: String,
      default: () => {
        return {};
      },
    },
    cancelUrl: String,
  },
  created() {
    const form = JSON.parse(this.form);
    if (form.hasOwnProperty('title')) {
      this.title = form.title;
      this.fields = form.fields;
    }
  },
  data() {
    return {
      title: "New Form",
      fields: [],
      showPreview: false,
      templates: [
        {
          name: "heading",
          type: "heading",
          label: "Heading",
          class: "small-12",
          placeholder: null,
        },
        {
          name: "text",
          type: "text",
          label: "Text",
          class: "small-6",
          placeholder: "Text",
        },
        {
          name: "textarea",
          type: "textarea",
          label: "Text large",
          class: "small-12",
          placeholder: "Textarea",
        },
        {
          name: "number",
          type: "number",
          label: "Number",
          class: "small-6",
          placeholder: "Number",
        },
        {
          name: "datepicker",
          type: "datepicker",
          label: "Date Picker",
          class: "small-6",
          placeholder: "Date",
        },
        {
          name: "checkbox",
          type: "checkbox",
          label: "Checkbox",
          class: "small-6",
          placeholder: null,
        },
        {
          name: "signature",
          type: "signature",
          label: "Signature",
          class: "small-12",
          placeholder: null,
        },
        {
          name: "file-upload",
          type: "file-upload",
          label: "File Upload",
          class: "small-12",
          placeholder: "Drop file here",
        },
        {
          name: "select",
          type: "select",
          label: "Select",
          class: "small-6",
          placeholder: "Select an Option",
          options: [],
        },
        {
          name: "check-group",
          type: "check-group",
          label: "Checkbox Group",
          class: "small-6",
          placeholder: null,
          options: [],
        },
        {
          name: "radio-group",
          type: "radio-group",
          label: "Radio Button Group",
          class: "small-6",
          placeholder: null,
          options: [],
        },
      ],
    };
  },
  mounted() {
    this.allowOverFlow();
  },
  methods: {
    handleShowPreview() {
      this.showPreview = !this.showPreview;
      this.allowOverFlow();
    },
    allowOverFlow() {
      if (this.showPreview) {
        return document.body.classList.remove('hide-overflow');
      }
      document.body.classList.add('hide-overflow');
    },
    getFieldTypeTitle(field) {
      switch (field.type) {
        case "datepicker":
          return "Date Picker";
        case "file-upload":
          return "File Upload";
        case "textarea":
          return "Text large";
        case "radio-group":
          return "Radio Button Group";
        case "check-group":
          return "Checkbox Group";
        default:
          return (
            field.type.charAt(0).toUpperCase() + field.type.slice(1)
          );
      }
    },
    onAddOption(field) {
      if (field.newOption) {
        field.options.push(field.newOption);
        field.newOption = null;
      }
    },
    uniqueId() {
      return Math.floor(Math.random() * Date.now());
    },
    removeField(index) {
      this.fields.splice(index, 1);
    },
    removeFieldOption(field, index) {
      field.options.splice(index, 1);
    },
    fieldTitle(field) {
      return field.type.charAt(0).toUpperCase() + field.type.slice(1)
    },
    cloneTemplate(template) {
      let id = this.uniqueId();
      return {
        id: id,
        name: `${template.type}_${id}`,
        type: template.type,
        label: template.label,
        placeholder: template.placeholder,
        class: template.class,
        options: template.options,
      };
    },
    addFieldToBottom(fieldTemplate) {
      let field = this.cloneTemplate(fieldTemplate);
      this.fields.push(field);
    },
  },
  computed: {
    valueJson() {
      return JSON.stringify({
        title: this.title,
        fields: this.fields.map((field) => {
          return {
            id: field.id,
            name: field.name,
            type: field.type,
            label: field.label,
            placeholder: field.placeholder,
            class: field.class,
            options: field.options,
          };
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
