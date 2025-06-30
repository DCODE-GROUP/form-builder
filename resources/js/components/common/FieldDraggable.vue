<template>
  <draggable
      class="pb-60 relative z-10"
      :class="{ '!pb-4': disableDropzone }"
      v-model="localFields"
      item-key="id"
      ghost-class="dragging-item"
      :sort="true"
      :empty-insert-threshold="0"
      :inverted-swap-threshold="0"
      :group="{ name: 'fields', pull: false, put: true }"
      handle=".handle"
  >
    <template #item="{ element, index }" :key="element.id">
      <div class="relative -field" :class="['-type-' + element.type]">
        <div class="-field-title handle">
          <h2 @click="element.isShowing = !element.isShowing" class="relative cursor-pointer">
            <Handle class="w-5 h-5 absolute top-[6px] -left-[20px]" />
            <span class="-title">
              <span class="-type-title">{{ getFieldTypeTitle(element) }}</span>
            </span>
          </h2>
          <div class="flex gap-6 items-center">
            <div class="-prop -options" v-if="element.hasOwnProperty('required')">
              <v-toggle title="Required" v-model="element.required" />
            </div>
            <v-actions>
              <template v-slot:dropdown>
                <ul class="divide-y text-sm text-gray-700">
                  <li
                      @click="removeField(index)"
                      class="cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded"
                  >
                    <Trash class="w-5 h-5" />
                    <span>Remove</span>
                  </li>
                </ul>
              </template>
            </v-actions>
          </div>
        </div>
        <div class="-field-properties">
          <component
              v-if="element?.builder"
              :is="element.builder"
              v-bind="{data :element?.data}"
          ></component>
          <template v-else-if="element.type === 'grid'">
            <div class="-prop">
              <span class="-label">Label</span>
              <input type="text" v-model="element.label" />
            </div>
            <div class="-prop">
              <span class="-label">Supporting Text</span>
              <input type="text" v-model="element.hint" />
            </div>
            <v-grid
                v-model="element.grid"
                :is-dragging="isDragging"
                v-model:allow-add-row="element.allow_add_row"
            ></v-grid>
          </template>
          <template v-else-if="element.type === 'paragraph'">
            <div class="-prop">
              <span>Content</span>
              <textarea
                  cols="30"
                  rows="3"
                  v-model="element.content"
                  :placeholder="element.placeholder"
              ></textarea>
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
                <input
                    v-model="element.class"
                    type="text"
                    name="classes"
                    placeholder="Input space separated classes"
                />
              </div>
            </div>
          </template>
          <template v-else-if="element.type === 'checkbox'">
            <div class="-prop">
              <span class="-label">Label</span>
              <input type="text" v-model="element.label" />
            </div>
            <div class="-prop" v-if="element.hasOwnProperty('hint')">
              <span class="-label">Supporting Text</span>
              <textarea cols="30" rows="3" v-model="element.hint" placeholder="Supporting text" />
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
            <div
                class="-two-columns"
                v-if="['check-group', 'radio-group', 'signature', 'file-upload'].includes(element.type)"
            >
              <div class="-prop">
                <span class="-label">Label</span>
                <input type="text" v-model="element.label" />
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
                <input type="text" v-model="element.label" />
              </div>
              <div class="-two-columns">
                <div class="-prop" v-if="element.placeholder !== null">
                  <span class="-label">Placeholder</span>
                  <input type="text" name="placeholder" v-model="element.placeholder" />
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
              <input type="text" v-model="element.hint" />
            </div>
            <div
                class="-prop -options"
                v-if="hasOptionsFieldTypes.includes(element.type) && element.options"
            >
              <div class="flex justify-between">
                <span class="-label mb-2 text-base font-semibold text-gray-900">Options</span>
                <div class="-new">
                  <a
                      class="cursor-pointer text-brand-700 flex items-center text-sm font-semibold mr-3.5 hover:bg-brand-50 py-1 px-2 gap-1 rounded"
                      @click.prevent="onAddOption(element)"
                  >
                    <Plus class="w-5 h-5" />
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
                <template #item="{ option, index }" :key="option.id">
                  <div class="-option">
                    <Handle class="w-5 h-5" />
                    <input
                        v-model="element.options[index]"
                        type="text"
                        class="mx-2 text-base text-gray-900"
                    />
                    <a
                        class="hover:bg-brand-50 rounded cursor-pointer py-1"
                        @click="removeFieldOption(element, index)"
                    >
                      <Trash class="w-5 h-5" />
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
          :class="{ 'h-[638px] !top-0': !localFields.length }"
      >
        <span v-if="!isDragging">Drag a layout/component in</span>
      </p>
    </template>
  </draggable>
</template>

<script setup>
import { ref, watch } from "vue";
import draggable from "vuedraggable";
import VGrid from "../fields/VGrid.vue";
import VActions from "./VActions.vue";
import VToggle from "./VToggle.vue";
import Trash from "@r/icons/trash-01.svg";
import Handle from "@r/icons/handle.svg";
import Plus from "@r/icons/plus.svg";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  disableDropzone: {
    type: Boolean,
    default: false,
  },
  isDragging: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const localFields = ref([...props.modelValue]);
const hasOptionsFieldTypes = ["select", "check-group", "radio-group"];

watch(
    localFields,
    (updatedFields) => {
      emit("update:modelValue", updatedFields);
    },
    { deep: true }
);

const getFieldTypeTitle = (field) => {
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
    case "address":
      return "Address";
    default:
      return field.type
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
  }
};

const removeField = (index) => {
  localFields.value.splice(index, 1);
};

const onAddOption = (field) => {
  field.options.push("Option " + (field.options.length + 1));
};

const removeFieldOption = (field, index) => {
  field.options.splice(index, 1);
};
</script>