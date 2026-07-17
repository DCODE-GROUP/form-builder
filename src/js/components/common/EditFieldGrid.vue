<template>
  <div class="p-6 w-[776px]">
    <div class="fields">
      <div class="form-builder-draggable">
        <h4 class="mb-[20px] text-lg font-semibold text-gray-900">Row {{ index + 1 }}: multiple columns</h4>
        <field-draggable v-model="localFields" disable-dropzone></field-draggable>
      </div>

      <div class="fixed -bottom-8 right-0 flex justify-end gap-2 text-sm font-semibold bg-white w-full py-2 px-6 rounded-b-lg z-50">
        <a @click="close" class="rounded-full cursor-pointer px-3 py-2 border hover:bg-gray-200">Cancel</a>
        <a @click.prevent="confirm" class="rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2">Save changes</a>
      </div>
    </div>
  </div>
</template>

<script>
import FieldDraggable from "./FieldDraggable.vue";

export default {
  name: "EditFieldGrid",
  inject: ['bus'],
  components: {FieldDraggable},
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
      required: true,
    }
  },
  watch: {

  },
  data() {
    return {
      localFields: this.fields.flat(),
      active: false,
    };
  },
  methods: {
    close() {
      this.bus?.$emit('closeModal');
    },
    confirm() {
      const updatedFields = this.fields.map((column) =>
          column.filter((field) =>
              this.localFields.some((localField) => localField.id === field.id)
          )
      );

      this.$emit('confirm', updatedFields);
    },
  }
};
</script>