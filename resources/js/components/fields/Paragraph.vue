<template>
  <div class="paragraph text-gray-600" :class="modelValue?.class">
    <p v-if="modelValue.content_type === 'p'" v-html="modelValue.content"></p>
    <blockquote v-if="modelValue.content_type === 'blockquote'"><q v-html="modelValue.content"></q></blockquote>
    <address v-if="modelValue.content_type === 'address'" v-html="modelValue.content"></address>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "VParagraph",
  mixins: [BaseField],

  props: {
    modelValue: {
      type: String,
      default: null
    },
  },
};
</script>
<style>
blockquote {
  display: block;
  margin: 1em 40px;
}
</style>
