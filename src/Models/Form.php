<?php

namespace Dcodegroup\FormBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property string $title
 * @property ?string $success_message
 * @property ?array $fields
 */
class Form extends Model
{
    use SoftDeletes;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var string[]|bool
     */
    protected $guarded = ['id'];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'fields' => 'array',
        ];
    }

    public function data(): HasMany
    {
        return $this->hasMany(FormData::class);
    }

    /**
     * @return false|string
     */
    public function fieldsJson()
    {
        return json_encode($this->fields);
    }

    public function setFields(array $fields): void
    {
        $this->update(['fields' => $fields]);
    }

    public function clearFields(): void
    {
        $this->update(['fields' => []]);
    }

    /**
     * @return mixed
     */
    public static function get(?string $name = null)
    {
        return self::latest()->first();
    }

    /**
     * @return Form
     */
    public static function saveModel(
        array $formData,
        ?Form $form = null
    ) {
        if (! $form) {
            $form = new Form;
        }

        $form->title = $formData['title'];
        $form->success_message = $formData['success_message'] ?? null;
        $form->save();

        $form->setFields($formData['fields'] ?? []);

        return $form;
    }

    /**
     * @return mixed
     */
    public function prefill(?array $values = null)
    {
        /**
         * This is done because of the pass by reference in &$field
         * This updates the value, and you can not do that on the $this object.
         */
        $fields = $this->fields;
        if (empty($values)) {
            return $fields;
        }

        foreach ($fields as &$field) {
            $value = $this->getFieldValue($values, $field['name']);
            if ($field['type'] === 'checkbox') {
                $field['value'] = (bool) $value;

                continue;
            }

            if ($field['type'] === 'file-upload' && is_string($value)) {
                $field['value'] = json_decode($value, true);

                continue;
            }

            if ($value) {
                $field['value'] = $value;
            }
        }

        return $fields;
    }

    private function getFieldValue($values, $field): mixed
    {
        $values = collect($values);

        if ($values->has($field)) {
            return $values->pull($field);
        }

        $formDataValue = $values->filter(function ($item) use ($field) {
            if (! isset($item['name'])) {
                return false;
            }

            return $item['name'] === $field;
        })->first();

        return $formDataValue['value'] ?? null;
    }
}
