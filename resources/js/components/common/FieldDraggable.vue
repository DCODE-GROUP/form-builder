<template>
    <draggable
        class="pb-60 relative z-10"
        :class="{'!pb-4': disableDropzone}"
        v-model="localFields"
        item-key="id"
        ghost-class="dragging-item"
        :sort="true"
        :empty-insert-threshold="0"
        :inverted-swap-threshold="0"
        :group="{ name: 'fields', pull: false, put: true }"
        handle=".handle"
    >
      <template #item="{element, index}" :key="element.id">
        <div
            class="relative -field"
            :class="['-type-'+element.type]"
        >
          <div class="-field-title handle">
            <h2 @click="element.isShowing = ! element.isShowing" class="relative cursor-pointer">
              <svg class="absolute top-[6px] -left-[20px]" width="8" height="13" viewBox="0 0 7 13" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="2" height="2" fill="#667085"/>
                <rect x="4" y="1" width="2" height="2" fill="#667085"/>
                <rect x="1" y="4" width="2" height="2" fill="#667085"/>
                <rect x="4" y="4" width="2" height="2" fill="#667085"/>
                <rect x="1" y="7" width="2" height="2" fill="#667085"/>
                <rect x="1" y="10" width="2" height="2" fill="#667085"/>
                <rect x="4" y="7" width="2" height="2" fill="#667085"/>
                <rect x="4" y="10" width="2" height="2" fill="#667085"/>
              </svg>
              <span class="-title">
              <span class="-type-title">{{ getFieldTypeTitle(element) }}</span>
            </span>
            </h2>
            <div class="flex gap-6 items-center">
              <div class="-prop -options" v-if="element.hasOwnProperty('required')">
                <v-toggle title="Required" :value="element.required" @input="(v) => element.required = v"></v-toggle>
              </div>
              <v-actions>
                <template v-slot:dropdown>
                  <ul class="divide-y text-sm text-gray-700">
                    <li @click="removeField(index)" class="cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-200 rounded">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992"
                            stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>Remove</span>
                    </li>
                  </ul>
                </template>
              </v-actions>
            </div>
          </div>
          <div class="-field-properties">
            <template v-if="element.type === 'grid'">
              <div class="-prop">
                <span class="-label">Label</span>
                <input type="text" v-model="element.label"/>
              </div>
              <div class="-prop">
                <span class="-label">Supporting Text</span>
                <input type="text" v-model="element.hint"/>
              </div>
              <v-grid v-model="element.grid" :is-dragging="isDragging" v-model:allow-add-row="element.allow_add_row"></v-grid>
            </template>
            <template v-else-if="element.type === 'paragraph'">
              <div class="-prop">
                <span>Content</span>
                <textarea
                    cols="30" rows="3"
                    v-model="element.content"
                    :placeholder="element.placeholder">
                          </textarea>
              </div>
              <div class="-two-columns">
                <div class="-prop">
                  <span>Type</span>
                  <select v-model="element.content_type">
                    <option value="p">p</option>
                    <option value="blockquote">blockquote</option>
                    <option value="address">address</option>
                  </select>
                </div>
                <div class="-prop -width">
                  <span class="-label">Classes</span>
                  <input v-model="element.class" type="text" name="classes"
                         placeholder="Input space separated classes">
                </div>
              </div>
            </template>
            <template v-else-if="element.type === 'checkbox'">
              <div class="-prop">
                <span class="-label">Label</span>
                <input type="text" v-model="element.label"/>
              </div>
              <div class="-prop" v-if="element.hasOwnProperty('hint')">
                <span class="-label">Supporting Text</span>
                <textarea cols="30" rows="3" v-model="element.hint" placeholder="Supporting text"/>
              </div>
              <div class="-prop -width" v-if="element.class">
                <span class="-label">Width</span>
                <select v-model="element.class">
                  <option value="w-full">Full</option>
                  <option value="w-1/2">Half</option>
                </select>
              </div>
            </template>
            <template v-else>
              <div class="-two-columns"
                   v-if="['check-group', 'radio-group', 'signature', 'file-upload'].includes(element.type)">
                <div class="-prop">
                  <span class="-label">Label</span>
                  <input type="text" v-model="element.label"/>
                </div>
                <div class="-prop -width" v-if="element.class">
                  <span class="-label">Width</span>
                  <select v-model="element.class">
                    <option value="w-full">Full</option>
                    <option value="w-1/2">Half</option>
                  </select>
                </div>
              </div>
              <template v-else>
                <div class="-prop">
                  <span class="-label">{{ element.type === 'heading' ? 'Heading' : 'Label' }}</span>
                  <input type="text" v-model="element.label"/>
                </div>
                <div class="-two-columns">
                  <div class="-prop" v-if="element.placeholder !== null">
                    <span class="-label">Placeholder</span>
                    <input type="text" v-model="element.placeholder"/>
                  </div>
                  <div class="-prop -width" v-if="element.class">
                    <span class="-label">Width</span>
                    <select v-model="element.class">
                      <option value="w-full">Full</option>
                      <option value="w-1/2">Half</option>
                    </select>
                  </div>
                </div>
              </template>
              <div class="-prop" v-if="element.hasOwnProperty('hint')">
                <span class="-label">Hint Text</span>
                <input type="text" v-model="element.hint"/>
              </div>
              <div class="-prop -options" v-if="hasOptionsFieldTypes.includes(element.type) && element.options">
                <div class="flex justify-between">
                  <span class="-label mb-2 text-base font-semibold text-gray-900">Options</span>
                  <div class="-new">
                    <a
                        class="cursor-pointer text-brand flex items-center text-sm font-semibold mr-3.5 hover:bg-brand-200 py-1 px-2 gap-1 rounded"
                        @click.prevent="onAddOption(element)"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327" stroke="#931C61"
                              stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Add
                    </a>
                  </div>
                </div>
                <draggable
                    :list="element.options"
                    class="-added"
                    item-key="id"
                    :group="{ name: element.id, pull: false, put: false }"
                    handle=".option-handle"
                >
                  <template #item="{option, index}" :key="option.id">
                    <div class="-option">
                      <div class="option-handle relative cursor-pointer">
                        <svg class="" width="8" height="13" viewBox="0 0 7 13" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="2" height="2" fill="#667085"/>
                          <rect x="4" y="1" width="2" height="2" fill="#667085"/>
                          <rect x="1" y="4" width="2" height="2" fill="#667085"/>
                          <rect x="4" y="4" width="2" height="2" fill="#667085"/>
                          <rect x="1" y="7" width="2" height="2" fill="#667085"/>
                          <rect x="1" y="10" width="2" height="2" fill="#667085"/>
                          <rect x="4" y="7" width="2" height="2" fill="#667085"/>
                          <rect x="4" y="10" width="2" height="2" fill="#667085"/>
                        </svg>
                      </div>
                      <input v-model="element.options[index]" type="text" class="mx-2 text-base text-gray-900"/>
                      <a class="hover:bg-brand-200 rounded cursor-pointer py-1"
                         @click="removeFieldOption(element, index)">
                        <svg width="18" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992"
                              stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </template>
                </draggable>
              </div>
            </template>
          </div>
        </div>
      </template>
      <template #footer>
        <p
            v-if="!disableDropzone"
            class="absolute shadow-sm border border-dashed border-gray-300 border-spacing-96 mb-[96px] rounded-xl w-full h-36 bottom-0 z-0 flex items-center justify-center text-sm text-gray-600"
            :class="{'h-[586px] !top-0': !localFields.length}"
        >
          <span v-if="!isDragging">Drag a layout/component in</span>
        </p>
      </template>
    </draggable>
