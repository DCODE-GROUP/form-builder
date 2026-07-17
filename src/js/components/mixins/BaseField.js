export default {
  props: {
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
    index: {
      type: [Number, String],
      default: null,
    },
    validationErrors: {
      type: [Object, null],
      default: () => {
        return {}
      }
    },
  }
}
