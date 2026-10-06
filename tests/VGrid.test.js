import {describe, it, expect} from 'vitest';
import {mount, flushPromises} from '@vue/test-utils';
import VGrid from '../src/js/components/fields/VGrid.vue';
import {makeField} from './helpers/gridFixtures.js';

describe('VGrid editor row deletion', () => {
  it('emits template row count on mount', () => {
    const wrapper = mount(VGrid, {
      props: {
        modelValue: [
          [[makeField({id: 1})]],
          [[], []],
          [[makeField({id: 2, type: 'number'})]],
        ],
      },
      global: {
        provide: {bus: {$emit: () => {}}},
      },
    });

    expect(wrapper.emitted('update:templateRowCount')?.[0]).toEqual([3]);
  });

  it('removes a single configured row from the editor grid', async () => {
    let modelValue = [
      [[makeField({id: 1, name: 'text_1'})]],
      [[], []],
      [[makeField({id: 2, name: 'number_2', type: 'number'})]],
    ];

    const wrapper = mount(VGrid, {
      props: {
        modelValue,
        'onUpdate:modelValue': (value) => {
          modelValue = value;
          wrapper.setProps({modelValue: value});
        },
      },
      global: {
        provide: {bus: {$emit: () => {}}},
      },
    });

    wrapper.vm.removeRow(1);
    await flushPromises();

    expect(wrapper.vm.grid.length).toBe(2);
    expect(modelValue.length).toBe(2);
    expect(modelValue[0][0][0].name).toBe('text_1');
    expect(modelValue[1][0][0].name).toBe('number_2');
  });

  it('does not remove the last remaining editor row', () => {
    const wrapper = mount(VGrid, {
      props: {
        modelValue: [[[makeField({id: 1})]]],
      },
      global: {
        provide: {bus: {$emit: () => {}}},
      },
    });

    wrapper.vm.removeRow(0);

    expect(wrapper.vm.grid.length).toBe(1);
  });

  it('emits updated template row count when the grid changes', async () => {
    let modelValue = [
      [[makeField({id: 1})]],
      [[makeField({id: 2, type: 'number'})]],
    ];

    const wrapper = mount(VGrid, {
      props: {
        modelValue,
        'onUpdate:modelValue': (value) => {
          modelValue = value;
          wrapper.setProps({modelValue: value});
        },
        'onUpdate:templateRowCount': () => {},
      },
      global: {
        provide: {bus: {$emit: () => {}}},
      },
    });

    wrapper.vm.addRow();
    await wrapper.vm.$nextTick();

    expect(modelValue.length).toBe(3);
    expect(wrapper.emitted('update:templateRowCount')?.at(-1)).toEqual([3]);
  });
});
