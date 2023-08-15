<?php

namespace Dcodegroup\FormBuilder\Rules;

use Illuminate\Contracts\Validation\Rule;

class FormUpload implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        if (strlen($value) < 3 || empty(json_decode($value))) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(): string
    {
        return 'The :attribute field is required!';
    }
}
