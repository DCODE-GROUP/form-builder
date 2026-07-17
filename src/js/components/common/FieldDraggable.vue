<template>
  <draggable
      class="form-builder-draggable__list"
      :class="{ 'form-builder-draggable__list--compact': disableDropzone }"
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
      <div
          class="form-builder-field"
          :class="`form-builder-field--${element.type}`"
      >
        <div class="form-builder-field__header handle">
          <h2 @click="element.isShowing = !element.isShowing" class="form-builder-field__heading">
            <Handle class="form-builder-field__handle-icon" />
            <span class="form-builder-field__type-title">{{ getFieldTypeTitle(element) }}</span>
          </h2>
          <div class="form-builder-field__header-actions">
            <div class="form-builder-field__prop form-builder-field__options" v-if="element.hasOwnProperty('required')">
              <v-toggle title="Required" v-model="element.required" />
            </div>
            <v-actions>
              <template v-slot:dropdown>
                <ul class="form-builder-field__actions-menu">
                  <li
                      @click="removeField(index)"
                      class="form-builder-field__actions-item"
                  >
                    <Trash class="form-builder-field__icon" />
                    <span>Remove</span>
                  </li>
                </ul>
              </template>
            </v-actions>
          </div>
        </div>
        <div class="form-builder-field__body">
          <component
              v-if="element?.builder"
              :is="element.builder"
              v-bind="{component: element}"
          ></component>
          <template v-else-if="element.type === 'grid'">
            <div class="form-builder-field__prop">
              <span class="form-builder-field__label">Label</span>
              <input type="text" v-model="element.label" />
            </div>
            <div class="form-builder-field__prop">
              <span class="form-builder-field__label">Supporting Text</span>
              <input type="text" v-model="element.hint" />
            </div>
            <v-grid
                v-model="element.grid"
                :is-dragging="isDragging"
                v-model:allow-add-row="element.allow_add_row"
            ></v-grid>
          </template>
          <template v-else-if="element.type === 'paragraph'">
            <div class="form-builder-field__prop">
              <span class="form-builder-field__label">Content</span>
              <textarea
                  cols="30"
                  rows="3"
                  v-model="element.content"
                  :placeholder="element.placeholder"
              ></textarea>
            </div>
            <div class="form-builder-field__two-columns">
              <div class="form-builder-field__prop">
                <span class="form-builder-field__label">Type</span>
                <select v-model="element.content_type">
                  <option value="p">p</option>
                  <option value="blockquote">blockquote</option>
                  <option value="address">address</option>
                </select>
              </div>
              <div class="form-builder-field__prop form-builder-field__prop--width">
                <span class="form-builder-field__label">Classes</span>
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
            <div class="form-builder-field__prop">
              <span class="form-builder-field__label">Label</span>
              <input type="text" v-model="element.label" />
            </div>
            <div class="form-builder-field__prop" v-if="element.hasOwnProperty('hint')">
              <span class="form-builder-field__label">Supporting Text</span>
              <textarea cols="30" rows="3" v-model="element.hint" placeholder="Supporting text" />
            </div>
            <div class="form-builder-field__row">
              <div class="form-builder-field__prop form-builder-field__prop--grow form-builder-field__prop--width" v-if="element.class">
                <span class="form-builder-field__label">Width</span>
                <select v-model="element.class">
                  <option value="w-full">Full</option>
                  <option value="w-1/2">Half</option>
                </select>
              </div>
              <div class="form-builder-field__prop form-builder-field__prop--grow" v-if="element.hasOwnProperty('defined_key')">
                <span class="form-builder-field__label">Defined Key</span>
                <input type="text" name="defined_key" v-model="element.defined_key" />
              </div>
            </div>
          </template>
          <template v-else>
            <div
                class="form-builder-field__two-columns"
                v-if="['check-group', 'radio-group', 'signature', 'file-upload'].includes(element.type)"
            >
              <div class="form-builder-field__prop">
                <span class="form-builder-field__label">Label</span>
                <input type="text" v-model="element.label" />
              </div>
              <div class="form-builder-field__prop form-builder-field__prop--width" v-if="element.class">
                <span class="form-builder-field__label">Width</span>
                <select v-model="element.class">
                  <option value="w-full">Full</option>
                  <option value="w-1/2">Half</option>
                </select>
              </div>
            </div>
            <template v-else>
              <div class="form-builder-field__prop">
                <span class="form-builder-field__label">{{ element.type === 'heading' ? 'Heading' : 'Label' }}</span>
                <input type="text" v-model="element.label" />
              </div>
              <div class="form-builder-field__two-columns">
                <div class="form-builder-field__prop" v-if="element.placeholder !== null">
                  <span class="form-builder-field__label">Placeholder</span>
                  <input type="text" name="placeholder" v-model="element.placeholder" />
                </div>
                <div class="form-builder-field__prop form-builder-field__prop--width" v-if="element.class">
                  <span class="form-builder-field__label">Width</span>
                  <select v-model="element.class">
                    <option value="w-full">Full</option>
                    <option value="w-1/2">Half</option>
                  </select>
                </div>
              </div>
            </template>
            <div class="form-builder-field__row">
              <div class="form-builder-field__prop form-builder-field__prop--grow" v-if="element.hasOwnProperty('hint')">
                <span class="form-builder-field__label">Hint Text</span>
                <input type="text" name="hint" v-model="element.hint" />
              </div>
              <div class="form-builder-field__prop form-builder-field__prop--grow" v-if="element.hasOwnProperty('defined_key')">
                <span class="form-builder-field__label">Defined Key</span>
                <input type="text" name="defined_key" v-model="element.defined_key" />
              </div>
            </div>
            <div
                class="form-builder-field__prop form-builder-field__options"
                v-if="hasOptionsFieldTypes.includes(element.type) && element.options"
            >
              <div class="form-builder-field__options-header">
                <span class="form-builder-field__label form-builder-field__label--options">Options</span>
                <div>
                  <a
                      class="form-builder-field__add-option"
                      @click.prevent="onAddOption(element)"
                  >
                    <Plus class="form-builder-field__icon" />
                    Add
                  </a>
                </div>
              </div>
              <draggable
                  :list="element.options"
                  class="form-builder-field__options-list"
                  item-key="id"
                  :group="{ name: element.id, pull: false, put: false }"
                  handle=".option-handle"
              >
                <template #item="{ option, index }" :key="option.id">
                  <div class="form-builder-field__option">
                    <Handle class="form-builder-field__icon option-handle" />
                    <input
                        v-model="element.options[index]"
                        type="text"
                        class="form-builder-field__option-input"
                    />
                    <a
                        class="form-builder-field__option-remove"
                        @click="removeFieldOption(element, index)"
                    >
                      <Trash class="form-builder-field__icon" />
                    </a>
                  </div>
                </template>
              </draggable>
            </div>
          </template>
          <div v-if="actions.length">
            <a class="form-builder-field__custom-actions-toggle" @click="showAction[index] = !showAction[index]"> Actions
              <ChevronUp class="form-builder-field__icon" v-if="showAction[index]"></ChevronUp>
              <ChevronDown class="form-builder-field__icon" v-else></ChevronDown>
            </a>
            <div class="form-builder-field__custom-actions" v-if="showAction[index]">
              <template v-for="action in actions">
                <a
                    class="form-builder-field__custom-action"
                    :class="{'form-builder-field__custom-action--active': element?.actions?.includes(action.value)}"
                    @click="addAction(element, action.value)"
                >{{ action.label }}</a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <p
          v-if="!disableDropzone"
          class="form-builder-draggable__dropzone"
          :class="{ 'form-builder-draggable__dropzone--empty': !localFields.length }"
      >
        <span v-if="!isDragging">Drag a layout/component in</span>
      </p>
    </template>
  </draggable>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import draggable from "vuedraggable";
import VGrid from "../fields/VGrid.vue";
import VActions from "./VActions.vue";
import VToggle from "./VToggle.vue";
import Trash from "@/icons/trash-01.svg";
import Handle from "@/icons/handle.svg";
import ChevronUp from "@/icons/chevron-up.svg";
import ChevronDown from "@/icons/chevron-down.svg";
import Plus from "@/icons/plus.svg";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  disableDropzone: {
    type: Boolean,
    default: false,
  },
  actions: {
    type: Array,
    default: () => {
      return []
    },
  },
  isDragging: {
    type: Boolean,
    default: false,
  },
});

const showAction = ref({});
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

onMounted(() => {
  localFields.value.forEach((field, index) => {
    showAction.value[index] = !!field.actions?.length;
  })
})

const addAction = (element, action) => {
  if (!element.hasOwnProperty('actions')) {
    element = Object.assign( element, {actions: []});
  }

  if (!Array.isArray(element.actions)) {
    element.actions = [];
  }

  const idx = element.actions.indexOf(action);
  if (idx === -1) {
    element.actions.push(action);
  } else {
    element.actions.splice(idx, 1);
  }
}

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
