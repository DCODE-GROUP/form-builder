<template>
  <v-modal></v-modal>
  <div v-if="showBreadcrumbs" class="form-builder__breadcrumbs">
    <a :href="redirectUrl" class="form-builder__breadcrumb-link"> Form </a>
    / <span class="form-builder__breadcrumb-current" v-text="title ? title : (showPreview ? 'Preview' : 'Add New Form')"></span>
  </div>
  <div class="form-builder__header">
    <h4 class="form-builder__page-title">
      {{ showPreview ? 'Preview' : (title ? title : 'Add New Form') }}</h4>
    <a
        class="form-builder__btn form-builder__btn--preview"
        @click="handleShowPreview"
    >
      <span v-if="!showPreview" class="form-builder__btn-label">
        <EyeIcon class="form-builder__icon"></EyeIcon>
        Preview
      </span>
      <span v-else class="form-builder__btn-label">
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
  <div v-if="showPreview" class="form-builder-preview-container">
    <p class="form-builder-preview__title" v-if="title">{{ title }}</p>
    <div class="form-builder-preview">
      <v-form
          :model-value="{fields}"
          :preview="true"
          :editable="true"
          :can-interact="showPreview">
      </v-form>
    </div>
  </div>
  <div v-else class="form-builder-container">
    <div class="form-builder__layout">
      <div class="form-builder">
        <div class="form-builder-fields">
          <div class="form-builder__settings settings">
            <h3>Settings</h3>
            <div>
              <p class="form-builder__field-label">Form Title *</p>
              <input type="text" placeholder="Enter your form name" v-model="title"/>
              <span class="form-builder__field-error" v-if="errors?.title">{{ errors.title[0] }}</span>
            </div>
            <div v-if="hasRecipient" class="form-builder__field-group">
              <p class="form-builder__field-label">Submission Recipients</p>
              <input type="text" placeholder="Emails separated by comma to have multiple recipients" v-model="recipients"/>
              <span class="form-builder__field-hint">Notification emails will be sent to the specified address(es) upon form submission. Use commas to separate multiple addresses.</span>
              <span class="form-builder__field-error" v-if="errors?.recipients">{{ errors.recipients[0] }}</span>
            </div>
          </div>
          <div class="form-builder-fields">
            <h3>Form</h3>
            <div class="draggable" :class="{'draggable--has-fields': fields.length}">
              <field-draggable v-model="fields" :is-dragging="isDragging" :actions="actions"></field-draggable>
            </div>
          </div>
        </div>
        <div class="form-builder__sidebar">
          <div v-if="id" class="form-builder__status-panel">
            <p class="form-builder__status-heading">Status</p>
            <div class="form-builder__status-list">
              <div
                  class="form-builder__status-badge"
                  :class="{'form-builder__status-badge--published': localForm.status === 'published'}"
              >
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" :fill="localForm.status === 'published' ? '#17B26A' : '#F79009'"/>
                </svg>
                {{ cFirst(localForm.status) }}
              </div>
              <div v-if="localForm.status === 'published'" class="form-builder__meta">
                <label>
                  Published
                </label>
                <label class="form-builder__meta-value">{{ localForm.formatted_published_at }}</label>
              </div>
              <div class="form-builder__meta">
                <label>
                  Last Modified
                </label>
                <label class="form-builder__meta-value">{{ localForm.last_modified }}</label>
              </div>
            </div>
          </div>
          <div class="form-builder-templates">
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
                    :key="element.name"
                    @click="addFieldToBottom(element)"
                >
                  {{ element.label }}
                  <div class="form-builder__component-icon">
                    <span v-if="element.icon" v-html="element.icon"></span>
                    <div class="form-builder__tooltip">
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
  <div v-if="!showPreview" class="form-builder__actions">
    <a @click="close" class="form-builder__btn form-builder__btn--discard">Discard</a>
    <div class="form-builder__actions-group">
      <a @click.prevent="save('draft')"
         class="form-builder__btn form-builder__btn--draft">
        <span v-if="!loading">
          Save as draft
        </span>
        <span v-else class="form-builder__btn-loading">
           <Loading class="form-builder__icon--spin"></Loading>
        </span>
      </a>
      <a @click.prevent="save('published')"
         class="form-builder__btn form-builder__btn--publish">
        <span v-if="!loading">
          Publish
        </span>
        <span v-else class="form-builder__btn-loading">
          <Loading class="form-builder__icon--spin"></Loading>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed, watch, getCurrentInstance, onMounted, provide, markRaw} from "vue";
