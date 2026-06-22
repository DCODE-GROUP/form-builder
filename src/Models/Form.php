<?php

namespace Dcodegroup\FormBuilder\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property string $title
 * @property Carbon|null $published_at
 * @property Carbon|null $updated_at
 * @property array $fields
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
            'published_at' => 'datetime',
        ];
    }

    protected $appends = ['formatted_published_at', 'last_modified'];

    protected function formattedPublishedAt(): Attribute
    {
        return Attribute::get(fn () => $this->published_at
            ? $this->published_at->format('d M Y, H:i')
            : null);
    }

    protected function lastModified(): Attribute
    {
        return Attribute::get(fn () => $this->updated_at
            ? $this->updated_at->format('d M Y, H:i')
            : null);
    }

    public function data(): HasMany
    {
        return $this->hasMany(FormData::class);
    }

    /**
     * @return Form
     */
    public static function saveModel(
        array $data,
        ?Form $form = null
    ) {
        if (! $form) {
            $form = new Form;
        }

        if (data_get($data, 'status') === 'published') {
            $data['published_at'] = now();
        }

        $form->fill($data)->save();

        return $form;
    }
}
