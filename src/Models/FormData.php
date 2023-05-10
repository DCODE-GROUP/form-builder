<?php

namespace Dcodegroup\FormBuilder\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class FormData extends Model
{
    use SoftDeletes;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var string[]|bool
     */
    protected $guarded = ['id'];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'values' => 'array',
        'completed_at' => 'datetime',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'form_data';

    public function form(): BelongsTo
    {
        return $this->belongsTo(Form::class);
    }

    public function scopeCompleted(Builder $query)
    {
        return $query->whereNotNull('completed_at');
    }

    /**
     * @return mixed
     */
    public function prefillForm()
    {
        return $this->form->prefill($this->values);
    }

    public function isComplete(): bool
    {
        $fields = $this->prefillForm();

        foreach ($fields as $field) {
            if (array_key_exists('value', $field) && $field['value'] === null) {
                return false;
            }
        }

        return true;
    }

    public function removeUploadedFile(int $id)
    {
        $this->values = collect($this->values)->map(function ($field) use ($id) {
            if ($field['type'] === 'file-upload') {
                $fieldValue = collect($field['value'])->filter(function ($value) use ($id) {
                    return $value['id'] !== $id;
                })->toArray();

                $field['value'] = $fieldValue;
            }

            return $field;
        })->toArray();

        $this->save();
    }

    public function fillUploadedMedia(string $field, $data = [])
    {
        if (Str::contains($field, 'form_fields')) {
            preg_match('/(?<=\[).+?(?=\])/', $field, $matches);
            if (count($matches) > 0) {
                $values = collect($this->refresh()->values);
                $this->values = $this->getFormValue($values, head($matches), $data);
                $this->save();
            }
        }
    }

    private function getFormValue(Collection $values, $field, $data)
    {
        if ($values->isEmpty()) {
            return $this->form->prefill([
                $field => [$data],
            ]);
        }

        return $values->map(function ($value) use ($field, $data) {
            if ($value['name'] === $field) {
                if (! is_array($value['value'])) {
                    $value['value'] = [];
                }
                array_push($value['value'], $data);
            }

            return $value;
        })->toArray();
    }
}
