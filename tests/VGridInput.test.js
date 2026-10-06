import {describe, it, expect, beforeEach, vi} from 'vitest';
import {appendAddedGroup, makeGridField, makeField} from './helpers/gridFixtures.js';
import {mountGridInput} from './helpers/mountGridInput.js';

describe('VGridInput row groups', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    vi.spyOn(Date, 'now').mockReturnValue(1700000000000);
  });

  it('uses template_row_count as group size', () => {
    const wrapper = mountGridInput({template_row_count: 3});

    expect(wrapper.vm.groupSize).toBe(3);
  });

  it('falls back to full template size when an empty row is in the middle', () => {
    const wrapper = mountGridInput({template_row_count: undefined});

    expect(wrapper.vm.calculateGroupSize()).toBe(3);
  });

  it('does not show remove buttons when only the template group exists', () => {
    const wrapper = mountGridInput();

    expect(wrapper.vm.canRemoveRow(0)).toBe(false);
    expect(wrapper.vm.canRemoveRow(1)).toBe(false);
    expect(wrapper.vm.canRemoveRow(2)).toBe(false);
  });

  it('adds a full row group matching the template size', () => {
    const wrapper = mountGridInput();

    wrapper.vm.addRow();

    expect(wrapper.vm.grid.length).toBe(6);
    expect(wrapper.vm.grid[3][0][0].on_flight).toBe(true);
    expect(wrapper.vm.grid[3][0][0].value).toBe(null);
    expect(wrapper.vm.grid[5][1][0].on_flight).toBe(true);
  });

  it('does not throw when adding a group that includes empty cells', () => {
    const wrapper = mountGridInput();

    expect(() => wrapper.vm.addRow()).not.toThrow();
    expect(wrapper.vm.grid[4]).toEqual([[], []]);
  });

  it('shows one remove button on the last visible row of each added group', () => {
    const field = makeGridField();
    appendAddedGroup(field);
    appendAddedGroup(field);

    const wrapper = mountGridInput(field);

    expect(wrapper.vm.canRemoveRow(2)).toBe(false);
    expect(wrapper.vm.canRemoveRow(4)).toBe(false);
    expect(wrapper.vm.canRemoveRow(5)).toBe(true);
    expect(wrapper.vm.canRemoveRow(8)).toBe(true);
  });

  it('removes an entire added group when clicking remove on the last row', () => {
    const field = makeGridField();
    appendAddedGroup(field);
    appendAddedGroup(field);

    const wrapper = mountGridInput(field);

    wrapper.vm.removeRow(5);

    expect(wrapper.vm.grid.length).toBe(6);
    expect(wrapper.vm.grid[3][0][0].on_flight).toBe(true);
  });

  it('removes the correct group when multiple added groups exist', () => {
    const field = makeGridField();
    appendAddedGroup(field);
    appendAddedGroup(field);

    const wrapper = mountGridInput(field);

    wrapper.vm.removeRow(8);

    expect(wrapper.vm.grid.length).toBe(6);
    expect(wrapper.vm.canRemoveRow(5)).toBe(true);
    expect(wrapper.vm.canRemoveRow(8)).toBe(false);
    expect(wrapper.vm.grid[3][0][0].on_flight).toBe(true);
  });

  it('hides remove buttons when only one group remains after deletion', () => {
    const field = makeGridField();
    appendAddedGroup(field);

    const wrapper = mountGridInput(field);

    wrapper.vm.removeRow(5);

    expect(wrapper.vm.grid.length).toBe(3);
    expect(wrapper.vm.canRemoveRow(2)).toBe(false);
  });

  it('continues adding full groups after a group is removed', () => {
    const field = makeGridField();
    appendAddedGroup(field);
    appendAddedGroup(field);

    const wrapper = mountGridInput(field);

    wrapper.vm.removeRow(5);
    wrapper.vm.addRow();

    expect(wrapper.vm.grid.length).toBe(9);
    expect(wrapper.vm.grid[6][0][0].on_flight).toBe(true);
    expect(wrapper.vm.grid[8][1][0].on_flight).toBe(true);
  });

  it('detects added rows only when every populated cell is on_flight', () => {
    const wrapper = mountGridInput();

    expect(wrapper.vm.isAddedRow([[makeField()]])).toBe(false);
    expect(wrapper.vm.isAddedRow([[{...makeField(), on_flight: true}]])).toBe(true);
    expect(wrapper.vm.isAddedRow([[], []])).toBe(false);
  });

  it('uses the last visible row when the final template row in a group is empty', () => {
    const field = makeGridField({
      template_row_count: 3,
      grid: [
        [[makeField({id: 1, name: 'text_1'})], [makeField({id: 2, name: 'text_2'})]],
        [[], []],
        [[], []],
      ],
    });
    appendAddedGroup(field);

    const wrapper = mountGridInput(field);

    expect(wrapper.vm.canRemoveRow(3)).toBe(true);
    expect(wrapper.vm.canRemoveRow(4)).toBe(false);
  });
});
