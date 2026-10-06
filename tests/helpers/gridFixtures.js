export function makeField(overrides = {}) {
  return {
    id: 1,
    name: 'text_1',
    type: 'text',
    label: 'Text',
    required: true,
    placeholder: 'Text',
    value: null,
    ...overrides,
  };
}

export function makeGridField(overrides = {}) {
  const textA = makeField({id: 101, name: 'text_101', label: 'Tung DO 1'});
  const textB = makeField({id: 102, name: 'text_102', label: 'Tung Do 2'});
  const numberA = makeField({id: 201, name: 'number_201', type: 'number', label: 'Number', placeholder: 'Number'});
  const numberB = makeField({id: 202, name: 'number_202', type: 'number', label: 'Number', placeholder: 'Number'});

  return {
    type: 'grid',
    name: 'grid_1',
    label: 'Grid',
    hint: 'Input your supporting text here',
    allow_add_row: true,
    template_row_count: 3,
    grid: [
      [[textA], [textB]],
      [[], []],
      [[numberA], [numberB]],
    ],
    ...overrides,
  };
}

export function markRowOnFlight(row) {
  return row.map((cell) => {
    if (!cell.length) {
      return cell;
    }

    return cell.map((field) => ({
      ...field,
      on_flight: true,
      name: `${field.name}_${Date.now()}_${Math.random()}`,
    }));
  });
}

export function appendAddedGroup(gridField, groupSize = gridField.template_row_count) {
  const templateRows = gridField.grid.slice(0, groupSize);

  templateRows.forEach((row) => {
    gridField.grid.push(markRowOnFlight(row));
  });
}
