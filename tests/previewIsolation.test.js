import {describe, it, expect} from 'vitest';
import cloneDeep from 'lodash.clonedeep';
import {makeGridField} from './helpers/gridFixtures.js';

describe('preview field isolation', () => {
  it('deep clones fields so preview mutations do not change the editor state', () => {
    const fields = [makeGridField()];
    const previewFields = cloneDeep(fields);

    previewFields[0].grid.push([[], []]);
    previewFields[0].label = 'Changed in preview';

    expect(fields[0].grid.length).toBe(3);
    expect(previewFields[0].grid.length).toBe(4);
    expect(fields[0].label).toBe('Grid');
  });
});
