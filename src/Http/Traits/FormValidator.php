<?php

namespace Dcodegroup\FormBuilder\Http\Traits;

trait FormValidator
{
    public function getRules($list = [], $isMessage = false): array
    {
        $fields = null;

        /** @phpstan-ignore-next-line  */
        if (method_exists($this, 'route')) {
            $fields = $this->route('form')?->fields;
        }

        if (empty($fields)) {
            $dataFields = data_get(json_decode(request()->input('data', []), true), 'fields');
            $fields = ! empty($dataFields) ? $dataFields : null;
        }

        $list = collect($list);

        if (! empty($fields)) {
            foreach ($fields as $index => $field) {
                if (isset($field['required']) && $field['required']) {
                    [$key, $value] = $this->getValue($isMessage, sprintf('fields.%s.value', $index), $field);
                    $list->put($key, $value);
                } elseif (data_get($field, 'type') === 'grid') {
                    foreach (data_get($field, 'grid') as $row => $grid) {
                        foreach ($grid as $col => $gridItem) {
                            if (data_get($gridItem, '0.required')) {
                                [$key, $value] = $this->getValue($isMessage, sprintf('fields.%s.grid.%s.%s.%s.value', $index, $row, $col, 0), $gridItem[0]);
                                $list->put($key, $value);
                            }
                        }
                    }
                }
            }
        }

        return $list->toArray();
    }

    private function getValue(bool $isMessage, string $key, array $field): array
    {
        $value = match ($field['type']) {
            'checkbox' => ['required', 'accepted'],
            'file-upload' => [function ($attribute, $value, $fail) use ($field) {
                if (
                    (is_string($value) && (strlen($value) < 3 || empty(json_decode($value))))
                    || (is_array($value) && empty($value))
                ) {
                    return $fail('The '.($field['label']).' is required');
                }

                return true;
            }],
            default => ['required'],
        };

        if ($isMessage) {
            $key .= '.required';
            $value = sprintf('%s is required.', $field['label']);
        }

        return [$key, $value];
    }
}
