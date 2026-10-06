import {shallowMount} from '@vue/test-utils';
import VGridInput from '../../src/js/components/fields/VGridInput.vue';
import {makeGridField} from './gridFixtures.js';

export function mountGridInput(fieldOverrides = {}, options = {}) {
  const field = makeGridField(fieldOverrides);

  return shallowMount(VGridInput, {
    props: {
      modelValue: field,
      editable: true,
      preview: false,
      index: 0,
      validationErrors: {},
      ...options.props,
    },
    global: {
      provide: {
        possibleFormValues: {},
        getFormValue: () => null,
      },
      ...options.global,
    },
  });
}