import VForm from "./VForm.vue";
import Event from "./mixins/Vue3EventBus.js";
import VModal from "./common/VModal.vue";
import EyeIcon from "@r/icons/eye.svg";
import Loading from "@r/icons/loading.svg";
import draggable from "vuedraggable";
import FieldDraggable from "./common/FieldDraggable.vue";
import axios from "axios";
import cloneDeep from "lodash.clonedeep";
import getTemplates from "../helpers/TemplateFactory";

const props = defineProps({
  name: String,
  form: {
    type: Object,
    default: () => ({}),
  },
  hasRecipient: {
    type: Boolean,
    default: false,
  },
  showBreadcrumbs: {
    type: Boolean,
    default: true,
  },
  actions: {
    type: Array,
    default: () => {
      return []
    },
  },
  redirectUrl: String,
  storeUrl: String,
});

provide('bus', Event);

let localForm = reactive(props.form);
let id = ref(localForm.id || null);
let title = ref(localForm.title || null);
let recipients = ref(localForm?.recipients ?? '');
let fields = ref(localForm.fields || []);
const errors = ref([]);
const showPreview = ref(false);
const isDragging = ref(false);
const loading = ref(false);
const templates = ref(getTemplates());

const populateCustomComponents = (customFormComponents) => {
  fields.value.map((o) => {
    ['builder', 'presenter'].forEach((field) => {
      const found = customFormComponents?.find((c) => {
        return o.hasOwnProperty(field) && c[field].__name === o[field].__name;
      });

      if (found) {
        o[field] = markRaw(found[field])
      }
    });

    return o;
  });
}

onMounted(() => {
  const instance = getCurrentInstance();
  const customFormComponents = instance?.appContext.config.globalProperties?.$customFormComponents;
  customFormComponents?.forEach((template) => {
    templates.value.push(template)
  })

  populateCustomComponents(customFormComponents);
});

const valueJson = computed(() => {
  let data = {
    title: title.value,
    recipients: recipients.value,
    status: localForm.value?.status,
    fields: fields.value.map((field) => {
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
  };

  if (props.hasRecipient) {
    data.recipients = recipients.value;
  }

  return JSON.stringify(data);
});

watch(title, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    errors.value = [];
  }
});

watch(recipients, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    errors.value = [];
  }
});

const close = () => {
  window.location.href = props.redirectUrl;
};

const save = async (status = null) => {
  if (loading.value) return;

  loading.value = true;

  let data = {
    title: title.value,
    fields: fields.value,
    ...(id.value && {id: id.value}),
    ...(status && {status}),
  };

  if (props.hasRecipient) {
    data.recipients = recipients.value;
  }

  try {
    await axios.post(props.storeUrl, data);
    window.location.href = props.redirectUrl;
  } catch (error) {
    loading.value = false;
    errors.value = error.response?.data?.errors || [];
  }
};

const handleShowPreview = () => {
  showPreview.value = !showPreview.value;
};

const uniqueId = () => {
  return Math.floor(Math.random() * Date.now());
};

const cloneTemplate = (template) => {
  let id = uniqueId();
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

  if (template.hasOwnProperty('builder')) {
    field.builder = template.builder
    field.presenter = template.presenter
    field.data = template.data
  }

  return field;
};

const addFieldToBottom = (fieldTemplate) => {
  const field = cloneTemplate(fieldTemplate);
  fields.value.push(field);
};

const onDragStart = () => {
  isDragging.value = true;
};

const onDragEnd = () => {
  isDragging.value = false;
};

const cFirst = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

</script>