</template>

<script>
import draggable from "vuedraggable";
import VGrid from "../fields/VGrid.vue";
import VActions from "./VActions.vue";
import VToggle from "./VToggle.vue";

export default {
  name: "FieldDraggable",
  components: {VToggle, VActions, VGrid, draggable},
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    disableDropzone: {
      type: Boolean,
      default: false
    },
    isDragging: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localFields: this.modelValue,
      hasOptionsFieldTypes: ["select", "check-group", "radio-group"],
    }
  },
  watch: {
    localFields: {
      deep: true,
      handler(updatedFields) {
        this.$emit("update:modelValue", updatedFields);
      },
    },
  },
  methods: {
    getFieldTypeTitle(field) {
      switch (field.type) {
        case "datepicker":
          return "Date Picker";
        case "text":
          return "Input Field";
        case "file-upload":
          return "File Upload";
        case "textarea":
          return "Text Area";
        case "radio-group":
          return "Radio Button Group";
        case "check-group":
          return "Checkbox Group";
        default:
          return (
              field.type?.charAt(0).toUpperCase() + field?.type.slice(1)
          );
      }
    },
    removeField(index) {
      this.localFields.splice(index, 1);
    },
    onAddOption(field) {
      field.options.push('Option ' + (field.options.length + 1));
    },
    removeFieldOption(field, index) {
      field.options.splice(index, 1);
    },
  }
}
</script>