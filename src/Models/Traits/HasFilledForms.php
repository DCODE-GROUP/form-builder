<?php

namespace Dcodegroup\FormBuilder\Models\Traits;

use Dcodegroup\FormBuilder\Models\Form;
use Dcodegroup\FormBuilder\Models\FormData;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait HasFilledForms
{
    public function filledForms(): MorphMany
    {
        return $this->morphMany(FormData::class, 'formable');
    }

    public function getFormData(Form $form, bool $createNew = false): FormData
    {
        /** @var FormData $formData */
        $formData = $this->filledForms()->where('form_id', $form->id)->latest()->first();

        if (! $formData && $createNew) {
            $formData = FormData::query()->create([
                'formable_id' => $this->id,
                'formable_type' => get_class($this),
                'form_id' => $form->id,
                'values' => [],
            ]);
        }

        return $formData;
    }

    public function saveFormData(Form $form, ?array $values = null)
    {
        return FormData::query()->updateOrCreate([
            'formable_id' => $this->id,
            'formable_type' => get_class($this),
            'form_id' => $form->id,
        ], [
            'values' => $values,
        ]);
    }
}
