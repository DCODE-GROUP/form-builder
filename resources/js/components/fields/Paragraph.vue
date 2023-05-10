<template>
  <div class="paragraph">
    <p v-if="field.content_type === 'p'" v-html="field.content"></p>
    <blockquote v-if="field.content_type === 'blockquote'"><q v-html="field.content"></q></blockquote>
    <address v-if="field.content_type === 'address'" v-html="field.content"></address>
  </div>
</template>

<script>
import BaseField from "../mixins/BaseField";

export default {
  name: "VParagraph",
  mixins: [BaseField],

  props: {
    field: {},
  },
};
</script>
<style>
blockquote {
  display: block;
  margin: 1em 40px;
}
</style>
