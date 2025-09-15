<?php

namespace Dcodegroup\FormBuilder\Http\Traits;

use Dcodegroup\FormBuilder\Models\Form;

trait FormValidator
{
    public function validate(array $formsIds, $list = [], $isMessage = false): array
    {
        $forms = Form::query()->find($formsIds);
        $list = collect($list);

        $forms->each(function (Form $form) use (&$list, $isMessage) {
            if (! empty($form->fields)) {
                foreach ($form->fields as $index => $field) {
                    if (isset($field['required']) && $field['required']) {
                        [$key, $value] = $this->getValue($isMessage, $index, $field);
                        $list->put($key, $value);
                    }
                }
            }
        });

        return $list->toArray();
    }

    private function getValue(bool $isMessage, int $index, array $field): array
    {
        $key = sprintf('fields.%s.value', $index);
        $value = match ($field['type']) {
            'checkbox' => ['required', 'accepted'],
            'file-upload' => [function ($attribute, $value, $fail) use ($field) {
                if (strlen($value) < 3 || empty(json_decode($value))) {
                    return $fail('The '.($field['label']).' must be required');
                }

                return true;
            }],
            default => ['required'],
        };

        if ($isMessage) {
            $key .= '.required';
            $value = sprintf('%s must be required.', strval($field['label']));
        }

        return [$key, $value];
    }
}