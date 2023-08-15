<?php

namespace Dcodegroup\FormBuilder\Http\Traits;

use Dcodegroup\FormBuilder\Models\Form;
use Dcodegroup\FormBuilder\Rules\FormUpload;

trait FormValidator
{
    public function validate(array $formsIds, $list = [], $isMessage = false): array
    {
        $forms = Form::query()->find($formsIds);
        $list = collect($list);

        $forms->each(function (Form $form) use (&$list, $isMessage, $forms) {
            if (! empty($form->fields)) {
                foreach ($form->fields as $field) {
                    if (isset($field['required']) && $field['required']) {
                        [$key, $value] = $this->getValue($isMessage, $form, $field);
                        $list->put($key, $value);
                    }
                }
            }
        });

        return $list->toArray();
    }

    private function getValue(bool $isMessage, Form $form, array $field): array
    {
        $key = sprintf('form%s.%s', $form->id, $field['name']);
        $value = match ($field['type']) {
            'checkbox' => ['required', 'accepted'],
            'file-upload' => ['required', new FormUpload],
            default => 'required',
        };

        if ($isMessage) {
            $key .= '.required';
            $value = sprintf('%s must be required', strval($field['label']));
        }

        return [$key, $value];
    }
}
